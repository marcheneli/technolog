var ToolActions = {
    init: function (currentPage, pageSize, searchText) {
        AppDispatcher.handleViewAction({
            actionType: ToolConstants.TOOL_INIT,
            currentPage: currentPage,
            pageSize: pageSize,
            searchText: searchText
        });
    },
    loadEditTool: function (id) {
        AppDispatcher.handleViewAction({
            actionType: ToolConstants.TOOL_LOAD_EDIT,
            id: id
        });
    },
    create: function (tool) {
        AppDispatcher.handleViewAction({
            actionType: ToolConstants.TOOL_CREATE,
            tool: tool
        });
    },
    update: function (tool) {
        AppDispatcher.handleViewAction({
            actionType: ToolConstants.TOOL_UPDATE,
            tool: tool
        });
    },
    remove: function (id) {
        AppDispatcher.handleViewAction({
            actionType: ToolConstants.TOOL_DELETE,
            id: id
        });
    },
    changeToolPage: function (page) {
        AppDispatcher.handleViewAction({
            actionType: ToolConstants.TOOL_PAGE_CHANGE,
            page: page
        });
    },
    changeToolsPerPage: function (toolsPerPage) {
        AppDispatcher.handleViewAction({
            actionType: ToolConstants.TOOLS_PER_PAGE_CHANGE,
            toolsPerPage: toolsPerPage
        });
    },
    changeToolSearchText: function (text) {
        AppDispatcher.handleViewAction({
            actionType: ToolConstants.TOOL_SEARCH_TEXT_CHANGE,
            text: text
        });
    },
};