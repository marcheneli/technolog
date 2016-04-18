/// <reference path="../../../typings/tsd.d.ts" />

import * as React from "react";
import SearchInput from "./searchInput";
import ItemsPerPageSelector from "./itemsPerPageSelector";

interface ItemListControlPanelProps {
    onSearchTextChange(searchText: string): void;
    onItemDelete(): void;
    onNewItem(): void;
    onRefresh(): void;
    isDeleteEnable: boolean;
    isUpdating: boolean;
}

interface ItemListControlPanelState {
    searchText: string;
}

export default class ItemListControlPanel
    extends React.Component<ItemListControlPanelProps, ItemListControlPanelState> {

    constructor(props: ItemListControlPanelProps, context: any) {
        super(props, context);

        this.props = props;
        this.context = context;
        this.state = {
            searchText: ""
        };
    }

    private searchTextInputChangeHandler = (text: string) => {
        this.setState({ searchText: text });

        setTimeout(() => {
            if (this.state.searchText == text) {
                this.props.onSearchTextChange(text);
            }
        }, 1000);
    }
    
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
                            onClick={this.props.onItemDelete}
                            disabled={!this.props.isDeleteEnable}>
                            <span
                                className="glyphicon glyphicon-trash">
                            </span>
                        </button>
                        <button
                            className="btn btn-default"
                            type="button"
                            onClick={this.props.onRefresh}>
                            <span
                                className={ this.props.isUpdating ? 
                                    "glyphicon glyphicon-refresh glyphicon-refresh-animate" : 
                                    "glyphicon glyphicon-refresh"}>
                            </span>
                        </button>
                    </div>
                    <SearchInput
                        text="Поиск..."
                        onChange={this.searchTextInputChangeHandler} />
                </div>
            </div>    
        );
    }
}