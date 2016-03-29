/// <reference path="../../typings/tsd.d.ts" />
define(["require", "exports", "react-router"], function (require, exports, ReactRouter) {
    "use strict";
    var navigation;
    var NavigationManagerStatic = (function () {
        function NavigationManagerStatic() {
        }
        NavigationManagerStatic.prototype.handler = function (args) {
            navigation = args;
        };
        NavigationManagerStatic.prototype.openToolEditor = function (id) {
            navigation.pathname = '/tools/' + id;
            this.changeLocation();
        };
        NavigationManagerStatic.prototype.closeToolEditor = function () {
            navigation.pathname = '/tools';
            this.changeLocation();
        };
        NavigationManagerStatic.prototype.newTool = function () {
            if (navigation.query["toolIds"]) {
                if (Array.isArray(navigation.query["toolIds"])) {
                    navigation.query["toolIds"].push(0);
                }
                else {
                    var toolId = navigation.query["toolIds"];
                    navigation.query["toolIds"] = [];
                    navigation.query["toolIds"].push(toolId);
                    navigation.query["toolIds"].push(0);
                }
            }
            else {
                navigation.query["toolIds"] = [];
                navigation.query["toolIds"].push(0);
            }
            ReactRouter.browserHistory.push(navigation);
        };
        NavigationManagerStatic.prototype.openTool = function (id) {
            if (navigation.query["toolIds"]) {
                if (Array.isArray(navigation.query["toolIds"])) {
                    navigation.query["toolIds"].push(id);
                }
                else {
                    var toolId = navigation.query["toolIds"];
                    navigation.query["toolIds"] = [];
                    navigation.query["toolIds"].push(toolId);
                    navigation.query["toolIds"].push(id);
                }
            }
            else {
                navigation.query["toolIds"] = [];
                navigation.query["toolIds"].push(id);
            }
            ReactRouter.browserHistory.push(navigation);
        };
        NavigationManagerStatic.prototype.changeLocation = function () {
            ReactRouter.browserHistory.push(navigation);
        };
        return NavigationManagerStatic;
    }());
    var NavigationManager = new NavigationManagerStatic();
    ReactRouter.browserHistory.listen(NavigationManager.handler);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = NavigationManager;
});
//# sourceMappingURL=navigationManager.js.map