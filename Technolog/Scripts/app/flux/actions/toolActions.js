/// <reference path="../../../typings/tsd.d.ts" />
define(["require", "exports", "./dispatcher/appDispatcher", "./toolActionTypes"], function (require, exports, appDispatcher_1, toolActionTypes_1) {
    "use strict";
    var ToolActionsStatic = (function () {
        function ToolActionsStatic() {
        }
        ToolActionsStatic.prototype.init = function (currentPage, pageSize, searchText) {
            appDispatcher_1.default.dispatch({
                actionType: toolActionTypes_1.default.TOOL_INIT,
                currentPage: currentPage,
                pageSize: pageSize,
                searchText: searchText
            });
        };
        ToolActionsStatic.prototype.loadEditTool = function (id) {
            appDispatcher_1.default.dispatch({
                actionType: toolActionTypes_1.default.TOOL_LOAD_EDIT,
                id: id
            });
        };
        ToolActionsStatic.prototype.create = function (tool) {
            appDispatcher_1.default.dispatch({
                actionType: toolActionTypes_1.default.TOOL_CREATE,
                tool: tool
            });
        };
        ToolActionsStatic.prototype.update = function (tool) {
            appDispatcher_1.default.dispatch({
                actionType: toolActionTypes_1.default.TOOL_UPDATE,
                tool: tool
            });
        };
        ToolActionsStatic.prototype.remove = function (id) {
            appDispatcher_1.default.dispatch({
                actionType: toolActionTypes_1.default.TOOL_DELETE
            });
        };
        ToolActionsStatic.prototype.changeToolPage = function (page) {
            appDispatcher_1.default.dispatch({
                actionType: toolActionTypes_1.default.TOOL_PAGE_CHANGE,
                currentPage: page
            });
        };
        ToolActionsStatic.prototype.changeToolsPerPage = function (toolsPerPage) {
            appDispatcher_1.default.dispatch({
                actionType: toolActionTypes_1.default.TOOLS_PER_PAGE_CHANGE,
                pageSize: toolsPerPage
            });
        };
        ToolActionsStatic.prototype.changeToolSearchText = function (text) {
            appDispatcher_1.default.dispatch({
                actionType: toolActionTypes_1.default.TOOL_SEARCH_TEXT_CHANGE,
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