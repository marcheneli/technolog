/// <reference path="../../../typings/tsd.d.ts" />

import * as React from "react";

interface IConfirmDeleteProps {
    success(id: number): void,
    cancel(): void,
    id: number,
    title: string,
    message: string
}

interface IConfirmDeleteState {

}

export default class ConfirmDelete extends React.Component<IConfirmDeleteProps, IConfirmDeleteState> {
    private handleConfirm = (e) => {
        e.preventDefault();

        this.props.success(this.props.id)
    }

    private handleCancelClick = () => {
        this.props.cancel();
    }

    render(): React.ReactElement<{}> {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4>{this.props.title}</h4>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.handleConfirm}>
                        <h6>{this.props.message}</h6>
                        <div className="btn-toolbar pull-right" style={{ marginBottom: 5 + 'px' }}>
                            <button type="submit" className="btn btn-danger">Да</button>
                            <button type="button" className="btn btn-default" onClick={this.handleCancelClick}>Нет</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
