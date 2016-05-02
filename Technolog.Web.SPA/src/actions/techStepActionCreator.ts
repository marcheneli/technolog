import * as $ from 'jquery';
import * as TechStepActionType from './techStepActionType';
import { Schema, arrayOf, normalize } from 'normalizr';
import serviceDomain from '../constants/serviceDomain';
import * as AntiForgeryToken from '../utils/antiForgeryToken';

const techStepSchema = new Schema("techStep", null);
techStepSchema.define({
    
});

export function load(techStepListId: number, page: number, techStepPerPage: number, searchText: string) {
    return dispatch => {
        $.ajax({
            url: (serviceDomain + "/api/"
                + 'techSteps' + '/'
                + "?search=" + searchText
                + "&page=" + page + "&pageSize="
                + techStepPerPage),
            dataType: 'json',
            type: 'GET',
            success: (techStepListModel) => {
                dispatch(loadSucceed(techStepListId,
                    techStepListModel.techSteps,
                    techStepListModel.techStepAmount,
                    page,
                    techStepPerPage,
                    searchText));
            },
            error: (xhr, status, err) => {
                dispatch(loadFailed(techStepListId, err));
            }
        });

        return dispatch(loadPending(techStepListId));
    };
}

export function loadPending(techStepListId) {
    return {
        type: TechStepActionType.TECHSTEP_LOAD_PENDING,
        techStepListId: techStepListId,
    };
}

export function loadSucceed(techStepListId, techSteps, totalAmount, page, techStepsPerPage, searchText) {
    return {
        type: TechStepActionType.TECHSTEP_LOAD_SUCCEED,
        techStepListId: techStepListId,
        techSteps: techSteps,
        totalAmount: totalAmount,
        techStepPage: page,
        techStepsPerPage: techStepsPerPage,
        searchText: searchText
    };
}

export function loadFailed(techStepListId, errorMessage) {
    return {
        type: TechStepActionType.TECHSTEP_LOAD_FAILED,
        techStepListId: techStepListId,
        errorMessage: errorMessage
    };
}

export function remove(techStepListId: number, techSteps: Array<any>) {
    return dispatch => {
        $.ajax({
            url: serviceDomain + '/api/' + "techSteps" + "/",
            type: 'DELETE',
            dataType: "json",
            data: {
                techSteps: techSteps,
                __RequestVerificationToken: AntiForgeryToken.get()
            },
            success: (response) => {
                dispatch(removeSucceed(techStepListId));
            },
            error: (xhr, status, err) => {
                dispatch(removeFailed(techStepListId, err));
            }
        });

        return dispatch(removePending(techStepListId));
    };
}

export function removePending(techStepListId: number) {
    return {
        type: TechStepActionType.TECHSTEP_REMOVE_PENDING,
        techStepListId: techStepListId
    };
}

export function removeSucceed(techStepListId) {
    return {
        type: TechStepActionType.TECHSTEP_REMOVE_SUCCEED,
        techStepListId: techStepListId
    };
}

export function removeFailed(techStepListId, errorMessage) {
    return {
        type: TechStepActionType.TECHSTEP_REMOVE_FAILED,
        techStepListId: techStepListId,
        errorMessage: errorMessage
    };
}

export function select(techStepListId, selectedTechSteps) {
    return {
        type: TechStepActionType.TECHSTEP_SELECT,
        techStepListId: techStepListId,
        selectedTechSteps: selectedTechSteps
    };
}

export function confirmDelete(techStepListId) {
    return {
        type: TechStepActionType.TECHSTEP_CONFIRM_DELETE,
        techStepListId: techStepListId
    };
}

export function cancelDelete(techStepListId) {
    return {
        type: TechStepActionType.TECHSTEP_CANCEL_DELETE,
        techStepListId: techStepListId
    };
}

export function techStepNameChange(techStepEditFormId, value): any {
    return {
        type: TechStepActionType.TECHSTEP_NAME_CHANGE,
        techStepEditFormId: techStepEditFormId,
        name: value
    };
}

export function techStepNameValidationPending(techStepEditFormId, value, nameValidation) {
    return {
        type: TechStepActionType.TECHSTEP_NAME_VALIDATION_PENDING,
        techStepEditFormId: techStepEditFormId,
        name: value,
        nameValidation: nameValidation
    };
}

export function save(techStepEditFormId: number) {
    return (dispatch, getState) => {
        const techStepEditForm = getState().techStepEditForms.filter(tef => tef.id == techStepEditFormId)[0];

        const type = techStepEditForm.techStepId == 0 ? 'PUT' : 'POST';

        const techStep = {
            id: techStepEditForm.techStepId,
            name: techStepEditForm.values.name
        };

        $.ajax({
            url: serviceDomain + '/api/' + "techSteps" + "/",
            type: type,
            dataType: "json",
            data: _.assign({}, techStep, { __RequestVerificationToken: AntiForgeryToken.get() }),
            success: (response) => {
                dispatch(saveSucceed(techStepEditFormId));
            },
            error: (xhr, status, err) => {
                dispatch(saveFailed(techStepEditFormId, err));
            }
        });

        return dispatch(savePending(techStepEditFormId));
    };
}

export function savePending(techStepEditFormId: number) {
    return {
        type: TechStepActionType.TECHSTEP_SAVE_PENDING,
        techStepEditFormId: techStepEditFormId
    };
}

export function saveSucceed(techStepEditFormId) {
    return {
        type: TechStepActionType.TECHSTEP_SAVE_SUCCEED,
        techStepEditFormId: techStepEditFormId
    };
}

export function saveFailed(techStepEditFormId, errorMessage) {
    return {
        type: TechStepActionType.TECHSTEP_SAVE_FAILED,
        techStepEditFormId: techStepEditFormId,
        errorMessage: errorMessage
    };
}