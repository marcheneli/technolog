/// <reference path="../../../typings/tsd.d.ts" />

import * as $ from "jquery";
import AppDispatcher from "../dispatcher/appDispatcher";
import ActionSourceTypes from "../actions/actionSourceTypes";
import TechOperationActionTypes from "../actions/techOperationActionTypes";
import ErrorActions from "../actions/errorActions";
import PageConstants from "../../constants/pageConstants";
import NavigationManager from "../../managers/navigationManager";
import assign = require('object-assign');
import * as EventEmitter from "eventemitter3";

let CHANGE_TECHOPERATIONS_EVENT = 'change_techOperations';
let CHANGE_EDITTECHOPERATION_EVENT = 'change_edittechOperation';

let _techOperations: Array<ITechOperation> = new Array<ITechOperation>();
let _techOperation: ITechOperation;
let _techOperationSearchText: string = "";
let _totalTechOperationAmount: number = 0;
let _techOperationsPerPage: number = PageConstants.ITEMS_PER_PAGE_INIT;
let _currentTechOperationPage: number = 0;

function _loadTechOperations(): void {
    $.get(location.origin + "/api/techOperations?search=" + _techOperationSearchText + "&page=" + _currentTechOperationPage + "&pageSize=" + _techOperationsPerPage, function (techOperationListModel) {

        _totalTechOperationAmount = techOperationListModel.techOperationAmount;

        _techOperations = new Array<ITechOperation>();

        techOperationListModel.techOperations.forEach(function (techOperation) {
            _techOperations[techOperation.id] = techOperation;
        });

        TechOperationStore.emitChangeTechOperations();
    });
}

function _loadTechOperation(id: number): void {
    if (id == 0) {
        _techOperation = { id: 0, name: "" };
        TechOperationStore.emitChangeEditTechOperation();
        return;
    }
    if (_techOperations[id]) {
        _techOperation = _techOperations[id];
        TechOperationStore.emitChangeEditTechOperation();
    } else {
        $.ajax({
            url: location.origin + "/api/techOperations/" + id,
            type: 'GET',
            success: function (techOperation) {
                _techOperation = techOperation;
                TechOperationStore.emitChangeEditTechOperation();
            },
            error: function (data) {
                ErrorActions.received(data.responseJSON);
            }
        });
    }
}

function _addTechOperation(techOperation: ITechOperation): void {
    $.ajax({
        url: location.origin + '/api/techOperations',
        dataType: 'json',
        type: 'PUT',
        data: {
            id: techOperation.id,
            __RequestVerificationToken: antiForgeryToken
        },
        success: function (techOperation) {
            _techOperation = techOperation;
            if (_techOperations[techOperation.id]) {
                _techOperations[techOperation.id] = assign({}, _techOperations[techOperation.id], techOperation);

                TechOperationStore.emitChangeTechOperations();
            }
            NavigationManager.openTechOperationEditor(techOperation.id);
        },
        error: function (xhr, status, err) {
            console.error(this.props.url, status, err.toString());
        }.bind(this)
    });
}

function _deleteTechOperation(id: number) {
    $.ajax({
        url: location.origin + '/api/techOperations/' + id,
        dataType: 'json',
        type: 'DELETE',
        data: { __RequestVerificationToken: antiForgeryToken },
        success: function (id) {
            _loadTechOperations();
        },
        error: function (xhr, status, err) {
            console.error(this.props.url, status, err.toString());
        }
    });
}

function _updateTechOperation(techOperation: ITechOperation) {
    $.ajax({
        url: location.origin + '/api/techOperations',
        dataType: 'json',
        type: 'POST',
        data: {
            id: techOperation.id,
            __RequestVerificationToken: antiForgeryToken
        },
        success: function (techOperation) {
            if (_techOperations[techOperation.id]) {
                _techOperations[techOperation.id] = assign({}, _techOperations[techOperation.id], techOperation);

                TechOperationStore.emitChangeTechOperations();
            }
        },
        error: function (xhr, status, err) {
            console.error(this.props.url, status, err.toString());
        }
    });
}

function _init(currentPage: number, techOperationsPerPage: number, searchText: string): void {
    _techOperationsPerPage = techOperationsPerPage;
    _currentTechOperationPage = currentPage;
    _techOperationSearchText = searchText;

    _loadTechOperations();
}

class TechOperationStoreStatic extends EventEmitter {

    public getAll(): Array<ITechOperation> {
        return _techOperations;
    }

    public getTechOperationAmount(): number {
        return _totalTechOperationAmount;
    }

    public getTechOperationsPerPage(): number {
        return _techOperationsPerPage;
    }

    public getEditTechOperation(): ITechOperation {
        return _techOperation;
    }

    public emitChangeTechOperations(): void {
        this.emit(CHANGE_TECHOPERATIONS_EVENT);
    }

    public emitChangeEditTechOperation(): void {
        this.emit(CHANGE_EDITTECHOPERATION_EVENT);
    }

    /**
     * @param {function} callback
     */
    public addChangeEditTechOperationListener(callback: () => void): void {
        this.on(CHANGE_EDITTECHOPERATION_EVENT, callback);
    }

    /**
     * @param {function} callback
     */
    public removeChangeEditTechOperationListener(callback: () => void) {
        this.removeListener(CHANGE_EDITTECHOPERATION_EVENT, callback);
    }

    /**
     * @param {function} callback
     */
    public addChangeTechOperationsListener(callback: () => void): void {
        this.on(CHANGE_TECHOPERATIONS_EVENT, callback);
    }

    /**
     * @param {function} callback
     */
    public removeChangeTechOperationsListener(callback: () => void) {
        this.removeListener(CHANGE_TECHOPERATIONS_EVENT, callback);
    }
}

let TechOperationStore: TechOperationStoreStatic = new TechOperationStoreStatic();

AppDispatcher.register(function (payload: AppPayload) {

    if (payload.actionSource != ActionSourceTypes.TECHOPERATION) return;

    switch (payload.actionType) {
        case TechOperationActionTypes.TECHOPERATION_INIT:
            _init(payload.currentPage, payload.pageSize, payload.searchText);
            break;

        case TechOperationActionTypes.TECHOPERATION_LOAD_EDIT:
            _loadTechOperation(payload.id);
            break;

        case TechOperationActionTypes.TECHOPERATION_CREATE:
            _addTechOperation(payload.techOperation)
            break;

        case TechOperationActionTypes.TECHOPERATION_UPDATE:
            _updateTechOperation(payload.techOperation);
            break;

        case TechOperationActionTypes.TECHOPERATION_DELETE:
            _deleteTechOperation(payload.id);
            break;

        case TechOperationActionTypes.TECHOPERATION_PAGE_CHANGE:
            _currentTechOperationPage = payload.currentPage;
            _loadTechOperations();
            break;

        case TechOperationActionTypes.TECHOPERATIONS_PER_PAGE_CHANGE:
            _techOperationsPerPage = payload.pageSize;
            _loadTechOperations();
            break;

        case TechOperationActionTypes.TECHOPERATION_SEARCH_TEXT_CHANGE:
            _techOperationSearchText = payload.searchText;
            _loadTechOperations();
            break;

        default:
    }
});

export default TechOperationStore;
