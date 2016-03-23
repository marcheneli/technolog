// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";
import MainSidebar from "./mainSidebar";
import MainContentSection from "./mainContentSection";

let tabList: Array<ITabElement> = [
    { id: 1, name: 'Технологические процессы', linkName: 'processes' },
    { id: 2, name: 'Технологические операции', linkName: 'operations' },
    { id: 3, name: 'Инструменты', linkName: 'tools' },
    { id: 4, name: 'Детали', linkName: 'parts' }
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