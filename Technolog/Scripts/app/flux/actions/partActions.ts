/// <reference path="../../../typings/tsd.d.ts" />

import AppDispatcher from "../dispatcher/appDispatcher";
import ActionSourceTypes from "./actionSourceTypes";
import PartActionTypes from "./partActionTypes";

class PartActionsStatic {
    public init(currentPage: number, pageSize: number, searchText: string): void {
        AppDispatcher.dispatch({
            actionType: PartActionTypes.PART_INIT,
            actionSource: ActionSourceTypes.PART,
            currentPage: currentPage,
            pageSize: pageSize,
            searchText: searchText
        });
    }

    public loadEditPart(id: number): void {
        AppDispatcher.dispatch({
            actionType: PartActionTypes.PART_LOAD_EDIT,
            actionSource: ActionSourceTypes.PART,
            id: id
        });
    }

    public create(part: IPart): void {
        AppDispatcher.dispatch({
            actionType: PartActionTypes.PART_CREATE,
            actionSource: ActionSourceTypes.PART,
            part: part
        });
    }

    public update(part: IPart): void {
        AppDispatcher.dispatch({
            actionType: PartActionTypes.PART_UPDATE,
            actionSource: ActionSourceTypes.PART,
            part: part
        });
    }

    public remove(id: number): void {
        AppDispatcher.dispatch({
            actionType: PartActionTypes.PART_DELETE,
            actionSource: ActionSourceTypes.PART,
            id: id
        });
    }

    public changePartPage(page: number) {
        AppDispatcher.dispatch({
            actionType: PartActionTypes.PART_PAGE_CHANGE,
            actionSource: ActionSourceTypes.PART,
            currentPage: page
        });
    }

    public changePartsPerPage(partsPerPage: number) {
        AppDispatcher.dispatch({
            actionType: PartActionTypes.PARTS_PER_PAGE_CHANGE,
            actionSource: ActionSourceTypes.PART,
            pageSize: partsPerPage
        });
    }

    public changePartSearchText(text: string) {
        AppDispatcher.dispatch({
            actionType: PartActionTypes.PART_SEARCH_TEXT_CHANGE,
            actionSource: ActionSourceTypes.PART,
            searchText: text
        });
    }
}

let PartActions: PartActionsStatic = new PartActionsStatic();

export default PartActions;