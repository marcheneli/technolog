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
                dispatch(loadSucceed(toolListId, toolListModel.tools, toolListModel.totalAmount));
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

export function loadSucceed(toolListId, tools, totalAmount) {
    return {
        type: ToolActionType.TOOL_LOAD_SUCCEED,
        toolListId: toolListId,
        tools: tools,
        totalAmount: totalAmount
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
            },
            error: (xhr, status, err) => {
            }
        });

        return dispatch(loadPending(toolListId));
    };
}

export function removePending() {
    return {
        type: ToolActionType.TOOL_REMOVE_PENDING
    };
}

export function removeSucceed() {
    return {
        type: ToolActionType.TOOL_REMOVE_SUCCEED
    };
}

export function removeFailed() {
    return {
        type: ToolActionType.TOOL_REMOVE_FAILED
    };
}