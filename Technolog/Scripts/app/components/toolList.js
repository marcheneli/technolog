/// <reference path="../../typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "../flux/stores/toolStore", "../constants/pageConstants", "../flux/actions/toolActions", "../managers/pageParamsManager", "../managers/navigationManager", "./common/tableRow", "./common/confirmDelete", "./common/pagination", "./common/searchInput", "./common/itemsPerPageSelector"], function (require, exports, React, toolStore_1, pageConstants_1, toolActions_1, pageParamsManager_1, navigationManager_1, tableRow_1, confirmDelete_1, pagination_1, searchInput_1, itemsPerPageSelector_1) {
    "use strict";
    var ToolList = (function (_super) {
        __extends(ToolList, _super);
        function ToolList(props, context) {
            var _this = this;
            _super.call(this, props, context);
            this.handleToolsChange = function () {
                _this.setState({
                    tools: toolStore_1.default.getAll(),
                    currentTool: null,
                    isConfirmDeleting: false,
                    toolAmount: toolStore_1.default.getToolAmount(),
                    toolsPerPage: toolStore_1.default.getToolsPerPage()
                });
            };
            this.changeCurrent = function (tool) {
                _this.setState({
                    tools: _this.state.tools,
                    currentTool: tool,
                    isConfirmDeleting: _this.state.isConfirmDeleting,
                    toolAmount: _this.state.toolAmount,
                    toolsPerPage: _this.state.toolsPerPage
                });
            };
            this.toolRowDoubleClick = function (tool) {
                navigationManager_1.default.openToolEditor(tool.id);
            };
            this.newToolBtnClickHandler = function () {
                navigationManager_1.default.openToolEditor(0);
            };
            this.handleDeleteSuccess = function () {
                toolActions_1.default.remove(_this.state.currentTool.id);
            };
            this.handleDeleteCancel = function () {
                _this.setState({
                    tools: _this.state.tools,
                    currentTool: _this.state.currentTool,
                    isConfirmDeleting: !_this.state.isConfirmDeleting,
                    toolAmount: _this.state.toolAmount,
                    toolsPerPage: _this.state.toolsPerPage
                });
            };
            this.handleToolsPerPageChange = function (toolsPerPage) {
                pageParamsManager_1.default.changePageSize(toolsPerPage);
                toolActions_1.default.changeToolsPerPage(toolsPerPage);
            };
            this.handleToolPageChange = function (page) {
                pageParamsManager_1.default.changePage(page);
                toolActions_1.default.changeToolPage(page);
            };
            this.handleToolSearchTextChange = function (text) {
                pageParamsManager_1.default.changeSearchText(text);
                toolActions_1.default.changeToolSearchText(text);
            };
            this.refreshBtnClickHandler = function (text) {
                toolActions_1.default.init(pageParamsManager_1.default.getPage(), pageParamsManager_1.default.getPageSize(), pageParamsManager_1.default.getSearchText());
                _this.setState({
                    tools: [],
                    currentTool: null,
                    isConfirmDeleting: false,
                    toolAmount: 0,
                    toolsPerPage: _this.state.toolsPerPage
                });
            };
            this.props = props;
            this.context = context;
            this.state = {
                tools: [],
                currentTool: null,
                isConfirmDeleting: false,
                toolAmount: 0,
                toolsPerPage: pageConstants_1.default.ITEMS_PER_PAGE_INIT
            };
        }
        ToolList.prototype.componentWillMount = function () {
            toolStore_1.default.addChangeToolsListener(this.handleToolsChange);
        };
        ToolList.prototype.componentWillUnmount = function () {
            toolStore_1.default.removeChangeToolsListener(this.handleToolsChange);
        };
        ToolList.prototype.componentDidMount = function () {
            console.log("mount");
            toolActions_1.default.init(pageParamsManager_1.default.getPage(), pageParamsManager_1.default.getPageSize(), pageParamsManager_1.default.getSearchText());
        };
        ToolList.prototype.render = function () {
            var toolRows = [];
            for (var key in this.state.tools) {
                var tool = this.state.tools[key];
                toolRows.push(React.createElement(tableRow_1.default, {key: key, item: tool, isCurrent: this.state.currentTool == tool, changeCurrent: this.changeCurrent, rowDoubleClickHandler: this.toolRowDoubleClick}, React.createElement("td", {style: { width: 25 + '%' }}, tool.id), React.createElement("td", {style: { width: 75 + '%' }}, tool.name)));
            }
            return (React.createElement("div", {className: "panel panel-default inner", style: { marginBottom: 0 + 'px', display: 'flex', flexDirection: 'column' }}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", null, "Инструменты")), React.createElement("div", {className: "panel-body", style: { display: 'flex', flexDirection: 'column' }}, this.state.isConfirmDeleting ?
                React.createElement(confirmDelete_1.default, {id: this.state.currentTool.id, title: "Подтверждение удаления инструмента", message: "Вы действительно хотите удалить инструмент " + this.state.currentTool.name, success: this.handleDeleteSuccess, cancel: this.handleDeleteCancel})
                :
                    React.createElement("div", {className: "input-group"}, React.createElement("div", {className: "input-group-btn"}, React.createElement("button", {className: "btn btn-default", type: "button", onClick: this.newToolBtnClickHandler}, React.createElement("span", {className: "glyphicon glyphicon-plus"})), React.createElement("button", {className: "btn btn-default", type: "button", onClick: function () { this.setState({ currentTool: this.state.currentTool, isConfirmDeleting: true }); }.bind(this)}, React.createElement("span", {className: "glyphicon glyphicon-trash"})), React.createElement("button", {className: "btn btn-default", type: "button", onClick: this.refreshBtnClickHandler}, React.createElement("span", {className: "glyphicon glyphicon-refresh"}))), React.createElement(searchInput_1.default, {text: "Поиск...", onChange: function (text) { this.handleToolSearchTextChange(text); }.bind(this)}), React.createElement(itemsPerPageSelector_1.default, {onChange: this.handleToolsPerPageChange})), React.createElement("div", {style: { marginBottom: 10 + 'px', display: 'flex', flexDirection: 'column' }}, React.createElement("div", {style: { overflowY: 'auto' }}, React.createElement("table", {className: "table table-bordered", style: { marginBottom: 1 + 'px' }}, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {style: { width: 25 + '%' }}, "ID"), React.createElement("th", {style: { width: 75 + '%' }}, "Наименование"))), React.createElement("tbody", null, toolRows)))), React.createElement(pagination_1.default, {itemAmount: this.state.toolAmount, itemsPerPage: this.state.toolsPerPage, firstSymbol: '«', nextSymbol: '›', prevSymbol: '‹', lastSymbol: '»', updatePage: this.handleToolPageChange}))));
        };
        return ToolList;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ToolList;
});
//# sourceMappingURL=toolList.js.map