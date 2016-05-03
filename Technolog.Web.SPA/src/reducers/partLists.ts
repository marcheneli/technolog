import * as PartActionType from '../actions/partActionType';
import * as PanelActionType from '../actions/panelActionType';
import * as PanelType from '../components/panelType';
import * as _ from 'lodash';

const initialState = [];

export default function partLists(state = initialState, action) {
    switch (action.type) {
        case PartActionType.PART_LOAD_PENDING:
            return state.map(partList => {
                if (partList.id === action.partListId) {
                    return _.assign(
                        {},
                        partList,
                        {
                            params: _.assign({}, partList.params, {
                                isPending: true
                            })
                        }
                    );
                } else {
                    return partList
                }
            });
        case PartActionType.PART_SELECT:
            return state.map(partList => {
                if (partList.id === action.partListId) {
                    return _.assign(
                        {},
                        partList,
                        { selectedParts: action.selectedParts }
                    );
                } else {
                    return partList
                }
            });
        case PartActionType.PART_CONFIRM_DELETE:
            return state.map(partList => {
                if (partList.id === action.partListId) {
                    return _.assign(
                        {},
                        partList,
                        {
                            params: _.assign({}, partList.params, {
                                isConfirmDeleting: true
                            })
                        }
                    );
                } else {
                    return partList
                }
            });
        case PartActionType.PART_CANCEL_DELETE:
            return state.map(partList => {
                if (partList.id === action.partListId) {
                    return _.assign(
                        {},
                        partList,
                        {
                            params: _.assign({}, partList.params, {
                                isConfirmDeleting: false
                            })
                        }
                    );
                } else {
                    return partList
                }
            });
        case PartActionType.PART_REMOVE_PENDING:
            return state.map(partList => {
                if (partList.id === action.partListId) {
                    return _.assign(
                        {},
                        partList,
                        {
                            params: _.assign({}, partList.params, {
                                isConfirmDeleting: false,
                                isDeleting: true
                            })
                        }
                    );
                } else {
                    return partList
                }
            });
        case PartActionType.PART_REMOVE_SUCCEED:
            return state.map(partList => {
                if (partList.id === action.partListId) {
                    return _.assign(
                        {},
                        partList,
                        {
                            parts: partList.parts.filter(partId => partList.selectedParts.indexOf(partId) < 0),
                            selectedParts: [],
                        },
                        {
                            params: _.assign({}, partList.params, {
                                isDeleting: false
                            })
                        }
                    );
                } else {
                    return partList
                }
            });
        case PartActionType.PART_REMOVE_FAILED:
            return state.map(partList => {
                if (partList.id === action.partListId) {
                    return _.assign(
                        {},
                        partList,
                        {
                            params: _.assign({}, partList.params, {
                                isDeleting: false
                            })
                        }
                    );
                } else {
                    return partList
                }
            });
        case PartActionType.PART_LOAD_SUCCEED:
            return state.map(partList => {
                if (partList.id === action.partListId) {
                    return _.assign(
                        {},
                        partList,
                        {
                            params: _.assign({}, partList.params, {
                                isPending: false,
                                totalAmount: action.totalAmount,
                                partPage: action.partPage,
                                partsPerPage: action.partsPerPage,
                                searchText: action.searchText
                            })
                        },
                        {
                            parts: action.response.result,
                            selectedParts: []
                        }
                    );
                } else {
                    return partList
                }
            });
        case PanelActionType.PANEL_OPEN:
            if (action.panelType !== PanelType.PART_LIST) {
                return state;
            }

            return [
                ...state,
                {
                    id: action.contentId,
                    parts: [],
                    selectedParts: [],
                    params: {
                        isPending: true,
                        isDeleting: false,
                        isConfirmDeleting: false
                    }
                }
            ];
        default:
            return state;
    }
}