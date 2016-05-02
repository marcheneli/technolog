import * as React from 'react';
import TechOperationTable from '../../containers/techOperation/TechOperationTable';
import ItemListControlPanel from '../common/ItemListControlPanel';
import ItemsPerPageSelector from '../common/ItemsPerPageSelector';
import Pagination from '../common/Pagination';
import DialogBackground from '../common/DialogBackground';
import ConfirmationDialogPanel from '../common/ConfirmationDialogPanel';
import PendingPanel from '../common/PendingPanel';
import PendingAnimation from '../common/PendingAnimation';

interface ITechOperationListProps {
    id: number;
    onMount();
    onDeleteBtnClick();
    onAddBtnClick();
    onDeleteConfirm(techOperations);
    onDeleteCancel();
    load(page, itemsPerPage, searchText);
    techOperations: Array<any>;
    selectedTechOperations: Array<any>;
    params: {
        isConfirmDeleting: boolean;
        isDeleting: boolean;
        isPending: boolean;
        totalAmount: number;
        techOperationPage: number;
        techOperationsPerPage: number;
        searchText: string;
    }
}

export default class TechOperationList extends React.Component<ITechOperationListProps, {}> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.onMount();
    }

    refreshBtnClickHandler = () => {
        this.props.load(this.props.params.techOperationPage,
            this.props.params.techOperationsPerPage,
            this.props.params.searchText);
    }

    techOperationPageChangeHandler = (page) => {
        this.props.load(page,
            this.props.params.techOperationsPerPage,
            this.props.params.searchText);
    }

    techOperationsPerPageChangeHandler = (itemsPerPage) => {
        this.props.load(this.props.params.techOperationPage,
            itemsPerPage,
            this.props.params.searchText);
    }

    searchTextChangeHandler = (text) => {
        this.props.load(this.props.params.techOperationPage,
            this.props.params.techOperationsPerPage,
            text);
    }

    deleteConfirmClickHandler = () => {
        let techOperationsForDeleting = this.props.selectedTechOperations.map(id => { return { id: id }; });

        this.props.onDeleteConfirm(techOperationsForDeleting);
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
                            isDeleteEnable={this.props.selectedTechOperations.length > 0}
                            isUpdating={this.props.params.isPending}
                            />
                    </div>
                    <TechOperationTable
                        id={this.props.id}
                        techOperations={this.props.techOperations}
                        selectedTechOperations={this.props.selectedTechOperations}/>
                    <div className="btn-techOperationbar" style={{ flexShrink: 0 }}>
                        <ItemsPerPageSelector
                            onChange={this.techOperationsPerPageChangeHandler}/>
                        <Pagination
                            itemAmount={this.props.params.totalAmount}
                            itemsPerPage={this.props.params.techOperationsPerPage}
                            currentPage={this.props.params.techOperationPage}
                            firstSymbol='«'
                            nextSymbol='›'
                            prevSymbol='‹'
                            lastSymbol='»'
                            onPageBtnClick={this.techOperationPageChangeHandler}/>
                    </div>
                </div>
            </div>
            
        );
    }
}