import { combineReducers } from "redux";
import { reducer as form } from 'redux-form';
import panels from "./panels";
import entities from "./entities";
import auth from './auth';
import toolLists from "./toolLists";
import toolEditForms from "./toolEditForms";
import partLists from "./partLists";
import partEditForms from "./partEditForms";
import techStepLists from "./techStepLists";
import techStepEditForms from "./techStepEditForms";
import techOperationLists from "./techOperationLists";
import techOperationEditForms from "./techOperationEditForms";
import techProcessLists from "./techProcessLists";
import techProcessEditForms from "./techProcessEditForms";

const main = combineReducers({
    panels,
    entities,
    auth,
    form,
    toolLists,
    toolEditForms,
    partLists,
    partEditForms,
    techStepLists,
    techStepEditForms,
    techOperationLists,
    techOperationEditForms,
    techProcessLists,
    techProcessEditForms
});

export default main;