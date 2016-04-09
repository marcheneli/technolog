/// <reference path="../../../typings/tsd.d.ts" />

import AppDispatcher from "../dispatcher/appDispatcher";
import ActionSourceTypes from "./actionSourceTypes";
import PanelActionTypes from "./panelActionTypes";
import ComponentType from "../../components/componentType";

class PanelActionsStatic {
    public open(callerId: string, type: ComponentType): void {
        AppDispatcher.dispatch({
            actionType: PanelActionTypes.PANEL_OPEN,
            actionSource: ActionSourceTypes.PANEL,
            callerPanelId: callerId,
            panelType: type
        });
    }

    public close(panelId: string): void {
        AppDispatcher.dispatch({
            actionType: PanelActionTypes.PANEL_CLOSE,
            actionSource: ActionSourceTypes.PANEL,
            callerPanelId: panelId
        });
    }

    public init(type: ComponentType): void {
        AppDispatcher.dispatch({
            actionType: PanelActionTypes.PANEL_INIT,
            actionSource: ActionSourceTypes.PANEL,
            panelType: type
        });
    }
}

let PanelActions: PanelActionsStatic = new PanelActionsStatic();

export default PanelActions;