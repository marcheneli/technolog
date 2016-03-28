/// <reference path="../../typings/tsd.d.ts" />
define(["require", "exports", "react-router", "../constants/pageConstants"], function (require, exports, ReactRouter, pageConstants_1) {
    "use strict";
    var currentPage = 0;
    var itemsPerPage = pageConstants_1.default.ITEMS_PER_PAGE_INIT;
    var searchText = '';
    var PageParamsManagerStatic = (function () {
        function PageParamsManagerStatic() {
        }
        PageParamsManagerStatic.prototype.locationChangeHandler = function (location) {
            var query = location.query;
            if (query.page) {
                if (query.page != currentPage)
                    currentPage = query.page;
            }
            if (query.search) {
                if (query.search != searchText)
                    searchText = query.search;
            }
            if (query.pageSize) {
                if (query.pageSize != itemsPerPage)
                    itemsPerPage = query.pageSize;
            }
        };
        PageParamsManagerStatic.prototype.changePage = function (page) {
            this.navigation.query.page = page;
            this.changeLocation();
        };
        PageParamsManagerStatic.prototype.changeSearchText = function (text) {
            this.navigation.query.search = text;
            this.changeLocation();
        };
        PageParamsManagerStatic.prototype.changePageSize = function (pageSize) {
            this.navigation.query.pageSize = pageSize;
            this.changeLocation();
        };
        PageParamsManagerStatic.prototype.getPage = function () {
            return currentPage;
        };
        PageParamsManagerStatic.prototype.getPageSize = function () {
            return itemsPerPage;
        };
        PageParamsManagerStatic.prototype.getSearchText = function () {
            return searchText;
        };
        PageParamsManagerStatic.prototype.changeLocation = function () {
            ReactRouter.browserHistory.push(this.navigation);
        };
        return PageParamsManagerStatic;
    }());
    var PageParamsManager = new PageParamsManagerStatic();
    ReactRouter.browserHistory.listen(PageParamsManager.locationChangeHandler);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = PageParamsManager;
});
//# sourceMappingURL=pageParamsManager.js.map