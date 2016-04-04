/// <reference path="../../typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "../constants/pageConstants", "./common/tableRow", "./common/confirmDelete", "./common/pagination", "./common/searchInput", "./common/itemsPerPageSelector"], function (require, exports, React, pageConstants_1, tableRow_1, confirmDelete_1, pagination_1, searchInput_1, itemsPerPageSelector_1) {
    "use strict";
    var ToolList = (function (_super) {
        __extends(ToolList, _super);
        function ToolList(props, context) {
            var _this = this;
            _super.call(this, props, context);
            this.changeCurrent = function (tool) {
                _this.setState({
                    currentTool: tool,
                    isConfirmDeleting: _this.state.isConfirmDeleting,
                    toolAmount: _this.state.toolAmount,
                    toolsPerPage: _this.state.toolsPerPage
                });
            };
            this.toolRowDoubleClick = function (tool) {
                _this.props.onToolDoubleClick(tool.id);
            };
            this.newToolBtnClickHandler = function () {
                _this.props.onNewToolClick();
            };
            this.handleDeleteSuccess = function () {
                _this.props.onToolDelete(_this.state.currentTool.id);
            };
            this.handleDeleteCancel = function () {
                _this.setState({
                    currentTool: _this.state.currentTool,
                    isConfirmDeleting: !_this.state.isConfirmDeleting,
                    toolAmount: _this.state.toolAmount,
                    toolsPerPage: _this.state.toolsPerPage
                });
            };
            this.handleToolsPerPageChange = function (toolsPerPage) {
                _this.props.onToolsPerPageChange(toolsPerPage);
            };
            this.handleToolPageChange = function (page) {
                _this.props.onToolPageChange(page);
            };
            this.handleToolSearchTextChange = function (text) {
                _this.props.onToolSearchTextChange(text);
            };
            this.refreshBtnClickHandler = function () {
                _this.props.onToolsRefresh();
            };
            this.props = props;
            this.context = context;
            this.state = {
                currentTool: null,
                isConfirmDeleting: false,
                toolAmount: 0,
                toolsPerPage: pageConstants_1.default.ITEMS_PER_PAGE_INIT
            };
        }
        ToolList.prototype.render = function () {
            var toolRows = [];
            for (var key in this.props.tools) {
                var tool = this.props.tools[key];
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