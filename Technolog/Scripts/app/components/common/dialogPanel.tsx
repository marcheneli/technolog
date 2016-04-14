/// <reference path="../../../typings/tsd.d.ts" />

import * as React from "react";

interface IDialogPanelProps {
    onCloseDialogPanel(): void;
    title: string;
}

interface IDialogPanelState {

}

export default class DialogPanel extends React.Component<IDialogPanelProps, IDialogPanelState> {
    render(): React.ReactElement<IDialogPanelProps> {
        return (
            <div className={"panel panel-default"}>
                <div className="panel-heading table-style">
                    <h4 className="panel-title">{this.props.title}</h4>
                    <div className="button-wrap">
                        <div
                            className="btn btn-default btn-sm"
                            onClick={this.props.onCloseDialogPanel}>
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