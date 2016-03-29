/// <reference path="../../typings/tsd.d.ts" />

import * as ReactRouter from "react-router";
import PageConstants from "../constants/pageConstants";

class PageParamsManagerStatic {

    private currentPage: number;
    private itemsPerPage: number;
    private searchText: string;
    private navigation;

    constructor() {
        this.currentPage = 0;
        this.itemsPerPage = PageConstants.ITEMS_PER_PAGE_INIT;
        this.searchText = '';
    }

    public locationChangeHandler = (location): void => {
        var query = location.query;
        this.navigation = location;

        if (query.page) {
            if (query.page != this.currentPage) this.currentPage = query.page;
        }

        if (query.search) {
            if (query.search != this.searchText) this.searchText = query.search;
        }

        if (query.pageSize) {
            if (query.pageSize != this.itemsPerPage) this.itemsPerPage = query.pageSize;
        }
    }

    public changePage = (page:number): void => {
        this.navigation.query.page = page;
        this.changeLocation();
    }

    public changeSearchText = (text: string): void => {
        this.navigation.query.search = text;
        this.changeLocation();
    }

    public changePageSize = (pageSize: number): void => {
        this.navigation.query.pageSize = pageSize;
        this.changeLocation();
    }

    public getPage = (): number => {
        return this.currentPage;
    }

    public getPageSize = (): number => {
        return this.itemsPerPage;
    }

    public getSearchText = (): string => {
        return this.searchText;
    }

    private changeLocation() {
        ReactRouter.browserHistory.push(this.navigation);
    }
}

let PageParamsManager: PageParamsManagerStatic = new PageParamsManagerStatic();

ReactRouter.browserHistory.listen(PageParamsManager.locationChangeHandler);

export default PageParamsManager;