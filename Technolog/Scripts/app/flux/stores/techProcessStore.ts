/// <reference path="../../../typings/tsd.d.ts" />

import * as $ from "jquery";
import AppDispatcher from "../dispatcher/appDispatcher";
import ActionSourceTypes from "../actions/actionSourceTypes";
import TechProcessActionTypes from "../actions/techProcessActionTypes";
import ErrorActions from "../actions/errorActions";
import PageConstants from "../../constants/pageConstants";
import NavigationManager from "../../managers/navigationManager";
import assign = require('object-assign');
import * as EventEmitter from "eventemitter3";

let CHANGE_TECHPROCESSES_EVENT = 'change_techProcesses';
let CHANGE_EDITTECHPROCESS_EVENT = 'change_edittechProcess';

let _techProcesses: Array<ITechProcess> = new Array<ITechProcess>();
let _techProcess: ITechProcess;
let _techProcessSearchText: string = "";
let _totalTechProcessAmount: number = 0;
let _techProcessesPerPage: number = PageConstants.ITEMS_PER_PAGE_INIT;
let _currentTechProcessPage: number = 0;

function _loadTechProcesses(): void {
    $.get(location.origin + "/api/techProcesses?search=" + _techProcessSearchText + "&page=" + _currentTechProcessPage + "&pageSize=" + _techProcessesPerPage, function (techProcessListModel) {

        _totalTechProcessAmount = techProcessListModel.techProcessAmount;

        _techProcesses = new Array<ITechProcess>();

        techProcessListModel.techProcesses.forEach(function (techProcess) {
            _techProcesses[techProcess.id] = techProcess;
        });

        TechProcessStore.emitChangeTechProcesses();
    });
}

function _loadTechProcess(id: number): void {
    if (id == 0) {
        _techProcess = { id: 0, name: "" };
        TechProcessStore.emitChangeEditTechProcess();
        return;
    }
    if (_techProcesses[id]) {
        _techProcess = _techProcesses[id];
        TechProcessStore.emitChangeEditTechProcess();
    } else {
        $.ajax({
            url: location.origin + "/api/techProcesses/" + id,
            type: 'GET',
            success: function (techProcess) {
                _techProcess = techProcess;
                TechProcessStore.emitChangeEditTechProcess();
            },
            error: function (data) {
                ErrorActions.received(data.responseJSON);
            }
        });
    }
}

function _addTechProcess(techProcess: ITechProcess): void {
    $.ajax({
        url: location.origin + '/api/techProcesses',
        dataType: 'json',
        type: 'PUT',
        data: {
            id: techProcess.id,
            __RequestVerificationToken: antiForgeryToken
        },
        success: function (techProcess) {
            _techProcess = techProcess;
            if (_techProcesses[techProcess.id]) {
                _techProcesses[techProcess.id] = assign({}, _techProcesses[techProcess.id], techProcess);

                TechProcessStore.emitChangeTechProcesses();
            }
            NavigationManager.openTechProcessEditor(techProcess.id);
        },
        error: function (xhr, status, err) {
            console.error(this.props.url, status, err.toString());
        }.bind(this)
    });
}

function _deleteTechProcess(id: number) {
    $.ajax({
        url: location.origin + '/api/techProcesses/' + id,
        dataType: 'json',
        type: 'DELETE',
        data: { __RequestVerificationToken: antiForgeryToken },
        success: function (id) {
            _loadTechProcesses();
        },
        error: function (xhr, status, err) {
            console.error(this.props.url, status, err.toString());
        }
    });
}

function _updateTechProcess(techProcess: ITechProcess) {
    $.ajax({
        url: location.origin + '/api/techProcesses',
        dataType: 'json',
        type: 'POST',
        data: {
            id: techProcess.id,
            __RequestVerificationToken: antiForgeryToken
        },
        success: function (techProcess) {
            if (_techProcesses[techProcess.id]) {
                _techProcesses[techProcess.id] = assign({}, _techProcesses[techProcess.id], techProcess);

                TechProcessStore.emitChangeTechProcesses();
            }
        },
        error: function (xhr, status, err) {
            console.error(this.props.url, status, err.toString());
        }
    });
}

function _init(currentPage: number, techProcessesPerPage: number, searchText: string): void {
    _techProcessesPerPage = techProcessesPerPage;
    _currentTechProcessPage = currentPage;
    _techProcessSearchText = searchText;

    _loadTechProcesses();
}

class TechProcessStoreStatic extends EventEmitter {

    public getAll(): Array<ITechProcess> {
        return _techProcesses;
    }

    public getTechProcessAmount(): number {
        return _totalTechProcessAmount;
    }

    public getTechProcessesPerPage(): number {
        return _techProcessesPerPage;
    }

    public getEditTechProcess(): ITechProcess {
        return _techProcess;
    }

    public emitChangeTechProcesses(): void {
        this.emit(CHANGE_TECHPROCESSES_EVENT);
    }

    public emitChangeEditTechProcess(): void {
        this.emit(CHANGE_EDITTECHPROCESS_EVENT);
    }

    /**
     * @param {function} callback
     */
    public addChangeEditTechProcessListener(callback: () => void): void {
        this.on(CHANGE_EDITTECHPROCESS_EVENT, callback);
    }

    /**
     * @param {function} callback
     */
    public removeChangeEditTechProcessListener(callback: () => void) {
        this.removeListener(CHANGE_EDITTECHPROCESS_EVENT, callback);
    }

    /**
     * @param {function} callback
     */
    public addChangeTechProcessesListener(callback: () => void): void {
        this.on(CHANGE_TECHPROCESSES_EVENT, callback);
    }

    /**
     * @param {function} callback
     */
    public removeChangeTechProcessesListener(callback: () => void) {
        this.removeListener(CHANGE_TECHPROCESSES_EVENT, callback);
    }
}

let TechProcessStore: TechProcessStoreStatic = new TechProcessStoreStatic();

AppDispatcher.register(function (payload: AppPayload) {

    if (payload.actionSource != ActionSourceTypes.TECHPROCESS) return;

    switch (payload.actionType) {
        case TechProcessActionTypes.TECHPROCESS_INIT:
            _init(payload.currentPage, payload.pageSize, payload.searchText);
            break;

        case TechProcessActionTypes.TECHPROCESS_LOAD_EDIT:
            _loadTechProcess(payload.id);
            break;

        case TechProcessActionTypes.TECHPROCESS_CREATE:
            _addTechProcess(payload.techProcess)
            break;

        case TechProcessActionTypes.TECHPROCESS_UPDATE:
            _updateTechProcess(payload.techProcess);
            break;

        case TechProcessActionTypes.TECHPROCESS_DELETE:
            _deleteTechProcess(payload.id);
            break;

        case TechProcessActionTypes.TECHPROCESS_PAGE_CHANGE:
            _currentTechProcessPage = payload.currentPage;
            _loadTechProcesses();
            break;

        case TechProcessActionTypes.TECHPROCESSES_PER_PAGE_CHANGE:
            _techProcessesPerPage = payload.pageSize;
            _loadTechProcesses();
            break;

        case TechProcessActionTypes.TECHPROCESS_SEARCH_TEXT_CHANGE:
            _techProcessSearchText = payload.searchText;
            _loadTechProcesses();
            break;

        default:
    }
});

export default TechProcessStore;
