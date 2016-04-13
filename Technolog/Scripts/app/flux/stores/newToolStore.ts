/// <reference path="../../../typings/tsd.d.ts" />

import AppDispatcher from "../dispatcher/appDispatcher";
import * as EventEmitter from "eventemitter3";
import AppPayload from "../iAppPayload";
import ActionSourceTypes from "../actions/actionSourceTypes";
import ToolActionTypes from "../actions/toolActionTypes";
import Utils from "../../utils/utils";

const CHANGE_EVENT: string = "CHANGE_EVENT";

const _toolComponentStates = {};
const _toolComponentHistories = {};

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

function _updateSavePending(componentId: string): void {
    _toolComponentStates[componentId].isSaving =
        !_toolComponentStates[componentId].isSaving;
}

function _updateDeletePending(componentId: string): void {
    _toolComponentStates[componentId].isDeleting =
        !_toolComponentStates[componentId].isDeleting;
}

function _updateToolComponentHistory(componentId: string, changedTool: ITool): void {
    var toolComponentHistory = _toolComponentHistories[componentId];
    toolComponentHistory.toolUnDoes.push(changedTool);
    toolComponentHistory.toolReDoes = [];
}

function _addAlert(componentId: string, message: string, alertType: string) {
    _toolComponentStates[componentId].alerts.push({ id: Utils.uuid(), message: message, type: alertType });
}

function _removeAlert(componentId: string, alertId: string) {
    var alerts = _toolComponentStates[componentId].alerts;
    var alert;

    for (var i = 0; i < alerts.length; i++)
    {
        if (alerts[i].id == alertId) {
            alert = alerts[i];
            break;
        }
    }

    alerts.splice(alerts.indexOf(alert), 1);
}

function _unDoToolComponentHistory(componentId: string): void {
    var toolComponentHistory = _toolComponentHistories[componentId];
    var tool = toolComponentHistory.toolUnDoes.pop();
    toolComponentHistory.toolReDoes.push(tool);
}

function _reDoToolComponentHistory(componentId: string): void {
    var toolComponentHistory = _toolComponentHistories[componentId];
    var tool = toolComponentHistory.toolReDoes.pop();
    toolComponentHistory.toolUnDoes.push(tool);
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
        case ToolActionTypes.TOOL_REDO:
            toolStore.emitChange(payload.componentId);
            break;
        case ToolActionTypes.TOOL_UNDO:
            toolStore.emitChange(payload.componentId);
            break;
        case ToolActionTypes.TOOL_CHANGE:
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
        case ToolActionTypes.TOOL_SAVE_PENDING:
            _updateSavePending(payload.componentId)
            toolStore.emitChange(payload.componentId);
            break;
        case ToolActionTypes.TOOL_SAVE_SUCCEED:
            _updateSavePending(payload.componentId);
            toolStore.emitChange(payload.componentId);
            break;
        case ToolActionTypes.TOOL_SAVE_FAILED:
            _updateSavePending(payload.componentId);
            _addAlert(payload.componentId, payload.errorMessage, "danger");
            toolStore.emitChange(payload.componentId);
            break;
        case ToolActionTypes.TOOL_DELETE_PENDING:
            _updateDeletePending(payload.componentId);
            toolStore.emitChange(payload.componentId);
            break;
        case ToolActionTypes.TOOL_DELETE_SUCCEED:
            _updateDeletePending(payload.componentId);
            toolStore.emitChange(payload.componentId);
            break;
        case ToolActionTypes.TOOL_DELETE_FAILED:
            _updateDeletePending(payload.componentId);
            _addAlert(payload.componentId, payload.errorMessage, "warning");
            toolStore.emitChange(payload.componentId);
            break;
        default:
    }
});

export default toolStore;