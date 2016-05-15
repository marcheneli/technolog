import * as TechOperationActionType from '../actions/techOperationActionType';
import * as TechStepActionType from '../actions/techStepActionType';
import * as PanelActionType from '../actions/panelActionType';
import * as PanelType from '../components/panelType';
import * as ValidationMessageType from '../validators/validationMessageType';

const initialState = [];

export default function techOperationEditForms(state = initialState, action) {
    switch (action.type) {
        case PanelActionType.PANEL_OPEN:
            if (action.panelType !== PanelType.TECHOPERATION_EDIT_FORM) {
                return state;
            }
            return [
                ...state,
                {
                    id: action.contentId,
                    techOperationId: action.params.techOperation.id,
                    values: {
                        name: action.params.techOperation.name
                    },
                    techSteps: action.params.techSteps,
                    techProcessEditFormId: action.params.techProcessEditFormId,
                    selectedTechSteps: [],
                    isSaving: false,
                    isTechStepListOpen: false,
                    techStepListId: null
                }
            ];
        case TechOperationActionType.TECHOPERATION_NAME_CHANGE:
            return state.map(techOperationEditForm => {
                if (techOperationEditForm.id === action.techOperationEditFormId) {
                    return _.assign(
                        {},
                        techOperationEditForm,
                        {
                            values: _.assign({}, techOperationEditForm.values, { name: action.name }),
                        }
                    );
                } else {
                    return techOperationEditForm;
                }
            });
        case TechOperationActionType.TECHOPERATION_SAVE_PENDING:
            return state.map(techOperationEditForm => {
                if (techOperationEditForm.id === action.techOperationEditFormId) {
                    return _.assign(
                        {},
                        techOperationEditForm,
                        {
                            isSaving: true,
                        }
                    );
                } else {
                    return techOperationEditForm;
                }
            });
        case TechOperationActionType.TECHOPERATION_SAVE_SUCCEED:
            return state.map(techOperationEditForm => {
                if (techOperationEditForm.id === action.techOperationEditFormId) {
                    return _.assign(
                        {},
                        techOperationEditForm,
                        {
                            isSaving: false,
                        }
                    );
                } else {
                    return techOperationEditForm;
                }
            });
        case TechOperationActionType.TECHOPERATION_SAVE_FAILED:
            return state.map(techOperationEditForm => {
                if (techOperationEditForm.id === action.techOperationEditFormId) {
                    return _.assign(
                        {},
                        techOperationEditForm,
                        {
                            isSaving: false,
                        }
                    );
                } else {
                    return techOperationEditForm;
                }
            });
        case TechOperationActionType.TECHOPERATION_OPEN_TECHSTEP_LIST:
            return state.map(techOperationEditForm => {
                if (techOperationEditForm.id == action.techOperationEditFormId) {
                    return _.assign(
                        {},
                        techOperationEditForm,
                        {
                            isTechStepListOpen: true,
                            techStepListId: action.techStepListId
                        }
                    );
                } else {
                    return techOperationEditForm;
                }
            });
        case TechOperationActionType.TECHOPERATION_CLOSE_TECHSTEP_LIST:
            return state.map(techOperationEditForm => {
                if (techOperationEditForm.id == action.techOperationEditFormId) {
                    return _.assign(
                        {},
                        techOperationEditForm,
                        {
                            isTechStepListOpen: false,
                            techStepListId: null
                        }
                    );
                } else {
                    return techOperationEditForm;
                }
            });
        case TechOperationActionType.TECHOPERATION_ADD_TECHSTEPS:
            return state.map(techOperationEditForm => {
                if (techOperationEditForm.id == action.techOperationEditFormId) {
                    return _.assign(
                        {},
                        techOperationEditForm,
                        {
                            techSteps: [
                                ...techOperationEditForm.techSteps,
                                ...action.techSteps
                            ]
                        }
                    );
                } else {
                    return techOperationEditForm;
                }
            });
        case TechOperationActionType.TECHOPERATION_SELECT_TECHSTEPS:
            return state.map(techOperationEditForm => {
                if (techOperationEditForm.id == action.techOperationEditFormId) {
                    return _.assign(
                        {},
                        techOperationEditForm,
                        {
                            selectedTechSteps: action.techSteps
                        }
                    );
                } else {
                    return techOperationEditForm;
                }
            });
        case TechStepActionType.TECHSTEP_SAVE_SUCCEED:
            if (!action.techOperationEditFormId && !action.isNewTechStep) {
                return state;
            }
            return state.map(techOperationEditForm => {
                if (techOperationEditForm.id == action.techOperationEditFormId) {
                    return _.assign(
                        {},
                        techOperationEditForm,
                        {
                            techSteps: [
                                ...techOperationEditForm.techSteps,
                                action.techStep
                            ]
                        }
                    );
                } else {
                    return techOperationEditForm;
                }
            });
        case TechOperationActionType.TECHOPERATION_DELETE_TECHSTEPS:
            return state.map(techOperationEditForm => {
                if (techOperationEditForm.id == action.techOperationEditFormId) {
                    return _.assign(
                        {},
                        techOperationEditForm,
                        {
                            techSteps: techOperationEditForm.techSteps.filter(ts => techOperationEditForm.selectedTechSteps.indexOf(ts.id) < 0),
                            selectedTechSteps: []
                        }
                    );
                } else {
                    return techOperationEditForm;
                }
            }); 
        default:
            return state;
    }
}