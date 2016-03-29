/// <reference path="../../typings/tsd.d.ts" />
define(["require", "exports", "react-router"], function (require, exports, ReactRouter) {
    "use strict";
    var NavigationManagerStatic = (function () {
        function NavigationManagerStatic() {
            var _this = this;
            this.handler = function (args) {
                _this.navigation = args;
            };
            this.openToolEditor = function (id) {
                _this.navigation.pathname = '/tools/' + id;
                _this.changeLocation();
            };
            this.closeToolEditor = function () {
                _this.navigation.pathname = '/tools';
                _this.changeLocation();
            };
            this.newTool = function () {
                if (_this.navigation.query["toolIds"]) {
                    if (Array.isArray(_this.navigation.query["toolIds"])) {
                        _this.navigation.query["toolIds"].push(0);
                    }
                    else {
                        var toolId = _this.navigation.query["toolIds"];
                        _this.navigation.query["toolIds"] = [];
                        _this.navigation.query["toolIds"].push(toolId);
                        _this.navigation.query["toolIds"].push(0);
                    }
                }
                else {
                    _this.navigation.query["toolIds"] = [];
                    _this.navigation.query["toolIds"].push(0);
                }
                ReactRouter.browserHistory.push(_this.navigation);
            };
            this.openTool = function (id) {
                if (_this.navigation.query["toolIds"]) {
                    if (Array.isArray(_this.navigation.query["toolIds"])) {
                        _this.navigation.query["toolIds"].push(id);
                    }
                    else {
                        var toolId = _this.navigation.query["toolIds"];
                        _this.navigation.query["toolIds"] = [];
                        _this.navigation.query["toolIds"].push(toolId);
                        _this.navigation.query["toolIds"].push(id);
                    }
                }
                else {
                    _this.navigation.query["toolIds"] = [];
                    _this.navigation.query["toolIds"].push(id);
                }
                ReactRouter.browserHistory.push(_this.navigation);
            };
        }
        NavigationManagerStatic.prototype.changeLocation = function () {
            ReactRouter.browserHistory.push(this.navigation);
        };
        return NavigationManagerStatic;
    }());
    var NavigationManager = new NavigationManagerStatic();
    ReactRouter.browserHistory.listen(NavigationManager.handler);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = NavigationManager;
});
//# sourceMappingURL=navigationManager.js.map