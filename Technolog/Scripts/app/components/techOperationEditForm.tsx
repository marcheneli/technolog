/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";
import TechOperationStore from "../flux/stores/techOperationStore";
import ErrorStore from "../flux/stores/errorStore";
import TechOperationActions from "../flux/actions/techOperationActions";
import NavigationManager from "../managers/navigationManager";
import TextInput from "./common/textInput";

interface ITechOperationEditFormProps {
    params: any,
}

interface ITechOperationEditFormState {
    techOperation: ITechOperation,
    errorMessage: string,
    isValid: boolean
}

export default class TechOperationEditForm extends React.Component<ITechOperationEditFormProps, ITechOperationEditFormState> {
    private inputs;

    constructor(props: ITechOperationEditFormProps, context: any) {
        super(props, context);

        this.props = props;
        this.context = context;
        this.state = {
            techOperation: null,
            errorMessage: null,
            isValid: true
        };
    }

    componentWillMount() {
        this.inputs = {};
        TechOperationStore.addChangeEditTechOperationListener(this.handleEditTechOperationChange);
        ErrorStore.addChangeErrorListener(this.handleNewError)
    }

    componentWillUnmount() {
        TechOperationStore.removeChangeEditTechOperationListener(this.handleEditTechOperationChange);
        ErrorStore.removeChangeErrorListener(this.handleNewError)
    }

    componentDidMount() {
        TechOperationActions.loadEditTechOperation(this.props.params.techOperationId);
    }

    componentWillReceiveProps(nextProps) {
        TechOperationActions.loadEditTechOperation(nextProps.params.techOperationId);
    }

    private handleEditTechOperationChange = () => {
        this.setState({
            techOperation: TechOperationStore.getEditTechOperation(),
            errorMessage: null,
            isValid: true
        });
    }

    private handleNewError = () => {
        this.setState({
            techOperation: null,
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

        if (this.state.techOperation.id == 0) {
            TechOperationActions.create(this.state.techOperation);
        } else {
            TechOperationActions.update(this.state.techOperation);
        }
    }

    private cancelClickHandler = () => {
        NavigationManager.closeTechOperationEditor();
    }

    private registerInput = (input) => {
        this.inputs[input.props.name] = input;
    }
    private setTechOperationName = (event) => {
        this.setState({
            techOperation: {
                id: this.state.techOperation.id,
                name: event.target.value
            },
            errorMessage: null,
            isValid: true
        });
    }

    render(): React.ReactElement<ITechOperationEditFormProps> {
        return (
            <div className="panel panel-default inner" style={{ marginBottom: 0 + 'px' }}>
                <div className="panel-heading">
                    <h4>Редактирование технологической операции</h4>
                </div>
                <div className="panel-body">
                    { this.state.errorMessage != null ?
                        <div>
                            <div className="form-group">
                                <span>{this.state.errorMessage}</span>
                            </div>
                            <div className="form-group">
                                <div className="btn-techOperationbar">
                                    <button className="btn btn-default" type="button" onClick={this.cancelClickHandler}>Закрыть</button>
                                </div>
                            </div>
                        </div>
                        : null}
                    { this.state.techOperation == null ?
                        this.state.errorMessage == null ?
                            <p>Загрузка данных...</p>
                            : null
                        :
                        <form role="form" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label className="control-label">Наименование: </label>
                                <TextInput name="techOperationName"
                                    text=""
                                    value={this.state.techOperation.name}
                                    required={true}
                                    onChange={this.setTechOperationName}
                                    errorMessage="Данное наименование недействительно"
                                    emptyMessage="Наименование обязательно для ввода"
                                    register={this.registerInput}
                                    validate={this.nameValidate}
                                    minCharacters=''
                                    uniqueName=''/>
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

