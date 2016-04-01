/// <reference path="../../typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "../flux/stores/techProcessStore", "../constants/pageConstants", "../flux/actions/techProcessActions", "../managers/pageParamsManager", "../managers/navigationManager", "./common/tableRow", "./common/confirmDelete", "./common/pagination", "./common/searchInput", "./common/itemsPerPageSelector"], function (require, exports, React, techProcessStore_1, pageConstants_1, techProcessActions_1, pageParamsManager_1, navigationManager_1, tableRow_1, confirmDelete_1, pagination_1, searchInput_1, itemsPerPageSelector_1) {
    "use strict";
    var TechProcessList = (function (_super) {
        __extends(TechProcessList, _super);
        function TechProcessList(props, context) {
            var _this = this;
            _super.call(this, props, context);
            this.handleTechProcessesChange = function () {
                _this.setState({
                    techProcesses: techProcessStore_1.default.getAll(),
                    currentTechProcess: null,
                    isConfirmDeleting: false,
                    techProcessAmount: techProcessStore_1.default.getTechProcessAmount(),
                    techProcessesPerPage: techProcessStore_1.default.getTechProcessesPerPage()
                });
            };
            this.changeCurrent = function (techProcess) {
                _this.setState({
                    techProcesses: _this.state.techProcesses,
                    currentTechProcess: techProcess,
                    isConfirmDeleting: _this.state.isConfirmDeleting,
                    techProcessAmount: _this.state.techProcessAmount,
                    techProcessesPerPage: _this.state.techProcessesPerPage
                });
            };
            this.techProcessRowDoubleClick = function (techProcess) {
                navigationManager_1.default.openTechProcessEditor(techProcess.id);
            };
            this.newTechProcessBtnClickHandler = function () {
                navigationManager_1.default.openTechProcessEditor(0);
            };
            this.handleDeleteSuccess = function () {
                techProcessActions_1.default.remove(_this.state.currentTechProcess.id);
            };
            this.handleDeleteCancel = function () {
                _this.setState({
                    techProcesses: _this.state.techProcesses,
                    currentTechProcess: _this.state.currentTechProcess,
                    isConfirmDeleting: !_this.state.isConfirmDeleting,
                    techProcessAmount: _this.state.techProcessAmount,
                    techProcessesPerPage: _this.state.techProcessesPerPage
                });
            };
            this.handleTechProcessesPerPageChange = function (techProcessesPerPage) {
                pageParamsManager_1.default.changePageSize(techProcessesPerPage);
                techProcessActions_1.default.changeTechProcessesPerPage(techProcessesPerPage);
            };
            this.handleTechProcessPageChange = function (page) {
                pageParamsManager_1.default.changePage(page);
                techProcessActions_1.default.changeTechProcessPage(page);
            };
            this.handleTechProcessSearchTextChange = function (text) {
                pageParamsManager_1.default.changeSearchText(text);
                techProcessActions_1.default.changeTechProcessSearchText(text);
            };
            this.refreshBtnClickHandler = function (text) {
                techProcessActions_1.default.init(pageParamsManager_1.default.getPage(), pageParamsManager_1.default.getPageSize(), pageParamsManager_1.default.getSearchText());
                _this.setState({
                    techProcesses: [],
                    currentTechProcess: null,
                    isConfirmDeleting: false,
                    techProcessAmount: 0,
                    techProcessesPerPage: _this.state.techProcessesPerPage
                });
            };
            this.props = props;
            this.context = context;
            this.state = {
                techProcesses: [],
                currentTechProcess: null,
                isConfirmDeleting: false,
                techProcessAmount: 0,
                techProcessesPerPage: pageConstants_1.default.ITEMS_PER_PAGE_INIT
            };
        }
        TechProcessList.prototype.componentWillMount = function () {
            techProcessStore_1.default.addChangeTechProcessesListener(this.handleTechProcessesChange);
        };
        TechProcessList.prototype.componentWillUnmount = function () {
            techProcessStore_1.default.removeChangeTechProcessesListener(this.handleTechProcessesChange);
        };
        TechProcessList.prototype.componentDidMount = function () {
            console.log("mount");
            techProcessActions_1.default.init(pageParamsManager_1.default.getPage(), pageParamsManager_1.default.getPageSize(), pageParamsManager_1.default.getSearchText());
        };
        TechProcessList.prototype.render = function () {
            var techProcessRows = [];
            for (var key in this.state.techProcesses) {
                var techProcess = this.state.techProcesses[key];
                techProcessRows.push(React.createElement(tableRow_1.default, {key: key, item: techProcess, isCurrent: this.state.currentTechProcess == techProcess, changeCurrent: this.changeCurrent, rowDoubleClickHandler: this.techProcessRowDoubleClick}, React.createElement("td", {style: { width: 25 + '%' }}, techProcess.id), React.createElement("td", {style: { width: 75 + '%' }}, techProcess.name)));
            }
            return (React.createElement("div", {className: "panel panel-default inner", style: { marginBottom: 0 + 'px', display: 'flex', flexDirection: 'column' }}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", null, "Инструменты")), React.createElement("div", {className: "panel-body", style: { display: 'flex', flexDirection: 'column' }}, this.state.isConfirmDeleting ?
                React.createElement(confirmDelete_1.default, {id: this.state.currentTechProcess.id, title: "Подтверждение удаления инструмента", message: "Вы действительно хотите удалить инструмент " + this.state.currentTechProcess.name, success: this.handleDeleteSuccess, cancel: this.handleDeleteCancel})
                :
                    React.createElement("div", {className: "input-group"}, React.createElement("div", {className: "input-group-btn"}, React.createElement("button", {className: "btn btn-default", type: "button", onClick: this.newTechProcessBtnClickHandler}, React.createElement("span", {className: "glyphicon glyphicon-plus"})), React.createElement("button", {className: "btn btn-default", type: "button", onClick: function () { this.setState({ currentTechProcess: this.state.currentTechProcess, isConfirmDeleting: true }); }.bind(this)}, React.createElement("span", {className: "glyphicon glyphicon-trash"})), React.createElement("button", {className: "btn btn-default", type: "button", onClick: this.refreshBtnClickHandler}, React.createElement("span", {className: "glyphicon glyphicon-refresh"}))), React.createElement(searchInput_1.default, {text: "Поиск...", onChange: function (text) { this.handleTechProcessSearchTextChange(text); }.bind(this)}), React.createElement(itemsPerPageSelector_1.default, {onChange: this.handleTechProcessesPerPageChange})), React.createElement("div", {style: { marginBottom: 10 + 'px', display: 'flex', flexDirection: 'column' }}, React.createElement("div", {style: { overflowY: 'auto' }}, React.createElement("table", {className: "table table-bordered", style: { marginBottom: 1 + 'px' }}, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {style: { width: 25 + '%' }}, "ID"), React.createElement("th", {style: { width: 75 + '%' }}, "Наименование"))), React.createElement("tbody", null, techProcessRows)))), React.createElement(pagination_1.default, {itemAmount: this.state.techProcessAmount, itemsPerPage: this.state.techProcessesPerPage, firstSymbol: '«', nextSymbol: '›', prevSymbol: '‹', lastSymbol: '»', updatePage: this.handleTechProcessPageChange}))));
        };
        return TechProcessList;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TechProcessList;
});
//# sourceMappingURL=techProcessList.js.map