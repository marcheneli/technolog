/// <reference path="../../../typings/tsd.d.ts" />

import * as $ from "jquery";
import AppDispatcher from "../dispatcher/appDispatcher";
import ActionSourceTypes from "../actions/actionSourceTypes";
import ToolActionTypes from "../actions/toolActionTypes";
import ErrorActions from "../actions/errorActions";
import PageConstants from "../../constants/pageConstants";
import NavigationManager from "../../managers/navigationManager";
import assign = require('object-assign');
import * as EventEmitter from "eventemitter3";

let CHANGE_TOOLS_EVENT = 'change_tools';
let CHANGE_EDITTOOL_EVENT = 'change_edittool';

let _tools: Array<ITool> = new Array<ITool>();
let _tool: ITool;
let _toolSearchText: string = "";
let _totalToolAmount: number = 0;
let _toolsPerPage: number = PageConstants.ITEMS_PER_PAGE_INIT;
let _currentToolPage: number = 0;

function _loadTools(): void {
    $.get(location.origin + "/api/tools?search=" + _toolSearchText + "&page=" + _currentToolPage + "&pageSize=" + _toolsPerPage, function (toolListModel) {

        _totalToolAmount = toolListModel.toolAmount;

        _tools = new Array<ITool>();

        toolListModel.tools.forEach(function (tool) {
            _tools[tool.id] = tool;
        });

        ToolStore.emitChangeTools();
    });
}

function _loadTool(id: number): void {
    if (id == 0) {
        _tool = { id: 0, name: "", price: 0 };
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

function _addTool(tool: ITool): void {
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

function _deleteTool(id: number) {
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

function _updateTool(tool: ITool) {
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

function _init(currentPage: number, toolsPerPage: number, searchText: string): void {
    _toolsPerPage = toolsPerPage;
    _currentToolPage = currentPage;
    _toolSearchText = searchText;

    _loadTools();
}

class ToolStoreStatic extends EventEmitter {

    public getAll(): Array<ITool> {
        return _tools;
    }

    public getToolAmount(): number {
        return _totalToolAmount;
    }

    public getToolsPerPage(): number {
        return _toolsPerPage;
    }

    public getCurrentToolPage(): number {
        return _currentToolPage;
    }

    public getSearchText(): string {
        return _toolSearchText;
    }

    public getEditTool(): ITool {
        return _tool;
    }

    public emitChangeTools(): void {
        this.emit(CHANGE_TOOLS_EVENT);
    }

    public emitChangeEditTool(): void {
        this.emit(CHANGE_EDITTOOL_EVENT);
    }

    /**
     * @param {function} callback
     */
    public addChangeEditToolListener(callback: () => void): void {
        this.on(CHANGE_EDITTOOL_EVENT, callback);
    }

    /**
     * @param {function} callback
     */
    public removeChangeEditToolListener(callback: () => void) {
        this.removeListener(CHANGE_EDITTOOL_EVENT, callback);
    }

    /**
     * @param {function} callback
     */
    public addChangeToolsListener(callback: () => void): void {
        this.on(CHANGE_TOOLS_EVENT, callback);
    }

    /**
     * @param {function} callback
     */
    public removeChangeToolsListener(callback: () => void) {
        this.removeListener(CHANGE_TOOLS_EVENT, callback);
    }
}

let ToolStore: ToolStoreStatic = new ToolStoreStatic();

AppDispatcher.register(function (payload: AppPayload) {

    if (payload.actionSource != ActionSourceTypes.TOOL) return;

    switch (payload.actionType) {
        case ToolActionTypes.TOOL_INIT:
            _init(payload.currentPage, payload.pageSize, payload.searchText);
            break;

        case ToolActionTypes.TOOL_LOAD_EDIT:
            _loadTool(payload.id);
            break;

        case ToolActionTypes.TOOL_CREATE:
            _addTool(payload.tool)
            break;

        case ToolActionTypes.TOOL_UPDATE:
            _updateTool(payload.tool);
            break;

        case ToolActionTypes.TOOL_DELETE:
            _deleteTool(payload.id);
            break;

        case ToolActionTypes.TOOL_PAGE_CHANGE:
            _currentToolPage = payload.currentPage;
            _loadTools();
            break;

        case ToolActionTypes.TOOLS_PER_PAGE_CHANGE:
            _toolsPerPage = payload.pageSize;
            _loadTools();
            break;

        case ToolActionTypes.TOOL_SEARCH_TEXT_CHANGE:
            _toolSearchText = payload.searchText;
            _loadTools();
            break;

        default:
    }
});

export default ToolStore;
