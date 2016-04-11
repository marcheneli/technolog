/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";
import ToolStore from "../flux/stores/toolStore";
import ErrorStore from "../flux/stores/errorStore";
import ToolActions from "../flux/actions/toolActions";
import NavigationManager from "../managers/navigationManager";
import TextInput from "./common/textInput";

interface IToolEditFormProps {
    params: any,
}

interface IToolEditFormState {
    tool: ITool,
    errorMessage: string,
    isValid: boolean
}

export default class ToolEditForm extends React.Component<IToolEditFormProps, IToolEditFormState> {
    private inputs;

    constructor(props: IToolEditFormProps, context: any) {
        super(props, context);

        this.props = props;
        this.context = context;
        this.state = {
            tool: null,
            errorMessage: null,
            isValid: true
        };
    }

    componentWillMount() {
        this.inputs = {};
        ToolStore.addChangeEditToolListener(this.handleEditToolChange);
        ErrorStore.addChangeErrorListener(this.handleNewError)
    }

    componentWillUnmount() {
        ToolStore.removeChangeEditToolListener(this.handleEditToolChange);
        ErrorStore.removeChangeErrorListener(this.handleNewError)
    }

    componentDidMount() {
        this.setState({
            tool: this.props.params.tool,
            errorMessage: null,
            isValid: true
        });
    }

    componentWillReceiveProps(nextProps) {
        //ToolActions.loadEditTool(nextProps.params.toolId);
    }

    private handleEditToolChange = () => {
        this.setState({
            tool: ToolStore.getEditTool(),
            errorMessage: null,
            isValid: true
        });
    }

    private handleNewError = () => {
        this.setState({
            tool: null,
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

        if (this.state.tool.id == 0) {
            ToolActions.create(this.state.tool);
        } else {
            ToolActions.update(this.state.tool);
        }
    }

    private cancelClickHandler = () => {
        NavigationManager.closeToolEditor();
    }

    private registerInput = (input) => {
        this.inputs[input.props.name] = input;
    }
    private setToolName = (event) => {
        this.setState({
            tool: {
                id: this.state.tool.id,
                name: event.target.value,
                price: this.state.tool.price,
            },
            errorMessage: null,
            isValid: true
        });
    }

    private setToolPrice = (event) => {
        this.setState({
            tool: {
                id: this.state.tool.id,
                name: this.state.tool.name,
                price: event.target.value
            },
            errorMessage: null,
            isValid: true
        });
    }

    render(): React.ReactElement<IToolEditFormProps> {
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
                                <div className="btn-toolbar">
                                    <button className="btn btn-default" type="button" onClick={this.cancelClickHandler}>Закрыть</button>
                                </div>
                            </div>
                        </div>
                        : null}
                    { this.state.tool == null ?
                        this.state.errorMessage == null ?
                            <p>Загрузка данных...</p>
                            : null
                        :
                        <form role="form" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label className="control-label">Наименование: </label>
                                <TextInput name="toolName"
                                    text=""
                                    value={this.state.tool.name}
                                    required={true}
                                    onChange={this.setToolName}
                                    errorMessage="Данное наименование недействительно"
                                    emptyMessage="Наименование обязательно для ввода"
                                    register={this.registerInput}
                                    validate={this.nameValidate}
                                    minCharacters=''
                                    uniqueName=''/>
                            </div>
                            <div className="form-group">
                                <label className="control-label">Цена: </label>
                                <TextInput name="toolPrice"
                                    text=""
                                    value={String(this.state.tool.price)}
                                    required={true}
                                    onChange={this.setToolPrice}
                                    errorMessage="Данное значение недействительно"
                                    emptyMessage="Цена обязательна для ввода"
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