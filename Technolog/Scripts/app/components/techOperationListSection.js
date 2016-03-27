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
    var ToolListOperationSection = (function (_super) {
        __extends(ToolListOperationSection, _super);
        function ToolListOperationSection() {
            _super.apply(this, arguments);
        }
        ToolListOperationSection.prototype.render = function () {
            return (React.createElement("div", null, "Hi! I'm a tech operation section."));
        };
        return ToolListOperationSection;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ToolListOperationSection;
});
//# sourceMappingURL=techOperationListSection.js.map