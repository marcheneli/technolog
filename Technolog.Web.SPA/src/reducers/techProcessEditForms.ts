import * as TechProcessActionType from '../actions/techProcessActionType';
import * as PanelActionType from '../actions/panelActionType';
import * as PanelType from '../components/panelType';
import * as ValidationMessageType from '../validators/validationMessageType';

const initialState = [];

export default function techProcessEditForms(state = initialState, action) {
    switch (action.type) {
        case PanelActionType.PANEL_OPEN:
            if (action.panelType !== PanelType.TECHPROCESS_EDIT_FORM) {
                return state;
            }
            return [
                ...state,
                {
                    id: action.contentId,
                    techProcessId: action.params.techProcess.id,
                    values: {
                        name: action.params.techProcess.name
                    },
                    isSaving: false
                }
            ];
        case TechProcessActionType.TECHPROCESS_NAME_CHANGE:
            return state.map(techProcessEditForm => {
                if (techProcessEditForm.id === action.techProcessEditFormId) {
                    return _.assign(
                        {},
                        techProcessEditForm,
                        {
                            values: _.assign({}, techProcessEditForm.values, { name: action.name }),
                        }
                    );
                } else {
                    return techProcessEditForm;
                }
            });
        case TechProcessActionType.TECHPROCESS_SAVE_PENDING:
            return state.map(techProcessEditForm => {
                if (techProcessEditForm.id === action.techProcessEditFormId) {
                    return _.assign(
                        {},
                        techProcessEditForm,
                        {
                            isSaving: true,
                        }
                    );
                } else {
                    return techProcessEditForm;
                }
            });
        case TechProcessActionType.TECHPROCESS_SAVE_SUCCEED:
            return state.map(techProcessEditForm => {
                if (techProcessEditForm.id === action.techProcessEditFormId) {
                    return _.assign(
                        {},
                        techProcessEditForm,
                        {
                            isSaving: false,
                        }
                    );
                } else {
                    return techProcessEditForm;
                }
            });
        case TechProcessActionType.TECHPROCESS_SAVE_FAILED:
            return state.map(techProcessEditForm => {
                if (techProcessEditForm.id === action.techProcessEditFormId) {
                    return _.assign(
                        {},
                        techProcessEditForm,
                        {
                            isSaving: false,
                        }
                    );
                } else {
                    return techProcessEditForm;
                }
            });
        default:
            return state;
    }
}