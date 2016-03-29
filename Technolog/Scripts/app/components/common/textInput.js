/// <reference path="../../../typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./inputError"], function (require, exports, React, inputError_1) {
    "use strict";
    var TextInput = (function (_super) {
        __extends(TextInput, _super);
        function TextInput(props, context) {
            var _this = this;
            _super.call(this, props, context);
            this.handleChange = function (event) {
                //validate the field locally
                _this.validation(event.target.value);
                //Call onChange method on the parent component for updating it's state
                //If saving this field for final form submission, it gets passed
                // up to the top component for sending to the server
                if (_this.props.onChange) {
                    _this.props.onChange(event);
                }
            };
            this.handleBlur = function (event) {
                //Complete final validation from parent element when complete
                var valid = _this.props.validate(event.target.value);
                //pass the result to the local validation element for displaying the error
                _this.validation(event.target.value, valid);
            };
            this.props = props;
            this.context = context;
            this.state = {
                isEmpty: true,
                value: this.props.value,
                valid: false,
                errorMessage: "Input is invalid",
                errorVisible: false
            };
        }
        TextInput.prototype.componentWillReceiveProps = function (nextProps) {
            this.setState({
                isEmpty: true,
                value: nextProps.value,
                valid: false,
                errorMessage: "Input is invalid",
                errorVisible: false
            });
        };
        TextInput.prototype.componentDidMount = function () {
            this.props.register(this);
        };
        TextInput.prototype.validation = function (value, valid) {
            //The valid variable is optional, and true if not passed in:
            if (typeof valid === 'undefined') {
                valid = true;
            }
            var message = "";
            var errorVisible = false;
            //we know how to validate text fields based on information passed through props
            if (!valid) {
                //This happens when the user leaves the field, but it is not valid
                //(we do final validation in the parent component, then pass the result
                //here for display)
                message = this.props.errorMessage;
                valid = false;
                errorVisible = true;
            }
            else if (this.props.required && jQuery.isEmptyObject(value)) {
                //this happens when we have a required field with no text entered
                //in this case, we want the "emptyMessage" error message
                message = this.props.emptyMessage;
                valid = false;
                errorVisible = true;
            }
            else if (value.length < this.props.minCharacters) {
                //This happens when the text entered is not the required length,
                //in which case we show the regular error message
                message = this.props.errorMessage;
                valid = false;
                errorVisible = true;
            }
            //setting the state will update the display,
            //causing the error message to display if there is one.
            this.setState({
                value: value,
                isEmpty: jQuery.isEmptyObject(value),
                valid: valid,
                errorMessage: message,
                errorVisible: errorVisible
            });
        };
        TextInput.prototype.render = function () {
            return (React.createElement("div", {className: this.props.uniqueName}, React.createElement("input", {className: 'form-control', placeholder: this.props.text, onChange: this.handleChange, onBlur: this.handleBlur, value: this.props.value}), this.state.errorVisible ?
                React.createElement(inputError_1.default, {errorMessage: this.state.errorMessage}) : null));
        };
        return TextInput;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TextInput;
});
//# sourceMappingURL=textInput.js.map