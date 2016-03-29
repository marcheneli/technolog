/// <reference path="../../typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "../flux/stores/toolStore", "../flux/stores/errorStore", "../flux/actions/toolActions", "../managers/navigationManager", "./common/textInput"], function (require, exports, React, toolStore_1, errorStore_1, toolActions_1, navigationManager_1, textInput_1) {
    "use strict";
    var ToolEditForm = (function (_super) {
        __extends(ToolEditForm, _super);
        function ToolEditForm(props, context) {
            var _this = this;
            _super.call(this, props, context);
            this.handleEditToolChange = function () {
                _this.setState({
                    tool: toolStore_1.default.getEditTool(),
                    errorMessage: null,
                    isValid: true
                });
            };
            this.handleNewError = function () {
                _this.setState({
                    tool: null,
                    errorMessage: errorStore_1.default.getError(),
                    isValid: true
                });
            };
            this.handleSubmit = function (e) {
                e.preventDefault();
                if (_this.state.tool.id == 0) {
                    toolActions_1.default.create(_this.state.tool);
                }
                else {
                    toolActions_1.default.update(_this.state.tool);
                }
            };
            this.cancelClickHandler = function () {
                navigationManager_1.default.closeToolEditor();
            };
            this.registerInput = function (input) {
                _this.inputs[input.props.name] = input;
            };
            this.setToolName = function (event) {
                _this.setState({
                    tool: {
                        id: _this.state.tool.id,
                        name: event.target.value,
                        price: _this.state.tool.price,
                    },
                    errorMessage: null,
                    isValid: true
                });
            };
            this.setToolPrice = function (event) {
                _this.setState({
                    tool: {
                        id: _this.state.tool.id,
                        name: _this.state.tool.name,
                        price: event.target.value
                    },
                    errorMessage: null,
                    isValid: true
                });
            };
            this.props = props;
            this.context = context;
            this.state = {
                tool: null,
                errorMessage: null,
                isValid: true
            };
        }
        ToolEditForm.prototype.componentWillMount = function () {
            this.inputs = {};
            toolStore_1.default.addChangeEditToolListener(this.handleEditToolChange);
            errorStore_1.default.addChangeErrorListener(this.handleNewError);
        };
        ToolEditForm.prototype.componentWillUnmount = function () {
            toolStore_1.default.removeChangeEditToolListener(this.handleEditToolChange);
            errorStore_1.default.removeChangeErrorListener(this.handleNewError);
        };
        ToolEditForm.prototype.componentDidMount = function () {
            toolActions_1.default.loadEditTool(this.props.params.toolId);
        };
        ToolEditForm.prototype.componentWillReceiveProps = function (nextProps) {
            toolActions_1.default.loadEditTool(nextProps.params.toolId);
        };
        ToolEditForm.prototype.nameValidate = function () {
            //you could do something here that does general validation for any form field
            return true;
        };
        ToolEditForm.prototype.render = function () {
            return (React.createElement("div", {className: "panel panel-default inner", style: { marginBottom: 0 + 'px' }}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", null, "Редактирование инструмента")), React.createElement("div", {className: "panel-body"}, this.state.errorMessage != null ?
                React.createElement("div", null, React.createElement("div", {className: "form-group"}, React.createElement("span", null, this.state.errorMessage)), React.createElement("div", {className: "form-group"}, React.createElement("div", {className: "btn-toolbar"}, React.createElement("button", {className: "btn btn-default", type: "button", onClick: this.cancelClickHandler}, "Закрыть"))))
                : null, this.state.tool == null ?
                this.state.errorMessage == null ?
                    React.createElement("p", null, "Загрузка данных...")
                    : null
                :
                    React.createElement("form", {role: "form", onSubmit: this.handleSubmit}, React.createElement("div", {className: "form-group"}, React.createElement("label", {className: "control-label"}, "Наименование: "), React.createElement(textInput_1.default, {name: "toolName", text: "", value: this.state.tool.name, required: true, onChange: this.setToolName, errorMessage: "Данное наименование недействительно", emptyMessage: "Наименование обязательно для ввода", register: this.registerInput, validate: this.nameValidate, minCharacters: '', uniqueName: ''})), React.createElement("div", {className: "form-group"}, React.createElement("label", {className: "control-label"}, "Цена: "), React.createElement(textInput_1.default, {name: "toolPrice", text: "", value: String(this.state.tool.price), required: true, onChange: this.setToolPrice, errorMessage: "Данное значение недействительно", emptyMessage: "Цена обязательна для ввода", register: this.registerInput, validate: this.nameValidate, minCharacters: '', uniqueName: ''})), React.createElement("div", {className: "form-group"}, React.createElement("div", {className: "btn-toolbar"}, React.createElement("input", {className: "btn btn-primary", type: "submit", value: "Сохранить"}), React.createElement("button", {className: "btn btn-default", type: "button", onClick: this.cancelClickHandler}, "Закрыть")))))));
        };
        return ToolEditForm;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ToolEditForm;
});
//# sourceMappingURL=toolEditForm.js.map