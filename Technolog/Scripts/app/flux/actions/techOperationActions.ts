/// <reference path="../../../typings/tsd.d.ts" />

import AppDispatcher from "../dispatcher/appDispatcher";
import ActionSourceTypes from "./actionSourceTypes";
import TechOperationActionTypes from "./techOperationActionTypes";

class TechOperationActionsStatic {
    public init(currentPage: number, pageSize: number, searchText: string): void {
        AppDispatcher.dispatch({
            actionType: TechOperationActionTypes.TECHOPERATION_INIT,
            actionSource: ActionSourceTypes.TECHOPERATION,
            currentPage: currentPage,
            pageSize: pageSize,
            searchText: searchText
        });
    }

    public loadEditTechOperation(id: number): void {
        AppDispatcher.dispatch({
            actionType: TechOperationActionTypes.TECHOPERATION_LOAD_EDIT,
            actionSource: ActionSourceTypes.TECHOPERATION,
            id: id
        });
    }

    public create(techOperation: ITechOperation): void {
        AppDispatcher.dispatch({
            actionType: TechOperationActionTypes.TECHOPERATION_CREATE,
            actionSource: ActionSourceTypes.TECHOPERATION,
            techOperation: techOperation
        });
    }

    public update(techOperation: ITechOperation): void {
        AppDispatcher.dispatch({
            actionType: TechOperationActionTypes.TECHOPERATION_UPDATE,
            actionSource: ActionSourceTypes.TECHOPERATION,
            techOperation: techOperation
        });
    }

    public remove(id: number): void {
        AppDispatcher.dispatch({
            actionType: TechOperationActionTypes.TECHOPERATION_DELETE,
            actionSource: ActionSourceTypes.TECHOPERATION,
            id: id
        });
    }

    public changeTechOperationPage(page: number) {
        AppDispatcher.dispatch({
            actionType: TechOperationActionTypes.TECHOPERATION_PAGE_CHANGE,
            actionSource: ActionSourceTypes.TECHOPERATION,
            currentPage: page
        });
    }

    public changeTechOperationsPerPage(techOperationsPerPage: number) {
        AppDispatcher.dispatch({
            actionType: TechOperationActionTypes.TECHOPERATIONS_PER_PAGE_CHANGE,
            actionSource: ActionSourceTypes.TECHOPERATION,
            pageSize: techOperationsPerPage
        });
    }

    public changeTechOperationSearchText(text: string) {
        AppDispatcher.dispatch({
            actionType: TechOperationActionTypes.TECHOPERATION_SEARCH_TEXT_CHANGE,
            actionSource: ActionSourceTypes.TECHOPERATION,
            searchText: text
        });
    }
}

let TechOperationActions: TechOperationActionsStatic = new TechOperationActionsStatic();

export default TechOperationActions;