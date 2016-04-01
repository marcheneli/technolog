/// <reference path="../../../typings/tsd.d.ts" />
define(["require", "exports", "../dispatcher/appDispatcher", "./actionSourceTypes", "./techProcessActionTypes"], function (require, exports, appDispatcher_1, actionSourceTypes_1, techProcessActionTypes_1) {
    "use strict";
    var TechProcessActionsStatic = (function () {
        function TechProcessActionsStatic() {
        }
        TechProcessActionsStatic.prototype.init = function (currentPage, pageSize, searchText) {
            appDispatcher_1.default.dispatch({
                actionType: techProcessActionTypes_1.default.TECHPROCESS_INIT,
                actionSource: actionSourceTypes_1.default.TECHPROCESS,
                currentPage: currentPage,
                pageSize: pageSize,
                searchText: searchText
            });
        };
        TechProcessActionsStatic.prototype.loadEditTechProcess = function (id) {
            appDispatcher_1.default.dispatch({
                actionType: techProcessActionTypes_1.default.TECHPROCESS_LOAD_EDIT,
                actionSource: actionSourceTypes_1.default.TECHPROCESS,
                id: id
            });
        };
        TechProcessActionsStatic.prototype.create = function (techProcess) {
            appDispatcher_1.default.dispatch({
                actionType: techProcessActionTypes_1.default.TECHPROCESS_CREATE,
                actionSource: actionSourceTypes_1.default.TECHPROCESS,
                techProcess: techProcess
            });
        };
        TechProcessActionsStatic.prototype.update = function (techProcess) {
            appDispatcher_1.default.dispatch({
                actionType: techProcessActionTypes_1.default.TECHPROCESS_UPDATE,
                actionSource: actionSourceTypes_1.default.TECHPROCESS,
                techProcess: techProcess
            });
        };
        TechProcessActionsStatic.prototype.remove = function (id) {
            appDispatcher_1.default.dispatch({
                actionType: techProcessActionTypes_1.default.TECHPROCESS_DELETE,
                actionSource: actionSourceTypes_1.default.TECHPROCESS,
                id: id
            });
        };
        TechProcessActionsStatic.prototype.changeTechProcessPage = function (page) {
            appDispatcher_1.default.dispatch({
                actionType: techProcessActionTypes_1.default.TECHPROCESS_PAGE_CHANGE,
                actionSource: actionSourceTypes_1.default.TECHPROCESS,
                currentPage: page
            });
        };
        TechProcessActionsStatic.prototype.changeTechProcesssPerPage = function (techProcesssPerPage) {
            appDispatcher_1.default.dispatch({
                actionType: techProcessActionTypes_1.default.TECHPROCESSES_PER_PAGE_CHANGE,
                actionSource: actionSourceTypes_1.default.TECHPROCESS,
                pageSize: techProcesssPerPage
            });
        };
        TechProcessActionsStatic.prototype.changeTechProcessSearchText = function (text) {
            appDispatcher_1.default.dispatch({
                actionType: techProcessActionTypes_1.default.TECHPROCESS_SEARCH_TEXT_CHANGE,
                actionSource: actionSourceTypes_1.default.TECHPROCESS,
                searchText: text
            });
        };
        return TechProcessActionsStatic;
    }());
    var TechProcessActions = new TechProcessActionsStatic();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TechProcessActions;
});
//# sourceMappingURL=techProcessActions.js.map