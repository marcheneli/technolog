﻿import * as React from 'react';
import ToolTable from '../containers/ToolTable';
import ItemListControlPanel from './common/ItemListControlPanel';
import ItemsPerPageSelector from './common/ItemsPerPageSelector';
import Pagination from './common/Pagination';
import DialogBackground from './common/DialogBackground';
import ConfirmationDialogPanel from './common/ConfirmationDialogPanel';
import PendingPanel from './common/PendingPanel';
import PendingAnimation from './common/PendingAnimation';

interface IToolListProps {
    id: number;
    onMount();
    onDeleteBtnClick();
    onAddBtnClick();
    onDeleteConfirm(tools);
    onDeleteCancel();
    load(page, itemsPerPage, searchText);
    isConfirmDeleting: boolean;
    isDeleting: boolean;
    isPending: boolean;
    tools: Array<any>;
    selectedTools: Array<any>;
    totalAmount: number;
    toolPage: number;
    toolsPerPage: number;
    searchText: string;
}

export default class ToolList extends React.Component<IToolListProps, {}> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.onMount();
    }

    refreshBtnClickHandler = () => {
        this.props.load(this.props.toolPage,
            this.props.toolsPerPage,
            this.props.searchText);
    }

    toolPageChangeHandler = (page) => {
        this.props.load(page,
            this.props.toolsPerPage,
            this.props.searchText);
    }

    toolsPerPageChangeHandler = (itemsPerPage) => {
        this.props.load(this.props.toolPage,
            itemsPerPage,
            this.props.searchText);
    }

    searchTextChangeHandler = (text) => {
        this.props.load(this.props.toolPage,
            this.props.toolsPerPage,
            text);
    }

    deleteConfirmClickHandler = () => {
        let toolsForDeleting = this.props.selectedTools.map(id => { return { id: id }; });

        this.props.onDeleteConfirm(toolsForDeleting);
    }

    render() {
        console.log("toollistrender");
        return (
            <div style={{ position: 'relative', display: 'flex', flexGrow: 2, flexBasis: 0 + '%', minHeight: 0, minWidth: 0 }}>
                <DialogBackground isShow={this.props.isConfirmDeleting}>
                    <ConfirmationDialogPanel
                        title={"Удаление инструмента"}
                        onConfirmClick={this.deleteConfirmClickHandler}
                        onCancelClick={this.props.onDeleteCancel}>
                        <span>
                            Вы действительно хотите удалить данный инструмент?
                        </span>
                    </ConfirmationDialogPanel>
                </DialogBackground>
                <DialogBackground isShow={this.props.isDeleting}>
                    <PendingPanel title={"Удаление инструмента"}>
                        <PendingAnimation>
                            <h4>Пожалуйста, подождите.</h4>
                            <h4>Идет удаление.</h4>
                        </PendingAnimation>
                    </PendingPanel>
                </DialogBackground>
                <div style={{
                    position: 'relative',
                    display: 'flex',
                    flexFlow: 'column',
                    flexGrow: 2,
                    flexBasis: 0 + '%',
                    minHeight: 0, minWidth: 0
                }}>
                    <div style={{ flexShrink: 0 }}>
                        <ItemListControlPanel
                            onItemDelete={this.props.onDeleteBtnClick}
                            onNewItem={this.props.onAddBtnClick}
                            onRefresh={this.refreshBtnClickHandler}
                            onSearchTextChange={this.searchTextChangeHandler}
                            isDeleteEnable={this.props.selectedTools.length > 0}
                            isUpdating={this.props.isPending}
                            />
                    </div>
                    <ToolTable
                        id={this.props.id}
                        tools={this.props.tools}
                        selectedTools={this.props.selectedTools}/>
                    <div className="btn-toolbar" style={{ flexShrink: 0 }}>
                        <ItemsPerPageSelector
                            onChange={this.toolsPerPageChangeHandler}/>
                        <Pagination
                            itemAmount={this.props.totalAmount}
                            itemsPerPage={this.props.toolsPerPage}
                            currentPage={this.props.toolPage}
                            firstSymbol='«'
                            nextSymbol='›'
                            prevSymbol='‹'
                            lastSymbol='»'
                            onPageBtnClick={this.toolPageChangeHandler}/>
                    </div>
                </div>
            </div>
            
        );
    }
}