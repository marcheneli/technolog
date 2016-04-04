/// <reference path="../../typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "../flux/stores/techStepStore", "../flux/stores/errorStore", "../flux/actions/techStepActions", "../managers/navigationManager", "./common/textAreaInput"], function (require, exports, React, techStepStore_1, errorStore_1, techStepActions_1, navigationManager_1, textAreaInput_1) {
    "use strict";
    var TechStepEditForm = (function (_super) {
        __extends(TechStepEditForm, _super);
        function TechStepEditForm(props, context) {
            var _this = this;
            _super.call(this, props, context);
            this.handleEditTechStepChange = function () {
                _this.setState({
                    techStep: techStepStore_1.default.getEditTechStep(),
                    errorMessage: null,
                    isValid: true
                });
            };
            this.handleNewError = function () {
                _this.setState({
                    techStep: null,
                    errorMessage: errorStore_1.default.getError(),
                    isValid: true
                });
            };
            this.handleSubmit = function (e) {
                e.preventDefault();
                if (_this.state.techStep.id == 0) {
                    techStepActions_1.default.create(_this.state.techStep);
                }
                else {
                    techStepActions_1.default.update(_this.state.techStep);
                }
            };
            this.cancelClickHandler = function () {
                navigationManager_1.default.closeTechStepEditor();
            };
            this.registerInput = function (input) {
                _this.inputs[input.props.name] = input;
            };
            this.setTechStepDescription = function (event) {
                _this.setState({
                    techStep: {
                        id: _this.state.techStep.id,
                        description: event.target.value
                    },
                    errorMessage: null,
                    isValid: true
                });
            };
            this.props = props;
            this.context = context;
            this.state = {
                techStep: null,
                errorMessage: null,
                isValid: true
            };
        }
        TechStepEditForm.prototype.componentWillMount = function () {
            this.inputs = {};
            techStepStore_1.default.addChangeEditTechStepListener(this.handleEditTechStepChange);
            errorStore_1.default.addChangeErrorListener(this.handleNewError);
        };
        TechStepEditForm.prototype.componentWillUnmount = function () {
            techStepStore_1.default.removeChangeEditTechStepListener(this.handleEditTechStepChange);
            errorStore_1.default.removeChangeErrorListener(this.handleNewError);
        };
        TechStepEditForm.prototype.componentDidMount = function () {
            techStepActions_1.default.loadEditTechStep(this.props.params.techStepId);
        };
        TechStepEditForm.prototype.componentWillReceiveProps = function (nextProps) {
            techStepActions_1.default.loadEditTechStep(nextProps.params.techStepId);
        };
        TechStepEditForm.prototype.nameValidate = function () {
            //you could do something here that does general validation for any form field
            return true;
        };
        TechStepEditForm.prototype.render = function () {
            return (React.createElement("div", {className: "panel panel-default wide-inner", style: { marginBottom: 0 + 'px' }}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", null, "Редактирование технологического шага")), React.createElement("div", {className: "panel-body"}, this.state.errorMessage != null ?
                React.createElement("div", null, React.createElement("div", {className: "form-group"}, React.createElement("span", null, this.state.errorMessage)), React.createElement("div", {className: "form-group"}, React.createElement("div", {className: "btn-techStepbar"}, React.createElement("button", {className: "btn btn-default", type: "button", onClick: this.cancelClickHandler}, "Закрыть"))))
                : null, this.state.techStep == null ?
                this.state.errorMessage == null ?
                    React.createElement("p", null, "Загрузка данных...")
                    : null
                :
                    React.createElement("form", {role: "form", onSubmit: this.handleSubmit}, React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-lg-6"}, React.createElement("fieldset", null, React.createElement("legend", null, "Описание"), React.createElement("div", {className: "form-group"}, React.createElement(textAreaInput_1.default, {text: this.state.techStep.description}))), React.createElement("fieldset", null, React.createElement("legend", null, "Инструменты")), React.createElement("fieldset", null, React.createElement("legend", null, "Комплектующие"))), React.createElement("div", {className: "col-lg-6"}, React.createElement("fieldset", null, React.createElement("legend", null, "Визуализация")))), React.createElement("div", {className: "form-group"}, React.createElement("div", {className: "btn-toolbar"}, React.createElement("input", {className: "btn btn-primary", type: "submit", value: "Сохранить"}), React.createElement("button", {className: "btn btn-default", type: "button", onClick: this.cancelClickHandler}, "Закрыть")))))));
        };
        return TechStepEditForm;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TechStepEditForm;
});
//# sourceMappingURL=techStepEditForm.js.map