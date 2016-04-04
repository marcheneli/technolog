/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";
import ToolStore from "../flux/stores/toolStore";
import PageConstants from "../constants/pageConstants";
import ToolActions from "../flux/actions/toolActions";
import PageParamsManager from "../managers/pageParamsManager";
import NavigationManager from "../managers/navigationManager";
import ToolList from "./toolList";

interface IToolListPanelProps {

}

interface IToolListPanelState {
    tools: Array<ITool>
}

export default class ToolListPanel extends React.Component<IToolListPanelProps, IToolListPanelState> {

    constructor(props: IToolListPanelProps, context: any) {
        super(props, context);

        this.props = props;
        this.context = context;
        this.state = {
            tools: []
        };
    }

    componentWillMount() {
        ToolStore.addChangeToolsListener(this.handleToolsChange)
    }

    componentWillUnmount() {
        ToolStore.removeChangeToolsListener(this.handleToolsChange)
    }

    componentDidMount() {
        ToolActions.init(PageParamsManager.getPage(), PageParamsManager.getPageSize(), PageParamsManager.getSearchText());
    }

    private handleToolsChange = () => {

        this.setState({
            tools: ToolStore.getAll()
        });
    }

    private changeCurrent = (tool: ITool) => {
        this.setState({
            tools: this.state.tools
        });
    }

    private toolEditFormOpen = (toolId: number) => {
        NavigationManager.openToolEditor(toolId);
    }

    private newToolBtnClickHandler = () => {
        NavigationManager.openToolEditor(0);
    }

    private handleToolDelete = (toolId: number) => {
        ToolActions.remove(toolId);
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

    private toolRefresh = () => {
        ToolActions.init(PageParamsManager.getPage(), PageParamsManager.getPageSize(), PageParamsManager.getSearchText());
        this.setState({
            tools: []
        });
    }

    render(): React.ReactElement<{}> {
        return (
            <div className="panel panel-default inner" style={{ marginBottom: 0 + 'px', display: 'flex', flexDirection: 'column' }}>
                <div className="panel-heading">
                    <h4>Инструменты</h4>
                </div>
                <div className="panel-body" style={{ display: 'flex', flexDirection: 'column' }}>
                    <ToolList
                        tools={this.state.tools}
                        onNewToolClick={this.newToolBtnClickHandler}
                        onToolDelete={this.handleToolDelete}
                        onToolDoubleClick={this.toolEditFormOpen}
                        onToolPageChange={this.handleToolPageChange}
                        onToolSearchTextChange={this.handleToolSearchTextChange}
                        onToolsPerPageChange={this.handleToolsPerPageChange}
                        onToolsRefresh={this.toolRefresh}
                        />
                </div>
            </div>
        )
    }
}

