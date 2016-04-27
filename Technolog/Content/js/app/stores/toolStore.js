var CHANGE_TOOLS_EVENT = 'change_tools';
var CHANGE_EDITTOOL_EVENT = 'change_edittool';

var _tools = {};
var _tool;
var _toolSearchText = "";
var _totalToolAmount = 0;
var _toolsPerPage = PageConstants.ITEMS_PER_PAGE_INIT;
var _currentToolPage = 0;

var _loadTools = function () {
    $.get(location.origin + "/api/tools?search=" + _toolSearchText + "&page=" + _currentToolPage + "&pageSize=" + _toolsPerPage, function (toolListModel) {

        _totalToolAmount = toolListModel.toolAmount;

        _tools = {};

        toolListModel.tools.forEach(function (tool) {
            _tools[tool.id] = tool;
        });

        ToolStore.emitChangeTools();
    });
}

var _loadTool = function (id) {
    if (id == 0) {
        _tool = { id: 0, name: "" };
        ToolStore.emitChangeEditTool();
        return;
    }
    if (_tools[id]) {
        _tool = _tools[id];
        ToolStore.emitChangeEditTool();
    } else {
        $.ajax({
            url: location.origin + "/api/tools/" + id,
            type: 'GET',
            success: function (tool) {
                _tool = tool;
                ToolStore.emitChangeEditTool();
            },
            error: function (data) {
                ErrorActions.received(data.responseJSON);
            }
        });
    }
}

var _addTool = function (tool) {
    $.ajax({
        url: location.origin + '/api/tools',
        dataType: 'json',
        type: 'PUT',
        data: {
            id: tool.id,
            name: tool.name,
            price: tool.price,
            __RequestVerificationToken: antiForgeryToken
        },
        success: function (tool) {
            _tool = tool;
            if (_tools[tool.id]) {
                _tools[tool.id] = assign({}, _tools[tool.id], tool);

                ToolStore.emitChangeTools();
            }
            NavigationManager.openToolEditor(tool.id);
        },
        error: function (xhr, status, err) {
            console.error(this.props.url, status, err.toString());
        }.bind(this)
    });
}

var _deleteTool = function (id) {
    $.ajax({
        url: location.origin + '/api/tools/' + id,
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
        url: location.origin + '/api/tools',
        dataType: 'json',
        type: 'POST',
        data: {
            id: tool.id,
            name: tool.name,
            price: tool.price,
            __RequestVerificationToken: antiForgeryToken
        },
        success: function (tool) {
            if (_tools[tool.id]) {
                _tools[tool.id] = assign({}, _tools[tool.id], tool);

                ToolStore.emitChangeTools();
            }
        },
        error: function (xhr, status, err) {
            console.error(this.props.url, status, err.toString());
        }
    });
}

var ToolStore = assign({}, EventEmitter.prototype, {
    init: function (currentPage, toolsPerPage, searchText) {
        _toolsPerPage = toolsPerPage;
        _currentToolPage = currentPage;
        _toolSearchText = searchText;

        _loadTools();
    },

    loadEditTool: function (id) {
        _loadTool(id);
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

    getEditTool: function () {
        return _tool;
    },

    emitChangeTools: function () {
        this.emit(CHANGE_TOOLS_EVENT);
    },

    emitChangeEditTool: function () {
        this.emit(CHANGE_EDITTOOL_EVENT);
    },

    addChangeToolsListener: function (callback) {
        this.on(CHANGE_TOOLS_EVENT, callback);
    },

    removeChangeToolsListener: function (callback) {
        this.removeListener(CHANGE_TOOLS_EVENT, callback);
    },

    addChangeEditToolListener: function (callback) {
        this.on(CHANGE_EDITTOOL_EVENT, callback);
    },

    removeChangeEditToolListener: function (callback) {
        this.removeListener(CHANGE_EDITTOOL_EVENT, callback);
    }
});

AppDispatcher.register(function (payload) {
    switch (payload.action.actionType) {
        case ToolConstants.TOOL_INIT: 
            ToolStore.init(payload.action.currentPage, payload.action.pageSize, payload.action.searchText);
            break;

        case ToolConstants.TOOL_LOAD_EDIT:
            ToolStore.loadEditTool(payload.action.id);
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