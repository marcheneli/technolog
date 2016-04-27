/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";
import PartStore from "../flux/stores/partStore";
import ErrorStore from "../flux/stores/errorStore";
import PartActions from "../flux/actions/partActions";
import NavigationManager from "../managers/navigationManager";
import TextInput from "./common/textInput";

interface IPartEditFormProps {
    params: any,
}

interface IPartEditFormState {
    part: IPart,
    errorMessage: string,
    isValid: boolean
}

export default class PartEditForm extends React.Component<IPartEditFormProps, IPartEditFormState> {
    private inputs;

    constructor(props: IPartEditFormProps, context: any) {
        super(props, context);

        this.props = props;
        this.context = context;
        this.state = {
            part: null,
            errorMessage: null,
            isValid: true
        };
    }

    componentWillMount() {
        this.inputs = {};
        PartStore.addChangeEditPartListener(this.handleEditPartChange);
        ErrorStore.addChangeErrorListener(this.handleNewError)
    }

    componentWillUnmount() {
        PartStore.removeChangeEditPartListener(this.handleEditPartChange);
        ErrorStore.removeChangeErrorListener(this.handleNewError)
    }

    componentDidMount() {
        PartActions.loadEditPart(this.props.params.partId);
    }

    componentWillReceiveProps(nextProps) {
        PartActions.loadEditPart(nextProps.params.partId);
    }

    private handleEditPartChange = () => {
        this.setState({
            part: PartStore.getEditPart(),
            errorMessage: null,
            isValid: true
        });
    }

    private handleNewError = () => {
        this.setState({
            part: null,
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

        if (this.state.part.id == 0) {
            PartActions.create(this.state.part);
        } else {
            PartActions.update(this.state.part);
        }
    }

    private cancelClickHandler = () => {
        NavigationManager.closePartEditor();
    }

    private registerInput = (input) => {
        this.inputs[input.props.name] = input;
    }
    private setPartName = (event) => {
        this.setState({
            part: {
                id: this.state.part.id,
                name: event.target.value,
                price: this.state.part.price,
            },
            errorMessage: null,
            isValid: true
        });
    }

    private setPartPrice = (event) => {
        this.setState({
            part: {
                id: this.state.part.id,
                name: this.state.part.name,
                price: event.target.value
            },
            errorMessage: null,
            isValid: true
        });
    }

    render(): React.ReactElement<IPartEditFormProps> {
        return (
            <div className="panel panel-default inner" style={{ marginBottom: 0 + 'px' }}>
                <div className="panel-heading">
                    <h4>Редактирование детали</h4>
                </div>
                <div className="panel-body">
                    { this.state.errorMessage != null ?
                        <div>
                            <div className="form-group">
                                <span>{this.state.errorMessage}</span>
                            </div>
                            <div className="form-group">
                                <div className="btn-partbar">
                                    <button className="btn btn-default" type="button" onClick={this.cancelClickHandler}>Закрыть</button>
                                </div>
                            </div>
                        </div>
                        : null}
                    { this.state.part == null ?
                        this.state.errorMessage == null ?
                            <p>Загрузка данных...</p>
                            : null
                        :
                        <form role="form" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label className="control-label">Наименование: </label>
                                <TextInput name="partName"
                                    text=""
                                    value={this.state.part.name}
                                    required={true}
                                    onChange={this.setPartName}
                                    onError={() => { }}
                                    errorMessage="Данное наименование недействительно"
                                    emptyMessage="Наименование обязательно для ввода"
                                    register={this.registerInput}
                                    validate={this.nameValidate}
                                    minCharacters={1}
                                    uniqueName=''/>
                            </div>
                            <div className="form-group">
                                <label className="control-label">Цена: </label>
                                <TextInput name="partPrice"
                                    text=""
                                    value={String(this.state.part.price) }
                                    required={true}
                                    onChange={this.setPartPrice}
                                    onError={() => { } }
                                    errorMessage="Данное значение недействительно"
                                    emptyMessage="Цена обязательна для ввода"
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
