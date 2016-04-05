/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";
import TechStepStore from "../flux/stores/techStepStore";
import ErrorStore from "../flux/stores/errorStore";
import TechStepActions from "../flux/actions/techStepActions";
import NavigationManager from "../managers/navigationManager";
import ContentEditable from "./common/contentEditable";
import TableRow from "./common/tableRow";
import TextInput from "./common/textInput";
import TextAreaInput from "./common/textAreaInput";
import ToolList from "./toolList";
import ToolActions from "../flux/actions/toolActions";
import ToolStore from "../flux/stores/toolStore";

interface ITechStepEditFormProps {
    params: any,
}

interface ITechStepEditFormState {
    techStep: ITechStep,
    errorMessage: string,
    isValid: boolean,
    isToolListOpen: boolean,
    isPartListOpen: boolean,
    currentToolUsage: IToolUsage;
}

export default class TechStepEditForm extends React.Component<ITechStepEditFormProps, ITechStepEditFormState> {
    private inputs;

    constructor(props: ITechStepEditFormProps, context: any) {
        super(props, context);

        this.props = props;
        this.context = context;
        this.state = {
            techStep: null,
            errorMessage: null,
            isValid: true,
            isPartListOpen: false,
            isToolListOpen: false,
            currentToolUsage: null
        };
    }

    componentWillMount() {
        this.inputs = {};
        TechStepStore.addChangeEditTechStepListener(this.handleEditTechStepChange);
        ErrorStore.addChangeErrorListener(this.handleNewError);
    }

    componentWillUnmount() {
        TechStepStore.removeChangeEditTechStepListener(this.handleEditTechStepChange);
        ErrorStore.removeChangeErrorListener(this.handleNewError);
    }

    componentDidMount() {
        TechStepActions.loadEditTechStep(this.props.params.techStepId);
        ToolActions.init(ToolStore.getCurrentToolPage(), ToolStore.getToolsPerPage(), ToolStore.getSearchText());
    }

    componentWillReceiveProps(nextProps) {
        TechStepActions.loadEditTechStep(nextProps.params.techStepId);
    }

    private handleEditTechStepChange = () => {
        this.setState({
            techStep: TechStepStore.getEditTechStep(),
            errorMessage: null,
            isValid: true,
            isPartListOpen: this.state.isPartListOpen,
            isToolListOpen: this.state.isToolListOpen,
            currentToolUsage: this.state.currentToolUsage
        });
    }

    private handleNewError = () => {
        this.setState({
            techStep: null,
            errorMessage: ErrorStore.getError(),
            isValid: true,
            isPartListOpen: this.state.isPartListOpen,
            isToolListOpen: this.state.isToolListOpen,
            currentToolUsage: this.state.currentToolUsage
        });
    }

    private nameValidate() {
        //you could do something here that does general validation for any form field
        return true;
    }

