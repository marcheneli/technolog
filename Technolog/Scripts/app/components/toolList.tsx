/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";
import PageConstants from "../constants/pageConstants";
import ToolStore from "../flux/stores/toolStore";
import ToolActions from "../flux/actions/toolActions";
import TableRow from "./common/tableRow";
import ConfirmDelete from "./common/confirmDelete";
import Pagination from "./common/pagination";
import SearchInput from "./common/searchInput";
import ItemsPerPageSelector from "./common/itemsPerPageSelector";
import ItemListControlPanel from "./common/itemListControlPanel"

interface IToolTablbleProps {
    onSelectedToolsChange(selectedTools: Array<ITool>)
}

interface IToolTablbleState {
    tools: Array<ITool>;
    selectedTools: Array<ITool>;
}

class ToolTable
    extends React.Component<IToolTablbleProps, IToolTablbleState> {

    constructor(props: IToolTablbleProps, context: any) {
        super(props, context);

        this.props = props;
        this.context = context;
        this.state = {
            tools: [],
            selectedTools: []
        };
    }

    componentWillMount() {
        ToolStore.addChangeToolsListener(this.handleToolsChange)
    }

    componentWillUnmount() {
        ToolStore.removeChangeToolsListener(this.handleToolsChange)
    }

    componentDidMount() {
        ToolActions.init(ToolStore.getCurrentToolPage(), ToolStore.getToolsPerPage(), ToolStore.getSearchText());
    }

    private handleToolsChange = () => {
        this.setState({
            tools: ToolStore.getAll(),
            selectedTools: []
        });

        this.props.onSelectedToolsChange([]);
    }

    private onToolSelect = (event: any) => {
        var selectedTools = this.state.selectedTools;

        if (event.target.checked) {
            selectedTools[event.target.value] = this.state.tools[event.target.value];

            this.setState({
                tools: this.state.tools,
                selectedTools: selectedTools 
            });
            
        } else {
            delete selectedTools[event.target.value];

            this.setState({
                tools: this.state.tools,
                selectedTools: selectedTools
            });
        }
        
        this.props.onSelectedToolsChange(selectedTools);
    }

    private onAllToolSelect = (event: any) => {
        var selectedTools = this.state.selectedTools;

        if (event.target.checked) {
            for (var key in this.state.tools) {
                selectedTools[key] = this.state.tools[key];
            }

            this.setState({
                tools: this.state.tools,
                selectedTools: selectedTools
            });
        } else {

            selectedTools = [];

            this.setState({
                tools: this.state.tools,
                selectedTools: selectedTools
            });
        }
        
        this.props.onSelectedToolsChange(selectedTools);
    }

    render(): React.ReactElement<IToolTablbleProps> {
        var isAllChecked = (Object.keys(this.state.tools).length ==
            Object.keys(this.state.selectedTools).length);
        var toolRows = [];

        for (var key in this.state.tools) {
            var tool = this.state.tools[key];

            toolRows.push(<TableRow key={key}
                item={tool}
                isCurrent={false}
                changeCurrent={() => { }}
                rowDoubleClickHandler={() => { } }>
                <td  style={{ width: 5 + '%' }}>
                    <input
                        type='checkbox'
                        value={tool.id}
                        onChange={this.onToolSelect}
                        checked={this.state.selectedTools[tool.id]}>
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
    onToolSearchTextChange(text: string): void;
    onToolsPerPageChange(toolAmout: number): void;
    onToolPageChange(toolPage: number): void;
    onNewToolClick(): void;
    onToolDoubleClick(id: number): void;
    onSelectedToolsChange(selectedTools: Array<ITool>): void;
}

interface IToolListState {
    currentTool: ITool,
    isConfirmDeleting: boolean,
    toolAmount: number,
    toolsPerPage: number,
}

export default class ToolList extends React.Component<IToolListProps, IToolListState> {

    constructor(props: IToolListProps, context: any) {
        super(props, context);

        this.props = props;
        this.context = context;
        this.state = {
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

    private handleToolsChange = () => {
        this.setState({
            currentTool: this.state.currentTool,
            isConfirmDeleting: this.state.isConfirmDeleting,
            toolAmount: ToolStore.getToolAmount(),
            toolsPerPage: ToolStore.getToolsPerPage()
        });
    }

    private changeCurrent = (tool: ITool) => {
        this.setState({
            currentTool: tool,
            isConfirmDeleting: this.state.isConfirmDeleting,
            toolAmount: this.state.toolAmount,
            toolsPerPage: this.state.toolsPerPage
        });
    }

    private toolRowDoubleClick = (tool: ITool) => {
        this.props.onToolDoubleClick(tool.id);
    }

    private newToolBtnClickHandler = () => {
        this.props.onNewToolClick();
    }

    private handleDeleteSuccess = () => {
        ToolActions.remove(this.state.currentTool.id);
        this.setState({
            currentTool: this.state.currentTool,
            isConfirmDeleting: !this.state.isConfirmDeleting,
            toolAmount: this.state.toolAmount,
            toolsPerPage: this.state.toolsPerPage
        });
    }

    private handleDeleteCancel = () => {
        this.setState({
            currentTool: this.state.currentTool,
            isConfirmDeleting: !this.state.isConfirmDeleting,
            toolAmount: this.state.toolAmount,
            toolsPerPage: this.state.toolsPerPage
        });
    }

    private handleToolsPerPageChange = (toolsPerPage: number) => {
        this.props.onToolsPerPageChange(toolsPerPage);
    }

    private handleToolPageChange = (page: number) => {
        this.props.onToolPageChange(page);
    }

    private handleToolSearchTextChange = (text: string) => {
        this.props.onToolSearchTextChange(text);
    }

    private refreshBtnClickHandler = () => {
        ToolActions.init(ToolStore.getCurrentToolPage(), ToolStore.getToolsPerPage(), ToolStore.getSearchText());
    }

    render(): React.ReactElement<{}> {
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {this.state.isConfirmDeleting ?
                    <ConfirmDelete
                        id={this.state.currentTool.id}
                        title={"Подтверждение удаления инструмента"}
                        message={"Вы действительно хотите удалить инструмент " + this.state.currentTool.name}
                        success={this.handleDeleteSuccess}
                        cancel={this.handleDeleteCancel}/>
                    :
                    <ItemListControlPanel
                        onNewItem={this.newToolBtnClickHandler}
                        onItemDelete={function () { this.setState({ currentTool: this.state.currentTool, isConfirmDeleting: true }); }.bind(this) }
                        onRefresh={this.refreshBtnClickHandler}
                        onItemsPerPageChange={this.handleToolsPerPageChange}
                        onSearchTextChange={function (text) { this.handleToolSearchTextChange(text) }.bind(this) }/>
                }
                <ToolTable
                    onSelectedToolsChange={this.props.onSelectedToolsChange}/>
                <Pagination
                    itemAmount={this.state.toolAmount}
                    itemsPerPage={this.state.toolsPerPage}
                    firstSymbol='«'
                    nextSymbol='›'
                    prevSymbol='‹'
                    lastSymbol='»'
                    updatePage={this.handleToolPageChange}/>
            </div>
        )
    }
}
