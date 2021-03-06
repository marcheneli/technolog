﻿/// <reference path="../../../typings/tsd.d.ts" />

import * as EventEmitter from "eventemitter3";
import AppDispatcher from "../dispatcher/appDispatcher";
import EntityType from "../actions/entityType";
import ActionSourceTypes from "../actions/actionSourceTypes";
import EntityActionType from "../actions/entityActionType";
import AppPayload from "../iAppPayload";
import Utils from "../../utils/utils";

abstract class EntityStore extends EventEmitter {
    protected entityType: EntityType;
    protected dispatcherToken: string;
    protected entityComponentStates = {};
    protected entityComponentHistories = {};

    constructor(entityType: EntityType) {
        super();

        this.entityType = entityType;

        this.dispatcherToken = this.register();
    }

    public getState(componentId: string): any {
        return this.entityComponentStates[componentId];
    }

    protected emitChange(componentId: string): void {
        this.emit(componentId);
    }

    /**
     * @param {function} callback
     */
    public addChangeListener(callback: () => void, componentId: string): void {
        this.entityComponentStates[componentId] = {};
        this.on(componentId, callback);
    }

    /**
     * @param {function} callback
     */
    public removeChangeListener(callback: () => void, componentId: string): void {
        delete this.entityComponentStates[componentId];
        this.removeListener(componentId, callback);
    }

    protected abstract updateEntityList(componentId: string, entities: Array<any>): void;

    protected updateTotalAmount(componentId: string, totalAmount: number): void {
        this.entityComponentStates[componentId].totalAmount = totalAmount;
    }

    protected abstract updateEntityPage(componentId: string, entityPage: number): void;

    protected abstract updateEntitysPerPage(componentId: string, entitiesPerPage: number): void;

    protected abstract deleteSelectedEntities(componentId: string, deletedTools: Array<ITool>): void;

    protected initEntityState(componentId: string, entity: any) {
        this.entityComponentStates[componentId] = {
            entity: entity,
            isRedoAvailable: false,
            isUndoAvailable: false
        };
        this.entityComponentHistories[componentId] = {
            entityUnDoes: [entity],
            entityReDoes: []
        };
    }

    protected updateDeleteConfirmation(componentId: string): void {
        this.entityComponentStates[componentId].isConfirmDeleting =
            !this.entityComponentStates[componentId].isConfirmDeleting;
    }

    protected updateLoadPending(componentId: string, isPending: boolean): void {
        this.entityComponentStates[componentId].isLoading = isPending;
    }

    protected updateSavePending(componentId: string): void {
        this.entityComponentStates[componentId].isSaving =
            !this.entityComponentStates[componentId].isSaving;
    }

    protected updateDeletePending(componentId: string): void {
        this.entityComponentStates[componentId].isDeleting =
            !this.entityComponentStates[componentId].isDeleting;
    }

    protected updateEntityComponentHistory(componentId: string, changedEntity: any): void {
        var entityComponentHistory = this.entityComponentHistories[componentId];
        
        entityComponentHistory.entityUnDoes.push(changedEntity);

        entityComponentHistory.entityReDoes = [];
        this.entityComponentStates[componentId] = {
            entity: changedEntity,
            isRedoAvailable: false,
            isUndoAvailable: true
        };
    }

    protected addAlert(componentId: string, message: string, alertType: string) {
        this.entityComponentStates[componentId].alerts.push({ id: Utils.uuid(), message: message, type: alertType });
    }

    protected removeAlert(componentId: string, alertId: string) {
        var alerts = this.entityComponentStates[componentId].alerts;
        var alert;

        for (var i = 0; i < alerts.length; i++) {
            if (alerts[i].id == alertId) {
                alert = alerts[i];
                break;
            }
        }

        alerts.splice(alerts.indexOf(alert), 1);
    }

    protected unDoEntityComponentHistory(componentId: string): void {
        var entityComponentHistory = this.entityComponentHistories[componentId];

        var entity;

        if (entityComponentHistory.entityUnDoes.length > 1) {
            entity = entityComponentHistory.entityUnDoes.pop();
            entityComponentHistory.entityReDoes.push(entity);
            entity = entityComponentHistory.entityUnDoes[
                entityComponentHistory.entityUnDoes.length - 1];
        } else {
            entity = entityComponentHistory.entityUnDoes[0];
        }

        this.entityComponentStates[componentId] = {
            entity: entity,
            isRedoAvailable: true,
            isUndoAvailable: entityComponentHistory.entityUnDoes.length > 1
        };
    }

    protected reDoEntityComponentHistory(componentId: string): void {
        var entityComponentHistory = this.entityComponentHistories[componentId];

        var entity = entityComponentHistory.entityReDoes.pop();
        entityComponentHistory.entityUnDoes.push(entity);

        this.entityComponentStates[componentId] = {
            entity: entity,
            isRedoAvailable: entityComponentHistory.entityReDoes.length > 0,
            isUndoAvailable: true
        };
    }

    private register(): string {
        return AppDispatcher.register((payload: AppPayload) => {
            if (payload.actionSource != ActionSourceTypes.Entity) return;
            if (payload.entityType != this.entityType) return;

            switch (payload.actionType) {
                case EntityActionType.InitEntityState:
                    this.initEntityState(payload.componentId, payload.entity);
                    this.emitChange(payload.componentId);
                    break;
                case EntityActionType.LoadPending:
                    this.updateLoadPending(payload.componentId, true);
                    this.emitChange(payload.componentId);
                    break;
                case EntityActionType.LoadSucceed:
                    this.updateEntityList(payload.componentId, payload.entities);
                    this.updateTotalAmount(payload.componentId, payload.totalAmount);
                    this.updateEntityPage(payload.componentId, payload.currentPage);
                    this.updateEntitysPerPage(payload.componentId, payload.pageSize);
                    this.updateLoadPending(payload.componentId, false);
                    this.emitChange(payload.componentId);
                    break;
                case EntityActionType.SavePending:
                    this.updateSavePending(payload.componentId);
                    this.emitChange(payload.componentId);
                    break;
                case EntityActionType.SaveSucceed:
                    this.updateSavePending(payload.componentId);
                    this.emitChange(payload.componentId);
                    break;
                case EntityActionType.DeletePending:
                    this.updateDeletePending(payload.componentId);
                    this.emitChange(payload.componentId);
                    break;
                case EntityActionType.DeleteSucceed:
                    this.deleteSelectedEntities(payload.componentId, payload.entities);
                    this.updateDeletePending(payload.componentId);
                    this.emitChange(payload.componentId);
                    break;
                case EntityActionType.OpenDeleteConfirmation:
                    this.updateDeleteConfirmation(payload.componentId);
                    this.emitChange(payload.componentId);
                    break;
                case EntityActionType.CloseDeleteConfirmation:
                    this.updateDeleteConfirmation(payload.componentId);
                    this.emitChange(payload.componentId);
                    break;
                case EntityActionType.Change:
                    this.updateEntityComponentHistory(
                        payload.componentId,
                        payload.entity);
                    this.emitChange(payload.componentId);
                    break;
                case EntityActionType.Undo:
                    this.unDoEntityComponentHistory(payload.componentId);
                    this.emitChange(payload.componentId);
                    break;
                case EntityActionType.Redo:
                    this.reDoEntityComponentHistory(payload.componentId);
                    this.emitChange(payload.componentId);
                    break;
            }
        });
    }
}

export default EntityStore;