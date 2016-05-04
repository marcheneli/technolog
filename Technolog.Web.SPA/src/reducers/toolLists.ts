import * as ToolActionType from '../actions/toolActionType';
import * as PanelActionType from '../actions/panelActionType';
import * as TechStepActionType from '../actions/techStepActionType';
import * as PanelType from '../components/panelType';
import * as _ from 'lodash';

const initialState = [];

export default function toolLists(state = initialState, action) {
    switch (action.type) {
        case ToolActionType.TOOL_LOAD_PENDING:
            return state.map(toolList => {
                if (toolList.id === action.toolListId) {
                    return _.assign(
                        {},
                        toolList,
                        {
                            params: _.assign({}, toolList.params, {
                                isPending: true
                            })
                        }
                    );
                } else {
                    return toolList
                }
            });
        case ToolActionType.TOOL_SELECT:
            return state.map(toolList => {
                if (toolList.id === action.toolListId) {
                    return _.assign(
                        {},
                        toolList,
                        { selectedTools: action.selectedTools }
                    );
                } else {
                    return toolList
                }
            });
        case ToolActionType.TOOL_CONFIRM_DELETE:
            return state.map(toolList => {
                if (toolList.id === action.toolListId) {
                    return _.assign(
                        {},
                        toolList,
                        {
                            params: _.assign({}, toolList.params, {
                                isConfirmDeleting: true
                            })
                        }
                    );
                } else {
                    return toolList
                }
            });
        case ToolActionType.TOOL_CANCEL_DELETE:
            return state.map(toolList => {
                if (toolList.id === action.toolListId) {
                    return _.assign(
                        {},
                        toolList,
                        {
                            params: _.assign({}, toolList.params, {
                                isConfirmDeleting: false
                            })
                        }
                    );
                } else {
                    return toolList
                }
            });
        case ToolActionType.TOOL_REMOVE_PENDING:
            return state.map(toolList => {
                if (toolList.id === action.toolListId) {
                    return _.assign(
                        {},
                        toolList,
                        {
                            params: _.assign({}, toolList.params, {
                                isConfirmDeleting: false,
                                isDeleting: true
                            })
                        }
                    );
                } else {
                    return toolList
                }
            });
        case ToolActionType.TOOL_REMOVE_SUCCEED:
            return state.map(toolList => {
                if (toolList.id === action.toolListId) {
                    return _.assign(
                        {},
                        toolList,
                        {
                            tools: toolList.tools.filter(toolId => toolList.selectedTools.indexOf(toolId) < 0),
                            selectedTools: [],
                        },
                        {
                            params: _.assign({}, toolList.params, {
                                isDeleting: false
                            })
                        }
                    );
                } else {
                    return toolList
                }
            });
        case ToolActionType.TOOL_REMOVE_FAILED:
            return state.map(toolList => {
                if (toolList.id === action.toolListId) {
                    return _.assign(
                        {},
                        toolList,
                        {
                            params: _.assign({}, toolList.params, {
                                isDeleting: false
                            })
                        }
                    );
                } else {
                    return toolList
                }
            });
        case ToolActionType.TOOL_LOAD_SUCCEED:
            return state.map(toolList => {
                if (toolList.id === action.toolListId) {
                    return _.assign(
                        {},
                        toolList,
                        {
                            params: _.assign({}, toolList.params, {
                                isPending: false,
                                totalAmount: action.totalAmount,
                                toolPage: action.toolPage,
                                toolsPerPage: action.toolsPerPage,
                                searchText: action.searchText
                            })
                        },
                        {
                            tools: action.response.result,
                            selectedTools: []
                        }
                    );
                } else {
                    return toolList
                }
            });
        case PanelActionType.PANEL_OPEN:
            if (action.panelType !== PanelType.TOOL_LIST) {
                return state;
            }

            return [
                ...state,
                {
                    id: action.contentId,
                    tools: [],
                    selectedTools: [],
                    params: {
                        isPending: true,
                        isDeleting: false,
                        isConfirmDeleting: false
                    }
                }
            ];
        case TechStepActionType.TECHSTEP_OPEN_TOOL_LIST:
            return [
                ...state,
                {
                    id: action.toolListId,
                    tools: [],
                    selectedTools: [],
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