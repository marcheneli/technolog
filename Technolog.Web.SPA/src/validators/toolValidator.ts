import * as ValidationMessageType from './validationMessageType';

export function validate(values) {
    const errors = {};

    return errors;
}

export function validateName(value) {
    let isValid = true;
    let errorMessage = '';
    let type = ValidationMessageType.PENDING

    return {
        isValid: true,
        errorMessage: errorMessage,
        type: type
    };
}

export function validatePrice(value) {
    let isValid = true;
    let errorMessage = '';

    return {
        isValid: true,
        errorMessage: errorMessage
    };
}