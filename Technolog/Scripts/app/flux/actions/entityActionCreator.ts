﻿/// <reference path="../../../typings/tsd.d.ts" />

import AppDispatcher from "../dispatcher/appDispatcher";
import EntityActionType from "./entityActionType";
import EntityType from "./entityType";
import EntityService from "../services/EntityService";
import ActionSourceTypes from "./actionSourceTypes";

export default class EntityActionCreator {
    private entityType: EntityType;
    private entityService: EntityService;

    constructor(entityType: EntityType, entityService: EntityService) {
        this.entityType = entityType;
        this.entityService = entityService;
    }

    public load(componentId: string,
        page: number, pageSize: number, searchText: string): void {

        this.entityService.load(componentId,
            page, pageSize,
            searchText);
    }

    public loadPending(componentId: string): void {
        AppDispatcher.dispatch({
            actionType: EntityActionType.LoadPending,
            actionSource: ActionSourceTypes.Entity,
            entityType: this.entityType,
            componentId: componentId
        });
    }

    public loadSucceed(componentId: string,
        entities: Array<any>,
        totalEntityAmount: number,
        entitiesPerPage: number,
        page: number,
        searchText: string): void {

        AppDispatcher.dispatch({
            actionType: EntityActionType.LoadSucceed,
            actionSource: ActionSourceTypes.Entity,
            entityType: this.entityType,
            componentId: componentId,
            entities: entities,
            totalAmount: totalEntityAmount,
            pageSize: entitiesPerPage,
            currentPage: page,
            searchText: searchText
        });
    }
    
    public loadFailed(componentId: string, errorMessage: string): void {
        AppDispatcher.dispatch({
            actionType: EntityActionType.LoadPending,
            actionSource: ActionSourceTypes.Entity,
            entityType: this.entityType,
            componentId: componentId,
            errorMessage: errorMessage
        });
    }

    public save(componentId: string, entity: any): void {
        this.entityService.save
    }

    public savePending(componentId: string): void {
        AppDispatcher.dispatch({
            actionType: EntityActionType.SavePending,
            actionSource: ActionSourceTypes.Entity,
            entityType: this.entityType,
            componentId: componentId
        });
    }

    public saveSucceed(componentId: string): void {
        AppDispatcher.dispatch({
            actionType: EntityActionType.SaveSucceed,
            actionSource: ActionSourceTypes.Entity,
            entityType: this.entityType,
            componentId: componentId
        });
    }

    public saveFailed(componentId: string, errorMessage: string): void {
        AppDispatcher.dispatch({
            actionType: EntityActionType.SaveSucceed,
            actionSource: ActionSourceTypes.Entity,
            entityType: this.entityType,
            componentId: componentId,
            errorMessage: errorMessage
        });
    }

    public delete(componentId: string, entities: Array<any>): void {
        this.entityService.delete(componentId, entities);
    }

    public deletePending(componentId: string): void {
        AppDispatcher.dispatch({
            actionType: EntityActionType.DeletePending,
            actionSource: ActionSourceTypes.Entity,
            entityType: this.entityType,
            componentId: componentId
        });
    }

    public deleteSucceed(componentId: string): void {
        AppDispatcher.dispatch({
            actionType: EntityActionType.DeleteSucceed,
            actionSource: ActionSourceTypes.Entity,
            entityType: this.entityType,
            componentId: componentId
        });
    }

    public deleteFailed(componentId: string, errorMessage: string): void {
        AppDispatcher.dispatch({
            actionType: EntityActionType.DeleteFailed,
            actionSource: ActionSourceTypes.Entity,
            entityType: this.entityType,
            componentId: componentId,
            errorMessage: errorMessage
        });
    }
}