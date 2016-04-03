/// <reference path="../../../typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "jquery", "../dispatcher/appDispatcher", "../actions/actionSourceTypes", "../actions/techStepActionTypes", "../actions/errorActions", "../../constants/pageConstants", "../../managers/navigationManager", 'object-assign', "eventemitter3"], function (require, exports, $, appDispatcher_1, actionSourceTypes_1, techStepActionTypes_1, errorActions_1, pageConstants_1, navigationManager_1, assign, EventEmitter) {
    "use strict";
    var CHANGE_TECHSTEPS_EVENT = 'change_techSteps';
    var CHANGE_EDITTECHSTEP_EVENT = 'change_edittechStep';
    var _techSteps = new Array();
    var _techStep;
    var _techStepSearchText = "";
    var _totalTechStepAmount = 0;
    var _techStepsPerPage = pageConstants_1.default.ITEMS_PER_PAGE_INIT;
    var _currentTechStepPage = 0;
    function _loadTechSteps() {
        $.get(location.origin + "/api/techSteps?search=" + _techStepSearchText + "&page=" + _currentTechStepPage + "&pageSize=" + _techStepsPerPage, function (techStepListModel) {
            _totalTechStepAmount = techStepListModel.techStepAmount;
            _techSteps = new Array();
            techStepListModel.techSteps.forEach(function (techStep) {
                _techSteps[techStep.id] = techStep;
            });
            TechStepStore.emitChangeTechSteps();
        });
    }
    function _loadTechStep(id) {
        if (id == 0) {
            _techStep = { id: 0, description: "" };
            TechStepStore.emitChangeEditTechStep();
            return;
        }
        if (_techSteps[id]) {
            _techStep = _techSteps[id];
            TechStepStore.emitChangeEditTechStep();
        }
        else {
            $.ajax({
                url: location.origin + "/api/techSteps/" + id,
                type: 'GET',
                success: function (techStep) {
                    _techStep = techStep;
                    TechStepStore.emitChangeEditTechStep();
                },
                error: function (data) {
                    errorActions_1.default.received(data.responseJSON);
                }
            });
        }
    }
    function _addTechStep(techStep) {
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
                navigationManager_1.default.openTechStepEditor(techStep.id);
            },
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }
    function _deleteTechStep(id) {
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
    function _updateTechStep(techStep) {
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
    function _init(currentPage, techStepsPerPage, searchText) {
        _techStepsPerPage = techStepsPerPage;
        _currentTechStepPage = currentPage;
        _techStepSearchText = searchText;
        _loadTechSteps();
    }
    var TechStepStoreStatic = (function (_super) {
        __extends(TechStepStoreStatic, _super);
        function TechStepStoreStatic() {
            _super.apply(this, arguments);
        }
        TechStepStoreStatic.prototype.getAll = function () {
            return _techSteps;
        };
        TechStepStoreStatic.prototype.getTechStepAmount = function () {
            return _totalTechStepAmount;
        };
        TechStepStoreStatic.prototype.getTechStepsPerPage = function () {
            return _techStepsPerPage;
        };
        TechStepStoreStatic.prototype.getEditTechStep = function () {
            return _techStep;
        };
        TechStepStoreStatic.prototype.emitChangeTechSteps = function () {
            this.emit(CHANGE_TECHSTEPS_EVENT);
        };
        TechStepStoreStatic.prototype.emitChangeEditTechStep = function () {
            this.emit(CHANGE_EDITTECHSTEP_EVENT);
        };
        /**
         * @param {function} callback
         */
        TechStepStoreStatic.prototype.addChangeEditTechStepListener = function (callback) {
            this.on(CHANGE_EDITTECHSTEP_EVENT, callback);
        };
        /**
         * @param {function} callback
         */
        TechStepStoreStatic.prototype.removeChangeEditTechStepListener = function (callback) {
            this.removeListener(CHANGE_EDITTECHSTEP_EVENT, callback);
        };
        /**
         * @param {function} callback
         */
        TechStepStoreStatic.prototype.addChangeTechStepsListener = function (callback) {
            this.on(CHANGE_TECHSTEPS_EVENT, callback);
        };
        /**
         * @param {function} callback
         */
        TechStepStoreStatic.prototype.removeChangeTechStepsListener = function (callback) {
            this.removeListener(CHANGE_TECHSTEPS_EVENT, callback);
        };
        return TechStepStoreStatic;
    }(EventEmitter));
    var TechStepStore = new TechStepStoreStatic();
    appDispatcher_1.default.register(function (payload) {
        if (payload.actionSource != actionSourceTypes_1.default.TECHSTEP)
            return;
        switch (payload.actionType) {
            case techStepActionTypes_1.default.TECHSTEP_INIT:
                _init(payload.currentPage, payload.pageSize, payload.searchText);
                break;
            case techStepActionTypes_1.default.TECHSTEP_LOAD_EDIT:
                _loadTechStep(payload.id);
                break;
            case techStepActionTypes_1.default.TECHSTEP_CREATE:
                _addTechStep(payload.techStep);
                break;
            case techStepActionTypes_1.default.TECHSTEP_UPDATE:
                _updateTechStep(payload.techStep);
                break;
            case techStepActionTypes_1.default.TECHSTEP_DELETE:
                _deleteTechStep(payload.id);
                break;
            case techStepActionTypes_1.default.TECHSTEP_PAGE_CHANGE:
                _currentTechStepPage = payload.currentPage;
                _loadTechSteps();
                break;
            case techStepActionTypes_1.default.TECHSTEPS_PER_PAGE_CHANGE:
                _techStepsPerPage = payload.pageSize;
                _loadTechSteps();
                break;
            case techStepActionTypes_1.default.TECHSTEP_SEARCH_TEXT_CHANGE:
                _techStepSearchText = payload.searchText;
                _loadTechSteps();
                break;
            default:
        }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TechStepStore;
});
//# sourceMappingURL=techStepStore.js.map