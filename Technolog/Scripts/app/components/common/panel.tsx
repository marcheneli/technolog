/// <reference path="../../../typings/tsd.d.ts" />

import * as React from "react";

interface IPanelProps {
    onClosePanel(): void;
    title: string;
    size?: string;
}

interface IPanelState {

}

export default class Panel extends React.Component<IPanelProps, IPanelState> {
    render(): React.ReactElement<IPanelProps> {
        return (
            <div className={"panel panel-default " + this.props.size} style={{ marginBottom: 0 + 'px', position: 'relative', display: 'flex', flexDirection: 'column', height: 100 + '%' }}>
                <div className="panel-heading table-style" style={{ zIndex: 1050, position: 'relative', }}>
                    <h2 className="panel-title">{this.props.title}</h2>
                    <div className="button-wrap">
                        <div
                            className="btn btn-default"
                            onClick={this.props.onClosePanel}>
                            <div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
                                <span>{'❌'}</span>
                            </div>
                        </div>
                    </div>
                </div>
                {this.props.children}
            </div>    
        );
    }
}