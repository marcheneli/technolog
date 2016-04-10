﻿/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";
import ToolStore from "../flux/stores/newToolStore";
import ToolActions from "../flux/actions/toolActions";
import ConfirmDelete from "./common/confirmDelete";
import PageConstants from "../constants/pageConstants";

interface IToolDeleteConfirmationProps {
    componentId: string;
}

interface IToolDeleteConfirmationState {
    isConfirming: boolean;
}

export default class ToolDeleteConfirmation
    extends React.Component<IToolDeleteConfirmationProps, IToolDeleteConfirmationState> {

    constructor(props: IToolDeleteConfirmationProps, context: any) {
        super(props, context);

        this.props = props;
        this.context = context;
        this.state = {
            isConfirming: false,
        };
    }

    componentWillMount() {
        ToolStore.addChangeListener(this.handleToolsChange, this.props.componentId)
    }

    componentWillUnmount() {
        ToolStore.removeChangeListener(this.handleToolsChange, this.props.componentId)
    }

    private handleToolsChange = () => {
        this.setState({
            isConfirming: ToolStore.getState(this.props.componentId).isConfirmDeleting
        });
    }

    private toolDeleteHandler = () => {
        ToolActions.showToolDeleteConfirmation(this.props.componentId);
    }

    private handleDeleteSuccess = () => {
        ToolActions;
    }

    private handleDeleteCancel = () => {
        ToolActions.closeToolDeleteConfirmation(this.props.componentId);
    }

    render(): React.ReactElement<IToolDeleteConfirmationProps> {
        return (
            this.state.isConfirming ?
                <div style={{ position: 'absolute', height: 100 + '%', width: 100 + '%', zIndex: 1030, }}>
                    <div style={{ position: 'absolute', height: 100 + '%', width: 100 + '%', zIndex: 1040, backgroundColor: '#333', opacity: 0.15 }}>

                    </div>
                    <div style={{ position: 'absolute', height: 100 + '%', width: 100 + '%', zIndex: 1049, alignContent: 'center' }}>
                        <div style={{ height: 100 + '%', left: 0, right: 0, margin: 'auto', display: 'table' }}>
                            <div style={{ height: 100 + '%', display: 'table-cell', verticalAlign: 'middle' }}>
                                <ConfirmDelete
                                    id={1}
                                    title={"Подтверждение удаления инструмента"}
                                    message={"Вы действительно хотите удалить инструмент "}
                                    success={this.handleDeleteSuccess}
                                    cancel={this.handleDeleteCancel}/>
                            </div>
                        </div>
                    </div>
                </div>
                :
                null
        );
    }
}