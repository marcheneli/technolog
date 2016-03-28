/// <reference path="../../typings/tsd.d.ts" />

import * as ReactRouter from "react-router";
import PageConstants from "../constants/pageConstants";

let currentPage = 0;
let itemsPerPage = PageConstants.ITEMS_PER_PAGE_INIT;
let searchText = '';

class PageParamsManagerStatic {
    private navigation;

    public locationChangeHandler(location) {
        var query = location.query;

        if (query.page) {
            if (query.page != currentPage) currentPage = query.page;
        }

        if (query.search) {
            if (query.search != searchText) searchText = query.search;
        }

        if (query.pageSize) {
            if (query.pageSize != itemsPerPage) itemsPerPage = query.pageSize;
        }
    }

    public changePage(page) {
        this.navigation.query.page = page;
        this.changeLocation();
    }

    public changeSearchText(text) {
        this.navigation.query.search = text;
        this.changeLocation();
    }

    public changePageSize(pageSize) {
        this.navigation.query.pageSize = pageSize;
        this.changeLocation();
    }

    public getPage() {
        return currentPage;
    }

    public getPageSize() {
        return itemsPerPage;
    }

    public getSearchText() {
        return searchText;
    }

    private changeLocation() {
        ReactRouter.browserHistory.push(this.navigation);
    }
}

let PageParamsManager: PageParamsManagerStatic = new PageParamsManagerStatic();

ReactRouter.browserHistory.listen(PageParamsManager.locationChangeHandler);

export default PageParamsManager;