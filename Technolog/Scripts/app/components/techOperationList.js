/// <reference path="../../typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "../flux/stores/techOperationStore", "../constants/pageConstants", "../flux/actions/techOperationActions", "../managers/pageParamsManager", "../managers/navigationManager", "./common/tableRow", "./common/confirmDelete", "./common/pagination", "./common/searchInput", "./common/itemsPerPageSelector"], function (require, exports, React, techOperationStore_1, pageConstants_1, techOperationActions_1, pageParamsManager_1, navigationManager_1, tableRow_1, confirmDelete_1, pagination_1, searchInput_1, itemsPerPageSelector_1) {
    "use strict";
    var TechOperationList = (function (_super) {
        __extends(TechOperationList, _super);
        function TechOperationList(props, context) {
            var _this = this;
            _super.call(this, props, context);
            this.handleTechOperationsChange = function () {
                _this.setState({
                    techOperations: techOperationStore_1.default.getAll(),
                    currentTechOperation: null,
                    isConfirmDeleting: false,
                    techOperationAmount: techOperationStore_1.default.getTechOperationAmount(),
                    techOperationsPerPage: techOperationStore_1.default.getTechOperationsPerPage()
                });
            };
            this.changeCurrent = function (techOperation) {
                _this.setState({
                    techOperations: _this.state.techOperations,
                    currentTechOperation: techOperation,
                    isConfirmDeleting: _this.state.isConfirmDeleting,
                    techOperationAmount: _this.state.techOperationAmount,
                    techOperationsPerPage: _this.state.techOperationsPerPage
                });
            };
            this.techOperationRowDoubleClick = function (techOperation) {
                navigationManager_1.default.openTechOperationEditor(techOperation.id);
            };
            this.newTechOperationBtnClickHandler = function () {
                navigationManager_1.default.openTechOperationEditor(0);
            };
            this.handleDeleteSuccess = function () {
                techOperationActions_1.default.remove(_this.state.currentTechOperation.id);
            };
            this.handleDeleteCancel = function () {
                _this.setState({
                    techOperations: _this.state.techOperations,
                    currentTechOperation: _this.state.currentTechOperation,
                    isConfirmDeleting: !_this.state.isConfirmDeleting,
                    techOperationAmount: _this.state.techOperationAmount,
                    techOperationsPerPage: _this.state.techOperationsPerPage
                });
            };
            this.handleTechOperationsPerPageChange = function (techOperationsPerPage) {
                pageParamsManager_1.default.changePageSize(techOperationsPerPage);
                techOperationActions_1.default.changeTechOperationsPerPage(techOperationsPerPage);
            };
            this.handleTechOperationPageChange = function (page) {
                pageParamsManager_1.default.changePage(page);
                techOperationActions_1.default.changeTechOperationPage(page);
            };
            this.handleTechOperationSearchTextChange = function (text) {
                pageParamsManager_1.default.changeSearchText(text);
                techOperationActions_1.default.changeTechOperationSearchText(text);
            };
            this.refreshBtnClickHandler = function (text) {
                techOperationActions_1.default.init(pageParamsManager_1.default.getPage(), pageParamsManager_1.default.getPageSize(), pageParamsManager_1.default.getSearchText());
                _this.setState({
                    techOperations: [],
                    currentTechOperation: null,
                    isConfirmDeleting: false,
                    techOperationAmount: 0,
                    techOperationsPerPage: _this.state.techOperationsPerPage
                });
            };
            this.props = props;
            this.context = context;
            this.state = {
                techOperations: [],
                currentTechOperation: null,
                isConfirmDeleting: false,
                techOperationAmount: 0,
                techOperationsPerPage: pageConstants_1.default.ITEMS_PER_PAGE_INIT
            };
        }
        TechOperationList.prototype.componentWillMount = function () {
            techOperationStore_1.default.addChangeTechOperationsListener(this.handleTechOperationsChange);
        };
        TechOperationList.prototype.componentWillUnmount = function () {
            techOperationStore_1.default.removeChangeTechOperationsListener(this.handleTechOperationsChange);
        };
        TechOperationList.prototype.componentDidMount = function () {
            techOperationActions_1.default.init(pageParamsManager_1.default.getPage(), pageParamsManager_1.default.getPageSize(), pageParamsManager_1.default.getSearchText());
        };
        TechOperationList.prototype.render = function () {
            var techOperationRows = [];
            for (var key in this.state.techOperations) {
                var techOperation = this.state.techOperations[key];
                techOperationRows.push(React.createElement(tableRow_1.default, {key: key, item: techOperation, isCurrent: this.state.currentTechOperation == techOperation, changeCurrent: this.changeCurrent, rowDoubleClickHandler: this.techOperationRowDoubleClick}, React.createElement("td", {style: { width: 25 + '%' }}, techOperation.id), React.createElement("td", {style: { width: 75 + '%' }}, techOperation.name)));
            }
            return (React.createElement("div", {className: "panel panel-default inner", style: { marginBottom: 0 + 'px', display: 'flex', flexDirection: 'column' }}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", null, "Технологические операции")), React.createElement("div", {className: "panel-body", style: { display: 'flex', flexDirection: 'column' }}, this.state.isConfirmDeleting ?
                React.createElement(confirmDelete_1.default, {id: this.state.currentTechOperation.id, title: "Подтверждение удаления технологической операции", message: "Вы действительно хотите удалить технологическую операцию " + this.state.currentTechOperation.name, success: this.handleDeleteSuccess, cancel: this.handleDeleteCancel})
                :
                    React.createElement("div", {className: "input-group"}, React.createElement("div", {className: "input-group-btn"}, React.createElement("button", {className: "btn btn-default", type: "button", onClick: this.newTechOperationBtnClickHandler}, React.createElement("span", {className: "glyphicon glyphicon-plus"})), React.createElement("button", {className: "btn btn-default", type: "button", onClick: function () { this.setState({ currentTechOperation: this.state.currentTechOperation, isConfirmDeleting: true }); }.bind(this)}, React.createElement("span", {className: "glyphicon glyphicon-trash"})), React.createElement("button", {className: "btn btn-default", type: "button", onClick: this.refreshBtnClickHandler}, React.createElement("span", {className: "glyphicon glyphicon-refresh"}))), React.createElement(searchInput_1.default, {text: "Поиск...", onChange: function (text) { this.handleTechOperationSearchTextChange(text); }.bind(this)}), React.createElement(itemsPerPageSelector_1.default, {onChange: this.handleTechOperationsPerPageChange})), React.createElement("div", {style: { marginBottom: 10 + 'px', display: 'flex', flexDirection: 'column' }}, React.createElement("div", {style: { overflowY: 'auto' }}, React.createElement("table", {className: "table table-bordered", style: { marginBottom: 1 + 'px' }}, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {style: { width: 25 + '%' }}, "ID"), React.createElement("th", {style: { width: 75 + '%' }}, "Наименование"))), React.createElement("tbody", null, techOperationRows)))), React.createElement(pagination_1.default, {itemAmount: this.state.techOperationAmount, itemsPerPage: this.state.techOperationsPerPage, firstSymbol: '«', nextSymbol: '›', prevSymbol: '‹', lastSymbol: '»', updatePage: this.handleTechOperationPageChange}))));
        };
        return TechOperationList;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TechOperationList;
});
//# sourceMappingURL=techOperationList.js.map