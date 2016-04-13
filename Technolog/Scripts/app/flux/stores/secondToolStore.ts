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
}

let toolStore: ToolStore = new ToolStore();

export default toolStore;