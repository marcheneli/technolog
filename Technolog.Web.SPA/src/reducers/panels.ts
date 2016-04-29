import * as PanelActionType from "../actions/panelActionType";

const initialState = [];

let nextPanelId = 0;

export default function panels(state = initialState, action) {
    switch (action.type) {
        case PanelActionType.PANEL_OPEN:
            return [
                {
                    id: nextPanelId++,
                    type: action.panelType,
                    contentId: action.contentId,
                    params: action.params,
                    name: action.name
                },
                ...state
            ];
        case PanelActionType.PANEL_CLOSE:
            return state.filter(panel =>
                panel.id !== action.id
            );
        default:
            return state;
    }
}