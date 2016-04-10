/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";
import TechStepStore from "../flux/stores/techStepStore";
import PageConstants from "../constants/pageConstants";
import TechStepActions from "../flux/actions/techStepActions";
import PageParamsManager from "../managers/pageParamsManager";
import NavigationManager from "../managers/navigationManager";
import TableRow from "./common/tableRow";
import ConfirmDelete from "./common/confirmDelete";
import Pagination from "./common/pagination";
import SearchInput from "./common/searchInput";
import ItemsPerPageSelector from "./common/itemsPerPageSelector";

interface ITechStepListProps {

}

interface ITechStepListState {
    techSteps: Array<ITechStep>,
    currentTechStep: ITechStep,
    isConfirmDeleting: boolean,
    techStepAmount: number,
    techStepsPerPage: number
}

export default class TechStepList extends React.Component<ITechStepListProps, ITechStepListState> {

    constructor(props: ITechStepListProps, context: any) {
        super(props, context);

        this.props = props;
        this.context = context;
        this.state = {
            techSteps: [],
            currentTechStep: null,
            isConfirmDeleting: false,
            techStepAmount: 0,
            techStepsPerPage: PageConstants.ITEMS_PER_PAGE_INIT
        };
    }

    componentWillMount() {
        TechStepStore.addChangeTechStepsListener(this.handleTechStepsChange)
    }

    componentWillUnmount() {
        TechStepStore.removeChangeTechStepsListener(this.handleTechStepsChange)
    }

    componentDidMount() {
        TechStepActions.init(PageParamsManager.getPage(), PageParamsManager.getPageSize(), PageParamsManager.getSearchText());
    }

    private handleTechStepsChange = () => {

        this.setState({
            techSteps: TechStepStore.getAll(),
            currentTechStep: null,
            isConfirmDeleting: false,
            techStepAmount: TechStepStore.getTechStepAmount(),
            techStepsPerPage: TechStepStore.getTechStepsPerPage()
        });
    }

    private changeCurrent = (techStep: ITechStep) => {
        this.setState({
            techSteps: this.state.techSteps,
            currentTechStep: techStep,
            isConfirmDeleting: this.state.isConfirmDeleting,
            techStepAmount: this.state.techStepAmount,
            techStepsPerPage: this.state.techStepsPerPage
        });
    }

    private techStepRowDoubleClick = (techStep: ITechStep) => {
        NavigationManager.openTechStepEditor(techStep.id);
    }

    private newTechStepBtnClickHandler = () => {
        NavigationManager.openTechStepEditor(0);
    }

    private handleDeleteSuccess = () => {
        TechStepActions.remove(this.state.currentTechStep.id);
    }

    private handleDeleteCancel = () => {
        this.setState({
            techSteps: this.state.techSteps,
            currentTechStep: this.state.currentTechStep,
            isConfirmDeleting: !this.state.isConfirmDeleting,
            techStepAmount: this.state.techStepAmount,
            techStepsPerPage: this.state.techStepsPerPage
        });
    }

    private handleTechStepsPerPageChange = (techStepsPerPage: number) => {
        PageParamsManager.changePageSize(techStepsPerPage);
        TechStepActions.changeTechStepsPerPage(techStepsPerPage);
    }

    private handleTechStepPageChange = (page: number) => {
        PageParamsManager.changePage(page);
        TechStepActions.changeTechStepPage(page);
    }

    private handleTechStepSearchTextChange = (text: string) => {
        PageParamsManager.changeSearchText(text);
        TechStepActions.changeTechStepSearchText(text);
    }

    private refreshBtnClickHandler = (text: string) => {
        TechStepActions.init(PageParamsManager.getPage(), PageParamsManager.getPageSize(), PageParamsManager.getSearchText());
        this.setState({
            techSteps: [],
            currentTechStep: null,
            isConfirmDeleting: false,
            techStepAmount: 0,
            techStepsPerPage: this.state.techStepsPerPage
        });
    }

    render(): React.ReactElement<{}> {

        var techStepRows = [];

        for (var key in this.state.techSteps) {
            var techStep = this.state.techSteps[key];

            techStepRows.push(<TableRow key={key}
                item={techStep}
                isCurrent={this.state.currentTechStep == techStep}
                changeCurrent={this.changeCurrent}
                rowDoubleClickHandler={this.techStepRowDoubleClick}>
                <td  style={{ width: 25 + '%' }}>{techStep.id}</td>
                <td  style={{ width: 75 + '%' }}>{techStep.description}</td>
            </TableRow>);
        }

        return (
            <div className="panel panel-default inner" style={{ marginBottom: 0 + 'px', display: 'flex', flexDirection: 'column' }}>
                <div className="panel-heading">
                    <h4>Технологические шаги</h4>
                </div>
                <div className="panel-body" style={{ display: 'flex', flexDirection: 'column' }}>
                    {this.state.isConfirmDeleting ?
                        <ConfirmDelete
                            id={this.state.currentTechStep.id}
                            title={"Подтверждение удаления технологического шага"}
                            message={"Вы действительно хотите удалить технологический шаг " + this.state.currentTechStep.description}
                            success={this.handleDeleteSuccess}
                            cancel={this.handleDeleteCancel}/>
                        :
                        <div className="input-group">
                            <div className="input-group-btn">
                                <button className="btn btn-default" type="button" onClick={this.newTechStepBtnClickHandler}><span className="glyphicon glyphicon-plus"></span></button>
                                <button className="btn btn-default" type="button" onClick={function () { this.setState({ currentTechStep: this.state.currentTechStep, isConfirmDeleting: true }); }.bind(this) }><span className="glyphicon glyphicon-trash"></span></button>
                                <button className="btn btn-default" type="button" onClick={this.refreshBtnClickHandler}><span className="glyphicon glyphicon-refresh"></span></button>
                            </div>
                            <SearchInput text="Поиск..." onChange={ function (text) { this.handleTechStepSearchTextChange(text) }.bind(this) } />
                            <ItemsPerPageSelector onChange={this.handleTechStepsPerPageChange}/>
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
                                    {techStepRows}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

