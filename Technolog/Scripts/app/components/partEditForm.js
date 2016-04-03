/// <reference path="../../typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "../flux/stores/partStore", "../flux/stores/errorStore", "../flux/actions/partActions", "../managers/navigationManager", "./common/textInput"], function (require, exports, React, partStore_1, errorStore_1, partActions_1, navigationManager_1, textInput_1) {
    "use strict";
    var PartEditForm = (function (_super) {
        __extends(PartEditForm, _super);
        function PartEditForm(props, context) {
            var _this = this;
            _super.call(this, props, context);
            this.handleEditPartChange = function () {
                _this.setState({
                    part: partStore_1.default.getEditPart(),
                    errorMessage: null,
                    isValid: true
                });
            };
            this.handleNewError = function () {
                _this.setState({
                    part: null,
                    errorMessage: errorStore_1.default.getError(),
                    isValid: true
                });
            };
            this.handleSubmit = function (e) {
                e.preventDefault();
                if (_this.state.part.id == 0) {
                    partActions_1.default.create(_this.state.part);
                }
                else {
                    partActions_1.default.update(_this.state.part);
                }
            };
            this.cancelClickHandler = function () {
                navigationManager_1.default.closePartEditor();
            };
            this.registerInput = function (input) {
                _this.inputs[input.props.name] = input;
            };
            this.setPartName = function (event) {
                _this.setState({
                    part: {
                        id: _this.state.part.id,
                        name: event.target.value,
                        price: _this.state.part.price,
                    },
                    errorMessage: null,
                    isValid: true
                });
            };
            this.setPartPrice = function (event) {
                _this.setState({
                    part: {
                        id: _this.state.part.id,
                        name: _this.state.part.name,
                        price: event.target.value
                    },
                    errorMessage: null,
                    isValid: true
                });
            };
            this.props = props;
            this.context = context;
            this.state = {
                part: null,
                errorMessage: null,
                isValid: true
            };
        }
        PartEditForm.prototype.componentWillMount = function () {
            this.inputs = {};
            partStore_1.default.addChangeEditPartListener(this.handleEditPartChange);
            errorStore_1.default.addChangeErrorListener(this.handleNewError);
        };
        PartEditForm.prototype.componentWillUnmount = function () {
            partStore_1.default.removeChangeEditPartListener(this.handleEditPartChange);
            errorStore_1.default.removeChangeErrorListener(this.handleNewError);
        };
        PartEditForm.prototype.componentDidMount = function () {
            partActions_1.default.loadEditPart(this.props.params.partId);
        };
        PartEditForm.prototype.componentWillReceiveProps = function (nextProps) {
            partActions_1.default.loadEditPart(nextProps.params.partId);
        };
        PartEditForm.prototype.nameValidate = function () {
            //you could do something here that does general validation for any form field
            return true;
        };
        PartEditForm.prototype.render = function () {
            return (React.createElement("div", {className: "panel panel-default inner", style: { marginBottom: 0 + 'px' }}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", null, "Редактирование детали")), React.createElement("div", {className: "panel-body"}, this.state.errorMessage != null ?
                React.createElement("div", null, React.createElement("div", {className: "form-group"}, React.createElement("span", null, this.state.errorMessage)), React.createElement("div", {className: "form-group"}, React.createElement("div", {className: "btn-partbar"}, React.createElement("button", {className: "btn btn-default", type: "button", onClick: this.cancelClickHandler}, "Закрыть"))))
                : null, this.state.part == null ?
                this.state.errorMessage == null ?
                    React.createElement("p", null, "Загрузка данных...")
                    : null
                :
                    React.createElement("form", {role: "form", onSubmit: this.handleSubmit}, React.createElement("div", {className: "form-group"}, React.createElement("label", {className: "control-label"}, "Наименование: "), React.createElement(textInput_1.default, {name: "partName", text: "", value: this.state.part.name, required: true, onChange: this.setPartName, errorMessage: "Данное наименование недействительно", emptyMessage: "Наименование обязательно для ввода", register: this.registerInput, validate: this.nameValidate, minCharacters: '', uniqueName: ''})), React.createElement("div", {className: "form-group"}, React.createElement("label", {className: "control-label"}, "Цена: "), React.createElement(textInput_1.default, {name: "partPrice", text: "", value: String(this.state.part.price), required: true, onChange: this.setPartPrice, errorMessage: "Данное значение недействительно", emptyMessage: "Цена обязательна для ввода", register: this.registerInput, validate: this.nameValidate, minCharacters: '', uniqueName: ''})), React.createElement("div", {className: "form-group"}, React.createElement("div", {className: "btn-toolbar"}, React.createElement("input", {className: "btn btn-primary", type: "submit", value: "Сохранить"}), React.createElement("button", {className: "btn btn-default", type: "button", onClick: this.cancelClickHandler}, "Закрыть")))))));
        };
        return PartEditForm;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = PartEditForm;
});
//# sourceMappingURL=partEditForm.js.map