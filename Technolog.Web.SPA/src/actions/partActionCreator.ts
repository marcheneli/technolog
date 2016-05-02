import * as $ from 'jquery';
import * as PartActionType from './partActionType';
import { Schema, arrayOf, normalize } from 'normalizr';
import serviceDomain from '../constants/serviceDomain';
import * as AntiForgeryToken from '../utils/antiForgeryToken';

export function load(partListId: number, page: number, partPerPage: number, searchText: string) {
    return dispatch => {
        $.ajax({
            url: (serviceDomain + "/api/"
                + 'parts' + '/'
                + "?search=" + searchText
                + "&page=" + page + "&pageSize="
                + partPerPage),
            dataType: 'json',
            type: 'GET',
            success: (partListModel) => {
                dispatch(loadSucceed(partListId,
                    partListModel.parts,
                    partListModel.partAmount,
                    page,
                    partPerPage,
                    searchText));
            },
            error: (xhr, status, err) => {
                dispatch(loadFailed(partListId, err));
            }
        });

        return dispatch(loadPending(partListId));
    };
}

export function loadPending(partListId) {
    return {
        type: PartActionType.PART_LOAD_PENDING,
        partListId: partListId,
    };
}

export function loadSucceed(partListId, parts, totalAmount, page, partsPerPage, searchText) {
    return {
        type: PartActionType.PART_LOAD_SUCCEED,
        partListId: partListId,
        parts: parts,
        totalAmount: totalAmount,
        partPage: page,
        partsPerPage: partsPerPage,
        searchText: searchText
    };
}

export function loadFailed(partListId, errorMessage) {
    return {
        type: PartActionType.PART_LOAD_FAILED,
        partListId: partListId,
        errorMessage: errorMessage
    };
}

export function remove(partListId: number, parts: Array<any>) {
    return dispatch => {
        $.ajax({
            url: serviceDomain + '/api/' + "parts" + "/",
            type: 'DELETE',
            dataType: "json",
            data: {
                parts: parts,
                __RequestVerificationToken: AntiForgeryToken.get()
            },
            success: (response) => {
                dispatch(removeSucceed(partListId));
            },
            error: (xhr, status, err) => {
                dispatch(removeFailed(partListId, err));
            }
        });

        return dispatch(removePending(partListId));
    };
}

export function removePending(partListId: number) {
    return {
        type: PartActionType.PART_REMOVE_PENDING,
        partListId: partListId
    };
}

export function removeSucceed(partListId) {
    return {
        type: PartActionType.PART_REMOVE_SUCCEED,
        partListId: partListId
    };
}

export function removeFailed(partListId, errorMessage) {
    return {
        type: PartActionType.PART_REMOVE_FAILED,
        partListId: partListId,
        errorMessage: errorMessage
    };
}

export function select(partListId, selectedParts) {
    return {
        type: PartActionType.PART_SELECT,
        partListId: partListId,
        selectedParts: selectedParts
    };
}

export function confirmDelete(partListId) {
    return {
        type: PartActionType.PART_CONFIRM_DELETE,
        partListId: partListId
    };
}

export function cancelDelete(partListId) {
    return {
        type: PartActionType.PART_CANCEL_DELETE,
        partListId: partListId
    };
}

export function partNameChange(partEditFormId, value): any {
    return {
        type: PartActionType.PART_NAME_CHANGE,
        partEditFormId: partEditFormId,
        name: value
    };
}

export function partNameValidationPending(partEditFormId, value, nameValidation) {
    return {
        type: PartActionType.PART_NAME_VALIDATION_PENDING,
        partEditFormId: partEditFormId,
        name: value,
        nameValidation: nameValidation
    };
}

export function partPriceChange(partEditFormId, value) {
    return {
        type: PartActionType.PART_PRICE_CHANGE,
        partEditFormId: partEditFormId,
        price: value
    };
}


export function save(partEditFormId: number) {
    return (dispatch, getState) => {
        const partEditForm = getState().partEditForms.filter(tef => tef.id == partEditFormId)[0];

        const type = partEditForm.partId == 0 ? 'PUT' : 'POST';

        const part = {
            id: partEditForm.partId,
            name: partEditForm.values.name,
            price: parseFloat(partEditForm.values.price)
        };

        $.ajax({
            url: serviceDomain + '/api/' + "parts" + "/",
            type: type,
            dataType: "json",
            data: _.assign({}, part, { __RequestVerificationToken: AntiForgeryToken.get() }),
            success: (response) => {
                dispatch(saveSucceed(partEditFormId));
            },
            error: (xhr, status, err) => {
                dispatch(saveFailed(partEditFormId, err));
            }
        });

        return dispatch(savePending(partEditFormId));
    };
}

export function savePending(partEditFormId: number) {
    return {
        type: PartActionType.PART_SAVE_PENDING,
        partEditFormId: partEditFormId
    };
}

export function saveSucceed(partEditFormId) {
    return {
        type: PartActionType.PART_SAVE_SUCCEED,
        partEditFormId: partEditFormId
    };
}

export function saveFailed(partEditFormId, errorMessage) {
    return {
        type: PartActionType.PART_SAVE_FAILED,
        partEditFormId: partEditFormId,
        errorMessage: errorMessage
    };
}