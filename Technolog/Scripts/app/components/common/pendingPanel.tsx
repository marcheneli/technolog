/// <reference path="../../../typings/tsd.d.ts" />

import * as React from "react";

interface IPendingPanelProps {
    title: string
}

interface IPendingPanelState {

}

export default class PendingPanel
    extends React.Component<IPendingPanelProps, IPendingPanelState> {
    render(): React.ReactElement<IPendingPanelProps> {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h2 className="panel-title">{this.props.title}</h2>
                </div>
                <div className="panel-body">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
