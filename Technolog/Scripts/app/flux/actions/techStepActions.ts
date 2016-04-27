/// <reference path="../../../typings/tsd.d.ts" />

import AppDispatcher from "../dispatcher/appDispatcher";
import ActionSourceTypes from "./actionSourceTypes";
import TechStepActionTypes from "./techStepActionTypes";

class TechStepActionsStatic {
    public init(currentPage: number, pageSize: number, searchText: string): void {
        AppDispatcher.dispatch({
            actionType: TechStepActionTypes.TECHSTEP_INIT,
            actionSource: ActionSourceTypes.TECHSTEP,
            currentPage: currentPage,
            pageSize: pageSize,
            searchText: searchText
        });
    }

    public loadEditTechStep(id: number): void {
        AppDispatcher.dispatch({
            actionType: TechStepActionTypes.TECHSTEP_LOAD_EDIT,
            actionSource: ActionSourceTypes.TECHSTEP,
            id: id
        });
    }

    public create(techStep: ITechStep): void {
        AppDispatcher.dispatch({
            actionType: TechStepActionTypes.TECHSTEP_CREATE,
            actionSource: ActionSourceTypes.TECHSTEP,
            techStep: techStep
        });
    }

    public update(techStep: ITechStep): void {
        AppDispatcher.dispatch({
            actionType: TechStepActionTypes.TECHSTEP_UPDATE,
            actionSource: ActionSourceTypes.TECHSTEP,
            techStep: techStep
        });
    }

    public remove(id: number): void {
        AppDispatcher.dispatch({
            actionType: TechStepActionTypes.TECHSTEP_DELETE,
            actionSource: ActionSourceTypes.TECHSTEP,
            id: id
        });
    }

    public changeTechStepPage(page: number) {
        AppDispatcher.dispatch({
            actionType: TechStepActionTypes.TECHSTEP_PAGE_CHANGE,
            actionSource: ActionSourceTypes.TECHSTEP,
            currentPage: page
        });
    }

    public changeTechStepsPerPage(techStepsPerPage: number) {
        AppDispatcher.dispatch({
            actionType: TechStepActionTypes.TECHSTEPS_PER_PAGE_CHANGE,
            actionSource: ActionSourceTypes.TECHSTEP,
            pageSize: techStepsPerPage
        });
    }

    public changeTechStepSearchText(text: string) {
        AppDispatcher.dispatch({
            actionType: TechStepActionTypes.TECHSTEP_SEARCH_TEXT_CHANGE,
            actionSource: ActionSourceTypes.TECHSTEP,
            searchText: text
        });
    }
}

let TechStepActions: TechStepActionsStatic = new TechStepActionsStatic();

export default TechStepActions;