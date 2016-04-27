/// <reference path="../../../typings/tsd.d.ts" />

import * as React from "react";
import DialogPanel from "./dialogPanel";
import Panel from "./panel";

interface IOkDialogPanelProps {
    onOk(): void,
    onCancel(): void,
    title: string
}

interface IOkDialogPanelState {

}

export default class OkDialogPanel
    extends React.Component<IOkDialogPanelProps, IOkDialogPanelState> {
    private handleOkClick = (e) => {
        this.props.onOk()
    }

    private handleCancelClick = () => {
        this.props.onCancel();
    }

    render(): React.ReactElement<IOkDialogPanelProps> {
        return (
            <Panel
                onClosePanel={this.handleCancelClick}
                title={this.props.title}>
                <div className="panel-body">
                    {this.props.children}
                </div>
                <div className="panel-footer clearfix">
                    <div className="btn-toolbar pull-right">
                        <button type="button" className="btn btn-default" onClick={this.handleOkClick}>Ok</button>
                    </div>
                </div>
            </Panel>
        )
    }
}
