/// <reference path="../../../typings/tsd.d.ts" />

import * as React from "react";
import DialogPanel from "./dialogPanel";
import Panel from "./panel";

interface IConfirmationDialogPanelProps {
    onSuccess(): void,
    onCancel(): void,
    title: string
}

interface IConfirmationDialogPanelState {

}

export default class ConfirmationDialogPanel
    extends React.Component<IConfirmationDialogPanelProps, IConfirmationDialogPanelState> {
    private handleConfirmClick = (e) => {
        this.props.onSuccess()
    }

    private handleCancelClick = () => {
        this.props.onCancel();
    }

    render(): React.ReactElement<IConfirmationDialogPanelProps> {
        return (
            <Panel
                onClosePanel={this.handleCancelClick}
                title={this.props.title}>
                <div className="panel-body">
                    {this.props.children}
                </div>
                <div className="panel-footer clearfix">
                    <div className="btn-toolbar pull-right">
                        <button type="button" className="btn btn-danger" onClick={this.handleConfirmClick}>Да</button>
                        <button type="button" className="btn btn-default" onClick={this.handleCancelClick}>Нет</button>
                    </div>
                </div>
            </Panel>
        )
    }
}
