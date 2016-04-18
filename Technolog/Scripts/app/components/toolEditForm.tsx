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
import DialogContainer from "./common/dialogContainer";
import PendingPanel from "./common/pendingPanel";

interface IToolEditFormProps {
    params: any;
    componentId: string;
}

interface IToolEditFormState {
    tool: IToolViewModel,
    isRedoAvailable: boolean;
    isUndoAvailable: boolean;
    isValid: boolean;
    isSaving: boolean;
}

interface IToolViewModel {
    id: string;
    name: string;
    price: string;
}

export default class ToolEditForm extends React.Component<IToolEditFormProps, IToolEditFormState> {
    private inputs;

    constructor(props: IToolEditFormProps, context: any) {
        super(props, context);

        this.props = props;
        this.context = context;
        this.state = {
            tool: props.params.tool,
            isRedoAvailable: false,
            isUndoAvailable: false,
            isValid: this.toolValidate(props.params.tool),
            isSaving: false,
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
        ToolActionCreator.initEntityState(
            this.props.componentId,
            this.state.tool);
    }

    private handleEditToolChange = () => {
        var state = ToolStore.getState(this.props.componentId);
        this.setState({
            tool: state.entity,
            isRedoAvailable: state.isRedoAvailable,
            isUndoAvailable: state.isUndoAvailable,
            isValid: this.toolValidate(state.entity),
            isSaving: state.isSaving
        });
    }

    private nameValidate = (value: string): boolean => {

        if (value == "") return false;

        return true;
    }

    private priceValidate = (value: string): boolean => {
        var price = parseFloat(value);
        return !isNaN(price);
    }

    private toolValidate = (tool: IToolViewModel): boolean => {
        if (!this.nameValidate(tool.name)) return false;
        if (!this.priceValidate(tool.price)) return false;

        return true;
    }

    private handleSubmit = (e) => {
        e.preventDefault();

        ToolActionCreator.save(this.props.componentId, this.state.tool);
    }

    private registerInput = (input) => {
        this.inputs[input.props.name] = input;
    }

    private setToolName = (event) => {
        var tool = {
            id: this.state.tool.id,
            name: event.target.value,
            price: this.state.tool.price
        };

        this.onToolChange(tool);
    }

    private setToolPrice = (event) => {
        var tool = {
            id: this.state.tool.id,
            name: this.state.tool.name,
            price: event.target.value
        };

        this.onToolChange(tool);
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

    private onToolChange = (newTool: IToolViewModel) => {
        ToolActionCreator.change(this.props.componentId, newTool);
    }

    private errorHandler = () => {
    }

    render(): React.ReactElement<IToolEditFormProps> {
        return (
            <Panel title="Редактирование инструмента" size="inner" onClosePanel={this.closePanelClickHandler}>
                <div className="panel-body" style={{ display: 'flex', flexDirection: 'column' }}>
                    <DialogContainer isShow={this.state.isSaving}>
                        <PendingPanel title={"Сохранение инструмента"}>
                            <PendingAnimation>
                                <h4>Пожалуйста, подождите.</h4>
                                <h4>Идет сохранение.</h4>
                            </PendingAnimation>
                        </PendingPanel>
                    </DialogContainer>
                    <form role="form" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label className="control-label">Наименование: </label>
                            <TextInput name="toolName"
                                text=""
                                value={this.state.tool.name}
                                required={true}
                                onChange={this.setToolName}
                                onError={this.errorHandler}
                                errorMessage="Данное наименование недействительно"
                                emptyMessage="Наименование обязательно для ввода"
                                register={this.registerInput}
                                validate={this.nameValidate}
                                minCharacters={1}
                                uniqueName=''/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Цена: </label>
                            <TextInput name="toolPrice"
                                text=""
                                value={String(this.state.tool.price) }
                                required={true}
                                onChange={this.setToolPrice}
                                onError={this.errorHandler}
                                errorMessage="Данное значение недействительно"
                                emptyMessage="Цена обязательна для ввода"
                                register={this.registerInput}
                                validate={this.priceValidate}
                                minCharacters={1}
                                uniqueName=''/>
                        </div>
                        <div className="form-group">
                            <div className="btn-toolbar">
                                <button
                                    className="btn btn-primary"
                                    type="submit"
                                    disabled={!this.state.isValid}>Сохранить</button>
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
        );
    }
}