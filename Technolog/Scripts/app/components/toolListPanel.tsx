/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";
import ToolStore from "../flux/stores/toolStore";
import PageConstants from "../constants/pageConstants";
import ToolActions from "../flux/actions/toolActions";
import PageParamsManager from "../managers/pageParamsManager";
import NavigationManager from "../managers/navigationManager";
import ToolList from "./toolList";
import ToolDeleteConfirmation from "./toolDeleteConfirmation";

interface IToolListPanelProps {
    componentId: string;
}

interface IToolListPanelState {
    selectedTools: Array<ITool>;
}

export default class ToolListPanel extends React.Component<IToolListPanelProps, IToolListPanelState> {

    constructor(props: IToolListPanelProps, context: any) {
        super(props, context);

        this.props = props;
        this.context = context;
        this.state = {
            selectedTools: []
        };
    }

    private toolEditFormOpen = (toolId: number) => {
        NavigationManager.openToolEditor(toolId);
    }

    private newToolBtnClickHandler = () => {
        NavigationManager.openToolEditor(0);
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
    
    private handleSelectedToolsChange = (selectedTools: Array<ITool>) => {
        this.setState({
            selectedTools: selectedTools
        });
    }

    render(): React.ReactElement<{}> {
        return (
            <div className="panel panel-default inner" style={{ marginBottom: 0 + 'px', display: 'flex', flexDirection: 'column' }}>
                <div className="panel-heading">
                    <h4>Инструменты</h4>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ position: 'absolute', width: 600 + 'px', height: 100 + '%' }}>
                        <ToolDeleteConfirmation componentId={this.props.componentId}/>
                    </div>
                    <div className="panel-body" style={{ display: 'flex', flexDirection: 'column' }}>
                        <ToolList
                            componentId={this.props.componentId}
                            selectedTools={this.state.selectedTools}
                            onSelectedToolsChange={this.handleSelectedToolsChange}
                            onNewToolClick={this.newToolBtnClickHandler}
                            onToolDoubleClick={this.toolEditFormOpen}
                            onToolPageChange={this.handleToolPageChange}
                            onToolSearchTextChange={this.handleToolSearchTextChange}
                            onToolsPerPageChange={this.handleToolsPerPageChange}
                            />
                    </div>
                </div>
            </div>
        )
    }
}

