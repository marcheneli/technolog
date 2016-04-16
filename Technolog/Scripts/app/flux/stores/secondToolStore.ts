/// <reference path="../../../typings/tsd.d.ts" />

import EntityStore from "./entityStore";
import EntityType from "../actions/entityType";

class ToolStore extends EntityStore {

    constructor() {
        super(EntityType.Tool);
    }

    protected updateEntityList(componentId: string, tools: Array<any>): void {
        this.entityComponentStates[componentId].tools = tools;
    }

    protected updateEntityPage(componentId: string, entityPage: number): void {
        this.entityComponentStates[componentId].toolPage = entityPage;
    }

    protected updateEntitysPerPage(componentId: string, entitiesPerPage: number): void {
        this.entityComponentStates[componentId].toolsPerPage = entitiesPerPage;
    }
}

let toolStore: ToolStore = new ToolStore();

export default toolStore;