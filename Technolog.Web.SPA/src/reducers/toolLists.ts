import * as ToolActionType from '../actions/toolActionType';
import * as PanelActionType from '../actions/panelActionType';
import * as PanelType from '../components/panelType';

const initialState = [];

export default function toolLists(state = initialState, action) {
    switch (action.type) {
        case ToolActionType.TOOL_LOAD_PENDING:
            return {};
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