import * as React from 'react';
import * as PanelType from './panelType';
import Panel from '../containers/Panel';
import ToolList from '../containers/ToolList';
import ToolEditForm from '../containers/ToolEditForm';

function getContent(panel) {
    switch (panel.type) {
        case PanelType.TOOL_LIST:
            return (
                <ToolList id={panel.contentId}></ToolList>
            );
        case PanelType.TOOL_EDIT_FORM:
            return (
                <ToolEditForm id={panel.contentId} toolId={panel.params.toolId}></ToolEditForm>
            );
        case PanelType.PART_LIST:
            return (
                <div></div>
            );
        case PanelType.PART_EDIT_FORM:
            return (
                <div></div>
            );
        case PanelType.TECHSTEP_LIST:
            return (
                <div></div>
            );
        case PanelType.TECHSTEP_EDIT_FORM:
            return (
                <div></div>
            );
        case PanelType.TECHOPERATION_LIST:
            return (
                <div></div>
            );
        case PanelType.TECHOPERATION_EDIT_FORM:
            return (
                <div></div>
            );
        case PanelType.TECHPROCESS_LIST:
            return (
                <div></div>
            );
        case PanelType.TECHPROCESS_EDIT_FORM:
            return (
                <div></div>
            );
        default:
            return (
                <div></div>
            );
    }
}

export function getPanel(panel) {
    const content = getContent(panel);

    return (
        <Panel id={panel.id} title={panel.name}>
            <div className="panel-body" style={{ position: 'relative', display: 'flex', flexGrow: 2, flexBasis: 0 + '%', minHeight: 0, minWidth: 0 }}>
                {content}
            </div>
        </Panel>    
    );
}