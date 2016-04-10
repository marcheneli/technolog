/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";
import ToolActions from "../flux/actions/toolActions";
import ToolList from "./toolList";
import ItemUsageRow from "./common/itemUsageRow";
import Utils from "../utils/utils";

interface IToolChooserProps {

}

interface IToolChooserState {
    isToolListOpen: boolean;
    toolListId: string;
    selectedTools: Array<ITool>;
}

class ToolChooser
    extends React.Component<IToolChooserProps, IToolChooserState> {

    constructor(props: IToolChooserProps, context: any) {
        super(props, context);

        this.props = props;
        this.context = context;
        this.state = {
            isToolListOpen: false,
            toolListId: "",
            selectedTools: []
        };
    }

    private openCloseToolList = () => {
        this.setState({
            isToolListOpen: !this.state.isToolListOpen,
            toolListId: !this.state.isToolListOpen ? Utils.uuid() : "",
            selectedTools: this.state.selectedTools
        });
    }

    private toolEditFormOpen = (toolId: number) => {

    }

    private newToolBtnClickHandler = () => {

    }

    private handleToolDelete = (toolId: number) => {
        ToolActions.remove(toolId);
    }

    private handleToolsPerPageChange = (toolsPerPage: number) => {
        ToolActions.changeToolsPerPage(toolsPerPage);
    }

    private handleToolPageChange = (page: number) => {
        ToolActions.changeToolPage(page);
    }

    private handleToolSearchTextChange = (text: string) => {
        ToolActions.changeToolSearchText(text);
    }

    private handleSelectedToolsChange = (selectedTools: Array<ITool>) => {
        this.setState({
            isToolListOpen: this.state.isToolListOpen,
            toolListId: this.state.toolListId,
            selectedTools: selectedTools
        });
    }

    render(): React.ReactElement<IToolChooserProps> {
        return (
            <div>
                { this.state.isToolListOpen ?
                    <div>
                        <div className="form-group">
                            <button onClick={this.openCloseToolList} className="btn btn-default">
                                <span className="glyphicon glyphicon-minus"></span>
                            </button>
                            <button onClick={() => { } } className="btn btn-default pull-right">
                                <span className="glyphicon glyphicon-plus"></span>
                                <span> Добавить выбранный</span>
                            </button>
                        </div>
                        <ToolList
                            componentId={this.state.toolListId}
                            selectedTools={this.state.selectedTools}
                            onSelectedToolsChange={this.handleSelectedToolsChange}
                            onNewToolClick={this.newToolBtnClickHandler}
                            onToolDoubleClick={this.toolEditFormOpen}
                            onToolPageChange={this.handleToolPageChange}
                            onToolSearchTextChange={this.handleToolSearchTextChange}
                            onToolsPerPageChange={this.handleToolsPerPageChange}
                            />
                    </div>
                    :
                    <div className="form-group">
                        <button onClick={this.openCloseToolList} className="btn btn-default">
                            <span className="glyphicon glyphicon-plus"></span>
                        </button>
                    </div>
                }   
            </div> 
        );
    }
}

interface IToolUsagesEditorProps {
    toolUsages: Array<IToolUsage>;
    onToolUsagesChange(toolUsages: Array<IToolUsage>);
}

interface IToolUsagesEditorState {
    currentToolUsage: IToolUsage;
}

export default class ToolUsagesEditor
    extends React.Component<IToolUsagesEditorProps, IToolUsagesEditorState> {

    constructor(props: IToolUsagesEditorProps, context: any) {
        super(props, context);

        this.props = props;
        this.context = context;
        this.state = {
            currentToolUsage: null
        };
    }

    private toolUsageChanged = (itemUsage: any) => {
        var toolUsages = this.props.toolUsages;

        for (var i = 0; i < toolUsages.length; i++) {
            if (toolUsages[i].toolId == itemUsage.itemId) {
                toolUsages[i].quantity = itemUsage.quantity;
                break;
            }
        }

        this.props.onToolUsagesChange(toolUsages);
    }

    render(): React.ReactElement<IToolUsagesEditorProps> {

        var toolUsageRows = [];

        for (var key in this.props.toolUsages) {
            var toolUsage = this.props.toolUsages[key];

            toolUsageRows.push(<ItemUsageRow
                key={key}
                itemId={toolUsage.tool.id}
                itemName={toolUsage.tool.name}
                quantity={toolUsage.quantity}
                onChange={this.toolUsageChanged}
            />);
        }

        return (
            <div>
                <div style={{ marginBottom: 10 + 'px', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ overflowY: 'auto' }}>
                        <table className="table table-bordered" style={{ marginBottom: 1 + 'px' }}>
                            <thead>
                                <tr>
                                    <th style={{ width: 25 + '%' }}>ID</th>
                                    <th style={{ width: 50 + '%' }}>Наименование</th>
                                    <th style={{ width: 25 + '%' }}>Применяемость</th>
                                </tr>
                            </thead>
                            <tbody>
                                {toolUsageRows}
                            </tbody>
                        </table>
                    </div>
                </div>
                <ToolChooser />
            </div>
        );
    }
}
