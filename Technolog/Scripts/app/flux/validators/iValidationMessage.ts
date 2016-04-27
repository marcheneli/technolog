import ValidationMessageType from "./validationMessageType";

interface IValidationMessage {
    message: string;
    type: ValidationMessageType;
    isVisible: boolean;
}

export default IValidationMessage;