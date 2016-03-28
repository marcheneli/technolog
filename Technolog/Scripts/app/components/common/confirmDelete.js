/// <reference path="../../../typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react"], function (require, exports, React) {
    "use strict";
    var ConfirmDelete = (function (_super) {
        __extends(ConfirmDelete, _super);
        function ConfirmDelete() {
            _super.apply(this, arguments);
        }
        ConfirmDelete.prototype.handleConfirm = function (e) {
            e.preventDefault();
            this.props.success(this.props.id);
        };
        ConfirmDelete.prototype.handleCancelClick = function () {
            this.props.cancel();
        };
        ConfirmDelete.prototype.render = function () {
            return (React.createElement("div", {className: "form-group"}, React.createElement("h3", null, this.props.title), React.createElement("hr", null), React.createElement("form", {onSubmit: this.handleConfirm}, React.createElement("h4", null, this.props.message), React.createElement("div", {className: "btn-toolbar pull-right", style: { marginBottom: 5 + 'px' }}, React.createElement("button", {type: "submit", className: "btn btn-danger"}, "Да"), React.createElement("button", {type: "button", className: "btn btn-default", onClick: this.handleCancelClick}, "Нет")))));
        };
        return ConfirmDelete;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ConfirmDelete;
});
//# sourceMappingURL=confirmDelete.js.map