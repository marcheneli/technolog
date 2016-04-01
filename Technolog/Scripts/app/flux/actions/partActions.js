/// <reference path="../../../typings/tsd.d.ts" />
define(["require", "exports", "../dispatcher/appDispatcher", "./actionSourceTypes", "./partActionTypes"], function (require, exports, appDispatcher_1, actionSourceTypes_1, partActionTypes_1) {
    "use strict";
    var PartActionsStatic = (function () {
        function PartActionsStatic() {
        }
        PartActionsStatic.prototype.init = function (currentPage, pageSize, searchText) {
            appDispatcher_1.default.dispatch({
                actionType: partActionTypes_1.default.PART_INIT,
                actionSource: actionSourceTypes_1.default.PART,
                currentPage: currentPage,
                pageSize: pageSize,
                searchText: searchText
            });
        };
        PartActionsStatic.prototype.loadEditPart = function (id) {
            appDispatcher_1.default.dispatch({
                actionType: partActionTypes_1.default.PART_LOAD_EDIT,
                actionSource: actionSourceTypes_1.default.PART,
                id: id
            });
        };
        PartActionsStatic.prototype.create = function (part) {
            appDispatcher_1.default.dispatch({
                actionType: partActionTypes_1.default.PART_CREATE,
                actionSource: actionSourceTypes_1.default.PART,
                part: part
            });
        };
        PartActionsStatic.prototype.update = function (part) {
            appDispatcher_1.default.dispatch({
                actionType: partActionTypes_1.default.PART_UPDATE,
                actionSource: actionSourceTypes_1.default.PART,
                part: part
            });
        };
        PartActionsStatic.prototype.remove = function (id) {
            appDispatcher_1.default.dispatch({
                actionType: partActionTypes_1.default.PART_DELETE,
                actionSource: actionSourceTypes_1.default.PART,
                id: id
            });
        };
        PartActionsStatic.prototype.changePartPage = function (page) {
            appDispatcher_1.default.dispatch({
                actionType: partActionTypes_1.default.PART_PAGE_CHANGE,
                actionSource: actionSourceTypes_1.default.PART,
                currentPage: page
            });
        };
        PartActionsStatic.prototype.changePartsPerPage = function (partsPerPage) {
            appDispatcher_1.default.dispatch({
                actionType: partActionTypes_1.default.PARTS_PER_PAGE_CHANGE,
                actionSource: actionSourceTypes_1.default.PART,
                pageSize: partsPerPage
            });
        };
        PartActionsStatic.prototype.changePartSearchText = function (text) {
            appDispatcher_1.default.dispatch({
                actionType: partActionTypes_1.default.PART_SEARCH_TEXT_CHANGE,
                actionSource: actionSourceTypes_1.default.PART,
                searchText: text
            });
        };
        return PartActionsStatic;
    }());
    var PartActions = new PartActionsStatic();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = PartActions;
});
//# sourceMappingURL=partActions.js.map