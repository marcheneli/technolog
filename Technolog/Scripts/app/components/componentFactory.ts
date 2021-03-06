﻿/// <reference path="../../typings/tsd.d.ts" />

import MainPanel from "./mainPanel";
import PartListPanel from "./partList";
import ToolListPanel from "./toolListPanel";
import ToolEditPanel from "./toolEditForm";
import TechStepListPanel from "./techStepList";
import TechOperationListPanel from "./techOperationList";
import TechProcessListPanel from "./techProcessList";
import ComponentType from "./componentType";

export default class ComponentFactory {
    public static getComponent(componentType: ComponentType): any {
        switch (componentType) {
            case ComponentType.MainPanel:
                return MainPanel;
            case ComponentType.PartListPanel:
                return PartListPanel;
            case ComponentType.ToolListPanel:
                return ToolListPanel;
            case ComponentType.TechStepListPanel:
                return TechStepListPanel;
            case ComponentType.TechOperationListPanel:
                return TechOperationListPanel;
            case ComponentType.TechProcessListPanel:
                return TechProcessListPanel;
            case ComponentType.ToolEditPanel:
                return ToolEditPanel;
            default:
        }
    }
}