/// <reference path="../../../typings/tsd.d.ts" />

import * as React from "react";
import SearchInput from "./searchInput";
import ItemsPerPageSelector from "./itemsPerPageSelector";

interface ItemListControlPanelProps {
    onItemsPerPageChange(itemsPerPage: number): void;
    onSearchTextChange(searchText: string): void;
    onItemDelete(): void;
    onNewItem(): void;
    onRefresh(): void;
}

interface ItemListControlPanelState {

}

export default class ItemListControlPanel
    extends React.Component<ItemListControlPanelProps, ItemListControlPanelState> {
    
    render(): React.ReactElement<ItemListControlPanelProps> {
        return (
            <div>
                <div className="input-group">
                    <div className="input-group-btn">
                        <button
                            className="btn btn-default"
                            type="button"
                            onClick={this.props.onNewItem}>
                            <span
                                className="glyphicon glyphicon-plus">
                            </span>
                        </button>
                        <button
                            className="btn btn-default"
                            type="button"
                            onClick={this.props.onItemDelete}>
                            <span
                                className="glyphicon glyphicon-trash">
                            </span>
                        </button>
                        <button
                            className="btn btn-default"
                            type="button"
                            onClick={this.props.onRefresh}>
                            <span
                                className="glyphicon glyphicon-refresh">
                            </span>
                        </button>
                    </div>
                    <SearchInput
                        text="Поиск..."
                        onChange={this.props.onSearchTextChange} />
                    <ItemsPerPageSelector
                        onChange={this.props.onItemsPerPageChange}/>
                </div>
            </div>    
        );
    }
}