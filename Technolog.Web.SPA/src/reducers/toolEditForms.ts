﻿import * as ToolActionType from '../actions/toolActionType';
import * as PanelActionType from '../actions/panelActionType';
import * as PanelType from '../components/panelType';
import * as ValidationMessageType from '../validators/validationMessageType';

const initialState = [];

export default function toolEditForms(state = initialState, action) {
    switch (action.type) {
        case PanelActionType.PANEL_OPEN:
            if (action.panelType !== PanelType.TOOL_EDIT_FORM) {
                return state;
            }
            console.log(action);
            return [
                ...state,
                {
                    id: action.contentId,
                    toolId: action.params.toolId,
                    values: {},
                    validationResults: {
                        name: {
                            isValid: true,
                            errorMessage: "",
                            type: ValidationMessageType.SUCCESS
                        },
                        price: {
                            isValid: true,
                            errorMessage: "",
                            type: ValidationMessageType.SUCCESS
                        }
                    }
                }
            ];
        case ToolActionType.TOOL_NAME_VALIDATION_PENDING:
            return state.map(toolEditForm => {
                if (toolEditForm.id === action.toolEditFormId) {
                    return _.assign(
                        {},
                        toolEditForm,
                        {
                            values: _.assign({}, toolEditForm.values, { name: action.name }),
                            validationResults: _.assign({}, toolEditForm.validationResults, { name: action.nameValidation})
                        }
                    );
                } else {
                    return toolEditForm;
                }
            });
        case ToolActionType.TOOL_NAME_VALIDATION_SUCCEED:
            return state.map(toolEditForm => {
                if (toolEditForm.id === action.toolEditFormId) {
                    return _.assign(
                        {},
                        toolEditForm,
                        {
                            validationResults: _.assign({}, toolEditForm.validationResults, { name: action.nameValidation })
                        }
                    );
                } else {
                    return toolEditForm;
                }
            });
        default:
            return state;
    }
}