// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
/// <reference path="../../typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react"], function (require, exports, React) {
    "use strict";
    var ToolListSection = (function (_super) {
        __extends(ToolListSection, _super);
        function ToolListSection() {
            _super.apply(this, arguments);
        }
        ToolListSection.prototype.render = function () {
            return (React.createElement("div", null, "Hi!I'm a tool list section. ", this.props.children));
        };
        return ToolListSection;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ToolListSection;
});
//# sourceMappingURL=toolListSection.js.map