/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";
import ToolStore from "../flux/stores/toolStore";
import PageConstants from "../constants/pageConstants";
import ToolActions from "../flux/actions/toolActions";
import PageParamsManager from "../managers/pageParamsManager";
import NavigationManager from "../managers/navigationManager";
import TableRow from "./common/tableRow";
import ConfirmDelete from "./common/confirmDelete";
import Pagination from "./common/pagination";
import SearchInput from "./common/searchInput";
import ItemsPerPageSelector from "./common/itemsPerPageSelector";

interface IToolListProps {

}

interface IToolListState {
    tools: Array<ITool>,
    currentTool: ITool,
    isConfirmDeleting: boolean,
    toolAmount: number,
    toolsPerPage: number
}

export default class ToolList extends React.Component<IToolListProps, IToolListState> {

    constructor(props: IToolListProps, context: any) {
        super(props, context);

        this.props = props;
        this.context = context;
        this.state = {
            tools: [],
            currentTool: null,
            isConfirmDeleting: false,
            toolAmount: 0,
            toolsPerPage: PageConstants.ITEMS_PER_PAGE_INIT
        };
    }

    componentWillMount() {
        ToolStore.addChangeToolsListener(this.handleToolsChange)
    }

    componentWillUnmount() {
        ToolStore.removeChangeToolsListener(this.handleToolsChange)
    }

    componentDidMount() {
        console.log("mount");
        ToolActions.init(PageParamsManager.getPage(), PageParamsManager.getPageSize(), PageParamsManager.getSearchText());
    }

    private handleToolsChange = () => {

        this.setState({
            tools: ToolStore.getAll(),
            currentTool: null,
            isConfirmDeleting: false,
            toolAmount: ToolStore.getToolAmount(),
            toolsPerPage: ToolStore.getToolsPerPage()
        });
    }

    private changeCurrent = (tool: ITool) => {
        this.setState({
            tools: this.state.tools,
            currentTool: tool,
            isConfirmDeleting: this.state.isConfirmDeleting,
            toolAmount: this.state.toolAmount,
            toolsPerPage: this.state.toolsPerPage
        });
    }

    private toolRowDoubleClick = (tool: ITool) => {
        NavigationManager.openToolEditor(tool.id);
    }

    private newToolBtnClickHandler = () => {
        NavigationManager.openToolEditor(0);
    }

    private handleDeleteSuccess = () => {
        ToolActions.remove(this.state.currentTool.id);
    }

    private handleDeleteCancel = () => {
        this.setState({
            tools: this.state.tools,
            currentTool: this.state.currentTool,
            isConfirmDeleting: !this.state.isConfirmDeleting,
            toolAmount: this.state.toolAmount,
            toolsPerPage: this.state.toolsPerPage
        });
    }

    private handleToolsPerPageChange = (toolsPerPage: number) => {
        PageParamsManager.changePageSize(toolsPerPage);
        ToolActions.changeToolsPerPage(toolsPerPage);
    }

    private handleToolPageChange = (page: number) => {
        PageParamsManager.changePage(page);
        ToolActions.changeToolPage(page);
    }

    private handleToolSearchTextChange = (text: string) => {
        PageParamsManager.changeSearchText(text);
        ToolActions.changeToolSearchText(text);
    }

    private refreshBtnClickHandler = (text: string) => {
        ToolActions.init(PageParamsManager.getPage(), PageParamsManager.getPageSize(), PageParamsManager.getSearchText());
        this.setState({
            tools: [],
            currentTool: null,
            isConfirmDeleting: false,
            toolAmount: 0,
            toolsPerPage: this.state.toolsPerPage
        });
    }

    render(): React.ReactElement<{}> {

        var toolRows = [];

        for (var key in this.state.tools) {
            var tool = this.state.tools[key];

            toolRows.push(<TableRow key={key}
                item={tool}
                isCurrent={this.state.currentTool == tool}
                changeCurrent={this.changeCurrent}
                rowDoubleClickHandler={this.toolRowDoubleClick}>
                <td  style={{ width: 25 + '%' }}>{tool.id}</td>
                <td  style={{ width: 75 + '%' }}>{tool.name}</td>
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
                            id={this.state.currentTool.id}
                            title={"Подтверждение удаления инструмента"}
                            message={"Вы действительно хотите удалить инструмент " + this.state.currentTool.name}
                            success={this.handleDeleteSuccess}
                            cancel={this.handleDeleteCancel}/>
                        :
                        <div className="input-group">
                            <div className="input-group-btn">
                                <button className="btn btn-default" type="button" onClick={this.newToolBtnClickHandler}><span className="glyphicon glyphicon-plus"></span></button>
                                <button className="btn btn-default" type="button" onClick={function () { this.setState({ currentTool: this.state.currentTool, isConfirmDeleting: true }); }.bind(this) }><span className="glyphicon glyphicon-trash"></span></button>
                                <button className="btn btn-default" type="button" onClick={this.refreshBtnClickHandler}><span className="glyphicon glyphicon-refresh"></span></button>
                            </div>
                            <SearchInput text="Поиск..." onChange={ function (text) { this.handleToolSearchTextChange(text) }.bind(this) } />
                            <ItemsPerPageSelector onChange={this.handleToolsPerPageChange}/>
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
                                    {toolRows}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Pagination
                        itemAmount={this.state.toolAmount}
                        itemsPerPage={this.state.toolsPerPage}
                        firstSymbol='«'
                        nextSymbol='›'
                        prevSymbol='‹'
                        lastSymbol='»'
                        updatePage={this.handleToolPageChange}/>
                </div>
            </div>
        )
    }
}
