/// <reference path="../../typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./toolList"], function (require, exports, React, toolList_1) {
    "use strict";
    var ToolListSection = (function (_super) {
        __extends(ToolListSection, _super);
        function ToolListSection() {
            _super.apply(this, arguments);
        }
        ToolListSection.prototype.render = function () {
            return (React.createElement("div", {className: "outer"}, React.createElement(toolList_1.default, null), this.props.children));
        };
        return ToolListSection;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ToolListSection;
});
//# sourceMappingURL=toolListSection.js.map