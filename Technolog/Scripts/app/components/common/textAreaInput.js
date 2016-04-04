/// <reference path="../../../typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react"], function (require, exports, React) {
    "use strict";
    var TextAreaInput = (function (_super) {
        __extends(TextAreaInput, _super);
        function TextAreaInput() {
            _super.apply(this, arguments);
        }
        TextAreaInput.prototype.render = function () {
            return (React.createElement("textarea", {className: "form-control", rows: "5", cols: "50"}, this.props.text));
        };
        return TextAreaInput;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TextAreaInput;
});
//# sourceMappingURL=textAreaInput.js.map