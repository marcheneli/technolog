/// <reference path="../../../typings/tsd.d.ts" />
define(["require", "exports", "../dispatcher/appDispatcher", "./actionSourceTypes", "./techStepActionTypes"], function (require, exports, appDispatcher_1, actionSourceTypes_1, techStepActionTypes_1) {
    "use strict";
    var TechStepActionsStatic = (function () {
        function TechStepActionsStatic() {
        }
        TechStepActionsStatic.prototype.init = function (currentPage, pageSize, searchText) {
            appDispatcher_1.default.dispatch({
                actionType: techStepActionTypes_1.default.TECHSTEP_INIT,
                actionSource: actionSourceTypes_1.default.TECHSTEP,
                currentPage: currentPage,
                pageSize: pageSize,
                searchText: searchText
            });
        };
        TechStepActionsStatic.prototype.loadEditTechStep = function (id) {
            appDispatcher_1.default.dispatch({
                actionType: techStepActionTypes_1.default.TECHSTEP_LOAD_EDIT,
                actionSource: actionSourceTypes_1.default.TECHSTEP,
                id: id
            });
        };
        TechStepActionsStatic.prototype.create = function (techStep) {
            appDispatcher_1.default.dispatch({
                actionType: techStepActionTypes_1.default.TECHSTEP_CREATE,
                actionSource: actionSourceTypes_1.default.TECHSTEP,
                techStep: techStep
            });
        };
        TechStepActionsStatic.prototype.update = function (techStep) {
            appDispatcher_1.default.dispatch({
                actionType: techStepActionTypes_1.default.TECHSTEP_UPDATE,
                actionSource: actionSourceTypes_1.default.TECHSTEP,
                techStep: techStep
            });
        };
        TechStepActionsStatic.prototype.remove = function (id) {
            appDispatcher_1.default.dispatch({
                actionType: techStepActionTypes_1.default.TECHSTEP_DELETE,
                actionSource: actionSourceTypes_1.default.TECHSTEP,
                id: id
            });
        };
        TechStepActionsStatic.prototype.changeTechStepPage = function (page) {
            appDispatcher_1.default.dispatch({
                actionType: techStepActionTypes_1.default.TECHSTEP_PAGE_CHANGE,
                actionSource: actionSourceTypes_1.default.TECHSTEP,
                currentPage: page
            });
        };
        TechStepActionsStatic.prototype.changeTechStepsPerPage = function (techStepsPerPage) {
            appDispatcher_1.default.dispatch({
                actionType: techStepActionTypes_1.default.TECHSTEPS_PER_PAGE_CHANGE,
                actionSource: actionSourceTypes_1.default.TECHSTEP,
                pageSize: techStepsPerPage
            });
        };
        TechStepActionsStatic.prototype.changeTechStepSearchText = function (text) {
            appDispatcher_1.default.dispatch({
                actionType: techStepActionTypes_1.default.TECHSTEP_SEARCH_TEXT_CHANGE,
                actionSource: actionSourceTypes_1.default.TECHSTEP,
                searchText: text
            });
        };
        return TechStepActionsStatic;
    }());
    var TechStepActions = new TechStepActionsStatic();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TechStepActions;
});
//# sourceMappingURL=techStepActions.js.map