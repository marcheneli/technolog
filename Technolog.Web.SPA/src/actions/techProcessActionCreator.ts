import * as $ from 'jquery';
import * as TechProcessActionType from './techProcessActionType';
import { Schema, arrayOf, normalize } from 'normalizr';
import serviceDomain from '../constants/serviceDomain';
import * as AntiForgeryToken from '../utils/antiForgeryToken';
import techProcessSchema from '../schemas/techProcessSchema';

export function load(techProcessListId: number, page: number, techProcessPerPage: number, searchText: string) {
    return dispatch => {
        $.ajax({
            url: (serviceDomain + "/api/"
                + 'techProcesses' + '/'
                + "?search=" + searchText
                + "&page=" + page + "&pageSize="
                + techProcessPerPage),
            dataType: 'json',
            type: 'GET',
            success: (techProcessListModel) => {
                const normalizedResponse = normalize(techProcessListModel.techProcesses, arrayOf(techProcessSchema));

                dispatch(loadSucceed(techProcessListId,
                    normalizedResponse,
                    techProcessListModel.techProcessAmount,
                    page,
                    techProcessPerPage,
                    searchText));
            },
            error: (xhr, status, err) => {
                dispatch(loadFailed(techProcessListId, err));
            }
        });

        return dispatch(loadPending(techProcessListId));
    };
}

export function loadPending(techProcessListId) {
    return {
        type: TechProcessActionType.TECHPROCESS_LOAD_PENDING,
        techProcessListId: techProcessListId,
    };
}

export function loadSucceed(techProcessListId, response, totalAmount, page, techProcessesPerPage, searchText) {
    return {
        type: TechProcessActionType.TECHPROCESS_LOAD_SUCCEED,
        techProcessListId: techProcessListId,
        response: response,
        totalAmount: totalAmount,
        techProcessPage: page,
        techProcessesPerPage: techProcessesPerPage,
        searchText: searchText
    };
}

export function loadFailed(techProcessListId, errorMessage) {
    return {
        type: TechProcessActionType.TECHPROCESS_LOAD_FAILED,
        techProcessListId: techProcessListId,
        errorMessage: errorMessage
    };
}

export function remove(techProcessListId: number, techProcesses: Array<any>) {
    return dispatch => {
        $.ajax({
            url: serviceDomain + '/api/' + "techProcesses" + "/",
            type: 'DELETE',
            dataType: "json",
            data: {
                techProcesses: techProcesses,
                __RequestVerificationToken: AntiForgeryToken.get()
            },
            success: (response) => {
                dispatch(removeSucceed(techProcessListId));
            },
            error: (xhr, status, err) => {
                dispatch(removeFailed(techProcessListId, err));
            }
        });

        return dispatch(removePending(techProcessListId));
    };
}

export function removePending(techProcessListId: number) {
    return {
        type: TechProcessActionType.TECHPROCESS_REMOVE_PENDING,
        techProcessListId: techProcessListId
    };
}

export function removeSucceed(techProcessListId) {
    return {
        type: TechProcessActionType.TECHPROCESS_REMOVE_SUCCEED,
        techProcessListId: techProcessListId
    };
}

export function removeFailed(techProcessListId, errorMessage) {
    return {
        type: TechProcessActionType.TECHPROCESS_REMOVE_FAILED,
        techProcessListId: techProcessListId,
        errorMessage: errorMessage
    };
}

export function select(techProcessListId, selectedTechProcesses) {
    return {
        type: TechProcessActionType.TECHPROCESS_SELECT,
        techProcessListId: techProcessListId,
        selectedTechProcesses: selectedTechProcesses
    };
}

export function confirmDelete(techProcessListId) {
    return {
        type: TechProcessActionType.TECHPROCESS_CONFIRM_DELETE,
        techProcessListId: techProcessListId
    };
}

export function cancelDelete(techProcessListId) {
    return {
        type: TechProcessActionType.TECHPROCESS_CANCEL_DELETE,
        techProcessListId: techProcessListId
    };
}

export function techProcessNameChange(techProcessEditFormId, value): any {
    return {
        type: TechProcessActionType.TECHPROCESS_NAME_CHANGE,
        techProcessEditFormId: techProcessEditFormId,
        name: value
    };
}

export function techProcessNameValidationPending(techProcessEditFormId, value, nameValidation) {
    return {
        type: TechProcessActionType.TECHPROCESS_NAME_VALIDATION_PENDING,
        techProcessEditFormId: techProcessEditFormId,
        name: value,
        nameValidation: nameValidation
    };
}

export function save(techProcessEditFormId: number) {
    return (dispatch, getState) => {
        const techProcessEditForm = getState().techProcessEditForms.filter(tef => tef.id == techProcessEditFormId)[0];

        const type = techProcessEditForm.techProcessId == 0 ? 'PUT' : 'POST';

        const techProcess = {
            id: techProcessEditForm.techProcessId,
            name: techProcessEditForm.values.name
        };

        $.ajax({
            url: serviceDomain + '/api/' + "techProcesses" + "/",
            type: type,
            dataType: "json",
            data: _.assign({}, techProcess, { __RequestVerificationToken: AntiForgeryToken.get() }),
            success: (response) => {
                dispatch(saveSucceed(techProcessEditFormId));
            },
            error: (xhr, status, err) => {
                dispatch(saveFailed(techProcessEditFormId, err));
            }
        });

        return dispatch(savePending(techProcessEditFormId));
    };
}

export function savePending(techProcessEditFormId: number) {
    return {
        type: TechProcessActionType.TECHPROCESS_SAVE_PENDING,
        techProcessEditFormId: techProcessEditFormId
    };
}

export function saveSucceed(techProcessEditFormId) {
    return {
        type: TechProcessActionType.TECHPROCESS_SAVE_SUCCEED,
        techProcessEditFormId: techProcessEditFormId
    };
}

export function saveFailed(techProcessEditFormId, errorMessage) {
    return {
        type: TechProcessActionType.TECHPROCESS_SAVE_FAILED,
        techProcessEditFormId: techProcessEditFormId,
        errorMessage: errorMessage
    };
}