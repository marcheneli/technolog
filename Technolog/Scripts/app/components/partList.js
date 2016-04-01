/// <reference path="../../typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "../flux/stores/partStore", "../constants/pageConstants", "../flux/actions/partActions", "../managers/pageParamsManager", "../managers/navigationManager", "./common/tableRow", "./common/confirmDelete", "./common/pagination", "./common/searchInput", "./common/itemsPerPageSelector"], function (require, exports, React, partStore_1, pageConstants_1, partActions_1, pageParamsManager_1, navigationManager_1, tableRow_1, confirmDelete_1, pagination_1, searchInput_1, itemsPerPageSelector_1) {
    "use strict";
    var PartList = (function (_super) {
        __extends(PartList, _super);
        function PartList(props, context) {
            var _this = this;
            _super.call(this, props, context);
            this.handlePartsChange = function () {
                _this.setState({
                    parts: partStore_1.default.getAll(),
                    currentPart: null,
                    isConfirmDeleting: false,
                    partAmount: partStore_1.default.getPartAmount(),
                    partsPerPage: partStore_1.default.getPartsPerPage()
                });
            };
            this.changeCurrent = function (part) {
                _this.setState({
                    parts: _this.state.parts,
                    currentPart: part,
                    isConfirmDeleting: _this.state.isConfirmDeleting,
                    partAmount: _this.state.partAmount,
                    partsPerPage: _this.state.partsPerPage
                });
            };
            this.partRowDoubleClick = function (part) {
                navigationManager_1.default.openPartEditor(part.id);
            };
            this.newPartBtnClickHandler = function () {
                navigationManager_1.default.openPartEditor(0);
            };
            this.handleDeleteSuccess = function () {
                partActions_1.default.remove(_this.state.currentPart.id);
            };
            this.handleDeleteCancel = function () {
                _this.setState({
                    parts: _this.state.parts,
                    currentPart: _this.state.currentPart,
                    isConfirmDeleting: !_this.state.isConfirmDeleting,
                    partAmount: _this.state.partAmount,
                    partsPerPage: _this.state.partsPerPage
                });
            };
            this.handlePartsPerPageChange = function (partsPerPage) {
                pageParamsManager_1.default.changePageSize(partsPerPage);
                partActions_1.default.changePartsPerPage(partsPerPage);
            };
            this.handlePartPageChange = function (page) {
                pageParamsManager_1.default.changePage(page);
                partActions_1.default.changePartPage(page);
            };
            this.handlePartSearchTextChange = function (text) {
                pageParamsManager_1.default.changeSearchText(text);
                partActions_1.default.changePartSearchText(text);
            };
            this.refreshBtnClickHandler = function (text) {
                partActions_1.default.init(pageParamsManager_1.default.getPage(), pageParamsManager_1.default.getPageSize(), pageParamsManager_1.default.getSearchText());
                _this.setState({
                    parts: [],
                    currentPart: null,
                    isConfirmDeleting: false,
                    partAmount: 0,
                    partsPerPage: _this.state.partsPerPage
                });
            };
            this.props = props;
            this.context = context;
            this.state = {
                parts: [],
                currentPart: null,
                isConfirmDeleting: false,
                partAmount: 0,
                partsPerPage: pageConstants_1.default.ITEMS_PER_PAGE_INIT
            };
        }
        PartList.prototype.componentWillMount = function () {
            partStore_1.default.addChangePartsListener(this.handlePartsChange);
        };
        PartList.prototype.componentWillUnmount = function () {
            partStore_1.default.removeChangePartsListener(this.handlePartsChange);
        };
        PartList.prototype.componentDidMount = function () {
            console.log("mount");
            partActions_1.default.init(pageParamsManager_1.default.getPage(), pageParamsManager_1.default.getPageSize(), pageParamsManager_1.default.getSearchText());
        };
        PartList.prototype.render = function () {
            var partRows = [];
            for (var key in this.state.parts) {
                var part = this.state.parts[key];
                partRows.push(React.createElement(tableRow_1.default, {key: key, item: part, isCurrent: this.state.currentPart == part, changeCurrent: this.changeCurrent, rowDoubleClickHandler: this.partRowDoubleClick}, React.createElement("td", {style: { width: 25 + '%' }}, part.id), React.createElement("td", {style: { width: 75 + '%' }}, part.name)));
            }
            return (React.createElement("div", {className: "panel panel-default inner", style: { marginBottom: 0 + 'px', display: 'flex', flexDirection: 'column' }}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", null, "Инструменты")), React.createElement("div", {className: "panel-body", style: { display: 'flex', flexDirection: 'column' }}, this.state.isConfirmDeleting ?
                React.createElement(confirmDelete_1.default, {id: this.state.currentPart.id, title: "Подтверждение удаления инструмента", message: "Вы действительно хотите удалить инструмент " + this.state.currentPart.name, success: this.handleDeleteSuccess, cancel: this.handleDeleteCancel})
                :
                    React.createElement("div", {className: "input-group"}, React.createElement("div", {className: "input-group-btn"}, React.createElement("button", {className: "btn btn-default", type: "button", onClick: this.newPartBtnClickHandler}, React.createElement("span", {className: "glyphicon glyphicon-plus"})), React.createElement("button", {className: "btn btn-default", type: "button", onClick: function () { this.setState({ currentPart: this.state.currentPart, isConfirmDeleting: true }); }.bind(this)}, React.createElement("span", {className: "glyphicon glyphicon-trash"})), React.createElement("button", {className: "btn btn-default", type: "button", onClick: this.refreshBtnClickHandler}, React.createElement("span", {className: "glyphicon glyphicon-refresh"}))), React.createElement(searchInput_1.default, {text: "Поиск...", onChange: function (text) { this.handlePartSearchTextChange(text); }.bind(this)}), React.createElement(itemsPerPageSelector_1.default, {onChange: this.handlePartsPerPageChange})), React.createElement("div", {style: { marginBottom: 10 + 'px', display: 'flex', flexDirection: 'column' }}, React.createElement("div", {style: { overflowY: 'auto' }}, React.createElement("table", {className: "table table-bordered", style: { marginBottom: 1 + 'px' }}, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {style: { width: 25 + '%' }}, "ID"), React.createElement("th", {style: { width: 75 + '%' }}, "Наименование"))), React.createElement("tbody", null, partRows)))), React.createElement(pagination_1.default, {itemAmount: this.state.partAmount, itemsPerPage: this.state.partsPerPage, firstSymbol: '«', nextSymbol: '›', prevSymbol: '‹', lastSymbol: '»', updatePage: this.handlePartPageChange}))));
        };
        return PartList;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = PartList;
});
//# sourceMappingURL=partList.js.map