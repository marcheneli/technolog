/// <reference path="../../../typings/tsd.d.ts" />

import * as React from "react";

interface IAlertProps {
    type: string;
    alert: any;
    onCloseClick(alertId: string): void;
}

interface IAlertState {

}

export default class Alert
    extends React.Component<IAlertProps, IAlertState> {

    render(): React.ReactElement<IAlertProps> {
        return (
            <div class={"alert alert-" + this.props.type + " alert-dismissible"} role="alert">
                <button
                    type="button"
                    class="close"
                    data-dismiss="alert"
                    aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                {this.props.children}
            </div>    
        );
    }
}