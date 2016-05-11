import * as TechStepActionType from '../actions/techStepActionType';
import * as TechOperationActionType from '../actions/techOperationActionType';
import * as PanelActionType from '../actions/panelActionType';
import * as PanelType from '../components/panelType';
import * as _ from 'lodash';

const initialState = [];

export default function techStepLists(state = initialState, action) {
    switch (action.type) {
        case TechStepActionType.TECHSTEP_LOAD_PENDING:
            return state.map(techStepList => {
                if (techStepList.id === action.techStepListId) {
                    return _.assign(
                        {},
                        techStepList,
                        {
                            params: _.assign({}, techStepList.params, {
                                isPending: true
                            })
                        }
                    );
                } else {
                    return techStepList
                }
            });
        case TechStepActionType.TECHSTEP_SELECT:
            return state.map(techStepList => {
                if (techStepList.id === action.techStepListId) {
                    return _.assign(
                        {},
                        techStepList,
                        { selectedTechSteps: action.selectedTechSteps }
                    );
                } else {
                    return techStepList
                }
            });
        case TechStepActionType.TECHSTEP_CONFIRM_DELETE:
            return state.map(techStepList => {
                if (techStepList.id === action.techStepListId) {
                    return _.assign(
                        {},
                        techStepList,
                        {
                            params: _.assign({}, techStepList.params, {
                                isConfirmDeleting: true
                            })
                        }
                    );
                } else {
                    return techStepList
                }
            });
        case TechStepActionType.TECHSTEP_CANCEL_DELETE:
            return state.map(techStepList => {
                if (techStepList.id === action.techStepListId) {
                    return _.assign(
                        {},
                        techStepList,
                        {
                            params: _.assign({}, techStepList.params, {
                                isConfirmDeleting: false
                            })
                        }
                    );
                } else {
                    return techStepList
                }
            });
        case TechStepActionType.TECHSTEP_REMOVE_PENDING:
            return state.map(techStepList => {
                if (techStepList.id === action.techStepListId) {
                    return _.assign(
                        {},
                        techStepList,
                        {
                            params: _.assign({}, techStepList.params, {
                                isConfirmDeleting: false,
                                isDeleting: true
                            })
                        }
                    );
                } else {
                    return techStepList
                }
            });
        case TechStepActionType.TECHSTEP_REMOVE_SUCCEED:
            return state.map(techStepList => {
                if (techStepList.id === action.techStepListId) {
                    return _.assign(
                        {},
                        techStepList,
                        {
                            techSteps: techStepList.techSteps.filter(techStepId => techStepList.selectedTechSteps.indexOf(techStepId) < 0),
                            selectedTechSteps: [],
                        },
                        {
                            params: _.assign({}, techStepList.params, {
                                isDeleting: false
                            })
                        }
                    );
                } else {
                    return techStepList
                }
            });
        case TechStepActionType.TECHSTEP_REMOVE_FAILED:
            return state.map(techStepList => {
                if (techStepList.id === action.techStepListId) {
                    return _.assign(
                        {},
                        techStepList,
                        {
                            params: _.assign({}, techStepList.params, {
                                isDeleting: false
                            })
                        }
                    );
                } else {
                    return techStepList
                }
            });
        case TechStepActionType.TECHSTEP_LOAD_SUCCEED:
            return state.map(techStepList => {
                if (techStepList.id === action.techStepListId) {
                    return _.assign(
                        {},
                        techStepList,
                        {
                            params: _.assign({}, techStepList.params, {
                                isPending: false,
                                totalAmount: action.totalAmount,
                                techStepPage: action.techStepPage,
                                techStepsPerPage: action.techStepsPerPage,
                                searchText: action.searchText
                            })
                        },
                        {
                            techSteps: action.response.result,
                            selectedTechSteps: []
                        }
                    );
                } else {
                    return techStepList
                }
            });
        case PanelActionType.PANEL_OPEN:
            if (action.panelType !== PanelType.TECHSTEP_LIST) {
                return state;
            }

            return [
                ...state,
                {
                    id: action.contentId,
                    techSteps: [],
                    selectedTechSteps: [],
                    params: {
                        isPending: true,
                        isDeleting: false,
                        isConfirmDeleting: false
                    }
                }
            ];
        case TechOperationActionType.TECHOPERATION_OPEN_TECHSTEP_LIST:
            return [
                ...state,
                {
                    id: action.techStepListId,
                    techSteps: [],
                    selectedTechSteps: [],
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