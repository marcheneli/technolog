/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";
import MainSidebar from "./mainSidebar";
import MainContentSection from "./mainContentSection";

let tabList: Array<ITabElement> = [
    { id: 1, name: 'Технологические процессы', linkName: 'processes', mode: "", type: "TECHPROCESS_LIST" },
    { id: 2, name: 'Технологические операции', linkName: 'operations', mode: "", type: "TECHOPERATION_LIST" },
    { id: 3, name: 'Технологические шаги', linkName: 'steps', mode: "", type: "TECHPSTEP_LIST" },
    { id: 4, name: 'Инструменты', linkName: 'tools', mode: "", type: "TOOL_LIST" },
    { id: 5, name: 'Детали', linkName: 'parts', mode: "", type: "PART_LIST" }
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