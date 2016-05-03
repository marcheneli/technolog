import * as ToolActionType from '../actions/toolActionType';
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
            return [
                ...state,
                {
                    id: action.contentId,
                    toolId: action.params.tool.id,
                    values: {
                        name: action.params.tool.name,
                        price: action.params.tool.price
                    },
                    isSaving: false
                }
            ];
        case ToolActionType.TOOL_NAME_CHANGE:
            return state.map(toolEditForm => {
                if (toolEditForm.id === action.toolEditFormId) {
                    return _.assign(
                        {},
                        toolEditForm,
                        {
                            values: _.assign({}, toolEditForm.values, { name: action.name }),
                        }
                    );
                } else {
                    return toolEditForm;
                }
            });
        case ToolActionType.TOOL_PRICE_CHANGE:
            return state.map(toolEditForm => {
                if (toolEditForm.id === action.toolEditFormId) {
                    return _.assign(
                        {},
                        toolEditForm,
                        {
                            values: _.assign({}, toolEditForm.values, { price: action.price }),
                        }
                    );
                } else {
                    return toolEditForm;
                }
            });
        case ToolActionType.TOOL_SAVE_PENDING:
            return state.map(toolEditForm => {
                if (toolEditForm.id === action.toolEditFormId) {
                    return _.assign(
                        {},
                        toolEditForm,
                        {
                            isSaving: true,
                        }
                    );
                } else {
                    return toolEditForm;
                }
            });
        case ToolActionType.TOOL_SAVE_SUCCEED:
            return state.map(toolEditForm => {
                if (toolEditForm.id === action.toolEditFormId) {
                    return _.assign(
                        {},
                        toolEditForm,
                        {
                            isSaving: false,
                        }
                    );
                } else {
                    return toolEditForm;
                }
            });
        case ToolActionType.TOOL_SAVE_FAILED:
            return state.map(toolEditForm => {
                if (toolEditForm.id === action.toolEditFormId) {
                    return _.assign(
                        {},
                        toolEditForm,
                        {
                            isSaving: false,
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