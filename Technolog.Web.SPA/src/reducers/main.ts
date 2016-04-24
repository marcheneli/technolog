import { combineReducers } from "redux";
import panels from "./panels";
import entities from "./entities";
import toolLists from "./toolLists";

const main = combineReducers({
    panels,
    entities,
    toolLists
});

export default main;