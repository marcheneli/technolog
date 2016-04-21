/// <reference path="../../../typings/tsd.d.ts" />

abstract class EntityValidator {
    public abstract validate(componentId: string, currentState: any, entity: any);
}

export default EntityValidator;