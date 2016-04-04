/// <reference path="../../typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "../flux/stores/toolStore", "../flux/actions/toolActions", "../managers/pageParamsManager", "../managers/navigationManager", "./toolList"], function (require, exports, React, toolStore_1, toolActions_1, pageParamsManager_1, navigationManager_1, toolList_1) {
    "use strict";
    var ToolListPanel = (function (_super) {
        __extends(ToolListPanel, _super);
        function ToolListPanel(props, context) {
            var _this = this;
            _super.call(this, props, context);
            this.handleToolsChange = function () {
                _this.setState({
                    tools: toolStore_1.default.getAll()
                });
            };
            this.changeCurrent = function (tool) {
                _this.setState({
                    tools: _this.state.tools
                });
            };
            this.toolEditFormOpen = function (toolId) {
                navigationManager_1.default.openToolEditor(toolId);
            };
            this.newToolBtnClickHandler = function () {
                navigationManager_1.default.openToolEditor(0);
            };
            this.handleToolDelete = function (toolId) {
                toolActions_1.default.remove(toolId);
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
            this.toolRefresh = function () {
                toolActions_1.default.init(pageParamsManager_1.default.getPage(), pageParamsManager_1.default.getPageSize(), pageParamsManager_1.default.getSearchText());
                _this.setState({
                    tools: []
                });
            };
            this.props = props;
            this.context = context;
            this.state = {
                tools: []
            };
        }
        ToolListPanel.prototype.componentWillMount = function () {
            toolStore_1.default.addChangeToolsListener(this.handleToolsChange);
        };
        ToolListPanel.prototype.componentWillUnmount = function () {
            toolStore_1.default.removeChangeToolsListener(this.handleToolsChange);
        };
        ToolListPanel.prototype.componentDidMount = function () {
            toolActions_1.default.init(pageParamsManager_1.default.getPage(), pageParamsManager_1.default.getPageSize(), pageParamsManager_1.default.getSearchText());
        };
        ToolListPanel.prototype.render = function () {
            return (React.createElement("div", {className: "panel panel-default inner", style: { marginBottom: 0 + 'px', display: 'flex', flexDirection: 'column' }}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", null, "Инструменты")), React.createElement("div", {className: "panel-body", style: { display: 'flex', flexDirection: 'column' }}, React.createElement(toolList_1.default, {tools: this.state.tools, onNewToolClick: this.newToolBtnClickHandler, onToolDelete: this.handleToolDelete, onToolDoubleClick: this.toolEditFormOpen, onToolPageChange: this.handleToolPageChange, onToolSearchTextChange: this.handleToolSearchTextChange, onToolsPerPageChange: this.handleToolsPerPageChange, onToolsRefresh: this.toolRefresh}))));
        };
        return ToolListPanel;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ToolListPanel;
});
//# sourceMappingURL=toolListPanel.js.map