///< reference path="../../../typings/tsd.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react"], function (require, exports, React) {
    "use strict";
    var SearchInput = (function (_super) {
        __extends(SearchInput, _super);
        function SearchInput() {
            _super.apply(this, arguments);
        }
        SearchInput.prototype.handleChange = function (e) {
            this.props.onChange(e.target.value);
        };
        SearchInput.prototype.render = function () {
            return (React.createElement("input", {className: 'form-control', placeholder: this.props.text, onChange: this.handleChange}));
        };
        return SearchInput;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = SearchInput;
});
//# sourceMappingURL=searchInput.js.map