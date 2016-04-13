/// <reference path="../../../typings/tsd.d.ts" />

import EntityService from "./entityService";
import EntityActionCreator from "../actions/entityActionCreator";

export default class ToolService extends EntityService {

    constructor() {
        super("tools");
    }

    protected getEntitiesAmount(entityListModel: any): number {
        return entityListModel.toolAmount;
    }

    protected getEntities(entityListModel: any): Array<any> {
        return entityListModel.tools;
    }
}