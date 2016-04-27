import * as ToolActionType from '../actions/toolActionType';
import * as PanelActionType from '../actions/panelActionType';
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
                        { isPending: true }
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
                        { isConfirmDeleting: true }
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
                        { isConfirmDeleting: false }
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
                            isConfirmDeleting: false,
                            isDeleting: true
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
                            isDeleting: false
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
                            isDeleting: false
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
                            isPending: false,
                            tools: action.tools.map(tool => tool.id),
                            totalAmount: action.totalAmount,
                            toolPage: action.toolPage,
                            toolsPerPage: action.toolsPerPage,
                            searchText: action.searchText
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
                    isPending: true,
                    isDeleting: false,
                    isConfirmDeleting: false
                }
            ];
        default:
            return state;
    }
}