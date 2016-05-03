import * as $ from 'jquery';
import * as TechOperationActionType from './techOperationActionType';
import { Schema, arrayOf, normalize } from 'normalizr';
import serviceDomain from '../constants/serviceDomain';
import * as AntiForgeryToken from '../utils/antiForgeryToken';
import techOperationSchema from '../schemas/techOperationSchema'

export function load(techOperationListId: number, page: number, techOperationPerPage: number, searchText: string) {
    return dispatch => {
        $.ajax({
            url: (serviceDomain + "/api/"
                + 'techOperations' + '/'
                + "?search=" + searchText
                + "&page=" + page + "&pageSize="
                + techOperationPerPage),
            dataType: 'json',
            type: 'GET',
            success: (techOperationListModel) => {
                const normalizedResponse = normalize(techOperationListModel.techOperations, arrayOf(techOperationSchema));

                dispatch(loadSucceed(techOperationListId,
                    normalizedResponse,
                    techOperationListModel.techOperationAmount,
                    page,
                    techOperationPerPage,
                    searchText));
            },
            error: (xhr, status, err) => {
                dispatch(loadFailed(techOperationListId, err));
            }
        });

        return dispatch(loadPending(techOperationListId));
    };
}

export function loadPending(techOperationListId) {
    return {
        type: TechOperationActionType.TECHOPERATION_LOAD_PENDING,
        techOperationListId: techOperationListId,
    };
}

export function loadSucceed(techOperationListId, response, totalAmount, page, techOperationsPerPage, searchText) {
    return {
        type: TechOperationActionType.TECHOPERATION_LOAD_SUCCEED,
        techOperationListId: techOperationListId,
        response: response,
        totalAmount: totalAmount,
        techOperationPage: page,
        techOperationsPerPage: techOperationsPerPage,
        searchText: searchText
    };
}

export function loadFailed(techOperationListId, errorMessage) {
    return {
        type: TechOperationActionType.TECHOPERATION_LOAD_FAILED,
        techOperationListId: techOperationListId,
        errorMessage: errorMessage
    };
}

export function remove(techOperationListId: number, techOperations: Array<any>) {
    return dispatch => {
        $.ajax({
            url: serviceDomain + '/api/' + "techOperations" + "/",
            type: 'DELETE',
            dataType: "json",
            data: {
                techOperations: techOperations,
                __RequestVerificationToken: AntiForgeryToken.get()
            },
            success: (response) => {
                dispatch(removeSucceed(techOperationListId));
            },
            error: (xhr, status, err) => {
                dispatch(removeFailed(techOperationListId, err));
            }
        });

        return dispatch(removePending(techOperationListId));
    };
}

export function removePending(techOperationListId: number) {
    return {
        type: TechOperationActionType.TECHOPERATION_REMOVE_PENDING,
        techOperationListId: techOperationListId
    };
}

export function removeSucceed(techOperationListId) {
    return {
        type: TechOperationActionType.TECHOPERATION_REMOVE_SUCCEED,
        techOperationListId: techOperationListId
    };
}

export function removeFailed(techOperationListId, errorMessage) {
    return {
        type: TechOperationActionType.TECHOPERATION_REMOVE_FAILED,
        techOperationListId: techOperationListId,
        errorMessage: errorMessage
    };
}

export function select(techOperationListId, selectedTechOperations) {
    return {
        type: TechOperationActionType.TECHOPERATION_SELECT,
        techOperationListId: techOperationListId,
        selectedTechOperations: selectedTechOperations
    };
}

export function confirmDelete(techOperationListId) {
    return {
        type: TechOperationActionType.TECHOPERATION_CONFIRM_DELETE,
        techOperationListId: techOperationListId
    };
}

export function cancelDelete(techOperationListId) {
    return {
        type: TechOperationActionType.TECHOPERATION_CANCEL_DELETE,
        techOperationListId: techOperationListId
    };
}

export function techOperationNameChange(techOperationEditFormId, value): any {
    return {
        type: TechOperationActionType.TECHOPERATION_NAME_CHANGE,
        techOperationEditFormId: techOperationEditFormId,
        name: value
    };
}

export function techOperationNameValidationPending(techOperationEditFormId, value, nameValidation) {
    return {
        type: TechOperationActionType.TECHOPERATION_NAME_VALIDATION_PENDING,
        techOperationEditFormId: techOperationEditFormId,
        name: value,
        nameValidation: nameValidation
    };
}

export function save(techOperationEditFormId: number) {
    return (dispatch, getState) => {
        const techOperationEditForm = getState().techOperationEditForms.filter(tef => tef.id == techOperationEditFormId)[0];

        const type = techOperationEditForm.techOperationId == 0 ? 'PUT' : 'POST';

        const techOperation = {
            id: techOperationEditForm.techOperationId,
            name: techOperationEditForm.values.name
        };

        $.ajax({
            url: serviceDomain + '/api/' + "techOperations" + "/",
            type: type,
            dataType: "json",
            data: _.assign({}, techOperation, { __RequestVerificationToken: AntiForgeryToken.get() }),
            success: (response) => {
                dispatch(saveSucceed(techOperationEditFormId));
            },
            error: (xhr, status, err) => {
                dispatch(saveFailed(techOperationEditFormId, err));
            }
        });

        return dispatch(savePending(techOperationEditFormId));
    };
}

export function savePending(techOperationEditFormId: number) {
    return {
        type: TechOperationActionType.TECHOPERATION_SAVE_PENDING,
        techOperationEditFormId: techOperationEditFormId
    };
}

export function saveSucceed(techOperationEditFormId) {
    return {
        type: TechOperationActionType.TECHOPERATION_SAVE_SUCCEED,
        techOperationEditFormId: techOperationEditFormId
    };
}

export function saveFailed(techOperationEditFormId, errorMessage) {
    return {
        type: TechOperationActionType.TECHOPERATION_SAVE_FAILED,
        techOperationEditFormId: techOperationEditFormId,
        errorMessage: errorMessage
    };
}