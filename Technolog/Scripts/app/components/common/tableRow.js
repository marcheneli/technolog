/// <reference path="../../../typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react"], function (require, exports, React) {
    "use strict";
    var TableRow = (function (_super) {
        __extends(TableRow, _super);
        function TableRow() {
            _super.apply(this, arguments);
        }
        TableRow.prototype.getInitialState = function () {
            return {
                color: this.props.isCurrent ? 'info' : null
            };
        };
        TableRow.prototype.onMouseEnterHandler = function () {
            if (!this.props.isCurrent)
                this.setState({ color: "active" });
        };
        TableRow.prototype.onMouseLeaveHandler = function () {
            if (!this.props.isCurrent)
                this.setState({ color: null });
        };
        TableRow.prototype.onClickHandler = function () {
            if (!this.props.isCurrent) {
                this.setState({ color: null });
                this.props.changeCurrent(this.props.item);
            }
            else {
                this.setState({ color: "active" });
                this.props.changeCurrent(null);
            }
        };
        TableRow.prototype.onDoubleClickHandler = function () {
            this.props.rowDoubleClickHandler(this.props.item);
        };
        TableRow.prototype.render = function () {
            return (React.createElement("tr", {className: this.props.isCurrent ? 'info' : this.state.color, onMouseEnter: this.onMouseEnterHandler, onMouseLeave: this.onMouseLeaveHandler, onClick: this.onClickHandler, onDoubleClick: this.onDoubleClickHandler}, this.props.children));
        };
        return TableRow;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TableRow;
});
//# sourceMappingURL=tableRow.js.map