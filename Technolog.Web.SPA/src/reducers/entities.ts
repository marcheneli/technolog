import * as ToolActionType from '../actions/toolActionType';
import * as _ from 'lodash';

const initialState = {
    tools: []
};

export default function entities(state = initialState, action) {
    switch (action.type) {
        case ToolActionType.TOOL_LOAD_SUCCEED:
            return _.assign({}, state, { tools: _.unionBy(action.tools, state.tools, 'id') });
        default:
            return state;
    }
};