    private handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.techStep.id == 0) {
            TechStepActions.create(this.state.techStep);
        } else {
            TechStepActions.update(this.state.techStep);
        }
    }

    private cancelClickHandler = () => {
        NavigationManager.closeTechStepEditor();
    }

    private registerInput = (input) => {
        this.inputs[input.props.name] = input;
    }
    private setTechStepDescription = (event) => {
        this.setState({
            techStep: {
                id: this.state.techStep.id,
                description: event.target.value,
                toolUsages: this.state.techStep.toolUsages
            },
            errorMessage: null,
            isValid: true,
            isPartListOpen: this.state.isPartListOpen,
            isToolListOpen: this.state.isToolListOpen,
            currentToolUsage: this.state.currentToolUsage
        });
    }

    private openCloseToolList = () => {
        this.setState({
            techStep: this.state.techStep,
            errorMessage: this.state.errorMessage,
            isValid: this.state.isValid,
            isPartListOpen: this.state.isPartListOpen,
            isToolListOpen: !this.state.isToolListOpen,
            currentToolUsage: this.state.currentToolUsage
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

    private changeCurrentToolUsage = (toolUsage: IToolUsage) => {

    }

    private toolUsageRowDoubleClick = (toolUsage: IToolUsage) => {

    }

    private toolUsageChanged = (text: string) => {
        console.log(text);
    }

    render(): React.ReactElement<ITechStepEditFormProps> {

        var toolUsageRows = [];

        if (this.state.techStep != null) {
            for (var key in this.state.techStep.toolUsages) {
                var toolUsage = this.state.techStep.toolUsages[key];

                toolUsageRows.push(<TableRow key={key}
                    item={toolUsage}
                    isCurrent={this.state.currentToolUsage == toolUsage}
                    changeCurrent={this.changeCurrentToolUsage}
                    rowDoubleClickHandler={this.toolUsageRowDoubleClick}>
                    <td  style={{ width: 25 + '%' }}>{toolUsage.tool.id}</td>
                    <td  style={{ width: 50 + '%' }}>{toolUsage.tool.name}</td>
                    <td  style={{ width: 25 + '%', position: "relative", padding: 0 + 'px', verticalAlign: 'middle' }}>
                        <ContentEditable
                            html={String(toolUsage.quantity)}
                            onChange={this.toolUsageChanged}/>
                    </td>
                </TableRow>);
            }
        }

        return (
            <div className="panel panel-default wide-inner" style={{ marginBottom: 0 + 'px' }}>
                <div className="panel-heading">
                    <h4>Редактирование технологического шага</h4>
                </div>
                <div className="panel-body">
                    { this.state.errorMessage != null ?
                        <div>
                            <div className="form-group">
                                <span>{this.state.errorMessage}</span>
                            </div>
                            <div className="form-group">
                                <div className="btn-techStepbar">
                                    <button className="btn btn-default" type="button" onClick={this.cancelClickHandler}>Закрыть</button>
                                </div>
                            </div>
                        </div>
                        : null}
                    { this.state.techStep == null ?
                        this.state.errorMessage == null ?
                            <p>Загрузка данных...</p>
                            : null
                        :
                        <form role="form" onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <fieldset>
                                        <legend>Описание</legend>
                                        <div className="form-group">
                                            <TextAreaInput text={this.state.techStep.description}/>
                                        </div>
                                    </fieldset>
                                    <fieldset>
                                        <legend>Инструменты</legend>
                                        { this.state.techStep != null ?
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
                                            </div>
                                            : null
                                        }
                                        { this.state.isToolListOpen ?
                                            <div>
                                                <ToolList
                                                    onNewToolClick={this.newToolBtnClickHandler}
                                                    onToolDoubleClick={this.toolEditFormOpen}
                                                    onToolPageChange={this.handleToolPageChange}
                                                    onToolSearchTextChange={this.handleToolSearchTextChange}
                                                    onToolsPerPageChange={this.handleToolsPerPageChange}
                                                    />
                                                <div className="form-group">
                                                    <button onClick={this.openCloseToolList} className="btn btn-default">
                                                        <span className="glyphicon glyphicon-minus"></span>
                                                    </button>
                                                </div>
                                            </div>
                                            :
                                            <div className="form-group">
                                                <button onClick={this.openCloseToolList} className="btn btn-default">
                                                    <span className="glyphicon glyphicon-plus"></span>
                                                </button>
                                            </div>
                                        }
                                    </fieldset>
                                    <fieldset>
                                        <legend>Комплектующие</legend>
                                    </fieldset>
                                </div>
                                <div className="col-lg-6">
                                    <fieldset>
                                        <legend>Визуализация</legend>
                                    </fieldset>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="btn-toolbar">
                                    <input className="btn btn-primary" type="submit" value="Сохранить" />
                                    <button className="btn btn-default" type="button" onClick={this.cancelClickHandler}>Закрыть</button>
                                </div>
                            </div>
                        </form>
                    }
                </div>
            </div>
        )
    }
}
