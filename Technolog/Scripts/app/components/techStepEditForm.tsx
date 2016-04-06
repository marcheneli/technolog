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
import ToolUsagesEditor from "./toolUsagesEditor";
import ToolActions from "../flux/actions/toolActions";
import ToolStore from "../flux/stores/toolStore";

interface ITechStepEditFormProps {
    params: any,
}

interface ITechStepEditFormState {
    techStep: ITechStep,
    errorMessage: string,
    isValid: boolean,
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
            isValid: true
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
        });
    }

    private handleNewError = () => {
        this.setState({
            techStep: null,
            errorMessage: ErrorStore.getError(),
            isValid: true,
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
        });
    }

    private handleToolUsagesChange = (toolUsages: Array<IToolUsage>) => {
        var techStep = this.state.techStep;

        techStep.toolUsages = toolUsages;

        this.setState({
            techStep: techStep,
            errorMessage: this.state.errorMessage,
            isValid: this.state.isValid,
        });
    }

    render(): React.ReactElement<ITechStepEditFormProps> {
        console.log(this.state.techStep);
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
                                        <ToolUsagesEditor
                                            toolUsages={this.state.techStep.toolUsages}
                                            onToolUsagesChange={this.handleToolUsagesChange}/>
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
