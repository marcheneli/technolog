/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";
import Tabs from "./tabs";
import ITabElement from "./iTabElement";

export default class MainSidebar extends React.Component<{ tabList: Array<ITabElement> }, {}> {
    render(): React.ReactElement<{}> {
        return (
            <div className="col-lg-2 col-md-3 col-sm-3 col-xs-4 sidebar">
                <Tabs tabList={this.props.tabList}/>
            </div>
        )
    }
}