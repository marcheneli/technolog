/// <reference path="../../../typings/tsd.d.ts" />

import EntityActionCreator from "../actions/entityActionCreator";
import assign = require('object-assign');

abstract class EntityService {
    private controllerName: string;
    private actionCreator: EntityActionCreator;
    private lastLoadIds: any = {};

    constructor(controllerName: string) {
        this.controllerName = controllerName;
    }

    protected abstract getEntitiesAmount(entityListModel: any): number;

    protected abstract getEntities(entityListModel: any): Array<any>;

    protected abstract getDeleteData(entities: Array<any>): any;

    public setActionCreator(actionCreator: EntityActionCreator): void {
        this.actionCreator = actionCreator;
    }

    public load(componentId: string, loadId: string, page: number,
        entitiesPerPage: number, searchText: string): void {
        this.actionCreator.loadPending(componentId);
        this.lastLoadIds[componentId] = loadId;

        $.ajax({
            url: (location.origin + "/api/"
                    + this.controllerName + '/'
                    + "?search=" + searchText
                    + "&page=" + page + "&pageSize="
                    + entitiesPerPage),
            dataType: 'json',
            type: 'GET',
            success: (entityListModel) => {
                if (this.lastLoadIds[componentId] != loadId) return;

                var totalEntityAmount = this.getEntitiesAmount(entityListModel);

                var entities = this.getEntities(entityListModel);

                this.actionCreator.loadSucceed(
                    componentId,
                    entities,
                    totalEntityAmount,
                    entitiesPerPage, page, searchText);
            },
            error: (xhr, status, err) => {
                if (this.lastLoadIds[componentId] != loadId) return;

                this.actionCreator.loadFailed(componentId, err);
            }
        });
    }

    public save(componentId: string, entity: any) {
        this.actionCreator.savePending(componentId);
        const type = entity.id == 0 ? "PUT" : "POST";

        $.ajax({
            url: location.origin + '/api/' + this.controllerName + '/',
            dataType: 'json',
            type: type,
            data: assign({}, entity, { __RequestVerificationToken: antiForgeryToken }),
            success: (savedTool) => {
                this.actionCreator.saveSucceed(componentId);
            },
            error: (xhr, status, err) => {
                this.actionCreator.saveFailed(componentId, err);
            }
        });
    }

    public delete(componentId: string, entities: Array<any>) {
        this.actionCreator.deletePending(componentId);

        $.ajax({
            url: location.origin + '/api/' + this.controllerName + "/",
            type: 'DELETE',
            dataType: "json",
            data: this.getDeleteData(entities),
            success: (response) => {
                this.actionCreator.deleteSucceed(componentId, entities);
            },
            error: (xhr, status, err) => {
                this.actionCreator.deleteFailed(componentId, err);
            }
        });
    }
}

export default EntityService;

