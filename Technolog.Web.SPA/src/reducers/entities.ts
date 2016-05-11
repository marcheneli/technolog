import * as ToolActionType from '../actions/toolActionType';
import * as PartActionType from '../actions/partActionType';
import * as TechStepActionType from '../actions/techStepActionType';
import * as TechOperationActionType from '../actions/techOperationActionType';
import * as TechProcessActionType from '../actions/techProcessActionType';
import * as _ from 'lodash';

const initialState = {
    tools: {},
    parts: {},
    toolUsages: {},
    partUsages: {},
    techSteps: {},
    techOperations: {},
    techProcesses: {}
};

export default function entities(state = initialState, action) {
    switch (action.type) {
        case ToolActionType.TOOL_LOAD_SUCCEED:
            return _.assign({}, state, { tools: _.assign({}, state.tools, action.response.entities.tools) });
        case PartActionType.PART_LOAD_SUCCEED:
            return _.assign({}, state, { parts: _.assign({}, state.parts, action.response.entities.parts) });
        case TechStepActionType.TECHSTEP_LOAD_SUCCEED:
            return _.assign({}, state, {
                techSteps: _.assign({}, state.techSteps, action.response.entities.techSteps),
                toolUsages: _.assign({}, state.toolUsages, action.response.entities.toolUsages),
                partUsages: _.assign({}, state.partUsages, action.response.entities.partUsages),
                tools: _.assign({}, state.tools, action.response.entities.tools),
                parts: _.assign({}, state.parts, action.response.entities.parts)
            });
        case TechOperationActionType.TECHOPERATION_LOAD_SUCCEED:
            return _.assign({}, state, {
                techOperations: _.assign({}, state.techOperations, action.response.entities.techOperations),
                techSteps: _.assign({}, state.techSteps, action.response.entities.techSteps),
                toolUsages: _.assign({}, state.toolUsages, action.response.entities.toolUsages),
                partUsages: _.assign({}, state.partUsages, action.response.entities.partUsages),
                tools: _.assign({}, state.tools, action.response.entities.tools),
                parts: _.assign({}, state.parts, action.response.entities.parts)
            });
        case TechProcessActionType.TECHPROCESS_LOAD_SUCCEED:
            return _.assign({}, state, {
                techProcesses: _.assign({}, state.techProcesses, action.response.entities.techProcesses),
                techOperations: _.assign({}, state.techOperations, action.response.entities.techOperations),
                techSteps: _.assign({}, state.techSteps, action.response.entities.techSteps),
                toolUsages: _.assign({}, state.toolUsages, action.response.entities.toolUsages),
                partUsages: _.assign({}, state.partUsages, action.response.entities.partUsages),
                tools: _.assign({}, state.tools, action.response.entities.tools),
                parts: _.assign({}, state.parts, action.response.entities.parts)
            });
        case TechStepActionType.TECHSTEP_SAVE_SUCCEED:
            return _.assign({}, state, {
                techSteps: _.assign({}, state.techSteps, action.response.entities.techSteps),
                toolUsages: _.assign({}, state.toolUsages, action.response.entities.toolUsages),
                partUsages: _.assign({}, state.partUsages, action.response.entities.partUsages),
                tools: _.assign({}, state.tools, action.response.entities.tools),
                parts: _.assign({}, state.parts, action.response.entities.parts)
            });
        default:
            return state;
    }
};