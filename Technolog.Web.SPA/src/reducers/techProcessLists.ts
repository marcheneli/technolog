import * as TechProcessActionType from '../actions/techProcessActionType';
import * as PanelActionType from '../actions/panelActionType';
import * as PanelType from '../components/panelType';
import * as _ from 'lodash';

const initialState = [];

export default function techProcessLists(state = initialState, action) {
    switch (action.type) {
        case TechProcessActionType.TECHPROCESS_LOAD_PENDING:
            return state.map(techProcessList => {
                if (techProcessList.id === action.techProcessListId) {
                    return _.assign(
                        {},
                        techProcessList,
                        {
                            params: _.assign({}, techProcessList.params, {
                                isPending: true
                            })
                        }
                    );
                } else {
                    return techProcessList
                }
            });
        case TechProcessActionType.TECHPROCESS_SELECT:
            return state.map(techProcessList => {
                if (techProcessList.id === action.techProcessListId) {
                    return _.assign(
                        {},
                        techProcessList,
                        { selectedTechProcesses: action.selectedTechProcesses }
                    );
                } else {
                    return techProcessList
                }
            });
        case TechProcessActionType.TECHPROCESS_CONFIRM_DELETE:
            return state.map(techProcessList => {
                if (techProcessList.id === action.techProcessListId) {
                    return _.assign(
                        {},
                        techProcessList,
                        {
                            params: _.assign({}, techProcessList.params, {
                                isConfirmDeleting: true
                            })
                        }
                    );
                } else {
                    return techProcessList
                }
            });
        case TechProcessActionType.TECHPROCESS_CANCEL_DELETE:
            return state.map(techProcessList => {
                if (techProcessList.id === action.techProcessListId) {
                    return _.assign(
                        {},
                        techProcessList,
                        {
                            params: _.assign({}, techProcessList.params, {
                                isConfirmDeleting: false
                            })
                        }
                    );
                } else {
                    return techProcessList
                }
            });
        case TechProcessActionType.TECHPROCESS_REMOVE_PENDING:
            return state.map(techProcessList => {
                if (techProcessList.id === action.techProcessListId) {
                    return _.assign(
                        {},
                        techProcessList,
                        {
                            params: _.assign({}, techProcessList.params, {
                                isConfirmDeleting: false,
                                isDeleting: true
                            })
                        }
                    );
                } else {
                    return techProcessList
                }
            });
        case TechProcessActionType.TECHPROCESS_REMOVE_SUCCEED:
            return state.map(techProcessList => {
                if (techProcessList.id === action.techProcessListId) {
                    return _.assign(
                        {},
                        techProcessList,
                        {
                            techProcesses: techProcessList.techProcesses.filter(techProcessId => techProcessList.selectedTechProcesses.indexOf(techProcessId) < 0),
                            selectedTechProcesses: [],
                        },
                        {
                            params: _.assign({}, techProcessList.params, {
                                isDeleting: false
                            })
                        }
                    );
                } else {
                    return techProcessList
                }
            });
        case TechProcessActionType.TECHPROCESS_REMOVE_FAILED:
            return state.map(techProcessList => {
                if (techProcessList.id === action.techProcessListId) {
                    return _.assign(
                        {},
                        techProcessList,
                        {
                            params: _.assign({}, techProcessList.params, {
                                isDeleting: false
                            })
                        }
                    );
                } else {
                    return techProcessList
                }
            });
        case TechProcessActionType.TECHPROCESS_LOAD_SUCCEED:
            return state.map(techProcessList => {
                if (techProcessList.id === action.techProcessListId) {
                    return _.assign(
                        {},
                        techProcessList,
                        {
                            params: _.assign({}, techProcessList.params, {
                                isPending: false,
                                totalAmount: action.totalAmount,
                                techProcessPage: action.techProcessPage,
                                techProcessesPerPage: action.techProcessesPerPage,
                                searchText: action.searchText
                            })
                        },
                        {
                            techProcesses: action.techProcesses.map(techProcess => techProcess.id),
                            selectedTechProcesses: []
                        }
                    );
                } else {
                    return techProcessList
                }
            });
        case PanelActionType.PANEL_OPEN:
            if (action.panelType !== PanelType.TECHPROCESS_LIST) {
                return state;
            }

            return [
                ...state,
                {
                    id: action.contentId,
                    techProcesses: [],
                    selectedTechProcesses: [],
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