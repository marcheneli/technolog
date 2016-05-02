import * as ToolActionType from '../actions/toolActionType';
import * as PartActionType from '../actions/partActionType';
import * as TechStepActionType from '../actions/techStepActionType';
import * as TechOperationActionType from '../actions/techOperationActionType';
import * as TechProcessActionType from '../actions/techProcessActionType';
import * as _ from 'lodash';

const initialState = {
    tools: [],
    parts: [],
    techSteps: [],
    techOperations: [],
    techProcesses: []
};

export default function entities(state = initialState, action) {
    switch (action.type) {
        case ToolActionType.TOOL_LOAD_SUCCEED:
            return _.assign({}, state, { tools: _.unionBy(action.tools, state.tools, 'id') });
        case PartActionType.PART_LOAD_SUCCEED:
            return _.assign({}, state, { parts: _.unionBy(action.parts, state.parts, 'id') });
        case TechStepActionType.TECHSTEP_LOAD_SUCCEED:
            return _.assign({}, state, {
                techSteps: _.unionBy(action.techStep, state.techSteps, 'id'),
                tools: _.unionBy(action.tools, state.tools, 'id'),
                parts: _.unionBy(action.parts, state.parts, 'id')
            });
        case TechOperationActionType.TECHOPERATION_LOAD_SUCCEED:
            return _.assign({}, state, {
                techOperations: _.unionBy(action.techOperations, state.techOperations, 'id'),
                techSteps: _.unionBy(action.techStep, state.techSteps, 'id')
            });
        case TechProcessActionType.TECHPROCESS_LOAD_SUCCEED:
            return _.assign({}, state, {
                techProcesses: _.unionBy(action.techProcesses, state.techProcesses, 'id'),
                techOperations: _.unionBy(action.techOperations, state.techOperations, 'id')
            });
        default:
            return state;
    }
};