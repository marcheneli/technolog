/// <reference path="../../typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "../flux/stores/techOperationStore", "../flux/stores/errorStore", "../flux/actions/techOperationActions", "../managers/navigationManager", "./common/textInput"], function (require, exports, React, techOperationStore_1, errorStore_1, techOperationActions_1, navigationManager_1, textInput_1) {
    "use strict";
    var TechOperationEditForm = (function (_super) {
        __extends(TechOperationEditForm, _super);
        function TechOperationEditForm(props, context) {
            var _this = this;
            _super.call(this, props, context);
            this.handleEditTechOperationChange = function () {
                _this.setState({
                    techOperation: techOperationStore_1.default.getEditTechOperation(),
                    errorMessage: null,
                    isValid: true
                });
            };
            this.handleNewError = function () {
                _this.setState({
                    techOperation: null,
                    errorMessage: errorStore_1.default.getError(),
                    isValid: true
                });
            };
            this.handleSubmit = function (e) {
                e.preventDefault();
                if (_this.state.techOperation.id == 0) {
                    techOperationActions_1.default.create(_this.state.techOperation);
                }
                else {
                    techOperationActions_1.default.update(_this.state.techOperation);
                }
            };
            this.cancelClickHandler = function () {
                navigationManager_1.default.closeTechOperationEditor();
            };
            this.registerInput = function (input) {
                _this.inputs[input.props.name] = input;
            };
            this.setTechOperationName = function (event) {
                _this.setState({
                    techOperation: {
                        id: _this.state.techOperation.id,
                        name: event.target.value
                    },
                    errorMessage: null,
                    isValid: true
                });
            };
            this.props = props;
            this.context = context;
            this.state = {
                techOperation: null,
                errorMessage: null,
                isValid: true
            };
        }
        TechOperationEditForm.prototype.componentWillMount = function () {
            this.inputs = {};
            techOperationStore_1.default.addChangeEditTechOperationListener(this.handleEditTechOperationChange);
            errorStore_1.default.addChangeErrorListener(this.handleNewError);
        };
        TechOperationEditForm.prototype.componentWillUnmount = function () {
            techOperationStore_1.default.removeChangeEditTechOperationListener(this.handleEditTechOperationChange);
            errorStore_1.default.removeChangeErrorListener(this.handleNewError);
        };
        TechOperationEditForm.prototype.componentDidMount = function () {
            techOperationActions_1.default.loadEditTechOperation(this.props.params.techOperationId);
        };
        TechOperationEditForm.prototype.componentWillReceiveProps = function (nextProps) {
            techOperationActions_1.default.loadEditTechOperation(nextProps.params.techOperationId);
        };
        TechOperationEditForm.prototype.nameValidate = function () {
            //you could do something here that does general validation for any form field
            return true;
        };
        TechOperationEditForm.prototype.render = function () {
            return (React.createElement("div", {className: "panel panel-default inner", style: { marginBottom: 0 + 'px' }}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", null, "Редактирование инструмента")), React.createElement("div", {className: "panel-body"}, this.state.errorMessage != null ?
                React.createElement("div", null, React.createElement("div", {className: "form-group"}, React.createElement("span", null, this.state.errorMessage)), React.createElement("div", {className: "form-group"}, React.createElement("div", {className: "btn-techOperationbar"}, React.createElement("button", {className: "btn btn-default", type: "button", onClick: this.cancelClickHandler}, "Закрыть"))))
                : null, this.state.techOperation == null ?
                this.state.errorMessage == null ?
                    React.createElement("p", null, "Загрузка данных...")
                    : null
                :
                    React.createElement("form", {role: "form", onSubmit: this.handleSubmit}, React.createElement("div", {className: "form-group"}, React.createElement("label", {className: "control-label"}, "Наименование: "), React.createElement(textInput_1.default, {name: "techOperationName", text: "", value: this.state.techOperation.name, required: true, onChange: this.setTechOperationName, errorMessage: "Данное наименование недействительно", emptyMessage: "Наименование обязательно для ввода", register: this.registerInput, validate: this.nameValidate, minCharacters: '', uniqueName: ''})), React.createElement("div", {className: "form-group"}, React.createElement("div", {className: "btn-techOperationbar"}, React.createElement("input", {className: "btn btn-primary", type: "submit", value: "Сохранить"}), React.createElement("button", {className: "btn btn-default", type: "button", onClick: this.cancelClickHandler}, "Закрыть")))))));
        };
        return TechOperationEditForm;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TechOperationEditForm;
});
//# sourceMappingURL=techOperationEditForm.js.map