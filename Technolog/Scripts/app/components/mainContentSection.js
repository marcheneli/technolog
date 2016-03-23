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
    var MainContentSection = (function (_super) {
        __extends(MainContentSection, _super);
        function MainContentSection() {
            _super.apply(this, arguments);
        }
        MainContentSection.prototype.render = function () {
            return (React.createElement("div", {className: "col-lg-10 col-lg-offset-2 col-md-9 col-md-offset-3 col-sm-9 col-sm-offset-3 col-xs-8 col-xs-offset-4 full-height", id: 'infopanel'}, this.props.children));
        };
        return MainContentSection;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = MainContentSection;
});
//# sourceMappingURL=mainContentSection.js.map