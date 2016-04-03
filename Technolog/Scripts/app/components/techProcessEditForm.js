/// <reference path="../../typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "../flux/stores/techProcessStore", "../flux/stores/errorStore", "../flux/actions/techProcessActions", "../managers/navigationManager", "./common/textInput"], function (require, exports, React, techProcessStore_1, errorStore_1, techProcessActions_1, navigationManager_1, textInput_1) {
    "use strict";
    var TechProcessEditForm = (function (_super) {
        __extends(TechProcessEditForm, _super);
        function TechProcessEditForm(props, context) {
            var _this = this;
            _super.call(this, props, context);
            this.handleEditTechProcessChange = function () {
                _this.setState({
                    techProcess: techProcessStore_1.default.getEditTechProcess(),
                    errorMessage: null,
                    isValid: true
                });
            };
            this.handleNewError = function () {
                _this.setState({
                    techProcess: null,
                    errorMessage: errorStore_1.default.getError(),
                    isValid: true
                });
            };
            this.handleSubmit = function (e) {
                e.preventDefault();
                if (_this.state.techProcess.id == 0) {
                    techProcessActions_1.default.create(_this.state.techProcess);
                }
                else {
                    techProcessActions_1.default.update(_this.state.techProcess);
                }
            };
            this.cancelClickHandler = function () {
                navigationManager_1.default.closeTechProcessEditor();
            };
            this.registerInput = function (input) {
                _this.inputs[input.props.name] = input;
            };
            this.setTechProcessName = function (event) {
                _this.setState({
                    techProcess: {
                        id: _this.state.techProcess.id,
                        name: event.target.value
                    },
                    errorMessage: null,
                    isValid: true
                });
            };
            this.props = props;
            this.context = context;
            this.state = {
                techProcess: null,
                errorMessage: null,
                isValid: true
            };
        }
        TechProcessEditForm.prototype.componentWillMount = function () {
            this.inputs = {};
            techProcessStore_1.default.addChangeEditTechProcessListener(this.handleEditTechProcessChange);
            errorStore_1.default.addChangeErrorListener(this.handleNewError);
        };
        TechProcessEditForm.prototype.componentWillUnmount = function () {
            techProcessStore_1.default.removeChangeEditTechProcessListener(this.handleEditTechProcessChange);
            errorStore_1.default.removeChangeErrorListener(this.handleNewError);
        };
        TechProcessEditForm.prototype.componentDidMount = function () {
            techProcessActions_1.default.loadEditTechProcess(this.props.params.techProcessId);
        };
        TechProcessEditForm.prototype.componentWillReceiveProps = function (nextProps) {
            techProcessActions_1.default.loadEditTechProcess(nextProps.params.techProcessId);
        };
        TechProcessEditForm.prototype.nameValidate = function () {
            //you could do something here that does general validation for any form field
            return true;
        };
        TechProcessEditForm.prototype.render = function () {
            return (React.createElement("div", {className: "panel panel-default inner", style: { marginBottom: 0 + 'px' }}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", null, "Редактирование технологического процесса")), React.createElement("div", {className: "panel-body"}, this.state.errorMessage != null ?
                React.createElement("div", null, React.createElement("div", {className: "form-group"}, React.createElement("span", null, this.state.errorMessage)), React.createElement("div", {className: "form-group"}, React.createElement("div", {className: "btn-techProcessbar"}, React.createElement("button", {className: "btn btn-default", type: "button", onClick: this.cancelClickHandler}, "Закрыть"))))
                : null, this.state.techProcess == null ?
                this.state.errorMessage == null ?
                    React.createElement("p", null, "Загрузка данных...")
                    : null
                :
                    React.createElement("form", {role: "form", onSubmit: this.handleSubmit}, React.createElement("div", {className: "form-group"}, React.createElement("label", {className: "control-label"}, "Наименование: "), React.createElement(textInput_1.default, {name: "techProcessName", text: "", value: this.state.techProcess.name, required: true, onChange: this.setTechProcessName, errorMessage: "Данное наименование недействительно", emptyMessage: "Наименование обязательно для ввода", register: this.registerInput, validate: this.nameValidate, minCharacters: '', uniqueName: ''})), React.createElement("div", {className: "form-group"}, React.createElement("div", {className: "btn-toolbar"}, React.createElement("input", {className: "btn btn-primary", type: "submit", value: "Сохранить"}), React.createElement("button", {className: "btn btn-default", type: "button", onClick: this.cancelClickHandler}, "Закрыть")))))));
        };
        return TechProcessEditForm;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TechProcessEditForm;
});
//# sourceMappingURL=techProcessEditForm.js.map