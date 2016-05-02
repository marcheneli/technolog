import * as React from 'react';
import TechProcessTable from '../../containers/techProcess/TechProcessTable';
import ItemListControlPanel from '../common/ItemListControlPanel';
import ItemsPerPageSelector from '../common/ItemsPerPageSelector';
import Pagination from '../common/Pagination';
import DialogBackground from '../common/DialogBackground';
import ConfirmationDialogPanel from '../common/ConfirmationDialogPanel';
import PendingPanel from '../common/PendingPanel';
import PendingAnimation from '../common/PendingAnimation';

interface ITechProcessListProps {
    id: number;
    onMount();
    onDeleteBtnClick();
    onAddBtnClick();
    onDeleteConfirm(techProcesses);
    onDeleteCancel();
    load(page, itemsPerPage, searchText);
    techProcesses: Array<any>;
    selectedTechProcesses: Array<any>;
    params: {
        isConfirmDeleting: boolean;
        isDeleting: boolean;
        isPending: boolean;
        totalAmount: number;
        techProcessPage: number;
        techProcessesPerPage: number;
        searchText: string;
    }
}

export default class TechProcessList extends React.Component<ITechProcessListProps, {}> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.onMount();
    }

    refreshBtnClickHandler = () => {
        this.props.load(this.props.params.techProcessPage,
            this.props.params.techProcessesPerPage,
            this.props.params.searchText);
    }

    techProcessPageChangeHandler = (page) => {
        this.props.load(page,
            this.props.params.techProcessesPerPage,
            this.props.params.searchText);
    }

    techProcessesPerPageChangeHandler = (itemsPerPage) => {
        this.props.load(this.props.params.techProcessPage,
            itemsPerPage,
            this.props.params.searchText);
    }

    searchTextChangeHandler = (text) => {
        this.props.load(this.props.params.techProcessPage,
            this.props.params.techProcessesPerPage,
            text);
    }

    deleteConfirmClickHandler = () => {
        let techProcessesForDeleting = this.props.selectedTechProcesses.map(id => { return { id: id }; });

        this.props.onDeleteConfirm(techProcessesForDeleting);
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
                            isDeleteEnable={this.props.selectedTechProcesses.length > 0}
                            isUpdating={this.props.params.isPending}
                            />
                    </div>
                    <TechProcessTable
                        id={this.props.id}
                        techProcesses={this.props.techProcesses}
                        selectedTechProcesses={this.props.selectedTechProcesses}/>
                    <div className="btn-techProcessbar" style={{ flexShrink: 0 }}>
                        <ItemsPerPageSelector
                            onChange={this.techProcessesPerPageChangeHandler}/>
                        <Pagination
                            itemAmount={this.props.params.totalAmount}
                            itemsPerPage={this.props.params.techProcessesPerPage}
                            currentPage={this.props.params.techProcessPage}
                            firstSymbol='«'
                            nextSymbol='›'
                            prevSymbol='‹'
                            lastSymbol='»'
                            onPageBtnClick={this.techProcessPageChangeHandler}/>
                    </div>
                </div>
            </div>
            
        );
    }
}