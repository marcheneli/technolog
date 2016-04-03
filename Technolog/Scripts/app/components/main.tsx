/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";
import MainSidebar from "./mainSidebar";
import MainContentSection from "./mainContentSection";

let tabList: Array<ITabElement> = [
    { id: 1, name: 'Технологические процессы', linkName: 'processes' },
    { id: 2, name: 'Технологические операции', linkName: 'operations' },
    { id: 3, name: 'Технологические шаги', linkName: 'steps' },
    { id: 4, name: 'Инструменты', linkName: 'tools' },
    { id: 5, name: 'Детали', linkName: 'parts' }
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