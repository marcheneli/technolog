﻿/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";

interface ITabProps {
    onClick(tabId: number): void;
    componentType: string;
    mode: string;
    tabId: number;
}

interface ITabState {

}

class Tab extends React.Component<ITabProps, ITabState> {

    constructor(props: ITabProps, context: any) {
        super(props, context);

        this.props = props;
        this.context = context;
        this.state = {

        };
    }

    clickHandler = (event: any) => {
        event.preventDefault();
        this.props.onClick(this.props.tabId);
    }

    render(): React.ReactElement<ITabProps> {
        return (
            <li >
                <a className={this.props.mode} onClick={this.clickHandler}>{this.props.children}</a>
            </li>    
        );
    }
}

interface ITabsProps {
    tabList: Array<ITabElement>
}

interface ITabsState {
    activeTabId: number;
}

export default class Tabs
    extends React.Component<ITabsProps, ITabsState> {

    onTabClick = (tabId: number): void => {
        this.setState({
            activeTabId: tabId
        });
    }

    getRouteLinks() {
        return(
            this.props.tabList.map(function (tab: ITabElement) {
                return (
                    <li key={tab.id}>
                        <ReactRouter.Link activeClassName='active' to={'/' + tab.linkName}>{tab.name}</ReactRouter.Link>
                    </li>
                )
            }.bind(this))
        );
    }

    getSimpleLinks() {
        return (
            this.props.tabList.map(function (tab: ITabElement) {
                return (
                    <Tab
                        key={tab.id}
                        tabId={tab.id}
                        componentType={tab.type}
                        mode={tab.id == this.state.activeTabId ? 'active' : 'unactive'}
                        onClick={this.onTabClick} />
                )
            }.bind(this))
        );
    }

    render(): React.ReactElement<ITabsProps> {
        return (
            <ul className="nav nav-sidebar">
                { this.getRouteLinks() }
                </ul>
            )
    }
}