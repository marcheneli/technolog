/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";
import PageConstants from "../constants/pageConstants";
import Utils from "../utils/utils";
import ToolStore from "../flux/stores/newToolStore";
import ToolActions from "../flux/actions/toolActions";
import TableRow from "./common/tableRow";
import ConfirmDelete from "./common/confirmDelete";
import ToolDeleteConfirmation from "./toolDeleteConfirmation";
import Pagination from "./common/pagination";
import SearchInput from "./common/searchInput";
import ItemsPerPageSelector from "./common/itemsPerPageSelector";
import ItemListControlPanel from "./common/itemListControlPanel"

interface IToolTablbleProps {
    tools: Array<ITool>;
    onSelectedToolsChange(selectedTools: Array<ITool>);
    selectedTools: Array<ITool>;
    componentId: string;
}

interface IToolTablbleState {
}

class ToolTable
    extends React.Component<IToolTablbleProps, IToolTablbleState> {

    constructor(props: IToolTablbleProps, context: any) {
        super(props, context);
        this.props = props;
        this.context = context;
        this.state = {
        };
    }

    private onToolSelect = (event: any) => {
        var selectedTools = this.props.selectedTools;
        var tools = this.props.tools;

        if (event.target.checked) {
            var tool;

            for (var i = 0; i < tools.length; i++) {
                if (tools[i].id == event.target.value) {
                    tool = tools[i];
                    break;
                }
            }

            selectedTools.push(tool);
            console.log(selectedTools);
        } else {
            for (var i = 0; i < selectedTools.length; i++) {
                if (selectedTools[i].id == event.target.value) {
                    selectedTools.splice(i, 1);
                    break;
                }
            }
        }
        
        this.props.onSelectedToolsChange(selectedTools);
    }

    private onAllToolSelect = (event: any) => {
        var selectedTools = this.props.selectedTools;
        var tools = this.props.tools;

        if (event.target.checked) {
            selectedTools = tools;
        } else {
            selectedTools = [];
        }
        
        this.props.onSelectedToolsChange(selectedTools);
    }

    render(): React.ReactElement<IToolTablbleProps> {
        var toolRows = [];
        var tools = this.props.tools;
        var selectedTools = this.props.selectedTools;

        var isAllChecked = tools.length == selectedTools.length && tools.length != 0;

        for (var i = 0; i < tools.length; i++) {
            var tool = tools[i];
            var selectedTool = null;

            for (var j = 0; j < selectedTools.length; j++) {
                if (selectedTools[j].id == tool.id) {
                    selectedTool = selectedTools[j];
                    break;
                }
            }

            toolRows.push(<TableRow key={i}
                item={tool}
                isCurrent={false}
                changeCurrent={() => { }}
                rowDoubleClickHandler={() => { } }>
                <td  style={{ width: 5 + '%' }}>
                    <input
                        type='checkbox'
                        value={tool.id}
                        onChange={this.onToolSelect}
                        checked={selectedTool}>
                    </input>
                </td>
                <td  style={{ width: 15 + '%' }}>{tool.id}</td>
                <td  style={{ width: 80 + '%' }}>{tool.name}</td>
            </TableRow>);
        }

        return (
            <div style={{ marginBottom: 10 + 'px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ overflowY: 'auto' }}>
                    <table className="table table-bordered" style={{ marginBottom: 1 + 'px' }}>
                        <thead>
                            <tr>
                                <th  style={{ width: 5 + '%' }}>
                                    <input
                                        type='checkbox'
                                        onChange={this.onAllToolSelect}
                                        checked={isAllChecked}>
                                    </input>
                                </th>
                                <th style={{ width: 15 + '%' }}>ID</th>
                                <th style={{ width: 80 + '%' }}>Наименование</th>
                            </tr>
                        </thead>
                        <tbody>
                            {toolRows}
                        </tbody>
                    </table>
                </div>
            </div>    
        );
    }
}

interface IToolListProps {
    selectedTools: Array<ITool>;
    onToolSearchTextChange(text: string): void;
    onToolsPerPageChange(toolAmout: number): void;
    onToolPageChange(toolPage: number): void;
    onNewToolClick(): void;
    onToolDoubleClick(id: number): void;
    onSelectedToolsChange(selectedTools: Array<ITool>): void;
    componentId: string;
}

interface IToolListState {
    tools: Array<ITool>,
    isConfirmDeleting: boolean,
    totalAmount: number,
    toolsPerPage: number,
    toolSearchText: string,
    toolPage: number
}

export default class ToolList extends React.Component<IToolListProps, IToolListState> {

    constructor(props: IToolListProps, context: any) {
        super(props, context);

        this.props = props;
        this.context = context;
        this.state = {
            tools: [],
            isConfirmDeleting: false,
            totalAmount: 0,
            toolsPerPage: PageConstants.ITEMS_PER_PAGE_INIT,
            toolSearchText: "",
            toolPage: 0
        };
    }

    componentWillMount() {
        ToolStore.addChangeListener(this.handleToolsChange, this.props.componentId)
    }

    componentWillUnmount() {
        ToolStore.removeChangeListener(this.handleToolsChange, this.props.componentId)
    }

    componentDidMount() {
        ToolActions.load(this.props.componentId,
            0, PageConstants.ITEMS_PER_PAGE_INIT, "");
    }

    private handleToolsChange = () => {
        this.setState(ToolStore.getState(this.props.componentId));
    }

    private toolRowDoubleClick = (tool: ITool) => {
        this.props.onToolDoubleClick(tool.id);
    }

    private newToolBtnClickHandler = () => {
        this.props.onNewToolClick();
    }

    private toolDeleteHandler = () => {
        ToolActions.showToolDeleteConfirmation(this.props.componentId);
    }

    private handleDeleteSuccess = () => {
        ToolActions;
    }

    private handleDeleteCancel = () => {
        ToolActions.closeToolDeleteConfirmation(this.props.componentId);
    }

    private handleToolsPerPageChange = (toolsPerPage: number) => {
        ToolActions.load(this.props.componentId,
            this.state.toolPage,
            toolsPerPage,
            this.state.toolSearchText);
    }

    private handleToolPageChange = (page: number) => {
        ToolActions.load(this.props.componentId,
            page,
            this.state.toolsPerPage,
            this.state.toolSearchText);
    }

    private handleToolSearchTextChange = (text: string) => {
        ToolActions.load(this.props.componentId,
            this.state.toolPage,
            this.state.toolsPerPage,
            text);
    }

    private refreshBtnClickHandler = () => {

    }

    render(): React.ReactElement<{}> {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
                <ItemListControlPanel
                    onNewItem={this.newToolBtnClickHandler}
                    onItemDelete={this.toolDeleteHandler}
                    onRefresh={this.refreshBtnClickHandler}
                    onItemsPerPageChange={this.handleToolsPerPageChange}
                    onSearchTextChange={function (text) { this.handleToolSearchTextChange(text) }.bind(this) }
                    />
                <ToolTable
                    componentId={this.props.componentId}
                    tools={this.state.tools}
                    selectedTools={this.props.selectedTools}
                    onSelectedToolsChange={this.props.onSelectedToolsChange}/>
                <Pagination
                    itemAmount={this.state.totalAmount}
                    itemsPerPage={this.state.toolsPerPage}
                    currentPage={this.state.toolPage}
                    firstSymbol='«'
                    nextSymbol='›'
                    prevSymbol='‹'
                    lastSymbol='»'
                    updatePage={this.handleToolPageChange}/>
            </div>
        )
    }
}
