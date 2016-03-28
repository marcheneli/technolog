/// <reference path="../../../typings/tsd.d.ts" />

import AppDispatcher from "./dispatcher/appDispatcher";
import ToolActionTypes from "./toolActionTypes";

class ToolActionsStatic {
    public init(currentPage: number, pageSize: number, searchText: string): void {
        AppDispatcher.dispatch({
            actionType: ToolActionTypes.TOOL_INIT,
            currentPage: currentPage,
            pageSize: pageSize,
            searchText: searchText
        });
    }

    public loadEditTool(id: number): void {
        AppDispatcher.dispatch({
            actionType: ToolActionTypes.TOOL_LOAD_EDIT,
            id: id
        });
    }

    public create(tool: ITool): void {
        AppDispatcher.dispatch({
            actionType: ToolActionTypes.TOOL_CREATE,
            tool: tool
        });
    }

    public update(tool: ITool): void {
        AppDispatcher.dispatch({
            actionType: ToolActionTypes.TOOL_UPDATE,
            tool: tool
        });
    }

    public remove(id: number): void {
        AppDispatcher.dispatch({
            actionType: ToolActionTypes.TOOL_DELETE
        });
    }

    public changeToolPage(page: number) {
        AppDispatcher.dispatch({
            actionType: ToolActionTypes.TOOL_PAGE_CHANGE,
            currentPage: page
        });
    }

    public changeToolsPerPage(toolsPerPage: number) {
        AppDispatcher.dispatch({
            actionType: ToolActionTypes.TOOLS_PER_PAGE_CHANGE,
            pageSize: toolsPerPage
        });
    }

    public changeToolSearchText(text: string) {
        AppDispatcher.dispatch({
            actionType: ToolActionTypes.TOOL_SEARCH_TEXT_CHANGE,
            searchText: text
        });
    }
}

let ToolActions: ToolActionsStatic = new ToolActionsStatic();

export default ToolActions;