// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
/// <reference path="../../typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./partList"], function (require, exports, React, partList_1) {
    "use strict";
    var PartListSection = (function (_super) {
        __extends(PartListSection, _super);
        function PartListSection() {
            _super.apply(this, arguments);
        }
        PartListSection.prototype.render = function () {
            return (React.createElement("div", {className: "outer"}, React.createElement(partList_1.default, null), this.props.children));
        };
        return PartListSection;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = PartListSection;
});
//# sourceMappingURL=partListSection.js.map