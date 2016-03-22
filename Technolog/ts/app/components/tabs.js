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
    var Tabs = (function (_super) {
        __extends(Tabs, _super);
        function Tabs() {
            _super.apply(this, arguments);
        }
        Tabs.prototype.render = function () {
            return (React.createElement("ul", {className: "nav nav-sidebar"}, this.props.tabList.map(function (tab) {
                return (React.createElement("li", {key: tab.id}, React.createElement(ReactRouter.Link, {activeClassName: 'active', to: '/' + tab.linkName}, tab.name)));
            }.bind(this))));
        };
        return Tabs;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Tabs;
});
//# sourceMappingURL=tabs.js.map