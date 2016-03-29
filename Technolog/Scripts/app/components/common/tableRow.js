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
        function TableRow(props, context) {
            var _this = this;
            _super.call(this, props, context);
            this.onMouseEnterHandler = function () {
                if (!_this.props.isCurrent)
                    _this.setState({ color: "active" });
            };
            this.onMouseLeaveHandler = function () {
                if (!_this.props.isCurrent)
                    _this.setState({ color: null });
            };
            this.onClickHandler = function () {
                if (!_this.props.isCurrent) {
                    _this.setState({ color: null });
                    _this.props.changeCurrent(_this.props.item);
                }
                else {
                    _this.setState({ color: "active" });
                    _this.props.changeCurrent(null);
                }
            };
            this.onDoubleClickHandler = function () {
                _this.props.rowDoubleClickHandler(_this.props.item);
            };
            this.props = props;
            this.context = context;
            this.state = {
                color: this.props.isCurrent ? 'info' : null
            };
        }
        TableRow.prototype.render = function () {
            return (React.createElement("tr", {className: this.props.isCurrent ? 'info' : this.state.color, onMouseEnter: this.onMouseEnterHandler, onMouseLeave: this.onMouseLeaveHandler, onClick: this.onClickHandler, onDoubleClick: this.onDoubleClickHandler}, this.props.children));
        };
        return TableRow;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TableRow;
});
//# sourceMappingURL=tableRow.js.map