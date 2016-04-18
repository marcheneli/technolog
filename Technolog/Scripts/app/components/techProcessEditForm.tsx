/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";
import TechProcessStore from "../flux/stores/techProcessStore";
import ErrorStore from "../flux/stores/errorStore";
import TechProcessActions from "../flux/actions/techProcessActions";
import NavigationManager from "../managers/navigationManager";
import TextInput from "./common/textInput";

interface ITechProcessEditFormProps {
    params: any,
}

interface ITechProcessEditFormState {
    techProcess: ITechProcess,
    errorMessage: string,
    isValid: boolean
}

export default class TechProcessEditForm extends React.Component<ITechProcessEditFormProps, ITechProcessEditFormState> {
    private inputs;

    constructor(props: ITechProcessEditFormProps, context: any) {
        super(props, context);

        this.props = props;
        this.context = context;
        this.state = {
            techProcess: null,
            errorMessage: null,
            isValid: true
        };
    }

    componentWillMount() {
        this.inputs = {};
        TechProcessStore.addChangeEditTechProcessListener(this.handleEditTechProcessChange);
        ErrorStore.addChangeErrorListener(this.handleNewError)
    }

    componentWillUnmount() {
        TechProcessStore.removeChangeEditTechProcessListener(this.handleEditTechProcessChange);
        ErrorStore.removeChangeErrorListener(this.handleNewError)
    }

    componentDidMount() {
        TechProcessActions.loadEditTechProcess(this.props.params.techProcessId);
    }

    componentWillReceiveProps(nextProps) {
        TechProcessActions.loadEditTechProcess(nextProps.params.techProcessId);
    }

    private handleEditTechProcessChange = () => {
        this.setState({
            techProcess: TechProcessStore.getEditTechProcess(),
            errorMessage: null,
            isValid: true
        });
    }

    private handleNewError = () => {
        this.setState({
            techProcess: null,
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

        if (this.state.techProcess.id == 0) {
            TechProcessActions.create(this.state.techProcess);
        } else {
            TechProcessActions.update(this.state.techProcess);
        }
    }

    private cancelClickHandler = () => {
        NavigationManager.closeTechProcessEditor();
    }

    private registerInput = (input) => {
        this.inputs[input.props.name] = input;
    }
    private setTechProcessName = (event) => {
        this.setState({
            techProcess: {
                id: this.state.techProcess.id,
                name: event.target.value
            },
            errorMessage: null,
            isValid: true
        });
    }

    render(): React.ReactElement<ITechProcessEditFormProps> {
        return (
            <div className="panel panel-default inner" style={{ marginBottom: 0 + 'px' }}>
                <div className="panel-heading">
                    <h4>Редактирование технологического процесса</h4>
                </div>
                <div className="panel-body">
                    { this.state.errorMessage != null ?
                        <div>
                            <div className="form-group">
                                <span>{this.state.errorMessage}</span>
                            </div>
                            <div className="form-group">
                                <div className="btn-techProcessbar">
                                    <button className="btn btn-default" type="button" onClick={this.cancelClickHandler}>Закрыть</button>
                                </div>
                            </div>
                        </div>
                        : null}
                    { this.state.techProcess == null ?
                        this.state.errorMessage == null ?
                            <p>Загрузка данных...</p>
                            : null
                        :
                        <form role="form" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label className="control-label">Наименование: </label>
                                <TextInput name="techProcessName"
                                    text=""
                                    value={this.state.techProcess.name}
                                    required={true}
                                    onChange={this.setTechProcessName}
                                    onError={() => { } }
                                    errorMessage="Данное наименование недействительно"
                                    emptyMessage="Наименование обязательно для ввода"
                                    register={this.registerInput}
                                    validate={this.nameValidate}
                                    minCharacters={1}
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


