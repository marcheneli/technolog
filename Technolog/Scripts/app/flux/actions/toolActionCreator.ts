/// <reference path="../../../typings/tsd.d.ts" />

import EntityActionCreator from "./entityActionCreator";
import EntityActionType from "./entityActionType";
import ActionSourceTypes from "./actionSourceTypes";
import EntityType from "./entityType";
import ToolService from "../services/newToolService";
import ToolValidator from "../validators/toolValidator";
import AppDispatcher from "../dispatcher/appDispatcher";

class ToolActionCreator extends EntityActionCreator {

    constructor(entityService: ToolService) {
        super(EntityType.Tool, entityService);
    }
}

var toolService: ToolService = new ToolService();

var toolActionCreator: ToolActionCreator = new ToolActionCreator(toolService);

toolService.setActionCreator(toolActionCreator);

export default toolActionCreator;