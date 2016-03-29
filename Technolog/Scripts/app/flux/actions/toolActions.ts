/// <reference path="../../../typings/tsd.d.ts" />

import AppDispatcher from "../dispatcher/appDispatcher";
import ActionSourceTypes from "./actionSourceTypes";
import ToolActionTypes from "./toolActionTypes";

class ToolActionsStatic {
    public init(currentPage: number, pageSize: number, searchText: string): void {
        AppDispatcher.dispatch({
            actionType: ToolActionTypes.TOOL_INIT,
            actionSource: ActionSourceTypes.TOOL,
            currentPage: currentPage,
            pageSize: pageSize,
            searchText: searchText
        });
    }

    public loadEditTool(id: number): void {
        AppDispatcher.dispatch({
            actionType: ToolActionTypes.TOOL_LOAD_EDIT,
            actionSource: ActionSourceTypes.TOOL,
            id: id
        });
    }

    public create(tool: ITool): void {
        AppDispatcher.dispatch({
            actionType: ToolActionTypes.TOOL_CREATE,
            actionSource: ActionSourceTypes.TOOL,
            tool: tool
        });
    }

    public update(tool: ITool): void {
        AppDispatcher.dispatch({
            actionType: ToolActionTypes.TOOL_UPDATE,
            actionSource: ActionSourceTypes.TOOL,
            tool: tool
        });
    }

    public remove(id: number): void {
        AppDispatcher.dispatch({
            actionType: ToolActionTypes.TOOL_DELETE,
            actionSource: ActionSourceTypes.TOOL,
            id: id
        });
    }

    public changeToolPage(page: number) {
        AppDispatcher.dispatch({
            actionType: ToolActionTypes.TOOL_PAGE_CHANGE,
            actionSource: ActionSourceTypes.TOOL,
            currentPage: page
        });
    }

    public changeToolsPerPage(toolsPerPage: number) {
        AppDispatcher.dispatch({
            actionType: ToolActionTypes.TOOLS_PER_PAGE_CHANGE,
            actionSource: ActionSourceTypes.TOOL,
            pageSize: toolsPerPage
        });
    }

    public changeToolSearchText(text: string) {
        AppDispatcher.dispatch({
            actionType: ToolActionTypes.TOOL_SEARCH_TEXT_CHANGE,
            actionSource: ActionSourceTypes.TOOL,
            searchText: text
        });
    }
}

let ToolActions: ToolActionsStatic = new ToolActionsStatic();

export default ToolActions;