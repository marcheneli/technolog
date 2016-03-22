// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
/// <reference path="../../typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./tabs"], function (require, exports, React, tabs_1) {
    "use strict";
    var MainSidebar = (function (_super) {
        __extends(MainSidebar, _super);
        function MainSidebar() {
            _super.apply(this, arguments);
        }
        MainSidebar.prototype.render = function () {
            return (React.createElement("div", {className: "col-lg-2 col-md-3 col-sm-3 col-xs-4 sidebar"}, React.createElement(tabs_1.default, {tabList: this.props.tabList})));
        };
        return MainSidebar;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = MainSidebar;
});
//# sourceMappingURL=mainSidebar.js.map