/// <reference path="../../typings/tsd.d.ts" />
define(["require", "exports", "react-router", "../constants/pageConstants"], function (require, exports, ReactRouter, pageConstants_1) {
    "use strict";
    var PageParamsManagerStatic = (function () {
        function PageParamsManagerStatic() {
            var _this = this;
            this.locationChangeHandler = function (location) {
                var query = location.query;
                _this.navigation = location;
                if (query.page) {
                    if (query.page != _this.currentPage)
                        _this.currentPage = query.page;
                }
                if (query.search) {
                    if (query.search != _this.searchText)
                        _this.searchText = query.search;
                }
                if (query.pageSize) {
                    if (query.pageSize != _this.itemsPerPage)
                        _this.itemsPerPage = query.pageSize;
                }
            };
            this.changePage = function (page) {
                _this.navigation.query.page = page;
                _this.changeLocation();
            };
            this.changeSearchText = function (text) {
                _this.navigation.query.search = text;
                _this.changeLocation();
            };
            this.changePageSize = function (pageSize) {
                _this.navigation.query.pageSize = pageSize;
                _this.changeLocation();
            };
            this.getPage = function () {
                return _this.currentPage;
            };
            this.getPageSize = function () {
                return _this.itemsPerPage;
            };
            this.getSearchText = function () {
                return _this.searchText;
            };
            this.currentPage = 0;
            this.itemsPerPage = pageConstants_1.default.ITEMS_PER_PAGE_INIT;
            this.searchText = '';
        }
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