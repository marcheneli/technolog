import * as React from 'react';
import TechStepTable from '../../containers/techStep/TechStepTable';
import ItemListControlPanel from '../common/ItemListControlPanel';
import ItemsPerPageSelector from '../common/ItemsPerPageSelector';
import Pagination from '../common/Pagination';
import DialogBackground from '../common/DialogBackground';
import ConfirmationDialogPanel from '../common/ConfirmationDialogPanel';
import PendingPanel from '../common/PendingPanel';
import PendingAnimation from '../common/PendingAnimation';

interface ITechStepListProps {
    id: number;
    onMount();
    onDeleteBtnClick();
    onAddBtnClick();
    onDeleteConfirm(techSteps);
    onDeleteCancel();
    load(page, itemsPerPage, searchText);
    techSteps: Array<any>;
    selectedTechSteps: Array<any>;
    params: {
        isConfirmDeleting: boolean;
        isDeleting: boolean;
        isPending: boolean;
        totalAmount: number;
        techStepPage: number;
        techStepsPerPage: number;
        searchText: string;
    }
}

export default class TechStepList extends React.Component<ITechStepListProps, {}> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.onMount();
    }

    refreshBtnClickHandler = () => {
        this.props.load(this.props.params.techStepPage,
            this.props.params.techStepsPerPage,
            this.props.params.searchText);
    }

    techStepPageChangeHandler = (page) => {
        this.props.load(page,
            this.props.params.techStepsPerPage,
            this.props.params.searchText);
    }

    techStepsPerPageChangeHandler = (itemsPerPage) => {
        this.props.load(this.props.params.techStepPage,
            itemsPerPage,
            this.props.params.searchText);
    }

    searchTextChangeHandler = (text) => {
        this.props.load(this.props.params.techStepPage,
            this.props.params.techStepsPerPage,
            text);
    }

    deleteConfirmClickHandler = () => {
        let techStepsForDeleting = this.props.selectedTechSteps.map(id => { return { id: id }; });

        this.props.onDeleteConfirm(techStepsForDeleting);
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
                            isDeleteEnable={this.props.selectedTechSteps.length > 0}
                            isUpdating={this.props.params.isPending}
                            />
                    </div>
                    <TechStepTable
                        id={this.props.id}
                        techSteps={this.props.techSteps}
                        selectedTechSteps={this.props.selectedTechSteps}/>
                    <div className="btn-techStepbar" style={{ flexShrink: 0 }}>
                        <ItemsPerPageSelector
                            onChange={this.techStepsPerPageChangeHandler}/>
                        <Pagination
                            itemAmount={this.props.params.totalAmount}
                            itemsPerPage={this.props.params.techStepsPerPage}
                            currentPage={this.props.params.techStepPage}
                            firstSymbol='«'
                            nextSymbol='›'
                            prevSymbol='‹'
                            lastSymbol='»'
                            onPageBtnClick={this.techStepPageChangeHandler}/>
                    </div>
                </div>
            </div>
            
        );
    }
}