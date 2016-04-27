var currentPage = 0;
var itemsPerPage = PageConstants.ITEMS_PER_PAGE_INIT;
var searchText = '';

var PageParamsManager = {
    locationChangeHandler: function (location) {
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
    },

    changePage: function (page) {
        navigation.query.page = page;
        this.changeLocation();
    },

    changeSearchText: function (text) {
        navigation.query.search = text;
        this.changeLocation();
    },

    changePageSize: function (pageSize) {
        navigation.query.pageSize = pageSize;
        this.changeLocation();
    },

    getPage: function () {
        return currentPage;
    },

    getPageSize: function () {
        return itemsPerPage;
    },

    getSearchText: function () {
        return searchText;
    },

    changeLocation: function () {
        ReactRouter.browserHistory.push(navigation);
    }
};

ReactRouter.browserHistory.listen(PageParamsManager.locationChangeHandler);