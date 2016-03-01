var CHANGE_EVENT = 'change';

var _tools = {};
var _toolSearchText = "";
var _totalToolAmount = 0;
var _toolsPerPage = PageConstants.ITEMS_PER_PAGE_INIT;
var _currentToolPage = 0;

var _loadTools = function () {
    $.get("api/tools?search=" + _toolSearchText + "&page=" + _currentToolPage + "&pageSize=" + _toolsPerPage, function (toolListModel) {
        _totalToolAmount = toolListModel.toolAmount;

        _tools = {};

        toolListModel.tools.forEach(function (tool) {
            _tools[tool.id] = tool;
        });

        ToolStore.emitChange();
    });
}

var _addTool = function (tool) {
    $.ajax({
        url: 'api/tools',
        dataType: 'json',
        type: 'PUT',
        data: {
            id: tool.id,
            name: tool.name,
            __RequestVerificationToken: antiForgeryToken
        },
        success: function (tool) {

        },
        error: function (xhr, status, err) {
            console.error(this.props.url, status, err.toString());
        }
    });
}

var _deleteTool = function (id) {
    $.ajax({
        url: 'api/tools/' + id,
        dataType: 'json',
        type: 'DELETE',
        data: { __RequestVerificationToken: antiForgeryToken },
        success: function (id) {
            _loadTools();
        },
        error: function (xhr, status, err) {
            console.error(this.props.url, status, err.toString());
        }
    }); 
}

var _updateTool = function (tool) {
    $.ajax({
        url: 'api/tools',
        dataType: 'json',
        type: 'POST',
        data: {
            id: tool.id,
            name: tool.name,
            __RequestVerificationToken: antiForgeryToken
        },
        success: function (tool) {
            if (_tools[tool.id]) {
                _tools[tool.id] = assign({}, _tools[tool.id], tool);

                ToolStore.emitChange();
            }
        },
        error: function (xhr, status, err) {
            console.error(this.props.url, status, err.toString());
        }
    });
}

var ToolStore = assign({}, EventEmitter.prototype, {
    init: function () {
        _toolsPerPage = PageConstants.ITEMS_PER_PAGE_INIT;
        _currentToolPage = 0;

        _loadTools();
    },

    getAll: function () {
        return _tools;
    },

    getToolAmount: function () {
        return _totalToolAmount;
    },

    getToolsPerPage: function () {
        return _toolsPerPage;
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    /**
     * @param {function} callback
     */
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    /**
     * @param {function} callback
     */
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function (payload) {
    switch (payload.action.actionType) {
        case ToolConstants.TOOL_INIT: 
            ToolStore.init();
            break;

        case ToolConstants.TOOL_CREATE:
            _addTool(payload.action.tool)
            break;

        case ToolConstants.TOOL_UPDATE:
            _updateTool(payload.action.tool);
            break;

        case ToolConstants.TOOL_DELETE:
            _deleteTool(payload.action.id);
            break;

        case ToolConstants.TOOL_PAGE_CHANGE:
            _currentToolPage = payload.action.page;
            _loadTools();
            break;

        case ToolConstants.TOOLS_PER_PAGE_CHANGE:
            _toolsPerPage = payload.action.toolsPerPage;
            _loadTools();
            break;

        case ToolConstants.TOOL_SEARCH_TEXT_CHANGE:
            _toolSearchText = payload.action.text;
            _loadTools();
            break;

        default:
    }
});