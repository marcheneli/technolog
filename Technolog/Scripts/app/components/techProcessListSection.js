/// <reference path="../../typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./techProcessList"], function (require, exports, React, techProcessList_1) {
    "use strict";
    var ToolProcessListSection = (function (_super) {
        __extends(ToolProcessListSection, _super);
        function ToolProcessListSection() {
            _super.apply(this, arguments);
        }
        ToolProcessListSection.prototype.render = function () {
            return (React.createElement("div", {className: "outer"}, React.createElement(techProcessList_1.default, null), this.props.children));
        };
        return ToolProcessListSection;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ToolProcessListSection;
});
//# sourceMappingURL=techProcessListSection.js.map