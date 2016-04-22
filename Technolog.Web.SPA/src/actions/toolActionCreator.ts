import * as ToolActionType from './toolActionType';

export function load(toolListId: number, page: number, toolPerPage: number, searchText: string) {
    return dispatch => {
        dispatch(loadPending(toolListId));

        $.ajax({
            url: (location.origin + "/api/"
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