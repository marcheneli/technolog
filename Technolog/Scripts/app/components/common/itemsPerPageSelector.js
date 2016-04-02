/// <reference path="../../../typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "../../constants/pageConstants"], function (require, exports, React, pageConstants_1) {
    "use strict";
    var ItemsPerPageSelector = (function (_super) {
        __extends(ItemsPerPageSelector, _super);
        function ItemsPerPageSelector(props, context) {
            var _this = this;
            _super.call(this, props, context);
            this.pageClick = function (e) {
                if (_this.state.dropdowndisplay == 'none')
                    return;
                if (_this.state.isButtonClicked) {
                    _this.setState({
                        itemsPerPage: _this.state.itemsPerPage, dropdowndisplay: 'block', isButtonClicked: false
                    });
                    return;
                }
                _this.setState({
                    itemsPerPage: _this.state.itemsPerPage, dropdowndisplay: 'none', isButtonClicked: false
                });
            };
            this.toggleDropDown = function (e) {
                if (_this.state.dropdowndisplay == 'none')
                    _this.setState({ itemsPerPage: _this.state.itemsPerPage, dropdowndisplay: 'block', isButtonClicked: true });
                if (_this.state.dropdowndisplay == 'block')
                    _this.setState({ itemsPerPage: _this.state.itemsPerPage, dropdowndisplay: 'none', isButtonClicked: false });
            };
            this.updateItemsPerPage = function (itemsPerPage) {
                _this.setState({
                    itemsPerPage: itemsPerPage, dropdowndisplay: 'none', isButtonClicked: _this.state.isButtonClicked
                });
                _this.props.onChange(itemsPerPage);
            };
            this.props = props;
            this.context = context;
            this.state = {
                itemsPerPage: pageConstants_1.default.ITEMS_PER_PAGE_INIT,
                dropdowndisplay: 'none',
                isButtonClicked: false
            };
        }
        ItemsPerPageSelector.prototype.componentWillMount = function () {
            document.addEventListener('click', this.pageClick, false);
        };
        ItemsPerPageSelector.prototype.componentWillUnmount = function () {
            document.removeEventListener('click', this.pageClick, false);
        };
        ItemsPerPageSelector.prototype.render = function () {
            return (React.createElement("div", {className: "input-group-btn"}, React.createElement("button", {type: "button", className: "btn btn-default"}, this.state.itemsPerPage), React.createElement("button", {type: "button", className: "btn btn-default dropdown-toggle", dataToggle: "dropdown", onClick: this.toggleDropDown}, React.createElement("span", {className: "caret"}), React.createElement("span", {className: "sr-only"}, "Split button!")), React.createElement("ul", {className: "dropdown-menu", role: "menu", style: { display: this.state.dropdowndisplay }}, React.createElement("li", null, React.createElement("a", {href: "#", style: { cursor: 'pointer', paddingRight: 12 + 'px', paddingLeft: 12 + 'px' }, onClick: function () { this.updateItemsPerPage(10); }.bind(this)}, "10")), React.createElement("li", null, React.createElement("a", {href: "#", style: { cursor: 'pointer', paddingRight: 12 + 'px', paddingLeft: 12 + 'px' }, onClick: function () { this.updateItemsPerPage(20); }.bind(this)}, "20")), React.createElement("li", null, React.createElement("a", {href: "#", style: { cursor: 'pointer', paddingRight: 12 + 'px', paddingLeft: 12 + 'px' }, onClick: function () { this.updateItemsPerPage(30); }.bind(this)}, "30")), React.createElement("li", null, React.createElement("a", {href: "#", style: { cursor: 'pointer', paddingRight: 12 + 'px', paddingLeft: 12 + 'px' }, onClick: function () { this.updateItemsPerPage(40); }.bind(this)}, "40")), React.createElement("li", null, React.createElement("a", {href: "#", style: { cursor: 'pointer', paddingRight: 12 + 'px', paddingLeft: 12 + 'px' }, onClick: function () { this.updateItemsPerPage(50); }.bind(this)}, "50")))));
        };
        return ItemsPerPageSelector;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ItemsPerPageSelector;
});
//# sourceMappingURL=itemsPerPageSelector.js.map