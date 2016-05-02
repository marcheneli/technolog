import * as React from 'react';
import PartTable from '../../containers/part/PartTable';
import ItemListControlPanel from '../common/ItemListControlPanel';
import ItemsPerPageSelector from '../common/ItemsPerPageSelector';
import Pagination from '../common/Pagination';
import DialogBackground from '../common/DialogBackground';
import ConfirmationDialogPanel from '../common/ConfirmationDialogPanel';
import PendingPanel from '../common/PendingPanel';
import PendingAnimation from '../common/PendingAnimation';

interface IPartListProps {
    id: number;
    onMount();
    onDeleteBtnClick();
    onAddBtnClick();
    onDeleteConfirm(parts);
    onDeleteCancel();
    load(page, itemsPerPage, searchText);
    parts: Array<any>;
    selectedParts: Array<any>;
    params: {
        isConfirmDeleting: boolean;
        isDeleting: boolean;
        isPending: boolean;
        totalAmount: number;
        partPage: number;
        partsPerPage: number;
        searchText: string;
    }
}

export default class PartList extends React.Component<IPartListProps, {}> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.onMount();
    }

    refreshBtnClickHandler = () => {
        this.props.load(this.props.params.partPage,
            this.props.params.partsPerPage,
            this.props.params.searchText);
    }

    partPageChangeHandler = (page) => {
        this.props.load(page,
            this.props.params.partsPerPage,
            this.props.params.searchText);
    }

    partsPerPageChangeHandler = (itemsPerPage) => {
        this.props.load(this.props.params.partPage,
            itemsPerPage,
            this.props.params.searchText);
    }

    searchTextChangeHandler = (text) => {
        this.props.load(this.props.params.partPage,
            this.props.params.partsPerPage,
            text);
    }

    deleteConfirmClickHandler = () => {
        let partsForDeleting = this.props.selectedParts.map(id => { return { id: id }; });

        this.props.onDeleteConfirm(partsForDeleting);
    }

    render() {
        return (
            <div style={{ position: 'relative', display: 'flex', flexGrow: 2, flexBasis: 0 + '%', minHeight: 0, minWidth: 0 }}>
                <DialogBackground isShow={this.props.params.isConfirmDeleting}>
                    <ConfirmationDialogPanel
                        title={"Удаление инструмента"}
                        onConfirmClick={this.deleteConfirmClickHandler}
                        onCancelClick={this.props.onDeleteCancel}>
                        <span>
                            Вы действительно хотите удалить данный инструмент?
                        </span>
                    </ConfirmationDialogPanel>
                </DialogBackground>
                <DialogBackground isShow={this.props.params.isDeleting}>
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
                            isDeleteEnable={this.props.selectedParts.length > 0}
                            isUpdating={this.props.params.isPending}
                            />
                    </div>
                    <PartTable
                        id={this.props.id}
                        parts={this.props.parts}
                        selectedParts={this.props.selectedParts}/>
                    <div className="btn-partbar" style={{ flexShrink: 0 }}>
                        <ItemsPerPageSelector
                            onChange={this.partsPerPageChangeHandler}/>
                        <Pagination
                            itemAmount={this.props.params.totalAmount}
                            itemsPerPage={this.props.params.partsPerPage}
                            currentPage={this.props.params.partPage}
                            firstSymbol='«'
                            nextSymbol='›'
                            prevSymbol='‹'
                            lastSymbol='»'
                            onPageBtnClick={this.partPageChangeHandler}/>
                    </div>
                </div>
            </div>
            
        );
    }
}