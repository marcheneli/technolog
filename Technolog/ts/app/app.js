// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
/// <reference path="../typings/tsd.d.ts" />
define(["require", "exports", "react-dom", "react-router", "./components/main", "./components/techProcessListSection", "./components/techOperationListSection", "./components/toolListSection", "./components/partListSection", "./components/toolEditForm"], function (require, exports, ReactDOM, ReactRouter, main_1, techProcessListSection_1, techOperationListSection_1, toolListSection_1, partListSection_1, toolEditForm_1) {
    "use strict";
    var routers = (React.createElement(ReactRouter.Router, {history: ReactRouter.browserHistory}, React.createElement(ReactRouter.Route, {path: "/", component: main_1.default}, React.createElement(ReactRouter.Route, {path: "processes", component: techProcessListSection_1.default}), React.createElement(ReactRouter.Route, {path: "operations", component: techOperationListSection_1.default}), React.createElement(ReactRouter.Route, {path: "tools", component: toolListSection_1.default}, React.createElement(ReactRouter.Route, {path: ":toolId", component: toolEditForm_1.default})), React.createElement(ReactRouter.Route, {path: "parts", component: partListSection_1.default}))));
    ReactDOM.render(routers, document.getElementById('content'));
});
//# sourceMappingURL=app.js.map