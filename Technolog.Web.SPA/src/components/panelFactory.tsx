import * as React from 'react';
import * as PanelType from './panelType';
import Panel from '../containers/Panel';
import ToolList from '../containers/ToolList';
import ToolEditForm from '../containers/ToolEditForm';
import PartList from '../containers/part/PartList';
import PartEditForm from '../containers/part/PartEditForm';
import TechStepList from '../containers/techStep/TechStepList';
import TechStepEditForm from '../containers/techStep/TechStepEditForm';
import TechOperationList from '../containers/techOperation/TechOperationList';
import TechOperationEditForm from '../containers/techOperation/TechOperationEditForm';
import TechProcessList from '../containers/techProcess/TechProcessList';
import TechProcessEditForm from '../containers/techProcess/TechProcessEditForm';

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
                <PartList id={panel.contentId}></PartList>
            );
        case PanelType.PART_EDIT_FORM:
            return (
                <PartEditForm id={panel.contentId} toolId={panel.params.toolId}></PartEditForm>
            );
        case PanelType.TECHSTEP_LIST:
            return (
                <TechStepList id={panel.contentId}></TechStepList>
            );
        case PanelType.TECHSTEP_EDIT_FORM:
            return (
                <TechStepEditForm id={panel.contentId} toolId={panel.params.toolId}></TechStepEditForm>
            );
        case PanelType.TECHOPERATION_LIST:
            return (
                <TechOperationList id={panel.contentId}></TechOperationList>
            );
        case PanelType.TECHOPERATION_EDIT_FORM:
            return (
                <TechOperationEditForm id={panel.contentId} toolId={panel.params.toolId}></TechOperationEditForm>
            );
        case PanelType.TECHPROCESS_LIST:
            return (
                <TechProcessList id={panel.contentId}></TechProcessList>
            );
        case PanelType.TECHPROCESS_EDIT_FORM:
            return (
                <TechProcessEditForm id={panel.contentId} toolId={panel.params.toolId}></TechProcessEditForm>
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