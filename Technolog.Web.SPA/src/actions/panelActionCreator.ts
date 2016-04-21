import * as PanelActionType from "./panelActionType";

export function open(title) {
    return {
        type: PanelActionType.PANEL_OPEN,
        title: title
    };
}

export function close(id) {
    return {
        type: PanelActionType.PANEL_CLOSE,
        id: id
    };
}