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
            this.openPartEditor = function (id) {
                _this.navigation.pathname = '/parts/' + id;
                _this.changeLocation();
            };
            this.closePartEditor = function () {
                _this.navigation.pathname = '/parts';
                _this.changeLocation();
            };
            this.openTechStepEditor = function (id) {
                _this.navigation.pathname = '/techsteps/' + id;
                _this.changeLocation();
            };
            this.closeTechStepEditor = function () {
                _this.navigation.pathname = '/techsteps';
                _this.changeLocation();
            };
            this.openTechOperationEditor = function (id) {
                _this.navigation.pathname = '/techoperations/' + id;
                _this.changeLocation();
            };
            this.closeTechOperationEditor = function () {
                _this.navigation.pathname = '/techoperations';
                _this.changeLocation();
            };
            this.openTechProcessEditor = function (id) {
                _this.navigation.pathname = '/techprocesses/' + id;
                _this.changeLocation();
            };
            this.closeTechProcessEditor = function () {
                _this.navigation.pathname = '/techprocesses';
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