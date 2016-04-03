/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";
import TechOperationStore from "../flux/stores/techOperationStore";
import PageConstants from "../constants/pageConstants";
import TechOperationActions from "../flux/actions/techOperationActions";
import PageParamsManager from "../managers/pageParamsManager";
import NavigationManager from "../managers/navigationManager";
import TableRow from "./common/tableRow";
import ConfirmDelete from "./common/confirmDelete";
import Pagination from "./common/pagination";
import SearchInput from "./common/searchInput";
import ItemsPerPageSelector from "./common/itemsPerPageSelector";

interface ITechOperationListProps {

}

interface ITechOperationListState {
    techOperations: Array<ITechOperation>,
    currentTechOperation: ITechOperation,
    isConfirmDeleting: boolean,
    techOperationAmount: number,
    techOperationsPerPage: number
}

export default class TechOperationList extends React.Component<ITechOperationListProps, ITechOperationListState> {

    constructor(props: ITechOperationListProps, context: any) {
        super(props, context);

        this.props = props;
        this.context = context;
        this.state = {
            techOperations: [],
            currentTechOperation: null,
            isConfirmDeleting: false,
            techOperationAmount: 0,
            techOperationsPerPage: PageConstants.ITEMS_PER_PAGE_INIT
        };
    }

    componentWillMount() {
        TechOperationStore.addChangeTechOperationsListener(this.handleTechOperationsChange)
    }

    componentWillUnmount() {
        TechOperationStore.removeChangeTechOperationsListener(this.handleTechOperationsChange)
    }

    componentDidMount() {
        TechOperationActions.init(PageParamsManager.getPage(), PageParamsManager.getPageSize(), PageParamsManager.getSearchText());
    }

    private handleTechOperationsChange = () => {

        this.setState({
            techOperations: TechOperationStore.getAll(),
            currentTechOperation: null,
            isConfirmDeleting: false,
            techOperationAmount: TechOperationStore.getTechOperationAmount(),
            techOperationsPerPage: TechOperationStore.getTechOperationsPerPage()
        });
    }

    private changeCurrent = (techOperation: ITechOperation) => {
        this.setState({
            techOperations: this.state.techOperations,
            currentTechOperation: techOperation,
            isConfirmDeleting: this.state.isConfirmDeleting,
            techOperationAmount: this.state.techOperationAmount,
            techOperationsPerPage: this.state.techOperationsPerPage
        });
    }

    private techOperationRowDoubleClick = (techOperation: ITechOperation) => {
        NavigationManager.openTechOperationEditor(techOperation.id);
    }

    private newTechOperationBtnClickHandler = () => {
        NavigationManager.openTechOperationEditor(0);
    }

    private handleDeleteSuccess = () => {
        TechOperationActions.remove(this.state.currentTechOperation.id);
    }

    private handleDeleteCancel = () => {
        this.setState({
            techOperations: this.state.techOperations,
            currentTechOperation: this.state.currentTechOperation,
            isConfirmDeleting: !this.state.isConfirmDeleting,
            techOperationAmount: this.state.techOperationAmount,
            techOperationsPerPage: this.state.techOperationsPerPage
        });
    }

    private handleTechOperationsPerPageChange = (techOperationsPerPage: number) => {
        PageParamsManager.changePageSize(techOperationsPerPage);
        TechOperationActions.changeTechOperationsPerPage(techOperationsPerPage);
    }

    private handleTechOperationPageChange = (page: number) => {
        PageParamsManager.changePage(page);
        TechOperationActions.changeTechOperationPage(page);
    }

    private handleTechOperationSearchTextChange = (text: string) => {
        PageParamsManager.changeSearchText(text);
        TechOperationActions.changeTechOperationSearchText(text);
    }

    private refreshBtnClickHandler = (text: string) => {
        TechOperationActions.init(PageParamsManager.getPage(), PageParamsManager.getPageSize(), PageParamsManager.getSearchText());
        this.setState({
            techOperations: [],
            currentTechOperation: null,
            isConfirmDeleting: false,
            techOperationAmount: 0,
            techOperationsPerPage: this.state.techOperationsPerPage
        });
    }

    render(): React.ReactElement<{}> {

        var techOperationRows = [];

        for (var key in this.state.techOperations) {
            var techOperation = this.state.techOperations[key];

            techOperationRows.push(<TableRow key={key}
                item={techOperation}
                isCurrent={this.state.currentTechOperation == techOperation}
                changeCurrent={this.changeCurrent}
                rowDoubleClickHandler={this.techOperationRowDoubleClick}>
                <td  style={{ width: 25 + '%' }}>{techOperation.id}</td>
                <td  style={{ width: 75 + '%' }}>{techOperation.name}</td>
            </TableRow>);
        }

        return (
            <div className="panel panel-default inner" style={{ marginBottom: 0 + 'px', display: 'flex', flexDirection: 'column' }}>
                <div className="panel-heading">
                    <h4>Технологические операции</h4>
                </div>
                <div className="panel-body" style={{ display: 'flex', flexDirection: 'column' }}>
                    {this.state.isConfirmDeleting ?
                        <ConfirmDelete
                            id={this.state.currentTechOperation.id}
                            title={"Подтверждение удаления технологической операции"}
                            message={"Вы действительно хотите удалить технологическую операцию " + this.state.currentTechOperation.name}
                            success={this.handleDeleteSuccess}
                            cancel={this.handleDeleteCancel}/>
                        :
                        <div className="input-group">
                            <div className="input-group-btn">
                                <button className="btn btn-default" type="button" onClick={this.newTechOperationBtnClickHandler}><span className="glyphicon glyphicon-plus"></span></button>
                                <button className="btn btn-default" type="button" onClick={function () { this.setState({ currentTechOperation: this.state.currentTechOperation, isConfirmDeleting: true }); }.bind(this) }><span className="glyphicon glyphicon-trash"></span></button>
                                <button className="btn btn-default" type="button" onClick={this.refreshBtnClickHandler}><span className="glyphicon glyphicon-refresh"></span></button>
                            </div>
                            <SearchInput text="Поиск..." onChange={ function (text) { this.handleTechOperationSearchTextChange(text) }.bind(this) } />
                            <ItemsPerPageSelector onChange={this.handleTechOperationsPerPageChange}/>
                        </div>
                    }
                    <div style={{ marginBottom: 10 + 'px', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ overflowY: 'auto' }}>
                            <table className="table table-bordered" style={{ marginBottom: 1 + 'px' }}>
                                <thead>
                                    <tr>
                                        <th style={{ width: 25 + '%' }}>ID</th>
                                        <th style={{ width: 75 + '%' }}>Наименование</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {techOperationRows}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Pagination
                        itemAmount={this.state.techOperationAmount}
                        itemsPerPage={this.state.techOperationsPerPage}
                        firstSymbol='«'
                        nextSymbol='›'
                        prevSymbol='‹'
                        lastSymbol='»'
                        updatePage={this.handleTechOperationPageChange}/>
                </div>
            </div>
        )
    }
}


