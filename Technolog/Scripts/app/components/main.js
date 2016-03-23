// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
/// <reference path="../../typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./mainSidebar", "./mainContentSection"], function (require, exports, React, mainSidebar_1, mainContentSection_1) {
    "use strict";
    var tabList = [
        { id: 1, name: 'Технологические процессы', linkName: 'processes' },
        { id: 2, name: 'Технологические операции', linkName: 'operations' },
        { id: 3, name: 'Инструменты', linkName: 'tools' },
        { id: 4, name: 'Детали', linkName: 'parts' }
    ];
    var Main = (function (_super) {
        __extends(Main, _super);
        function Main() {
            _super.apply(this, arguments);
        }
        Main.prototype.render = function () {
            return (React.createElement("div", {className: "row full-height"}, React.createElement(mainSidebar_1.default, {tabList: tabList}), React.createElement(mainContentSection_1.default, null, this.props.children)));
        };
        return Main;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Main;
});
//# sourceMappingURL=main.js.map