/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";
import TechStepStore from "../flux/stores/techStepStore";
import ErrorStore from "../flux/stores/errorStore";
import TechStepActions from "../flux/actions/techStepActions";
import PageParamsManager from "../managers/pageParamsManager";
import NavigationManager from "../managers/navigationManager";
import TextInput from "./common/textInput";
import TextAreaInput from "./common/textAreaInput";
import ToolList from "./toolList";
import ToolActions from "../flux/actions/toolActions";
import ToolStore from "../flux/stores/toolStore";

interface ITechStepEditFormProps {
    params: any,
}

interface ITechStepEditFormState {
    tools: Array<ITool>,
    techStep: ITechStep,
    errorMessage: string,
    isValid: boolean,
    isToolListOpen: boolean,
    isPartListOpen: boolean
}

export default class TechStepEditForm extends React.Component<ITechStepEditFormProps, ITechStepEditFormState> {
    private inputs;

    constructor(props: ITechStepEditFormProps, context: any) {
        super(props, context);

        this.props = props;
        this.context = context;
        this.state = {
            tools: [],
            techStep: null,
            errorMessage: null,
            isValid: true,
            isPartListOpen: false,
            isToolListOpen: false
        };
    }

    componentWillMount() {
        this.inputs = {};
        TechStepStore.addChangeEditTechStepListener(this.handleEditTechStepChange);
        ErrorStore.addChangeErrorListener(this.handleNewError)
    }

    componentWillUnmount() {
        TechStepStore.removeChangeEditTechStepListener(this.handleEditTechStepChange);
        ErrorStore.removeChangeErrorListener(this.handleNewError)
    }

    componentDidMount() {
        TechStepActions.loadEditTechStep(this.props.params.techStepId);
    }

    componentWillReceiveProps(nextProps) {
        TechStepActions.loadEditTechStep(nextProps.params.techStepId);
    }

    private handleEditTechStepChange = () => {
        this.setState({
            tools: this.state.tools,
            techStep: TechStepStore.getEditTechStep(),
            errorMessage: null,
            isValid: true,
            isPartListOpen: this.state.isPartListOpen,
            isToolListOpen: this.state.isToolListOpen
        });
    }

    private handleToolsChange = () => {

        this.setState({
            tools: ToolStore.getAll(),
            techStep: this.state.techStep,
            errorMessage: this.state.errorMessage,
            isValid: this.state.isValid,
            isPartListOpen: this.state.isPartListOpen,
            isToolListOpen: this.state.isToolListOpen
        });
    }

    private handleNewError = () => {
        this.setState({
            tools: this.state.tools,
            techStep: null,
            errorMessage: ErrorStore.getError(),
            isValid: true,
            isPartListOpen: this.state.isPartListOpen,
            isToolListOpen: this.state.isToolListOpen
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
            tools: this.state.tools,
            techStep: {
                id: this.state.techStep.id,
                description: event.target.value
            },
            errorMessage: null,
            isValid: true,
            isPartListOpen: this.state.isPartListOpen,
            isToolListOpen: this.state.isToolListOpen
        });
    }

    private openCloseToolList = () => {
        this.setState({
            tools: this.state.tools,
            techStep: this.state.techStep,
            errorMessage: this.state.errorMessage,
            isValid: this.state.isValid,
            isPartListOpen: this.state.isPartListOpen,
            isToolListOpen: !this.state.isToolListOpen
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
            tools: [],
            techStep: this.state.techStep,
            errorMessage: null,
            isValid: true,
            isPartListOpen: this.state.isPartListOpen,
            isToolListOpen: this.state.isToolListOpen
        });
    }

    render(): React.ReactElement<ITechStepEditFormProps> {
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
                                        { this.state.isToolListOpen ?
                                            <div>
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
                                                <div class="form-group">
                                                    <button onClick={this.openCloseToolList} className="btn btn-default">
                                                        <span className="glyphicon glyphicon-minus"></span>
                                                    </button>
                                                </div>
                                            </div>
                                            :
                                            <div class="form-group">
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
