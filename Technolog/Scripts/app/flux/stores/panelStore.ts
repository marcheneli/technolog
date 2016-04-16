/// <reference path="../../../typings/tsd.d.ts" />

import AppDispatcher from "../dispatcher/appDispatcher";
import * as EventEmitter from "eventemitter3";
import ActionSourceTypes from "../actions/actionSourceTypes";
import PanelActionTypes from "../actions/panelActionTypes";
import Utils from "../../utils/utils";
import ComponentType from "../../components/componentType";
import IPanel from "../../components/iPanel";
import AppPayload from "../iAppPayload";

const CHANGE_EVENT = "PANEL_CHANGE_EVENT";

var _panels: Array<IPanel> = [];

function _initialize(panelType: ComponentType, params?: any): void {
    //_panels = [];

    var panelId: string = Utils.uuid();
    var panel: IPanel = { type: panelType, id: panelId, params: params };

    _panels.push(panel);
}

function _addPanel(callerPanelId: string, panelType: ComponentType, params?: any) {
    var panelId: string = Utils.uuid();
    var panel: IPanel = { type: panelType, id: panelId, params: params };
    var callerPanel: IPanel = _panels.filter((panel: IPanel, index: number) => { return panel.id == callerPanelId })[0];
    var indexOfCallerPanel = _panels.indexOf(callerPanel);
    _panels.splice(indexOfCallerPanel + 1, 0, panel);
}

function _removePanel(id: string) {
    for (var i = 0; i < _panels.length; i++) {
        if (_panels[i].id === id) {
            _panels.splice(i, 1);
            break;
        }
    }
}

class PanelStoreStatic extends EventEmitter {

    public getPanels(): Array<IPanel> {
        return _panels;
    }

    public emitChange(): void {
        this.emit(CHANGE_EVENT);
    }

    /**
     * @param {function} callback
     */
    public addChangeListener(callback: () => void): void {
        this.on(CHANGE_EVENT, callback);
    }

    /**
     * @param {function} callback
     */
    public removeChangeListener(callback: () => void): void {
        this.removeListener(CHANGE_EVENT, callback);
    }
}

let PanelStore: PanelStoreStatic = new PanelStoreStatic();

AppDispatcher.register(function (payload: AppPayload) {

    if (payload.actionSource != ActionSourceTypes.PANEL) return;

    switch (payload.actionType) {
        case PanelActionTypes.PANEL_OPEN:
            _addPanel(payload.callerPanelId, payload.panelType, payload.params);
            PanelStore.emitChange();
            break;
        case PanelActionTypes.PANEL_CLOSE:
            _removePanel(payload.callerPanelId);
            PanelStore.emitChange();
            break;
        case PanelActionTypes.PANEL_INIT:
            _initialize(payload.panelType);
            PanelStore.emitChange();
            break;
        default:
    }
});

export default PanelStore;