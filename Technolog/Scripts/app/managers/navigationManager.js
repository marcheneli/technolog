/// <reference path="../../typings/tsd.d.ts" />
define(["require", "exports", "react-router"], function (require, exports, ReactRouter) {
    "use strict";
    var NavigationManagerStatic = (function () {
        function NavigationManagerStatic() {
        }
        NavigationManagerStatic.prototype.handler = function (args) {
            this.navigation = args;
        };
        NavigationManagerStatic.prototype.openToolEditor = function (id) {
            this.navigation.pathname = '/tools/' + id;
            this.changeLocation();
        };
        NavigationManagerStatic.prototype.closeToolEditor = function () {
            this.navigation.pathname = '/tools';
            this.changeLocation();
        };
        NavigationManagerStatic.prototype.newTool = function () {
            if (this.navigation.query["toolIds"]) {
                if (Array.isArray(this.navigation.query["toolIds"])) {
                    this.navigation.query["toolIds"].push(0);
                }
                else {
                    var toolId = this.navigation.query["toolIds"];
                    this.navigation.query["toolIds"] = [];
                    this.navigation.query["toolIds"].push(toolId);
                    this.navigation.query["toolIds"].push(0);
                }
            }
            else {
                this.navigation.query["toolIds"] = [];
                this.navigation.query["toolIds"].push(0);
            }
            ReactRouter.browserHistory.push(this.navigation);
        };
        NavigationManagerStatic.prototype.openTool = function (id) {
            if (this.navigation.query["toolIds"]) {
                if (Array.isArray(this.navigation.query["toolIds"])) {
                    this.navigation.query["toolIds"].push(id);
                }
                else {
                    var toolId = this.navigation.query["toolIds"];
                    this.navigation.query["toolIds"] = [];
                    this.navigation.query["toolIds"].push(toolId);
                    this.navigation.query["toolIds"].push(id);
                }
            }
            else {
                this.navigation.query["toolIds"] = [];
                this.navigation.query["toolIds"].push(id);
            }
            ReactRouter.browserHistory.push(this.navigation);
        };
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