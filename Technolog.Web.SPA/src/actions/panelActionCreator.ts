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

export function openTechStepEditor(techStepId, techOperationEditFormId?) {
    return (dispatch, getState) => {
        if (techStepId == 0) {
            const params = {
                techStep: { id: 0, description: "" },
                toolUsages: [],
                partUsages: [],
                techOperationEditFormId: techOperationEditFormId
            };

            dispatch(open(PanelType.TECHSTEP_EDIT_FORM, "Создание технологического шага", params));
        } else {
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
        }
    };
}

export function openTechProcessEditor(techProcessId) {
    return (dispatch, getState) => {
        const state = getState();

        const techProcess = state.entities.techProcesses[techProcessId];

        const techOperations = techProcess.techOperations.map(id => {
            const techOperation = state.entities.techOperations[id];

            return _.assign({}, techOperation);
        });

        const params = {
            techProcess: techProcess,
            techOperations: techOperations
        };

        dispatch(open(PanelType.TECHPROCESS_EDIT_FORM, "Редактирование технологического процесса", params));
    }
}

export function openTechOperationEditor(techOperationId, techProcessEditFormId?) {
    return (dispatch, getState) => {
        if (techOperationId == 0) {
            const params = {
                techOperation: { id: 0, name: "" },
                techSteps: [],
                techProcessEditFormId: techProcessEditFormId
            }

            dispatch(open(PanelType.TECHOPERATION_EDIT_FORM, "Создание технологической операции", params));
        } else {
            const state = getState();

            const techOperation = state.entities.techOperations[techOperationId];

            const techSteps = techOperation.techSteps.map(id => {
                const techStep = state.entities.techSteps[id];

                return _.assign({}, techStep);
            });

            const params = {
                techOperation: techOperation,
                techSteps: techSteps
            };

            dispatch(open(PanelType.TECHOPERATION_EDIT_FORM, "Редактирование технологической операции", params));
        }
    }
}

export function close(id) {
    return {
        type: PanelActionType.PANEL_CLOSE,
        id: id
    };
}