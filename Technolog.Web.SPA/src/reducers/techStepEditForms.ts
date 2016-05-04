import * as TechStepActionType from '../actions/techStepActionType';
import * as PanelActionType from '../actions/panelActionType';
import * as PanelType from '../components/panelType';
import * as ValidationMessageType from '../validators/validationMessageType';

const initialState = [];

export default function techStepEditForms(state = initialState, action) {
    switch (action.type) {
        case PanelActionType.PANEL_OPEN:
            if (action.panelType !== PanelType.TECHSTEP_EDIT_FORM) {
                return state;
            }
            return [
                ...state,
                {
                    id: action.contentId,
                    techStepId: action.params.techStep.id,
                    values: {
                        description: action.params.techStep.description
                    },
                    toolUsages: action.params.toolUsages,
                    partUsages: action.params.partUsages,
                    isSaving: false,
                    toolListId: null,
                    isToolListOpen: false,
                    partListId: null,
                    isPartListOpen: false
                }
            ];
        case TechStepActionType.TECHSTEP_NAME_CHANGE:
            return state.map(techStepEditForm => {
                if (techStepEditForm.id === action.techStepEditFormId) {
                    return _.assign(
                        {},
                        techStepEditForm,
                        {
                            values: _.assign({}, techStepEditForm.values, { name: action.name }),
                        }
                    );
                } else {
                    return techStepEditForm;
                }
            });
        case TechStepActionType.TECHSTEP_TOOLUSAGE_CHANGE:
            return state.map(techStepEditForm => {
                if (techStepEditForm.id === action.techStepEditFormId) {
                    return _.assign(
                        {},
                        techStepEditForm,
                        {
                            toolUsages: techStepEditForm.toolUsages.map(toolUsage => {
                                if (toolUsage.toolId == action.toolId)
                                    return _.assign({}, toolUsage, { quantity: action.quantityValue });
                                else
                                    return toolUsage;
                            }),
                        }
                    );
                } else {
                    return techStepEditForm;
                }
            });
        case TechStepActionType.TECHSTEP_PARTUSAGE_CHANGE:
            return state.map(techStepEditForm => {
                if (techStepEditForm.id === action.techStepEditFormId) {
                    return _.assign(
                        {},
                        techStepEditForm,
                        {
                            partUsages: techStepEditForm.partUsages.map(partUsage => {
                                if (partUsage.partId == action.partId)
                                    return _.assign({}, partUsage, { quantity: action.quantityValue });
                                else
                                    return partUsage;
                            }),
                        }
                    );
                } else {
                    return techStepEditForm;
                }
            });
        case TechStepActionType.TECHSTEP_SAVE_PENDING:
            return state.map(techStepEditForm => {
                if (techStepEditForm.id === action.techStepEditFormId) {
                    return _.assign(
                        {},
                        techStepEditForm,
                        {
                            isSaving: true,
                        }
                    );
                } else {
                    return techStepEditForm;
                }
            });
        case TechStepActionType.TECHSTEP_SAVE_SUCCEED:
            return state.map(techStepEditForm => {
                if (techStepEditForm.id === action.techStepEditFormId) {
                    return _.assign(
                        {},
                        techStepEditForm,
                        {
                            isSaving: false,
                        }
                    );
                } else {
                    return techStepEditForm;
                }
            });
        case TechStepActionType.TECHSTEP_SAVE_FAILED:
            return state.map(techStepEditForm => {
                if (techStepEditForm.id === action.techStepEditFormId) {
                    return _.assign(
                        {},
                        techStepEditForm,
                        {
                            isSaving: false,
                        }
                    );
                } else {
                    return techStepEditForm;
                }
            });
        case TechStepActionType.TECHSTEP_OPEN_TOOL_LIST:
            return state.map(techStepEditForm => {
                if (techStepEditForm.id === action.techStepEditFormId) {
                    return _.assign(
                        {},
                        techStepEditForm,
                        {
                            isToolListOpen: true,
                            toolListId: action.toolListId
                        }
                    );
                } else {
                    return techStepEditForm;
                }
            });
        case TechStepActionType.TECHSTEP_CLOSE_TOOL_LIST:
            return state.map(techStepEditForm => {
                if (techStepEditForm.id === action.techStepEditFormId) {
                    return _.assign(
                        {},
                        techStepEditForm,
                        {
                            isToolListOpen: false
                        }
                    );
                } else {
                    return techStepEditForm;
                }
            });
        case TechStepActionType.TECHSTEP_OPEN_PART_LIST:
            return state.map(techStepEditForm => {
                if (techStepEditForm.id === action.techStepEditFormId) {
                    return _.assign(
                        {},
                        techStepEditForm,
                        {
                            isPartListOpen: true,
                            partListId: action.partListId
                        }
                    );
                } else {
                    return techStepEditForm;
                }
            });
        case TechStepActionType.TECHSTEP_CLOSE_PART_LIST:
            return state.map(techStepEditForm => {
                if (techStepEditForm.id === action.techStepEditFormId) {
                    return _.assign(
                        {},
                        techStepEditForm,
                        {
                            isPartListOpen: false
                        }
                    );
                } else {
                    return techStepEditForm;
                }
            });
        default:
            return state;
    }
}