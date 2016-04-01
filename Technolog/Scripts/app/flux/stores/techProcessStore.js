/// <reference path="../../../typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "jquery", "../dispatcher/appDispatcher", "../actions/actionSourceTypes", "../actions/techProcessActionTypes", "../actions/errorActions", "../../constants/pageConstants", "../../managers/navigationManager", 'object-assign', "eventemitter3"], function (require, exports, $, appDispatcher_1, actionSourceTypes_1, techProcessActionTypes_1, errorActions_1, pageConstants_1, navigationManager_1, assign, EventEmitter) {
    "use strict";
    var CHANGE_TECHPROCESSES_EVENT = 'change_techProcesses';
    var CHANGE_EDITTECHPROCESS_EVENT = 'change_edittechProcess';
    var _techProcesses = new Array();
    var _techProcess;
    var _techProcessSearchText = "";
    var _totalTechProcessAmount = 0;
    var _techProcessesPerPage = pageConstants_1.default.ITEMS_PER_PAGE_INIT;
    var _currentTechProcessPage = 0;
    function _loadTechProcesses() {
        $.get(location.origin + "/api/techProcesses?search=" + _techProcessSearchText + "&page=" + _currentTechProcessPage + "&pageSize=" + _techProcessesPerPage, function (techProcessListModel) {
            _totalTechProcessAmount = techProcessListModel.techProcessAmount;
            _techProcesses = new Array();
            techProcessListModel.techProcesses.forEach(function (techProcess) {
                _techProcesses[techProcess.id] = techProcess;
            });
            TechProcessStore.emitChangeTechProcesses();
        });
    }
    function _loadTechProcess(id) {
        if (id == 0) {
            _techProcess = { id: 0, name: "" };
            TechProcessStore.emitChangeEditTechProcess();
            return;
        }
        if (_techProcesses[id]) {
            _techProcess = _techProcesses[id];
            TechProcessStore.emitChangeEditTechProcess();
        }
        else {
            $.ajax({
                url: location.origin + "/api/techProcesses/" + id,
                type: 'GET',
                success: function (techProcess) {
                    _techProcess = techProcess;
                    TechProcessStore.emitChangeEditTechProcess();
                },
                error: function (data) {
                    errorActions_1.default.received(data.responseJSON);
                }
            });
        }
    }
    function _addTechProcess(techProcess) {
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
                navigationManager_1.default.openTechProcessEditor(techProcess.id);
            },
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }
    function _deleteTechProcess(id) {
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
    function _updateTechProcess(techProcess) {
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
    function _init(currentPage, techProcessesPerPage, searchText) {
        _techProcessesPerPage = techProcessesPerPage;
        _currentTechProcessPage = currentPage;
        _techProcessSearchText = searchText;
        _loadTechProcesses();
    }
    var TechProcessStoreStatic = (function (_super) {
        __extends(TechProcessStoreStatic, _super);
        function TechProcessStoreStatic() {
            _super.apply(this, arguments);
        }
        TechProcessStoreStatic.prototype.getAll = function () {
            return _techProcesses;
        };
        TechProcessStoreStatic.prototype.getTechProcessAmount = function () {
            return _totalTechProcessAmount;
        };
        TechProcessStoreStatic.prototype.getTechProcessesPerPage = function () {
            return _techProcessesPerPage;
        };
        TechProcessStoreStatic.prototype.getEditTechProcess = function () {
            return _techProcess;
        };
        TechProcessStoreStatic.prototype.emitChangeTechProcesses = function () {
            this.emit(CHANGE_TECHPROCESSES_EVENT);
        };
        TechProcessStoreStatic.prototype.emitChangeEditTechProcess = function () {
            this.emit(CHANGE_EDITTECHPROCESS_EVENT);
        };
        /**
         * @param {function} callback
         */
        TechProcessStoreStatic.prototype.addChangeEditTechProcessListener = function (callback) {
            this.on(CHANGE_EDITTECHPROCESS_EVENT, callback);
        };
        /**
         * @param {function} callback
         */
        TechProcessStoreStatic.prototype.removeChangeEditTechProcessListener = function (callback) {
            this.removeListener(CHANGE_EDITTECHPROCESS_EVENT, callback);
        };
        /**
         * @param {function} callback
         */
        TechProcessStoreStatic.prototype.addChangeTechProcessesListener = function (callback) {
            this.on(CHANGE_TECHPROCESSES_EVENT, callback);
        };
        /**
         * @param {function} callback
         */
        TechProcessStoreStatic.prototype.removeChangeTechProcessesListener = function (callback) {
            this.removeListener(CHANGE_TECHPROCESSES_EVENT, callback);
        };
        return TechProcessStoreStatic;
    }(EventEmitter));
    var TechProcessStore = new TechProcessStoreStatic();
    appDispatcher_1.default.register(function (payload) {
        if (payload.actionSource != actionSourceTypes_1.default.TECHPROCESS)
            return;
        switch (payload.actionType) {
            case techProcessActionTypes_1.default.TECHPROCESS_INIT:
                _init(payload.currentPage, payload.pageSize, payload.searchText);
                break;
            case techProcessActionTypes_1.default.TECHPROCESS_LOAD_EDIT:
                _loadTechProcess(payload.id);
                break;
            case techProcessActionTypes_1.default.TECHPROCESS_CREATE:
                _addTechProcess(payload.techProcess);
                break;
            case techProcessActionTypes_1.default.TECHPROCESS_UPDATE:
                _updateTechProcess(payload.techProcess);
                break;
            case techProcessActionTypes_1.default.TECHPROCESS_DELETE:
                _deleteTechProcess(payload.id);
                break;
            case techProcessActionTypes_1.default.TECHPROCESS_PAGE_CHANGE:
                _currentTechProcessPage = payload.currentPage;
                _loadTechProcesses();
                break;
            case techProcessActionTypes_1.default.TECHPROCESSES_PER_PAGE_CHANGE:
                _techProcessesPerPage = payload.pageSize;
                _loadTechProcesses();
                break;
            case techProcessActionTypes_1.default.TECHPROCESS_SEARCH_TEXT_CHANGE:
                _techProcessSearchText = payload.searchText;
                _loadTechProcesses();
                break;
            default:
        }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TechProcessStore;
});
//# sourceMappingURL=techProcessStore.js.map