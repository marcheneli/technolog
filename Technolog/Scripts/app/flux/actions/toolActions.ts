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

    public load(componentId: string,
        currentPage: number, pageSize: number, searchText: string): void {

        ToolService.loadTools(componentId, currentPage, pageSize, searchText);
    }

    public loadPending(componentId: string,
        currentPage: number, pageSize: number, searchText: string): void {
        AppDispatcher.dispatch({
            actionType: ToolActionTypes.TOOL_LOAD_PENDING,
            actionSource: ActionSourceTypes.TOOL,
            componentId: componentId
        });
    }

    public loadSucceed(componentId: string): void {
        AppDispatcher.dispatch({
            actionType: ToolActionTypes.TOOL_LOAD_SUCCEED,
            actionSource: ActionSourceTypes.TOOL,
            componentId: componentId
        });
    }

    public loadFailed(componentId: string): void {
        AppDispatcher.dispatch({
            actionType: ToolActionTypes.TOOL_LOAD_FAILED,
            actionSource: ActionSourceTypes.TOOL,
            componentId: componentId
        });
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

    public undo(componentId: string): void {
        AppDispatcher.dispatch({
            actionType: ToolActionTypes.TOOL_UNDO,
            actionSource: ActionSourceTypes.TOOL,
            componentId: componentId
        });
    }

    public redo(componentId: string): void {
        AppDispatcher.dispatch({
            actionType: ToolActionTypes.TOOL_REDO,
            actionSource: ActionSourceTypes.TOOL,
            componentId: componentId
        });
    }

    public change(componentId: string, changedTool: ITool): void {
        AppDispatcher.dispatch({
            actionType: ToolActionTypes.TOOL_REDO,
            actionSource: ActionSourceTypes.TOOL,
            componentId: componentId,
            tool: changedTool
        });
    }

    public save(componentId: string, tool: ITool): void {
        ToolService.saveTool(componentId, tool);
    }

    public savePending(componentId: string): void {
        AppDispatcher.dispatch({
            actionType: ToolActionTypes.TOOL_SAVE_PENDING,
            actionSource: ActionSourceTypes.TOOL,
            componentId: componentId
        });
    }

    public saveSucceed(componentId: string, savedTool: ITool): void {
        AppDispatcher.dispatch({
            actionType: ToolActionTypes.TOOL_SAVE_SUCCEED,
            actionSource: ActionSourceTypes.TOOL,
            componentId: componentId,
            tool: savedTool
        });
    }

    public saveFailed(componentId: string, message: string): void {
        AppDispatcher.dispatch({
            actionType: ToolActionTypes.TOOL_SAVE_FAILED,
            actionSource: ActionSourceTypes.TOOL,
            errorMessage: message
        });
    }

    public delete(componentId: string, tools: Array<ITool>): void {
        ToolService.deleteTools(componentId, tools);
    }

    public deletePending(componentId: string): void {
        AppDispatcher.dispatch({
            actionType: ToolActionTypes.TOOL_DELETE_PENDING,
            actionSource: ActionSourceTypes.TOOL,
            componentId: componentId
        });
    }

    public deleteSucceed(componentId: string): void {
        AppDispatcher.dispatch({
            actionType: ToolActionTypes.TOOL_DELETE_SUCCEED,
            actionSource: ActionSourceTypes.TOOL,
            componentId: componentId
        });
    }

    public deleteFailed(componentId: string, message: string): void {
        AppDispatcher.dispatch({
            actionType: ToolActionTypes.TOOL_SAVE_FAILED,
            actionSource: ActionSourceTypes.TOOL,
            errorMessage: message
        });
    }
}

let ToolActions: ToolActionsStatic = new ToolActionsStatic();

export default ToolActions;