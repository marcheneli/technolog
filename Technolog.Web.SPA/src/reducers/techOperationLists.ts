import * as TechOperationActionType from '../actions/techOperationActionType';
import * as PanelActionType from '../actions/panelActionType';
import * as PanelType from '../components/panelType';
import * as _ from 'lodash';

const initialState = [];

export default function techOperationLists(state = initialState, action) {
    switch (action.type) {
        case TechOperationActionType.TECHOPERATION_LOAD_PENDING:
            return state.map(techOperationList => {
                if (techOperationList.id === action.techOperationListId) {
                    return _.assign(
                        {},
                        techOperationList,
                        {
                            params: _.assign({}, techOperationList.params, {
                                isPending: true
                            })
                        }
                    );
                } else {
                    return techOperationList
                }
            });
        case TechOperationActionType.TECHOPERATION_SELECT:
            return state.map(techOperationList => {
                if (techOperationList.id === action.techOperationListId) {
                    return _.assign(
                        {},
                        techOperationList,
                        { selectedTechOperations: action.selectedTechOperations }
                    );
                } else {
                    return techOperationList
                }
            });
        case TechOperationActionType.TECHOPERATION_CONFIRM_DELETE:
            return state.map(techOperationList => {
                if (techOperationList.id === action.techOperationListId) {
                    return _.assign(
                        {},
                        techOperationList,
                        {
                            params: _.assign({}, techOperationList.params, {
                                isConfirmDeleting: true
                            })
                        }
                    );
                } else {
                    return techOperationList
                }
            });
        case TechOperationActionType.TECHOPERATION_CANCEL_DELETE:
            return state.map(techOperationList => {
                if (techOperationList.id === action.techOperationListId) {
                    return _.assign(
                        {},
                        techOperationList,
                        {
                            params: _.assign({}, techOperationList.params, {
                                isConfirmDeleting: false
                            })
                        }
                    );
                } else {
                    return techOperationList
                }
            });
        case TechOperationActionType.TECHOPERATION_REMOVE_PENDING:
            return state.map(techOperationList => {
                if (techOperationList.id === action.techOperationListId) {
                    return _.assign(
                        {},
                        techOperationList,
                        {
                            params: _.assign({}, techOperationList.params, {
                                isConfirmDeleting: false,
                                isDeleting: true
                            })
                        }
                    );
                } else {
                    return techOperationList
                }
            });
        case TechOperationActionType.TECHOPERATION_REMOVE_SUCCEED:
            return state.map(techOperationList => {
                if (techOperationList.id === action.techOperationListId) {
                    return _.assign(
                        {},
                        techOperationList,
                        {
                            techOperations: techOperationList.techOperations.filter(techOperationId => techOperationList.selectedTechOperations.indexOf(techOperationId) < 0),
                            selectedTechOperations: [],
                        },
                        {
                            params: _.assign({}, techOperationList.params, {
                                isDeleting: false
                            })
                        }
                    );
                } else {
                    return techOperationList
                }
            });
        case TechOperationActionType.TECHOPERATION_REMOVE_FAILED:
            return state.map(techOperationList => {
                if (techOperationList.id === action.techOperationListId) {
                    return _.assign(
                        {},
                        techOperationList,
                        {
                            params: _.assign({}, techOperationList.params, {
                                isDeleting: false
                            })
                        }
                    );
                } else {
                    return techOperationList
                }
            });
        case TechOperationActionType.TECHOPERATION_LOAD_SUCCEED:
            return state.map(techOperationList => {
                if (techOperationList.id === action.techOperationListId) {
                    return _.assign(
                        {},
                        techOperationList,
                        {
                            params: _.assign({}, techOperationList.params, {
                                isPending: false,
                                totalAmount: action.totalAmount,
                                techOperationPage: action.techOperationPage,
                                techOperationsPerPage: action.techOperationsPerPage,
                                searchText: action.searchText
                            })
                        },
                        {
                            techOperations: action.techOperations.map(techOperation => techOperation.id),
                            selectedTechOperations: []
                        }
                    );
                } else {
                    return techOperationList
                }
            });
        case PanelActionType.PANEL_OPEN:
            if (action.panelType !== PanelType.TECHOPERATION_LIST) {
                return state;
            }

            return [
                ...state,
                {
                    id: action.contentId,
                    techOperations: [],
                    selectedTechOperations: [],
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