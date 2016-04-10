/// <reference path="../../../typings/tsd.d.ts" />

import AppDispatcher from "../dispatcher/appDispatcher";
import * as EventEmitter from "eventemitter3";
import AppPayload from "../iAppPayload";
import ActionSourceTypes from "../actions/actionSourceTypes";
import ToolActionTypes from "../actions/toolActionTypes";

const CHANGE_EVENT: string = "CHANGE_EVENT";

const _toolComponentStates = {};

function _updateToolList(componentId: string, tools: Array<ITool>): void {
    _toolComponentStates[componentId].tools = tools;
}

function _updateTotalAmount(componentId: string, totalAmount: number): void {
    _toolComponentStates[componentId].totalAmount = totalAmount;
}

function _updateToolPage(componentId: string, toolPage: number): void {
    _toolComponentStates[componentId].toolPage = toolPage;
}

function _updateToolsPerPage(componentId: string, toolsPerPage: number): void {
    _toolComponentStates[componentId].toolsPerPage = toolsPerPage;
}

function _updateDeleteConfirmation(componentId: string): void {
    _toolComponentStates[componentId].isConfirmDeleting =
        !_toolComponentStates[componentId].isConfirmDeleting;
}

class ToolStore extends EventEmitter {

    public getState(componentId: string): any {
        return _toolComponentStates[componentId];
    }

    public emitChange(componentId: string): void {
        this.emit(CHANGE_EVENT + componentId);
    }

    /**
     * @param {function} callback
     */
    public addChangeListener(callback: () => void, componentId: string): void {
        _toolComponentStates[componentId] = {};
        this.on(CHANGE_EVENT + componentId, callback);
    }

    /**
     * @param {function} callback
     */
    public removeChangeListener(callback: () => void, componentId: string): void {
        delete _toolComponentStates[componentId];
        this.removeListener(CHANGE_EVENT + componentId, callback);
    }
}

const toolStore: ToolStore = new ToolStore();

AppDispatcher.register(function (payload: AppPayload) {

    if (payload.actionSource != ActionSourceTypes.TOOL) return;

    switch (payload.actionType) {
        case ToolActionTypes.TOOL_UPDATE_TOOL_LIST:
            _updateToolList(payload.componentId, payload.tools);
            _updateTotalAmount(payload.componentId, payload.totalAmount);
            _updateToolPage(payload.componentId, payload.currentPage);
            _updateToolsPerPage(payload.componentId, payload.pageSize);
            toolStore.emitChange(payload.componentId);
            break;
        case ToolActionTypes.TOOL_SHOW_DELETE_CONFIRMATION:
            _updateDeleteConfirmation(payload.componentId);
            toolStore.emitChange(payload.componentId);
            break;
        case ToolActionTypes.TOOL_CLOSE_DELETE_CONFIRMATION:
            _updateDeleteConfirmation(payload.componentId);
            toolStore.emitChange(payload.componentId);
            break;
        default:
    }
});

export default toolStore;