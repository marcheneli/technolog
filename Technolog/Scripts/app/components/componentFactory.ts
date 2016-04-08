/// <reference path="../../typings/tsd.d.ts" />

import ToolListPanel from "./toolListPanel";

export default class ComponentFactory {
    public static getComponent(componentType: string): any {
        switch (componentType) {
            case "TOOL_LIST_PANEL":
                return ToolListPanel;
            default:
        }
    }
}