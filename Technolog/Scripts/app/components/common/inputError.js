/// <reference path="../../../typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react"], function (require, exports, React) {
    "use strict";
    var InputError = (function (_super) {
        __extends(InputError, _super);
        function InputError() {
            _super.apply(this, arguments);
        }
        InputError.prototype.render = function () {
            return (React.createElement("div", null, React.createElement("span", {style: { color: 'red' }}, this.props.errorMessage)));
        };
        return InputError;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = InputError;
});
//# sourceMappingURL=inputError.js.map