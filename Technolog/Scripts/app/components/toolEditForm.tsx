/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";
import ToolStore from "../flux/stores/secondToolStore";
import ErrorStore from "../flux/stores/errorStore";
import PanelActions from "../flux/actions/panelActions";
import ToolActionCreator from "../flux/actions/toolActionCreator";
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
    isRedoAvailable: boolean;
    isUndoAvailable: boolean;
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
            tool: props.params.tool,
            errorMessage: null,
            isRedoAvailable: false,
            isUndoAvailable: false,
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

    componentWillReceiveProps(nextProps) {
        //ToolActions.loadEditTool(nextProps.params.toolId);
    }

    componentDidMount() {
        ToolActionCreator.initEntityState(this.props.componentId, this.state.tool);
    }

    private handleEditToolChange = () => {

        console.log(ToolStore.getState(this.props.componentId));
        this.setState({
            tool: ToolStore.getState(this.props.componentId).entity,
            errorMessage: null,
            isRedoAvailable: ToolStore.getState(this.props.componentId).isRedoAvailable,
            isUndoAvailable: ToolStore.getState(this.props.componentId).isUndoAvailable,
            isValid: true
        });
    }

    private nameValidate = (value: string) => {
        
        return true;
    }

    private priceValidate = (value: string) => {
        var price = parseFloat(value);

        return price !== undefined;
    }

    private handleSubmit = (e) => {
        e.preventDefault();

        ToolActionCreator.save(this.props.componentId, this.state.tool);
    }

    private registerInput = (input) => {
        this.inputs[input.props.name] = input;
    }
    private setToolName = (event) => {
        this.onToolChange({
            id: this.state.tool.id,
            name: event.target.value,
            price: this.state.tool.price
        });
    }

    private setToolPrice = (event) => {
        this.onToolChange({
            id: this.state.tool.id,
            name: this.state.tool.name,
            price: event.target.value
        });
    }

    private closePanelClickHandler = () => {
        PanelActions.close(this.props.componentId);
    }

    private undoClickHandler = () => {
        ToolActionCreator.undo(this.props.componentId);
    }

    private redoClickHandler = () => {
        ToolActionCreator.redo(this.props.componentId);
    }

    private onToolChange = (newTool: ITool) => {
        console.log(newTool);
        ToolActionCreator.change(this.props.componentId, newTool);
    }

    render(): React.ReactElement<IToolEditFormProps> {
        return (
            <Panel title="Редактирование инструмента" size="inner" onClosePanel={this.closePanelClickHandler}>
                <div className="panel-body" style={{ display: 'flex', flexDirection: 'column' }}>
                    <PendingAnimation>
                        <h4>Пожалуйста, подождите.</h4>
                        <h4>Идет сохранение.</h4>
                    </PendingAnimation>
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
                                validate={this.priceValidate}
                                minCharacters=''
                                uniqueName=''/>
                        </div>
                        <div className="form-group">
                            <div className="btn-toolbar">
                                <input className="btn btn-primary" type="submit" value="Сохранить" />
                                <button
                                    className="btn btn-default"
                                    type="button"
                                    onClick={this.undoClickHandler}
                                    disabled={!this.state.isUndoAvailable}>Отменить</button>
                                <button
                                    className="btn btn-default"
                                    type="button"
                                    onClick={this.redoClickHandler}
                                    disabled={!this.state.isRedoAvailable}>Вернуть</button>
                            </div>
                        </div>
                    </form>
                </div>
            </Panel>
        )
    }
}