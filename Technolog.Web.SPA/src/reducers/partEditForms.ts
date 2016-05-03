import * as PartActionType from '../actions/partActionType';
import * as PanelActionType from '../actions/panelActionType';
import * as PanelType from '../components/panelType';
import * as ValidationMessageType from '../validators/validationMessageType';

const initialState = [];

export default function partEditForms(state = initialState, action) {
    switch (action.type) {
        case PanelActionType.PANEL_OPEN:
            if (action.panelType !== PanelType.PART_EDIT_FORM) {
                return state;
            }
            return [
                ...state,
                {
                    id: action.contentId,
                    partId: action.params.part.id,
                    values: {
                        name: action.params.part.name,
                        price: action.params.part.price
                    },
                    isSaving: false
                }
            ];
        case PartActionType.PART_NAME_CHANGE:
            return state.map(partEditForm => {
                if (partEditForm.id === action.partEditFormId) {
                    return _.assign(
                        {},
                        partEditForm,
                        {
                            values: _.assign({}, partEditForm.values, { name: action.name }),
                        }
                    );
                } else {
                    return partEditForm;
                }
            });
        case PartActionType.PART_PRICE_CHANGE:
            return state.map(partEditForm => {
                if (partEditForm.id === action.partEditFormId) {
                    return _.assign(
                        {},
                        partEditForm,
                        {
                            values: _.assign({}, partEditForm.values, { price: action.price }),
                        }
                    );
                } else {
                    return partEditForm;
                }
            });
        case PartActionType.PART_SAVE_PENDING:
            return state.map(partEditForm => {
                if (partEditForm.id === action.partEditFormId) {
                    return _.assign(
                        {},
                        partEditForm,
                        {
                            isSaving: true,
                        }
                    );
                } else {
                    return partEditForm;
                }
            });
        case PartActionType.PART_SAVE_SUCCEED:
            return state.map(partEditForm => {
                if (partEditForm.id === action.partEditFormId) {
                    return _.assign(
                        {},
                        partEditForm,
                        {
                            isSaving: false,
                        }
                    );
                } else {
                    return partEditForm;
                }
            });
        case PartActionType.PART_SAVE_FAILED:
            return state.map(partEditForm => {
                if (partEditForm.id === action.partEditFormId) {
                    return _.assign(
                        {},
                        partEditForm,
                        {
                            isSaving: false,
                        }
                    );
                } else {
                    return partEditForm;
                }
            });
        default:
            return state;
    }
}