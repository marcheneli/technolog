/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";
import PageConstants from "../constants/pageConstants";
import Utils from "../utils/utils";
import ToolStore from "../flux/stores/secondToolStore";
import ToolActions from "../flux/actions/toolActions";
import ToolActionCreator from "../flux/actions/toolActionCreator";
import PanelActions from "../flux/actions/panelActions";
import ComponentType from "./componentType";
import TableRow from "./common/tableRow";
import Pagination from "./common/pagination";
import SearchInput from "./common/searchInput";
import DialogContainer from "./common/dialogContainer";
import ConfirmationDialogPanel from "./common/confirmationDialogPanel";
import ItemsPerPageSelector from "./common/itemsPerPageSelector";
import ItemListControlPanel from "./common/itemListControlPanel";
import Alert from "./common/alert";
import PendingAnimation from "./common/pendingAnimation";
import BlockingContainer from "./common/blockingContainer";
import PendingPanel from "./common/pendingPanel";

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
        var selectedTools;
        var tools = this.props.tools;

        if (event.target.checked) {
            selectedTools = tools.map((tool: ITool) => {
                return tool;
            });
        } else {
            selectedTools = [];
        }
        
        this.props.onSelectedToolsChange(selectedTools);
    }

    private onRowDoubleClick = (tool: ITool) => {
        PanelActions.open(this.props.componentId, ComponentType.ToolEditPanel, { tool: tool });
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
                changeCurrent={() => { } }
                rowDoubleClickHandler={this.onRowDoubleClick}>
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
    onSelectedToolsChange(selectedTools: Array<ITool>): void;
    componentId: string;
}

interface IToolListState {
    tools: Array<ITool>,
    isConfirmDeleting: boolean,
    totalAmount: number,
    toolsPerPage: number,
    toolSearchText: string,
    toolPage: number,
    alerts: Array<any>,
    isDeleting: boolean,
    isLoading: boolean
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
            toolPage: 0,
            alerts: [],
            isDeleting: false,
            isLoading: false
        };
    }

    componentWillMount() {
        ToolStore.addChangeListener(this.handleToolsChange, this.props.componentId)
    }

    componentWillUnmount() {
        ToolStore.removeChangeListener(this.handleToolsChange, this.props.componentId)
    }

    componentDidMount() {
        ToolActionCreator.load(this.props.componentId,
            0, PageConstants.ITEMS_PER_PAGE_INIT, "");
    }

    private handleToolsChange = () => {
        this.setState(ToolStore.getState(this.props.componentId));
    }

    private toolRowDoubleClick = (tool: ITool) => {

    }

    private newToolBtnClickHandler = () => {

    }

    private toolDeleteHandler = () => {
        ToolActionCreator.openDeleteConfirmation(this.props.componentId);
    }

    private handleDeleteSuccess = () => {
        ToolActionCreator.closeDeleteConfirmation(this.props.componentId);
        ToolActionCreator.delete(this.props.componentId, this.props.selectedTools);
    }

    private handleDeleteCancel = () => {
        ToolActionCreator.closeDeleteConfirmation(this.props.componentId);
    }

    private handleToolsPerPageChange = (toolsPerPage: number) => {
        ToolActionCreator.load(this.props.componentId,
            this.state.toolPage, toolsPerPage, this.state.toolSearchText);
    }

    private handleToolPageChange = (page: number) => {
        ToolActionCreator.load(this.props.componentId,
            page, this.state.toolsPerPage, this.state.toolSearchText);
    }

    private handleToolSearchTextChange = (text: string) => {
        ToolActionCreator.load(this.props.componentId,
            this.state.toolPage, this.state.toolsPerPage, text);
    }

    private refreshBtnClickHandler = () => {
        ToolActionCreator.load(this.props.componentId,
            this.state.toolPage, this.state.toolsPerPage, this.state.toolSearchText);
    }

    private getAlerts(): Array<any> {
        var alerts: Array<any> = [];

        alerts = this.state.alerts.map(function (alert: any, index: number) {
            return (
                <Alert
                    key={alert.id}
                    alert={alert}
                    onCloseClick={() => { } }>
                    <span>{alert.message}</span>
                </Alert>
            );
        });

        return alerts;
    }

    render(): React.ReactElement<{}> {
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {this.getAlerts() }
                <DialogContainer isShow={this.state.isConfirmDeleting}>
                    <ConfirmationDialogPanel
                        title={"Удаление инструмента"}
                        onSuccess={this.handleDeleteSuccess}
                        onCancel={this.handleDeleteCancel}>
                        <span>
                            Вы действительно хотите удалить данный инструмент?
                        </span>
                    </ConfirmationDialogPanel>
                </DialogContainer>
                <DialogContainer isShow={this.state.isDeleting}>
                    <PendingPanel title={"Удаление инструмента"}>
                        <PendingAnimation>
                            <h4>Пожалуйста, подождите.</h4>
                            <h4>Идет удаление.</h4>
                        </PendingAnimation>
                    </PendingPanel>
                </DialogContainer>
                <BlockingContainer isBlocked={this.state.isLoading}>
                    <ItemListControlPanel
                        onNewItem={this.newToolBtnClickHandler}
                        onItemDelete={this.toolDeleteHandler}
                        onRefresh={this.refreshBtnClickHandler}
                        onSearchTextChange={function (text) { this.handleToolSearchTextChange(text) }.bind(this) }
                        isDeleteEnable={this.props.selectedTools.length > 0}
                        isUpdating={this.state.isLoading}
                        />
                    <ToolTable
                        componentId={this.props.componentId}
                        tools={this.state.tools}
                        selectedTools={this.props.selectedTools}
                        onSelectedToolsChange={this.props.onSelectedToolsChange}/>
                    <div className="btn-toolbar">
                        <ItemsPerPageSelector
                            onChange={this.handleToolsPerPageChange}/>
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
                </BlockingContainer>
            </div>
        )
    }
}
