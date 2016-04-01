/// <reference path="../../typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "../flux/stores/techStepStore", "../constants/pageConstants", "../flux/actions/techStepActions", "../managers/pageParamsManager", "../managers/navigationManager", "./common/tableRow", "./common/confirmDelete", "./common/pagination", "./common/searchInput", "./common/itemsPerPageSelector"], function (require, exports, React, techStepStore_1, pageConstants_1, techStepActions_1, pageParamsManager_1, navigationManager_1, tableRow_1, confirmDelete_1, pagination_1, searchInput_1, itemsPerPageSelector_1) {
    "use strict";
    var TechStepList = (function (_super) {
        __extends(TechStepList, _super);
        function TechStepList(props, context) {
            var _this = this;
            _super.call(this, props, context);
            this.handleTechStepsChange = function () {
                _this.setState({
                    techSteps: techStepStore_1.default.getAll(),
                    currentTechStep: null,
                    isConfirmDeleting: false,
                    techStepAmount: techStepStore_1.default.getTechStepAmount(),
                    techStepsPerPage: techStepStore_1.default.getTechStepsPerPage()
                });
            };
            this.changeCurrent = function (techStep) {
                _this.setState({
                    techSteps: _this.state.techSteps,
                    currentTechStep: techStep,
                    isConfirmDeleting: _this.state.isConfirmDeleting,
                    techStepAmount: _this.state.techStepAmount,
                    techStepsPerPage: _this.state.techStepsPerPage
                });
            };
            this.techStepRowDoubleClick = function (techStep) {
                navigationManager_1.default.openTechStepEditor(techStep.id);
            };
            this.newTechStepBtnClickHandler = function () {
                navigationManager_1.default.openTechStepEditor(0);
            };
            this.handleDeleteSuccess = function () {
                techStepActions_1.default.remove(_this.state.currentTechStep.id);
            };
            this.handleDeleteCancel = function () {
                _this.setState({
                    techSteps: _this.state.techSteps,
                    currentTechStep: _this.state.currentTechStep,
                    isConfirmDeleting: !_this.state.isConfirmDeleting,
                    techStepAmount: _this.state.techStepAmount,
                    techStepsPerPage: _this.state.techStepsPerPage
                });
            };
            this.handleTechStepsPerPageChange = function (techStepsPerPage) {
                pageParamsManager_1.default.changePageSize(techStepsPerPage);
                techStepActions_1.default.changeTechStepsPerPage(techStepsPerPage);
            };
            this.handleTechStepPageChange = function (page) {
                pageParamsManager_1.default.changePage(page);
                techStepActions_1.default.changeTechStepPage(page);
            };
            this.handleTechStepSearchTextChange = function (text) {
                pageParamsManager_1.default.changeSearchText(text);
                techStepActions_1.default.changeTechStepSearchText(text);
            };
            this.refreshBtnClickHandler = function (text) {
                techStepActions_1.default.init(pageParamsManager_1.default.getPage(), pageParamsManager_1.default.getPageSize(), pageParamsManager_1.default.getSearchText());
                _this.setState({
                    techSteps: [],
                    currentTechStep: null,
                    isConfirmDeleting: false,
                    techStepAmount: 0,
                    techStepsPerPage: _this.state.techStepsPerPage
                });
            };
            this.props = props;
            this.context = context;
            this.state = {
                techSteps: [],
                currentTechStep: null,
                isConfirmDeleting: false,
                techStepAmount: 0,
                techStepsPerPage: pageConstants_1.default.ITEMS_PER_PAGE_INIT
            };
        }
        TechStepList.prototype.componentWillMount = function () {
            techStepStore_1.default.addChangeTechStepsListener(this.handleTechStepsChange);
        };
        TechStepList.prototype.componentWillUnmount = function () {
            techStepStore_1.default.removeChangeTechStepsListener(this.handleTechStepsChange);
        };
        TechStepList.prototype.componentDidMount = function () {
            console.log("mount");
            techStepActions_1.default.init(pageParamsManager_1.default.getPage(), pageParamsManager_1.default.getPageSize(), pageParamsManager_1.default.getSearchText());
        };
        TechStepList.prototype.render = function () {
            var techStepRows = [];
            for (var key in this.state.techSteps) {
                var techStep = this.state.techSteps[key];
                techStepRows.push(React.createElement(tableRow_1.default, {key: key, item: techStep, isCurrent: this.state.currentTechStep == techStep, changeCurrent: this.changeCurrent, rowDoubleClickHandler: this.techStepRowDoubleClick}, React.createElement("td", {style: { width: 25 + '%' }}, techStep.id), React.createElement("td", {style: { width: 75 + '%' }}, techStep.description)));
            }
            return (React.createElement("div", {className: "panel panel-default inner", style: { marginBottom: 0 + 'px', display: 'flex', flexDirection: 'column' }}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", null, "Инструменты")), React.createElement("div", {className: "panel-body", style: { display: 'flex', flexDirection: 'column' }}, this.state.isConfirmDeleting ?
                React.createElement(confirmDelete_1.default, {id: this.state.currentTechStep.id, title: "Подтверждение удаления инструмента", message: "Вы действительно хотите удалить инструмент " + this.state.currentTechStep.description, success: this.handleDeleteSuccess, cancel: this.handleDeleteCancel})
                :
                    React.createElement("div", {className: "input-group"}, React.createElement("div", {className: "input-group-btn"}, React.createElement("button", {className: "btn btn-default", type: "button", onClick: this.newTechStepBtnClickHandler}, React.createElement("span", {className: "glyphicon glyphicon-plus"})), React.createElement("button", {className: "btn btn-default", type: "button", onClick: function () { this.setState({ currentTechStep: this.state.currentTechStep, isConfirmDeleting: true }); }.bind(this)}, React.createElement("span", {className: "glyphicon glyphicon-trash"})), React.createElement("button", {className: "btn btn-default", type: "button", onClick: this.refreshBtnClickHandler}, React.createElement("span", {className: "glyphicon glyphicon-refresh"}))), React.createElement(searchInput_1.default, {text: "Поиск...", onChange: function (text) { this.handleTechStepSearchTextChange(text); }.bind(this)}), React.createElement(itemsPerPageSelector_1.default, {onChange: this.handleTechStepsPerPageChange})), React.createElement("div", {style: { marginBottom: 10 + 'px', display: 'flex', flexDirection: 'column' }}, React.createElement("div", {style: { overflowY: 'auto' }}, React.createElement("table", {className: "table table-bordered", style: { marginBottom: 1 + 'px' }}, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {style: { width: 25 + '%' }}, "ID"), React.createElement("th", {style: { width: 75 + '%' }}, "Наименование"))), React.createElement("tbody", null, techStepRows)))), React.createElement(pagination_1.default, {itemAmount: this.state.techStepAmount, itemsPerPage: this.state.techStepsPerPage, firstSymbol: '«', nextSymbol: '›', prevSymbol: '‹', lastSymbol: '»', updatePage: this.handleTechStepPageChange}))));
        };
        return TechStepList;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TechStepList;
});
//# sourceMappingURL=techStepList.js.map