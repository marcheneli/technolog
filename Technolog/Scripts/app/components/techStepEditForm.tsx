/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";
import TechStepStore from "../flux/stores/techStepStore";
import ErrorStore from "../flux/stores/errorStore";
import TechStepActions from "../flux/actions/techStepActions";
import NavigationManager from "../managers/navigationManager";
import TextInput from "./common/textInput";

interface ITechStepEditFormProps {
    params: any,
}

interface ITechStepEditFormState {
    techStep: ITechStep,
    errorMessage: string,
    isValid: boolean
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
            techStep: TechStepStore.getEditTechStep(),
            errorMessage: null,
            isValid: true
        });
    }

    private handleNewError = () => {
        this.setState({
            techStep: null,
            errorMessage: ErrorStore.getError(),
            isValid: true
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
                description: event.target.value
            },
            errorMessage: null,
            isValid: true
        });
    }

    render(): React.ReactElement<ITechStepEditFormProps> {
        return (
            <div className="panel panel-default inner" style={{ marginBottom: 0 + 'px' }}>
                <div className="panel-heading">
                    <h4>Редактирование инструмента</h4>
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
                            <div className="form-group">
                                <label className="control-label">Наименование: </label>
                                <TextInput name="techStepName"
                                    text=""
                                    value={this.state.techStep.description}
                                    required={true}
                                    onChange={this.setTechStepDescription}
                                    errorMessage="Данное наименование недействительно"
                                    emptyMessage="Наименование обязательно для ввода"
                                    register={this.registerInput}
                                    validate={this.nameValidate}
                                    minCharacters=''
                                    uniqueName=''/>
                            </div>
                            <div className="form-group">
                                <div className="btn-techStepbar">
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
