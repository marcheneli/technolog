/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";

interface MainPanelProps {
    componentId: string;
}

export default class MainPanel extends React.Component<MainPanelProps, {}> {
    render(): React.ReactElement<MainPanelProps> {
        return (
            <div className="inner" style={{ marginBottom: 0 + 'px', display: 'flex', flexDirection: 'column' }}>Hi!I'm a main panel. Component id: {this.props.componentId}</div>    
        );
    }
}
