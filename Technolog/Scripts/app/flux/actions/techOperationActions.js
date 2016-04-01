/// <reference path="../../../typings/tsd.d.ts" />
define(["require", "exports", "../dispatcher/appDispatcher", "./actionSourceTypes", "./techOperationActionTypes"], function (require, exports, appDispatcher_1, actionSourceTypes_1, techOperationActionTypes_1) {
    "use strict";
    var TechOperationActionsStatic = (function () {
        function TechOperationActionsStatic() {
        }
        TechOperationActionsStatic.prototype.init = function (currentPage, pageSize, searchText) {
            appDispatcher_1.default.dispatch({
                actionType: techOperationActionTypes_1.default.TECHOPERATION_INIT,
                actionSource: actionSourceTypes_1.default.TECHOPERATION,
                currentPage: currentPage,
                pageSize: pageSize,
                searchText: searchText
            });
        };
        TechOperationActionsStatic.prototype.loadEditTechOperation = function (id) {
            appDispatcher_1.default.dispatch({
                actionType: techOperationActionTypes_1.default.TECHOPERATION_LOAD_EDIT,
                actionSource: actionSourceTypes_1.default.TECHOPERATION,
                id: id
            });
        };
        TechOperationActionsStatic.prototype.create = function (techOperation) {
            appDispatcher_1.default.dispatch({
                actionType: techOperationActionTypes_1.default.TECHOPERATION_CREATE,
                actionSource: actionSourceTypes_1.default.TECHOPERATION,
                techOperation: techOperation
            });
        };
        TechOperationActionsStatic.prototype.update = function (techOperation) {
            appDispatcher_1.default.dispatch({
                actionType: techOperationActionTypes_1.default.TECHOPERATION_UPDATE,
                actionSource: actionSourceTypes_1.default.TECHOPERATION,
                techOperation: techOperation
            });
        };
        TechOperationActionsStatic.prototype.remove = function (id) {
            appDispatcher_1.default.dispatch({
                actionType: techOperationActionTypes_1.default.TECHOPERATION_DELETE,
                actionSource: actionSourceTypes_1.default.TECHOPERATION,
                id: id
            });
        };
        TechOperationActionsStatic.prototype.changeTechOperationPage = function (page) {
            appDispatcher_1.default.dispatch({
                actionType: techOperationActionTypes_1.default.TECHOPERATION_PAGE_CHANGE,
                actionSource: actionSourceTypes_1.default.TECHOPERATION,
                currentPage: page
            });
        };
        TechOperationActionsStatic.prototype.changeTechOperationsPerPage = function (techOperationsPerPage) {
            appDispatcher_1.default.dispatch({
                actionType: techOperationActionTypes_1.default.TECHOPERATIONS_PER_PAGE_CHANGE,
                actionSource: actionSourceTypes_1.default.TECHOPERATION,
                pageSize: techOperationsPerPage
            });
        };
        TechOperationActionsStatic.prototype.changeTechOperationSearchText = function (text) {
            appDispatcher_1.default.dispatch({
                actionType: techOperationActionTypes_1.default.TECHOPERATION_SEARCH_TEXT_CHANGE,
                actionSource: actionSourceTypes_1.default.TECHOPERATION,
                searchText: text
            });
        };
        return TechOperationActionsStatic;
    }());
    var TechOperationActions = new TechOperationActionsStatic();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TechOperationActions;
});
//# sourceMappingURL=techOperationActions.js.map