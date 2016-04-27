/// <reference path="../../../typings/tsd.d.ts" />

import * as $ from "jquery";
import AppDispatcher from "../dispatcher/appDispatcher";
import ActionSourceTypes from "../actions/actionSourceTypes";
import TechStepActionTypes from "../actions/techStepActionTypes";
import ErrorActions from "../actions/errorActions";
import PageConstants from "../../constants/pageConstants";
import NavigationManager from "../../managers/navigationManager";
import assign = require('object-assign');
import * as EventEmitter from "eventemitter3";
import AppPayload from "../iAppPayload";

let CHANGE_TECHSTEPS_EVENT = 'change_techSteps';
let CHANGE_EDITTECHSTEP_EVENT = 'change_edittechStep';

let _techSteps: Array<ITechStep> = new Array<ITechStep>();
let _techStep: ITechStep;
let _techStepSearchText: string = "";
let _totalTechStepAmount: number = 0;
let _techStepsPerPage: number = PageConstants.ITEMS_PER_PAGE_INIT;
let _currentTechStepPage: number = 0;

function _loadTechSteps(): void {
    $.get(location.origin + "/api/techSteps?search=" + _techStepSearchText + "&page=" + _currentTechStepPage + "&pageSize=" + _techStepsPerPage, function (techStepListModel) {

        _totalTechStepAmount = techStepListModel.techStepAmount;

        _techSteps = new Array<ITechStep>();

        techStepListModel.techSteps.forEach(function (techStep) {
            _techSteps[techStep.id] = techStep;
        });

        TechStepStore.emitChangeTechSteps();
    });
}

function _loadTechStep(id: number): void {
    if (id == 0) {
        _techStep = { id: 0, description: "", toolUsages: [] };
        TechStepStore.emitChangeEditTechStep();
        return;
    }
    if (_techSteps[id]) {
        _techStep = _techSteps[id];
        TechStepStore.emitChangeEditTechStep();
    } else {
        $.ajax({
            url: location.origin + "/api/techSteps/" + id,
            type: 'GET',
            success: function (techStep) {
                _techStep = techStep;
                TechStepStore.emitChangeEditTechStep();
            },
            error: function (data) {
                ErrorActions.received(data.responseJSON);
            }
        });
    }
}

function _addTechStep(techStep: ITechStep): void {
    $.ajax({
        url: location.origin + '/api/techSteps',
        dataType: 'json',
        type: 'PUT',
        data: {
            id: techStep.id,
            __RequestVerificationToken: antiForgeryToken
        },
        success: function (techStep) {
            _techStep = techStep;
            if (_techSteps[techStep.id]) {
                _techSteps[techStep.id] = assign({}, _techSteps[techStep.id], techStep);

                TechStepStore.emitChangeTechSteps();
            }
            NavigationManager.openTechStepEditor(techStep.id);
        },
        error: function (xhr, status, err) {
            console.error(this.props.url, status, err.toString());
        }.bind(this)
    });
}

function _deleteTechStep(id: number) {
    $.ajax({
        url: location.origin + '/api/techSteps/' + id,
        dataType: 'json',
        type: 'DELETE',
        data: { __RequestVerificationToken: antiForgeryToken },
        success: function (id) {
            _loadTechSteps();
        },
        error: function (xhr, status, err) {
            console.error(this.props.url, status, err.toString());
        }
    });
}

function _updateTechStep(techStep: ITechStep) {
    $.ajax({
        url: location.origin + '/api/techSteps',
        dataType: 'json',
        type: 'POST',
        data: {
            id: techStep.id,
            __RequestVerificationToken: antiForgeryToken
        },
        success: function (techStep) {
            if (_techSteps[techStep.id]) {
                _techSteps[techStep.id] = assign({}, _techSteps[techStep.id], techStep);

                TechStepStore.emitChangeTechSteps();
            }
        },
        error: function (xhr, status, err) {
            console.error(this.props.url, status, err.toString());
        }
    });
}

function _init(currentPage: number, techStepsPerPage: number, searchText: string): void {
    _techStepsPerPage = techStepsPerPage;
    _currentTechStepPage = currentPage;
    _techStepSearchText = searchText;

    _loadTechSteps();
}

class TechStepStoreStatic extends EventEmitter {

    public getAll(): Array<ITechStep> {
        return _techSteps;
    }

    public getTechStepAmount(): number {
        return _totalTechStepAmount;
    }

    public getTechStepsPerPage(): number {
        return _techStepsPerPage;
    }

    public getEditTechStep(): ITechStep {
        return _techStep;
    }

    public emitChangeTechSteps(): void {
        this.emit(CHANGE_TECHSTEPS_EVENT);
    }

    public emitChangeEditTechStep(): void {
        this.emit(CHANGE_EDITTECHSTEP_EVENT);
    }

    /**
     * @param {function} callback
     */
    public addChangeEditTechStepListener(callback: () => void): void {
        this.on(CHANGE_EDITTECHSTEP_EVENT, callback);
    }

    /**
     * @param {function} callback
     */
    public removeChangeEditTechStepListener(callback: () => void) {
        this.removeListener(CHANGE_EDITTECHSTEP_EVENT, callback);
    }

    /**
     * @param {function} callback
     */
    public addChangeTechStepsListener(callback: () => void): void {
        this.on(CHANGE_TECHSTEPS_EVENT, callback);
    }

    /**
     * @param {function} callback
     */
    public removeChangeTechStepsListener(callback: () => void) {
        this.removeListener(CHANGE_TECHSTEPS_EVENT, callback);
    }
}

let TechStepStore: TechStepStoreStatic = new TechStepStoreStatic();

AppDispatcher.register(function (payload: AppPayload) {

    if (payload.actionSource != ActionSourceTypes.TECHSTEP) return;

    switch (payload.actionType) {
        case TechStepActionTypes.TECHSTEP_INIT:
            _init(payload.currentPage, payload.pageSize, payload.searchText);
            break;

        case TechStepActionTypes.TECHSTEP_LOAD_EDIT:
            _loadTechStep(payload.id);
            break;

        case TechStepActionTypes.TECHSTEP_CREATE:
            _addTechStep(payload.techStep)
            break;

        case TechStepActionTypes.TECHSTEP_UPDATE:
            _updateTechStep(payload.techStep);
            break;

        case TechStepActionTypes.TECHSTEP_DELETE:
            _deleteTechStep(payload.id);
            break;

        case TechStepActionTypes.TECHSTEP_PAGE_CHANGE:
            _currentTechStepPage = payload.currentPage;
            _loadTechSteps();
            break;

        case TechStepActionTypes.TECHSTEPS_PER_PAGE_CHANGE:
            _techStepsPerPage = payload.pageSize;
            _loadTechSteps();
            break;

        case TechStepActionTypes.TECHSTEP_SEARCH_TEXT_CHANGE:
            _techStepSearchText = payload.searchText;
            _loadTechSteps();
            break;

        default:
    }
});

export default TechStepStore;
