import * as $ from 'jquery';
import * as ToolActionType from './toolActionType';
import { Schema, arrayOf, normalize } from 'normalizr';
import serviceDomain from '../constants/serviceDomain';
import * as AntiForgeryToken from '../utils/antiForgeryToken';

export function load(toolListId: number, page: number, toolPerPage: number, searchText: string) {
    return dispatch => {
        $.ajax({
            url: (serviceDomain + "/api/"
                + 'tools' + '/'
                + "?search=" + searchText
                + "&page=" + page + "&pageSize="
                + toolPerPage),
            dataType: 'json',
            type: 'GET',
            success: (toolListModel) => {
                dispatch(loadSucceed(toolListId,
                    toolListModel.tools,
                    toolListModel.toolAmount,
                    page,
                    toolPerPage,
                    searchText));
            },
            error: (xhr, status, err) => {
                dispatch(loadFailed(toolListId, err));
            }
        });

        return dispatch(loadPending(toolListId));
    };
}

export function loadPending(toolListId) {
    return {
        type: ToolActionType.TOOL_LOAD_PENDING,
        toolListId: toolListId,
    };
}

export function loadSucceed(toolListId, tools, totalAmount, page, toolsPerPage, searchText) {
    return {
        type: ToolActionType.TOOL_LOAD_SUCCEED,
        toolListId: toolListId,
        tools: tools,
        totalAmount: totalAmount,
        toolPage: page,
        toolsPerPage: toolsPerPage,
        searchText: searchText
    };
}

export function loadFailed(toolListId, errorMessage) {
    return {
        type: ToolActionType.TOOL_LOAD_FAILED,
        toolListId: toolListId,
        errorMessage: errorMessage
    };
}

export function remove(toolListId: number, tools: Array<any>) {
    return dispatch => {
        $.ajax({
            url: serviceDomain + '/api/' + "tools" + "/",
            type: 'DELETE',
            dataType: "json",
            data: {
                tools: tools,
                __RequestVerificationToken: AntiForgeryToken.get()
            },
            success: (response) => {
                dispatch(removeSucceed(toolListId));
            },
            error: (xhr, status, err) => {
                dispatch(removeFailed(toolListId, err));
            }
        });

        return dispatch(removePending(toolListId));
    };
}

export function removePending(toolListId: number) {
    return {
        type: ToolActionType.TOOL_REMOVE_PENDING,
        toolListId: toolListId
    };
}

export function removeSucceed(toolListId) {
    return {
        type: ToolActionType.TOOL_REMOVE_SUCCEED,
        toolListId: toolListId
    };
}

export function removeFailed(toolListId, errorMessage) {
    return {
        type: ToolActionType.TOOL_REMOVE_FAILED,
        toolListId: toolListId,
        errorMessage: errorMessage
    };
}

export function select(toolListId, selectedTools) {
    return {
        type: ToolActionType.TOOL_SELECT,
        toolListId: toolListId,
        selectedTools: selectedTools
    };
}

export function confirmDelete(toolListId) {
    return {
        type: ToolActionType.TOOL_CONFIRM_DELETE,
        toolListId: toolListId
    };
}

export function cancelDelete(toolListId) {
    return {
        type: ToolActionType.TOOL_CANCEL_DELETE,
        toolListId: toolListId
    };
}