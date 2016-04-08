/// <reference path="../../typings/tsd.d.ts" />

import MainPanel from "./mainPanel";
import ComponentType from "./componentType";

export default class ComponentFactory {
    public static getComponent(componentType: ComponentType): any {
        console.log(componentType);
        switch (componentType) {
            case ComponentType.MainPanel:
                return MainPanel;
            default:
        }
    }
}