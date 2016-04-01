/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";
import TechProcessStore from "../flux/stores/techProcessStore";
import PageConstants from "../constants/pageConstants";
import TechProcessActions from "../flux/actions/techProcessActions";
import PageParamsManager from "../managers/pageParamsManager";
import NavigationManager from "../managers/navigationManager";
import TableRow from "./common/tableRow";
import ConfirmDelete from "./common/confirmDelete";
import Pagination from "./common/pagination";
import SearchInput from "./common/searchInput";
import ItemsPerPageSelector from "./common/itemsPerPageSelector";

interface ITechProcessListProps {

}

interface ITechProcessListState {
    techProcesses: Array<ITechProcess>,
    currentTechProcess: ITechProcess,
    isConfirmDeleting: boolean,
    techProcessAmount: number,
    techProcessesPerPage: number
}

export default class TechProcessList extends React.Component<ITechProcessListProps, ITechProcessListState> {

    constructor(props: ITechProcessListProps, context: any) {
        super(props, context);

        this.props = props;
        this.context = context;
        this.state = {
            techProcesses: [],
            currentTechProcess: null,
            isConfirmDeleting: false,
            techProcessAmount: 0,
            techProcessesPerPage: PageConstants.ITEMS_PER_PAGE_INIT
        };
    }

    componentWillMount() {
        TechProcessStore.addChangeTechProcessesListener(this.handleTechProcessesChange)
    }

    componentWillUnmount() {
        TechProcessStore.removeChangeTechProcessesListener(this.handleTechProcessesChange)
    }

    componentDidMount() {
        console.log("mount");
        TechProcessActions.init(PageParamsManager.getPage(), PageParamsManager.getPageSize(), PageParamsManager.getSearchText());
    }

    private handleTechProcessesChange = () => {

        this.setState({
            techProcesses: TechProcessStore.getAll(),
            currentTechProcess: null,
            isConfirmDeleting: false,
            techProcessAmount: TechProcessStore.getTechProcessAmount(),
            techProcessesPerPage: TechProcessStore.getTechProcessesPerPage()
        });
    }

    private changeCurrent = (techProcess: ITechProcess) => {
        this.setState({
            techProcesses: this.state.techProcesses,
            currentTechProcess: techProcess,
            isConfirmDeleting: this.state.isConfirmDeleting,
            techProcessAmount: this.state.techProcessAmount,
            techProcessesPerPage: this.state.techProcessesPerPage
        });
    }

    private techProcessRowDoubleClick = (techProcess: ITechProcess) => {
        NavigationManager.openTechProcessEditor(techProcess.id);
    }

    private newTechProcessBtnClickHandler = () => {
        NavigationManager.openTechProcessEditor(0);
    }

    private handleDeleteSuccess = () => {
        TechProcessActions.remove(this.state.currentTechProcess.id);
    }

    private handleDeleteCancel = () => {
        this.setState({
            techProcesses: this.state.techProcesses,
            currentTechProcess: this.state.currentTechProcess,
            isConfirmDeleting: !this.state.isConfirmDeleting,
            techProcessAmount: this.state.techProcessAmount,
            techProcessesPerPage: this.state.techProcessesPerPage
        });
    }

    private handleTechProcessesPerPageChange = (techProcessesPerPage: number) => {
        PageParamsManager.changePageSize(techProcessesPerPage);
        TechProcessActions.changeTechProcessesPerPage(techProcessesPerPage);
    }

    private handleTechProcessPageChange = (page: number) => {
        PageParamsManager.changePage(page);
        TechProcessActions.changeTechProcessPage(page);
    }

    private handleTechProcessSearchTextChange = (text: string) => {
        PageParamsManager.changeSearchText(text);
        TechProcessActions.changeTechProcessSearchText(text);
    }

    private refreshBtnClickHandler = (text: string) => {
        TechProcessActions.init(PageParamsManager.getPage(), PageParamsManager.getPageSize(), PageParamsManager.getSearchText());
        this.setState({
            techProcesses: [],
            currentTechProcess: null,
            isConfirmDeleting: false,
            techProcessAmount: 0,
            techProcessesPerPage: this.state.techProcessesPerPage
        });
    }

    render(): React.ReactElement<{}> {

        var techProcessRows = [];

        for (var key in this.state.techProcesses) {
            var techProcess = this.state.techProcesses[key];

            techProcessRows.push(<TableRow key={key}
                item={techProcess}
                isCurrent={this.state.currentTechProcess == techProcess}
                changeCurrent={this.changeCurrent}
                rowDoubleClickHandler={this.techProcessRowDoubleClick}>
                <td  style={{ width: 25 + '%' }}>{techProcess.id}</td>
                <td  style={{ width: 75 + '%' }}>{techProcess.name}</td>
            </TableRow>);
        }

        return (
            <div className="panel panel-default inner" style={{ marginBottom: 0 + 'px', display: 'flex', flexDirection: 'column' }}>
                <div className="panel-heading">
                    <h4>Инструменты</h4>
                </div>
                <div className="panel-body" style={{ display: 'flex', flexDirection: 'column' }}>
                    {this.state.isConfirmDeleting ?
                        <ConfirmDelete
                            id={this.state.currentTechProcess.id}
                            title={"Подтверждение удаления инструмента"}
                            message={"Вы действительно хотите удалить инструмент " + this.state.currentTechProcess.name}
                            success={this.handleDeleteSuccess}
                            cancel={this.handleDeleteCancel}/>
                        :
                        <div className="input-group">
                            <div className="input-group-btn">
                                <button className="btn btn-default" type="button" onClick={this.newTechProcessBtnClickHandler}><span className="glyphicon glyphicon-plus"></span></button>
                                <button className="btn btn-default" type="button" onClick={function () { this.setState({ currentTechProcess: this.state.currentTechProcess, isConfirmDeleting: true }); }.bind(this) }><span className="glyphicon glyphicon-trash"></span></button>
                                <button className="btn btn-default" type="button" onClick={this.refreshBtnClickHandler}><span className="glyphicon glyphicon-refresh"></span></button>
                            </div>
                            <SearchInput text="Поиск..." onChange={ function (text) { this.handleTechProcessSearchTextChange(text) }.bind(this) } />
                            <ItemsPerPageSelector onChange={this.handleTechProcessesPerPageChange}/>
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
                                    {techProcessRows}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Pagination
                        itemAmount={this.state.techProcessAmount}
                        itemsPerPage={this.state.techProcessesPerPage}
                        firstSymbol='«'
                        nextSymbol='›'
                        prevSymbol='‹'
                        lastSymbol='»'
                        updatePage={this.handleTechProcessPageChange}/>
                </div>
            </div>
        )
    }
}



