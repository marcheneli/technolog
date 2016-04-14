/// <reference path="../../../typings/tsd.d.ts" />

import EntityActionCreator from "./entityActionCreator";
import EntityType from "./entityType";
import ToolService from "../services/newToolService";

class ToolActionCreator extends EntityActionCreator {
    constructor(entityService: ToolService) {
        super(EntityType.Tool, entityService);
    }
}

var toolService: ToolService = new ToolService();

var toolActionCreator: ToolActionCreator = new ToolActionCreator(toolService);

toolService.setActionCreator(toolActionCreator);

export default toolActionCreator;