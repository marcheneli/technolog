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
        case ToolActionType.TOOL_LOAD_SUCCEED:
            return state.map(toolList => {
                if (toolList.id === action.toolListId) {
                    return _.assign(
                        {},
                        toolList,
                        { isPending: false, tools: action.tools.map(tool => tool.id) }
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
                    isDeleting: false
                }
            ]
        default:
            return state;
    }
}