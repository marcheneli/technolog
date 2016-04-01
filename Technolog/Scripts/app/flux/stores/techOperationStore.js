/// <reference path="../../../typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "jquery", "../dispatcher/appDispatcher", "../actions/actionSourceTypes", "../actions/techOperationActionTypes", "../actions/errorActions", "../../constants/pageConstants", "../../managers/navigationManager", 'object-assign', "eventemitter3"], function (require, exports, $, appDispatcher_1, actionSourceTypes_1, techOperationActionTypes_1, errorActions_1, pageConstants_1, navigationManager_1, assign, EventEmitter) {
    "use strict";
    var CHANGE_TECHOPERATIONS_EVENT = 'change_techOperations';
    var CHANGE_EDITTECHOPERATION_EVENT = 'change_edittechOperation';
    var _techOperations = new Array();
    var _techOperation;
    var _techOperationSearchText = "";
    var _totalTechOperationAmount = 0;
    var _techOperationsPerPage = pageConstants_1.default.ITEMS_PER_PAGE_INIT;
    var _currentTechOperationPage = 0;
    function _loadTechOperations() {
        $.get(location.origin + "/api/techOperations?search=" + _techOperationSearchText + "&page=" + _currentTechOperationPage + "&pageSize=" + _techOperationsPerPage, function (techOperationListModel) {
            _totalTechOperationAmount = techOperationListModel.techOperationAmount;
            _techOperations = new Array();
            techOperationListModel.techOperations.forEach(function (techOperation) {
                _techOperations[techOperation.id] = techOperation;
            });
            TechOperationStore.emitChangeTechOperations();
        });
    }
    function _loadTechOperation(id) {
        if (id == 0) {
            _techOperation = { id: 0, name: "" };
            TechOperationStore.emitChangeEditTechOperation();
            return;
        }
        if (_techOperations[id]) {
            _techOperation = _techOperations[id];
            TechOperationStore.emitChangeEditTechOperation();
        }
        else {
            $.ajax({
                url: location.origin + "/api/techOperations/" + id,
                type: 'GET',
                success: function (techOperation) {
                    _techOperation = techOperation;
                    TechOperationStore.emitChangeEditTechOperation();
                },
                error: function (data) {
                    errorActions_1.default.received(data.responseJSON);
                }
            });
        }
    }
    function _addTechOperation(techOperation) {
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
                navigationManager_1.default.openTechOperationEditor(techOperation.id);
            },
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }
    function _deleteTechOperation(id) {
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
    function _updateTechOperation(techOperation) {
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
    function _init(currentPage, techOperationsPerPage, searchText) {
        _techOperationsPerPage = techOperationsPerPage;
        _currentTechOperationPage = currentPage;
        _techOperationSearchText = searchText;
        _loadTechOperations();
    }
    var TechOperationStoreStatic = (function (_super) {
        __extends(TechOperationStoreStatic, _super);
        function TechOperationStoreStatic() {
            _super.apply(this, arguments);
        }
        TechOperationStoreStatic.prototype.getAll = function () {
            return _techOperations;
        };
        TechOperationStoreStatic.prototype.getTechOperationAmount = function () {
            return _totalTechOperationAmount;
        };
        TechOperationStoreStatic.prototype.getTechOperationsPerPage = function () {
            return _techOperationsPerPage;
        };
        TechOperationStoreStatic.prototype.getEditTechOperation = function () {
            return _techOperation;
        };
        TechOperationStoreStatic.prototype.emitChangeTechOperations = function () {
            this.emit(CHANGE_TECHOPERATIONS_EVENT);
        };
        TechOperationStoreStatic.prototype.emitChangeEditTechOperation = function () {
            this.emit(CHANGE_EDITTECHOPERATION_EVENT);
        };
        /**
         * @param {function} callback
         */
        TechOperationStoreStatic.prototype.addChangeEditTechOperationListener = function (callback) {
            this.on(CHANGE_EDITTECHOPERATION_EVENT, callback);
        };
        /**
         * @param {function} callback
         */
        TechOperationStoreStatic.prototype.removeChangeEditTechOperationListener = function (callback) {
            this.removeListener(CHANGE_EDITTECHOPERATION_EVENT, callback);
        };
        /**
         * @param {function} callback
         */
        TechOperationStoreStatic.prototype.addChangeTechOperationsListener = function (callback) {
            this.on(CHANGE_TECHOPERATIONS_EVENT, callback);
        };
        /**
         * @param {function} callback
         */
        TechOperationStoreStatic.prototype.removeChangeTechOperationsListener = function (callback) {
            this.removeListener(CHANGE_TECHOPERATIONS_EVENT, callback);
        };
        return TechOperationStoreStatic;
    }(EventEmitter));
    var TechOperationStore = new TechOperationStoreStatic();
    appDispatcher_1.default.register(function (payload) {
        if (payload.actionSource != actionSourceTypes_1.default.TECHOPERATION)
            return;
        switch (payload.actionType) {
            case techOperationActionTypes_1.default.TECHOPERATION_INIT:
                _init(payload.currentPage, payload.pageSize, payload.searchText);
                break;
            case techOperationActionTypes_1.default.TECHOPERATION_LOAD_EDIT:
                _loadTechOperation(payload.id);
                break;
            case techOperationActionTypes_1.default.TECHOPERATION_CREATE:
                _addTechOperation(payload.techOperation);
                break;
            case techOperationActionTypes_1.default.TECHOPERATION_UPDATE:
                _updateTechOperation(payload.techOperation);
                break;
            case techOperationActionTypes_1.default.TECHOPERATION_DELETE:
                _deleteTechOperation(payload.id);
                break;
            case techOperationActionTypes_1.default.TECHOPERATION_PAGE_CHANGE:
                _currentTechOperationPage = payload.currentPage;
                _loadTechOperations();
                break;
            case techOperationActionTypes_1.default.TECHOPERATIONS_PER_PAGE_CHANGE:
                _techOperationsPerPage = payload.pageSize;
                _loadTechOperations();
                break;
            case techOperationActionTypes_1.default.TECHOPERATION_SEARCH_TEXT_CHANGE:
                _techOperationSearchText = payload.searchText;
                _loadTechOperations();
                break;
            default:
        }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TechOperationStore;
});
//# sourceMappingURL=techOperationStore.js.map