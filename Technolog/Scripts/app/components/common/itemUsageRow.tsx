/// <reference path="../../../typings/tsd.d.ts" />

import * as React from "react";
import ContentEditable from "./contentEditable";
import TableRow from "./tableRow";


interface IItemUsageRowProps {
    itemId: number;
    itemName: string;
    quantity: number;
    onChange(itemUsage: any): void;
}

interface IItemUsageRowState {

}

export default class ItemUsageRow
    extends React.Component<IItemUsageRowProps, IItemUsageRowState> {

    private onItemUsageQuantityChanged = (value: string) => {
        this.props.onChange({ itemId: this.props.itemId, quantity: parseInt(value) });
    }

    render(): React.ReactElement<IItemUsageRowProps> {
        return (
            <TableRow
                item={this.props.itemId}
                isCurrent={false}
                changeCurrent={() => { } }
                rowDoubleClickHandler={() => { } }>
                <td  style={{ width: 25 + '%' }}>{this.props.itemId}</td>
                <td  style={{ width: 50 + '%' }}>{this.props.itemName}</td>
                <td  style={{ width: 25 + '%', position: "relative", padding: 0 + 'px', verticalAlign: 'middle' }}>
                    <ContentEditable
                        html={String(this.props.quantity) }
                        onChange={this.onItemUsageQuantityChanged}/>
                </td>
            </TableRow>
        );
    }
}
