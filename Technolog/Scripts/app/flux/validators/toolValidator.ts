/// <reference path="../../../typings/tsd.d.ts" />
import EntityValidator from "./entityValidator";
import ToolActionCreator from "../actions/toolActionCreator";
import ValidationMessageType from "./validationMessageType";
import IValidationMessage from "./iValidationMessage";

class ToolValidator extends EntityValidator {
    public validate(componentId: string, currentState: any, newTool: any) {

        ToolActionCreator.change(componentId, currentState);

        if (currentState.tool.name != newTool.name) {
            var nameValidationMessage = this.validateName(newTool.name)

            currentState.nameValidationMessage = nameValidationMessage;

            if (nameValidationMessage.type == ValidationMessageType.Pending) {
                $.ajax({
                    url: location.origin + "/api/tools?name=" + newTool.name,
                    type: "GET",
                    success: (response) => {
                        currentState.nameValidationMessage = {
                            message: "Инструмент с данным названием уже существует. Рекомендуется ввести другое название",
                            type: ValidationMessageType.Warning,
                            isVisible: true
                        }
                    },
                    error: (xhr, status, err) => {
                        console.log(status);
                        currentState.nameValidationMessage = {
                            message: "",
                            type: ValidationMessageType.None,
                            isVisible: true
                        }
                    }
                });
            }
        }

        if (currentState.tool.price != newTool.price) {
            currentState.priceValidationMessage = this.validatePrice(newTool.price);
        }
    }

    protected validateName(value: string): IValidationMessage {
        

        return {
            message: "",
            type: ValidationMessageType.Pending,
            isVisible: true,
        }
    }

    protected validatePrice(value: string): IValidationMessage {
        if (isNaN(parseFloat(value))) return {
            message: "Введеное значение не является числом.",
            type: ValidationMessageType.Danger,
            isVisible: true
        }

        return {
            message: "",
            type: ValidationMessageType.None,
            isVisible: false
        }
    }
}

var toolValidator = new ToolValidator();

export default toolValidator;