import { combineReducers } from "redux";
import panels from "./panels";
import entities from "./entities";
import toolLists from "./toolLists";
import toolEditForms from "./toolEditForms";

const main = combineReducers({
    panels,
    entities,
    toolLists,
    toolEditForms
});

export default main;