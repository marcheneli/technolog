/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";
import MainSidebar from "./mainSidebar";
import MainContentSection from "./mainContentSection";
import ITabElement from "./iTabElement";
import ComponentType from "./componentType";

let tabList: Array<ITabElement> = [
    { id: 1, name: 'Технологические процессы', linkName: 'processes', mode: "", type: ComponentType.TechProcessListPanel },
    { id: 2, name: 'Технологические операции', linkName: 'operations', mode: "", type: ComponentType.TechOperationListPanel },
    { id: 3, name: 'Технологические шаги', linkName: 'steps', mode: "", type: ComponentType.TechStepListPanel },
    { id: 4, name: 'Инструменты', linkName: 'tools', mode: "", type: ComponentType.ToolListPanel },
    { id: 5, name: 'Детали', linkName: 'parts', mode: "", type: ComponentType.PartListPanel }
];

export default class Main extends React.Component<{}, {}> {
    public render(): React.ReactElement<{}> {
        return (
            <div className="row full-height">
                <MainSidebar tabList={tabList} />
                <MainContentSection>
                    {this.props.children}
                </MainContentSection>
            </div>
        )
    }
}