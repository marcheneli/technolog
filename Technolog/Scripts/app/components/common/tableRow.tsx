/// <reference path="../../../typings/tsd.d.ts" />

import * as React from "react";

interface ITableRowProps {
    rowDoubleClickHandler(item): void,
    changeCurrent(item): void,
    isCurrent: boolean,
    item: any
}

interface ITableRowState {
    color: string
}

export default class TableRow extends React.Component<ITableRowProps, ITableRowState> {

    constructor(props: ITableRowProps, context: any) {
        super(props, context);

        this.props = props;
        this.context = context;
        this.state = {
            color: this.props.isCurrent ? 'info' : null
        };
    }

    private onMouseEnterHandler = () => {
        if (!this.props.isCurrent) this.setState({ color: "active" });
    }

    private onMouseLeaveHandler = () => {
        if (!this.props.isCurrent) this.setState({ color: null });
    }

    private onClickHandler = () => {
        if (!this.props.isCurrent) { this.setState({ color: null }); this.props.changeCurrent(this.props.item); }
        else { this.setState({ color: "active" }); this.props.changeCurrent(null); }
    }

    private onDoubleClickHandler = () => {
        this.props.rowDoubleClickHandler(this.props.item);
    }

    render(): React.ReactElement<ITableRowProps> {
        return (
            <tr className={this.props.isCurrent ? 'info' : this.state.color}
                onMouseEnter={this.onMouseEnterHandler}
                onMouseLeave={this.onMouseLeaveHandler}
                onClick={this.onClickHandler}
                onDoubleClick={this.onDoubleClickHandler}>
                {this.props.children}
            </tr>
        )
    }
}
