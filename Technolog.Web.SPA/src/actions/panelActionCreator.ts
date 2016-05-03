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

export function openTechStepEditor(techStepId) {
    return (dispatch, getState) => {
        const state = getState();

        const techStep = state.entities.techSteps[techStepId];

        const toolUsages = techStep.toolUsages.map(id => {
            const toolUsage = state.entities.toolUsages[id];

            return _.assign({}, toolUsage, { tool: state.entities.tools[toolUsage.tool] });
        });

        const partUsages = techStep.partUsages.map(id => {
            const partUsage = state.entities.partUsages[id];

            return _.assign({}, partUsage, { part: state.entities.parts[partUsage.part] });
        });

        const params = {
            techStep: techStep,
            toolUsages: toolUsages,
            partUsages: partUsages
        };

        dispatch(open(PanelType.TECHSTEP_EDIT_FORM, "Редактирование технологического шага", params));
    };
}

export function close(id) {
    return {
        type: PanelActionType.PANEL_CLOSE,
        id: id
    };
}