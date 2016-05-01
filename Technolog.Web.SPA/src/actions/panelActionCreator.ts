import * as PanelActionType from "./panelActionType";
import * as PanelType from '../components/panelType';
import * as IdGenerator from '../utils/idGenerator';

const getContentId = (panelType) => {
    switch (panelType) {
        case PanelType.TOOL_LIST:
            return IdGenerator.getToolListId();
        case PanelType.TOOL_EDIT_FORM:
            return IdGenerator.getToolEditFormId();
        case PanelType.PART_LIST:
            return IdGenerator.getPartListId();
        case PanelType.PART_EDIT_FORM:
            return IdGenerator.getPartEditFormId();
        case PanelType.TECHSTEP_LIST:
            return IdGenerator.getTechStepListId();
        case PanelType.TECHSTEP_EDIT_FORM:
            return IdGenerator.getTechStepEditFormId();
        case PanelType.TECHOPERATION_LIST:
            return IdGenerator.getTechStepListId();
        case PanelType.TECHOPERATION_EDIT_FORM:
            return IdGenerator.getTechStepEditFormId();
        case PanelType.TECHPROCESS_LIST:
            return IdGenerator.getTechProcessListId();
        case PanelType.TECHPROCESS_EDIT_FORM:
            return IdGenerator.getTechProcessEditFormId();
        default:
            return 0;
    }
};

export function open(panelType, name, params?) {
    return {
        type: PanelActionType.PANEL_OPEN,
        panelType: panelType,
        params: params,
        contentId: getContentId(panelType),
        name: name
    };
}

export function close(id) {
    return {
        type: PanelActionType.PANEL_CLOSE,
        id: id
    };
}