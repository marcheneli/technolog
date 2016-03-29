/// <reference path="../../../typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react"], function (require, exports, React) {
    "use strict";
    var PageButton = (function (_super) {
        __extends(PageButton, _super);
        function PageButton() {
            var _this = this;
            _super.apply(this, arguments);
            this.handleClick = function () {
                _this.props.onClick(_this.props.pageNumber);
            };
        }
        PageButton.prototype.render = function () {
            return (React.createElement("li", {className: this.props.mode}, React.createElement("a", {href: "#", onClick: this.handleClick}, this.props.symbol)));
        };
        return PageButton;
    }(React.Component));
    var Pagination = (function (_super) {
        __extends(Pagination, _super);
        function Pagination(props, context) {
            var _this = this;
            _super.call(this, props, context);
            this.pageButtonClickHandler = function (pageNumber) {
                var totalPageAmount = Math.ceil(_this.props.itemAmount / _this.props.itemsPerPage);
                if (pageNumber == -1 && _this.state.currentPage != 0) {
                    _this.setState({ currentPage: _this.state.currentPage - 1 });
                    _this.props.updatePage(_this.state.currentPage - 1);
                }
                if (pageNumber == -2 && _this.state.currentPage != totalPageAmount - 1) {
                    _this.setState({ currentPage: _this.state.currentPage + 1 });
                    _this.props.updatePage(_this.state.currentPage + 1);
                }
                if (pageNumber >= 0 && pageNumber != _this.state.currentPage) {
                    _this.setState({ currentPage: pageNumber });
                    _this.props.updatePage(pageNumber);
                }
            };
            this.props = props;
            this.context = context;
            this.state = {
                currentPage: 0
            };
        }
        Pagination.prototype.render = function () {
            var totalPageAmount = Math.ceil(this.props.itemAmount / this.props.itemsPerPage);
            var pageButtons = [];
            if (totalPageAmount > 0) {
                if (totalPageAmount != 1 && this.state.currentPage != 0) {
                    pageButtons.push(React.createElement(PageButton, {key: 0, mode: '', onClick: this.pageButtonClickHandler, symbol: this.props.firstSymbol, pageNumber: 0}));
                    pageButtons.push(React.createElement(PageButton, {key: 1, mode: '', onClick: this.pageButtonClickHandler, symbol: this.props.prevSymbol, pageNumber: -1}));
                }
                for (var i = 0; i < totalPageAmount; i++) {
                    if (this.state.currentPage == i) {
                        pageButtons.push(React.createElement(PageButton, {key: i + 2, mode: 'active', onClick: function () { }, symbol: String(i + 1), pageNumber: i}));
                    }
                    else {
                        pageButtons.push(React.createElement(PageButton, {key: i + 2, mode: '', onClick: this.pageButtonClickHandler, symbol: String(i + 1), pageNumber: i}));
                    }
                }
                if (totalPageAmount != 1 && this.state.currentPage != totalPageAmount - 1) {
                    pageButtons.push(React.createElement(PageButton, {key: i + 3, mode: '', onClick: this.pageButtonClickHandler, symbol: this.props.nextSymbol, pageNumber: -2}));
                    pageButtons.push(React.createElement(PageButton, {key: i + 4, mode: '', onClick: this.pageButtonClickHandler, symbol: this.props.lastSymbol, pageNumber: totalPageAmount - 1}));
                }
            }
            return (React.createElement("div", {className: "pull-right"}, React.createElement("ul", {className: "pagination pull-right", style: { marginTop: 0 + 'px', marginBottom: 0 + 'px' }}, pageButtons)));
        };
        return Pagination;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Pagination;
});
//# sourceMappingURL=pagination.js.map