/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";
import ToolStore from "../flux/stores/toolStore";
import PageConstants from "../constants/pageConstants";
import ToolActions from "../flux/actions/toolActions";
import PanelActions from "../flux/actions/panelActions";
import PageParamsManager from "../managers/pageParamsManager";
import NavigationManager from "../managers/navigationManager";
import ToolList from "./toolList";
import Panel from "./common/panel";

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

    private closePanelHandler = () => {
        PanelActions.close(this.props.componentId);
    }

    render(): React.ReactElement<{}> {
        return (
            <Panel title="Инструменты" size="inner" onClosePanel={this.closePanelHandler}>
                <div className="panel-body" style={{ position: 'relative', display: 'flex', flexGrow: 2, flexBasis: 0 + '%', minHeight: 0, minWidth: 0 }}>
                    <ToolList
                        componentId={this.props.componentId}
                        selectedTools={this.state.selectedTools}
                        onSelectedToolsChange={this.handleSelectedToolsChange}
                        />
                </div>
            </Panel>
        )
    }
}

