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
            console.log(action);
            return [
                ...state,
                {
                    id: action.contentId,
                    techStepId: action.params.techStep.id,
                    values: {
                        name: action.params.techStep.name
                    },
                    isSaving: false
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
        default:
            return state;
    }
}