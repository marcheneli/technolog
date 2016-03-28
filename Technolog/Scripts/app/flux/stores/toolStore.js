/// <reference path="../../../typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "jquery", "../dispatcher/appDispatcher", "../actions/toolActionTypes", "../actions/errorActions", "../../constants/pageConstants", "../../managers/navigationManager", 'object-assign', "eventemitter3"], function (require, exports, $, appDispatcher_1, toolActionTypes_1, errorActions_1, pageConstants_1, navigationManager_1, assign, EventEmitter) {
    "use strict";
    var CHANGE_TOOLS_EVENT = 'change_tools';
    var CHANGE_EDITTOOL_EVENT = 'change_edittool';
    var _tools = new Array();
    var _tool;
    var _toolSearchText = "";
    var _totalToolAmount = 0;
    var _toolsPerPage = pageConstants_1.default.ITEMS_PER_PAGE_INIT;
    var _currentToolPage = 0;
    function _loadTools() {
        $.get(location.origin + "/api/tools?search=" + _toolSearchText + "&page=" + _currentToolPage + "&pageSize=" + _toolsPerPage, function (toolListModel) {
            _totalToolAmount = toolListModel.toolAmount;
            _tools = new Array();
            toolListModel.tools.forEach(function (tool) {
                _tools[tool.id] = tool;
            });
            ToolStore.emitChangeTools();
        });
    }
    function _loadTool(id) {
        if (id == 0) {
            _tool = { id: 0, name: "", price: 0 };
            ToolStore.emitChangeEditTool();
            return;
        }
        if (_tools[id]) {
            _tool = _tools[id];
            ToolStore.emitChangeEditTool();
        }
        else {
            $.ajax({
                url: location.origin + "/api/tools/" + id,
                type: 'GET',
                success: function (tool) {
                    _tool = tool;
                    ToolStore.emitChangeEditTool();
                },
                error: function (data) {
                    errorActions_1.default.received(data.responseJSON);
                }
            });
        }
    }
    function _addTool(tool) {
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
                navigationManager_1.default.openToolEditor(tool.id);
            },
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }
    function _deleteTool(id) {
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
    function _updateTool(tool) {
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
    function _init(currentPage, toolsPerPage, searchText) {
        _toolsPerPage = toolsPerPage;
        _currentToolPage = currentPage;
        _toolSearchText = searchText;
        _loadTools();
    }
    var ToolStoreStatic = (function (_super) {
        __extends(ToolStoreStatic, _super);
        function ToolStoreStatic() {
            _super.apply(this, arguments);
        }
        ToolStoreStatic.prototype.getAll = function () {
            return _tools;
        };
        ToolStoreStatic.prototype.getToolAmount = function () {
            return _totalToolAmount;
        };
        ToolStoreStatic.prototype.getToolsPerPage = function () {
            return _toolsPerPage;
        };
        ToolStoreStatic.prototype.getEditTool = function () {
            return _tool;
        };
        ToolStoreStatic.prototype.emitChangeTools = function () {
            this.emit(CHANGE_TOOLS_EVENT);
        };
        ToolStoreStatic.prototype.emitChangeEditTool = function () {
            this.emit(CHANGE_EDITTOOL_EVENT);
        };
        /**
         * @param {function} callback
         */
        ToolStoreStatic.prototype.addChangeEditToolListener = function (callback) {
            this.on(CHANGE_EDITTOOL_EVENT, callback);
        };
        /**
         * @param {function} callback
         */
        ToolStoreStatic.prototype.removeChangeEditToolListener = function (callback) {
            this.removeListener(CHANGE_EDITTOOL_EVENT, callback);
        };
        /**
         * @param {function} callback
         */
        ToolStoreStatic.prototype.addChangeToolsListener = function (callback) {
            this.on(CHANGE_TOOLS_EVENT, callback);
        };
        /**
         * @param {function} callback
         */
        ToolStoreStatic.prototype.removeChangeToolsListener = function (callback) {
            this.removeListener(CHANGE_TOOLS_EVENT, callback);
        };
        return ToolStoreStatic;
    }(EventEmitter));
    var ToolStore = new ToolStoreStatic();
    appDispatcher_1.default.register(function (payload) {
        switch (payload.actionType) {
            case toolActionTypes_1.default.TOOL_INIT:
                _init(payload.currentPage, payload.pageSize, payload.searchText);
                break;
            case toolActionTypes_1.default.TOOL_LOAD_EDIT:
                _loadTool(payload.id);
                break;
            case toolActionTypes_1.default.TOOL_CREATE:
                _addTool(payload.tool);
                break;
            case toolActionTypes_1.default.TOOL_UPDATE:
                _updateTool(payload.tool);
                break;
            case toolActionTypes_1.default.TOOL_DELETE:
                _deleteTool(payload.id);
                break;
            case toolActionTypes_1.default.TOOL_PAGE_CHANGE:
                _currentToolPage = payload.currentPage;
                _loadTools();
                break;
            case toolActionTypes_1.default.TOOLS_PER_PAGE_CHANGE:
                _toolsPerPage = payload.pageSize;
                _loadTools();
                break;
            case toolActionTypes_1.default.TOOL_SEARCH_TEXT_CHANGE:
                _toolSearchText = payload.searchText;
                _loadTools();
                break;
            default:
        }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ToolStore;
});
//# sourceMappingURL=toolStore.js.map