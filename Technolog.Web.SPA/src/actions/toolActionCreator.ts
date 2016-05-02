import * as $ from 'jquery';
import * as ToolActionType from './toolActionType';
import { Schema, arrayOf, normalize } from 'normalizr';
import serviceDomain from '../constants/serviceDomain';
import * as AntiForgeryToken from '../utils/antiForgeryToken';
import * as ToolValidator from '../validators/toolValidator';
import * as ValidationMessageType from '../validators/validationMessageType';

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

export function toolNameChange(toolEditFormId, value): any {
    return {
        type: ToolActionType.TOOL_NAME_CHANGE,
        toolEditFormId: toolEditFormId,
        name: value
    };   
}

export function toolNameValidationPending(toolEditFormId, value, nameValidation) {
    return {
        type: ToolActionType.TOOL_NAME_VALIDATION_PENDING,
        toolEditFormId: toolEditFormId,
        name: value,
        nameValidation: nameValidation
    };
}

export function toolNameNotUnique(toolEditFormId, value) {
    return {
        type: ToolActionType.TOOL_NAME_VALIDATION_SUCCEED,
        toolEditFormId: toolEditFormId,
        name: value,
        nameValidation: {
            isValid: false,
            errorMessage: "Инструмент с данным названием уже существует. Рекомендуется ввести другое название",
            type: ValidationMessageType.WARNING
        }
    };
}

export function toolNameUnique(toolEditFormId, value) {
    return {
        type: ToolActionType.TOOL_NAME_VALIDATION_SUCCEED,
        toolEditFormId: toolEditFormId,
        name: value,
        nameValidation: {
            isValid: true,
            errorMessage: "",
            type: ValidationMessageType.SUCCESS
        }
    };
}

export function toolNameValidationFailed(toolEditFormId, value, errorMessage) {
    return {
        type: ToolActionType.TOOL_NAME_VALIDATION_FAILED,
        toolEditFormId: toolEditFormId,
        name: value,
        nameValidation: {
            isValid: false,
            errorMessage: errorMessage,
            type: ValidationMessageType.DANGER
        }
    };
}

export function toolUndo(toolEditFormId) {
    return (dispatch, getState) => {
        const state = getState();

        const toolEditForm = state.toolEditForms.filter(tef => tef.id == toolEditFormId)[0];

        const undoAction = toolEditForm.undoes[toolEditForm.undoes.length - 1];

        switch (undoAction.type) {
            case ToolActionType.TOOL_NAME_CHANGE:
                $.ajax({
                    url: serviceDomain + "/api/tools?name=" + undoAction.value,
                    type: "GET",
                    success: (tool) => {
                        if (tool == null || tool.id == toolEditForm.toolId) {
                            dispatch(toolNameUnique(toolEditFormId, undoAction.value));
                        } else {
                            dispatch(toolNameNotUnique(toolEditFormId, undoAction.value));
                        }
                    },
                    error: (xhr, status, err) => {
                        dispatch(toolNameValidationFailed(toolEditFormId, undoAction.value, err));
                    }
                });

                dispatch({
                    type: ToolActionType.TOOL_NAME_UNDO,
                    value: undoAction.value
                });
                break;
            case ToolActionType.TOOL_PRICE_CHANGE:
                dispatch({
                    type: ToolActionType.TOOL_PRICE_UNDO,
                    value: undoAction.value
                });
                break;
        }
    }
}

export function toolPriceChange(toolEditFormId, value) {
    return {
        type: ToolActionType.TOOL_PRICE_CHANGE,
        toolEditFormId: toolEditFormId,
        price: value
    };
}


export function save(toolEditFormId: number) {
    return (dispatch, getState) => {
        const toolEditForm = getState().toolEditForms.filter(tef => tef.id == toolEditFormId)[0];
        
        const type = toolEditForm.toolId == 0 ? 'PUT' : 'POST';

        const tool = {
            id: toolEditForm.toolId,
            name: toolEditForm.values.name,
            price: parseFloat(toolEditForm.values.price)
        };

        $.ajax({
            url: serviceDomain + '/api/' + "tools" + "/",
            type: type,
            dataType: "json",
            data: _.assign({}, tool, { __RequestVerificationToken: AntiForgeryToken.get() }),
            success: (response) => {
                dispatch(saveSucceed(toolEditFormId));
            },
            error: (xhr, status, err) => {
                dispatch(saveFailed(toolEditFormId, err));
            }
        });

        return dispatch(savePending(toolEditFormId));
    };
}

export function savePending(toolEditFormId: number) {
    return {
        type: ToolActionType.TOOL_SAVE_PENDING,
        toolEditFormId: toolEditFormId
    };
}

export function saveSucceed(toolEditFormId) {
    return {
        type: ToolActionType.TOOL_SAVE_SUCCEED,
        toolEditFormId: toolEditFormId
    };
}

export function saveFailed(toolEditFormId, errorMessage) {
    return {
        type: ToolActionType.TOOL_SAVE_FAILED,
        toolEditFormId: toolEditFormId,
        errorMessage: errorMessage
    };
}