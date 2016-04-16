/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";
import ToolStore from "../flux/stores/newToolStore";
import ErrorStore from "../flux/stores/errorStore";
import PanelActions from "../flux/actions/panelActions";
import ToolActions from "../flux/actions/toolActions";
import NavigationManager from "../managers/navigationManager";
import TextInput from "./common/textInput";
import PendingAnimation from "./common/pendingAnimation";
import Panel from "./common/panel";

interface IToolEditFormProps {
    params: any;
    componentId: string;
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
        ToolStore.addChangeListener(this.handleEditToolChange, this.props.componentId);
    }

    componentWillUnmount() {
        ToolStore.removeChangeListener(this.handleEditToolChange, this.props.componentId);
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
            tool: ToolStore.getState(this.props.componentId),
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

    private closePanelHandler = () => {
        PanelActions.close(this.props.componentId);
    }

    render(): React.ReactElement<IToolEditFormProps> {
        return (
            <Panel title="Редактирование инструмента" size="inner" onClosePanel={this.closePanelHandler}>
                <div className="panel-body" style={{ display: 'flex', flexDirection: 'column' }}>
                    <PendingAnimation>
                        <h4>Пожалуйста, подождите.</h4>
                        <h4>Идет сохранение.</h4>
                    </PendingAnimation>
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
                                    value={String(this.state.tool.price) }
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
            </Panel>
        )
    }
}