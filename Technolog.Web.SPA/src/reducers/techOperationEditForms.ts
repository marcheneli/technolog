import * as TechOperationActionType from '../actions/techOperationActionType';
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
            console.log(action);
            return [
                ...state,
                {
                    id: action.contentId,
                    techOperationId: action.params.techOperation.id,
                    values: {
                        name: action.params.techOperation.name
                    },
                    isSaving: false
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
        default:
            return state;
    }
}