/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";

export default class Tabs extends React.Component<{ tabList: Array<ITabElement> }, {}> {
    render(): React.ReactElement<{}> {
        return (
            <ul className="nav nav-sidebar">
                {this.props.tabList.map(function (tab: ITabElement) {
                        return (
                            <li key={tab.id}>
                                <ReactRouter.Link activeClassName='active' to={'/' + tab.linkName}>{tab.name}</ReactRouter.Link>
                            </li>
                        )
                    }.bind(this)) }
                </ul>
            )
    }
}