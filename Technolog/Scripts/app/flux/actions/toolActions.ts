/// <reference path="../../../typings/tsd.d.ts" />

import AppDispatcher from "../dispatcher/appDispatcher";
import ActionSourceTypes from "./actionSourceTypes";
import ToolActionTypes from "./toolActionTypes";
import ToolService from "../services/toolService";

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

    public load(compoentId: string,
        currentPage: number, pageSize: number, searchText: string): void {

        ToolService.loadTools(compoentId, currentPage, pageSize, searchText);
    }

    public updateToolList(componentId: string,
        toolList: Array<ITool>, totalAmount: number, toolsPerPage: number, page: number, searchText: string): void {

        AppDispatcher.dispatch({
            actionType: ToolActionTypes.TOOL_UPDATE_TOOL_LIST,
            actionSource: ActionSourceTypes.TOOL,
            tools: toolList,
            totalAmount: totalAmount,
            currentPage: page,
            searchText: searchText,
            pageSize: toolsPerPage,
            componentId: componentId
        });
    }

    public showToolDeleteConfirmation(compoentId: string): void {

        AppDispatcher.dispatch({
            actionType: ToolActionTypes.TOOL_SHOW_DELETE_CONFIRMATION,
            actionSource: ActionSourceTypes.TOOL,
            componentId: compoentId
        });
    }

    public closeToolDeleteConfirmation(compoentId: string): void {

        AppDispatcher.dispatch({
            actionType: ToolActionTypes.TOOL_CLOSE_DELETE_CONFIRMATION,
            actionSource: ActionSourceTypes.TOOL,
            componentId: compoentId
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