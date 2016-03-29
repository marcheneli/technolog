/// <reference path="../../../typings/tsd.d.ts" />
define(["require", "exports", "../dispatcher/appDispatcher", "./actionSourceTypes", "./toolActionTypes"], function (require, exports, appDispatcher_1, actionSourceTypes_1, toolActionTypes_1) {
    "use strict";
    var ToolActionsStatic = (function () {
        function ToolActionsStatic() {
        }
        ToolActionsStatic.prototype.init = function (currentPage, pageSize, searchText) {
            appDispatcher_1.default.dispatch({
                actionType: toolActionTypes_1.default.TOOL_INIT,
                actionSource: actionSourceTypes_1.default.TOOL,
                currentPage: currentPage,
                pageSize: pageSize,
                searchText: searchText
            });
        };
        ToolActionsStatic.prototype.loadEditTool = function (id) {
            appDispatcher_1.default.dispatch({
                actionType: toolActionTypes_1.default.TOOL_LOAD_EDIT,
                actionSource: actionSourceTypes_1.default.TOOL,
                id: id
            });
        };
        ToolActionsStatic.prototype.create = function (tool) {
            appDispatcher_1.default.dispatch({
                actionType: toolActionTypes_1.default.TOOL_CREATE,
                actionSource: actionSourceTypes_1.default.TOOL,
                tool: tool
            });
        };
        ToolActionsStatic.prototype.update = function (tool) {
            appDispatcher_1.default.dispatch({
                actionType: toolActionTypes_1.default.TOOL_UPDATE,
                actionSource: actionSourceTypes_1.default.TOOL,
                tool: tool
            });
        };
        ToolActionsStatic.prototype.remove = function (id) {
            appDispatcher_1.default.dispatch({
                actionType: toolActionTypes_1.default.TOOL_DELETE,
                actionSource: actionSourceTypes_1.default.TOOL,
                id: id
            });
        };
        ToolActionsStatic.prototype.changeToolPage = function (page) {
            appDispatcher_1.default.dispatch({
                actionType: toolActionTypes_1.default.TOOL_PAGE_CHANGE,
                actionSource: actionSourceTypes_1.default.TOOL,
                currentPage: page
            });
        };
        ToolActionsStatic.prototype.changeToolsPerPage = function (toolsPerPage) {
            appDispatcher_1.default.dispatch({
                actionType: toolActionTypes_1.default.TOOLS_PER_PAGE_CHANGE,
                actionSource: actionSourceTypes_1.default.TOOL,
                pageSize: toolsPerPage
            });
        };
        ToolActionsStatic.prototype.changeToolSearchText = function (text) {
            appDispatcher_1.default.dispatch({
                actionType: toolActionTypes_1.default.TOOL_SEARCH_TEXT_CHANGE,
                actionSource: actionSourceTypes_1.default.TOOL,
                searchText: text
            });
        };
        return ToolActionsStatic;
    }());
    var ToolActions = new ToolActionsStatic();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ToolActions;
});
//# sourceMappingURL=toolActions.js.map