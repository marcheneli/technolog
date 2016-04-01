/// <reference path="../../../typings/tsd.d.ts" />

import AppDispatcher from "../dispatcher/appDispatcher";
import ActionSourceTypes from "./actionSourceTypes";
import TechProcessActionTypes from "./techProcessActionTypes";

class TechProcessActionsStatic {
    public init(currentPage: number, pageSize: number, searchText: string): void {
        AppDispatcher.dispatch({
            actionType: TechProcessActionTypes.TECHPROCESS_INIT,
            actionSource: ActionSourceTypes.TECHPROCESS,
            currentPage: currentPage,
            pageSize: pageSize,
            searchText: searchText
        });
    }

    public loadEditTechProcess(id: number): void {
        AppDispatcher.dispatch({
            actionType: TechProcessActionTypes.TECHPROCESS_LOAD_EDIT,
            actionSource: ActionSourceTypes.TECHPROCESS,
            id: id
        });
    }

    public create(techProcess: ITechProcess): void {
        AppDispatcher.dispatch({
            actionType: TechProcessActionTypes.TECHPROCESS_CREATE,
            actionSource: ActionSourceTypes.TECHPROCESS,
            techProcess: techProcess
        });
    }

    public update(techProcess: ITechProcess): void {
        AppDispatcher.dispatch({
            actionType: TechProcessActionTypes.TECHPROCESS_UPDATE,
            actionSource: ActionSourceTypes.TECHPROCESS,
            techProcess: techProcess
        });
    }

    public remove(id: number): void {
        AppDispatcher.dispatch({
            actionType: TechProcessActionTypes.TECHPROCESS_DELETE,
            actionSource: ActionSourceTypes.TECHPROCESS,
            id: id
        });
    }

    public changeTechProcessPage(page: number) {
        AppDispatcher.dispatch({
            actionType: TechProcessActionTypes.TECHPROCESS_PAGE_CHANGE,
            actionSource: ActionSourceTypes.TECHPROCESS,
            currentPage: page
        });
    }

    public changeTechProcesssPerPage(techProcesssPerPage: number) {
        AppDispatcher.dispatch({
            actionType: TechProcessActionTypes.TECHPROCESSES_PER_PAGE_CHANGE,
            actionSource: ActionSourceTypes.TECHPROCESS,
            pageSize: techProcesssPerPage
        });
    }

    public changeTechProcessSearchText(text: string) {
        AppDispatcher.dispatch({
            actionType: TechProcessActionTypes.TECHPROCESS_SEARCH_TEXT_CHANGE,
            actionSource: ActionSourceTypes.TECHPROCESS,
            searchText: text
        });
    }
}

let TechProcessActions: TechProcessActionsStatic = new TechProcessActionsStatic();

export default TechProcessActions;