/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!****************************!*\
  !*** ./Scripts/app/app.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// A '.tsx' file enables JSX support in the TypeScript compiler, 
	// for more information see the following page on the TypeScript wiki:
	// https://github.com/Microsoft/TypeScript/wiki/JSX
	/// <reference path="../typings/tsd.d.ts" />
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react-dom */ 3), __webpack_require__(/*! react-router */ 4), __webpack_require__(/*! ./components/main */ 5), __webpack_require__(/*! ./components/techProcessListSection */ 1), __webpack_require__(/*! ./components/techOperationListSection */ 9), __webpack_require__(/*! ./components/toolListSection */ 10), __webpack_require__(/*! ./components/partListSection */ 30), __webpack_require__(/*! ./components/toolEditForm */ 31)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ReactDOM, ReactRouter, main_1, techProcessListSection_1, techOperationListSection_1, toolListSection_1, partListSection_1, toolEditForm_1) {
	    "use strict";
	    var routers = (React.createElement(ReactRouter.Router, {history: ReactRouter.browserHistory}, React.createElement(ReactRouter.Route, {path: "/", component: main_1.default}, React.createElement(ReactRouter.Route, {path: "processes", component: techProcessListSection_1.default}), React.createElement(ReactRouter.Route, {path: "operations", component: techOperationListSection_1.default}), React.createElement(ReactRouter.Route, {path: "tools", component: toolListSection_1.default}, React.createElement(ReactRouter.Route, {path: ":toolId", component: toolEditForm_1.default})), React.createElement(ReactRouter.Route, {path: "parts", component: partListSection_1.default}))));
	    ReactDOM.render(routers, document.getElementById('content'));
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=app.js.map

/***/ },
/* 1 */
/*!**********************************************************!*\
  !*** ./Scripts/app/components/techProcessListSection.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// A '.tsx' file enables JSX support in the TypeScript compiler, 
	// for more information see the following page on the TypeScript wiki:
	// https://github.com/Microsoft/TypeScript/wiki/JSX
	/// <reference path="../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React) {
	    "use strict";
	    var ToolProcessListSection = (function (_super) {
	        __extends(ToolProcessListSection, _super);
	        function ToolProcessListSection() {
	            _super.apply(this, arguments);
	        }
	        ToolProcessListSection.prototype.render = function () {
	            return (React.createElement("div", null, "Hi! I'm a tech process list section."));
	        };
	        return ToolProcessListSection;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = ToolProcessListSection;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=techProcessListSection.js.map

/***/ },
/* 2 */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 3 */
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 4 */
/*!******************************!*\
  !*** external "ReactRouter" ***!
  \******************************/
/***/ function(module, exports) {

	module.exports = ReactRouter;

/***/ },
/* 5 */
/*!****************************************!*\
  !*** ./Scripts/app/components/main.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// A '.tsx' file enables JSX support in the TypeScript compiler, 
	// for more information see the following page on the TypeScript wiki:
	// https://github.com/Microsoft/TypeScript/wiki/JSX
	/// <reference path="../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2), __webpack_require__(/*! ./mainSidebar */ 6), __webpack_require__(/*! ./mainContentSection */ 8)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React, mainSidebar_1, mainContentSection_1) {
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
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=main.js.map

/***/ },
/* 6 */
/*!***********************************************!*\
  !*** ./Scripts/app/components/mainSidebar.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// A '.tsx' file enables JSX support in the TypeScript compiler, 
	// for more information see the following page on the TypeScript wiki:
	// https://github.com/Microsoft/TypeScript/wiki/JSX
	/// <reference path="../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2), __webpack_require__(/*! ./tabs */ 7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React, tabs_1) {
	    "use strict";
	    var MainSidebar = (function (_super) {
	        __extends(MainSidebar, _super);
	        function MainSidebar() {
	            _super.apply(this, arguments);
	        }
	        MainSidebar.prototype.render = function () {
	            return (React.createElement("div", {className: "col-lg-2 col-md-3 col-sm-3 col-xs-4 sidebar"}, React.createElement(tabs_1.default, {tabList: this.props.tabList})));
	        };
	        return MainSidebar;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = MainSidebar;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=mainSidebar.js.map

/***/ },
/* 7 */
/*!****************************************!*\
  !*** ./Scripts/app/components/tabs.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React) {
	    "use strict";
	    var Tabs = (function (_super) {
	        __extends(Tabs, _super);
	        function Tabs() {
	            _super.apply(this, arguments);
	        }
	        Tabs.prototype.render = function () {
	            return (React.createElement("ul", {className: "nav nav-sidebar"}, this.props.tabList.map(function (tab) {
	                return (React.createElement("li", {key: tab.id}, React.createElement(ReactRouter.Link, {activeClassName: 'active', to: '/' + tab.linkName}, tab.name)));
	            }.bind(this))));
	        };
	        return Tabs;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = Tabs;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=tabs.js.map

/***/ },
/* 8 */
/*!******************************************************!*\
  !*** ./Scripts/app/components/mainContentSection.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// A '.tsx' file enables JSX support in the TypeScript compiler, 
	// for more information see the following page on the TypeScript wiki:
	// https://github.com/Microsoft/TypeScript/wiki/JSX
	/// <reference path="../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React) {
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
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=mainContentSection.js.map

/***/ },
/* 9 */
/*!************************************************************!*\
  !*** ./Scripts/app/components/techOperationListSection.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// A '.tsx' file enables JSX support in the TypeScript compiler, 
	// for more information see the following page on the TypeScript wiki:
	// https://github.com/Microsoft/TypeScript/wiki/JSX
	/// <reference path="../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React) {
	    "use strict";
	    var ToolListOperationSection = (function (_super) {
	        __extends(ToolListOperationSection, _super);
	        function ToolListOperationSection() {
	            _super.apply(this, arguments);
	        }
	        ToolListOperationSection.prototype.render = function () {
	            return (React.createElement("div", null, "Hi! I'm a tech operation section."));
	        };
	        return ToolListOperationSection;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = ToolListOperationSection;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=techOperationListSection.js.map

/***/ },
/* 10 */
/*!***************************************************!*\
  !*** ./Scripts/app/components/toolListSection.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2), __webpack_require__(/*! ./toolList */ 11)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React, toolList_1) {
	    "use strict";
	    var ToolListSection = (function (_super) {
	        __extends(ToolListSection, _super);
	        function ToolListSection() {
	            _super.apply(this, arguments);
	        }
	        ToolListSection.prototype.render = function () {
	            return (React.createElement("div", {className: "outer"}, React.createElement(toolList_1.default, null), this.props.children));
	        };
	        return ToolListSection;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = ToolListSection;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=toolListSection.js.map

/***/ },
/* 11 */
/*!********************************************!*\
  !*** ./Scripts/app/components/toolList.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2), __webpack_require__(/*! ../flux/stores/toolStore */ 13), __webpack_require__(/*! ../constants/pageConstants */ 20), __webpack_require__(/*! ../flux/actions/toolActions */ 23), __webpack_require__(/*! ../managers/pageParamsManager */ 24), __webpack_require__(/*! ../managers/navigationManager */ 12), __webpack_require__(/*! ./common/tableRow */ 25), __webpack_require__(/*! ./common/confirmDelete */ 26), __webpack_require__(/*! ./common/pagination */ 27), __webpack_require__(/*! ./common/searchInput */ 28), __webpack_require__(/*! ./common/itemsPerPageSelector */ 29)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React, toolStore_1, pageConstants_1, toolActions_1, pageParamsManager_1, navigationManager_1, tableRow_1, confirmDelete_1, pagination_1, searchInput_1, itemsPerPageSelector_1) {
	    "use strict";
	    var ToolList = (function (_super) {
	        __extends(ToolList, _super);
	        function ToolList() {
	            _super.apply(this, arguments);
	        }
	        ToolList.prototype.getInitialState = function () {
	            return {
	                tools: [],
	                currentTool: null,
	                isConfirmDeleting: false,
	                toolAmount: 0,
	                toolsPerPage: pageConstants_1.default.ITEMS_PER_PAGE_INIT
	            };
	        };
	        ToolList.prototype.componentWillMount = function () {
	            toolStore_1.default.addChangeToolsListener(this.handleToolsChange);
	        };
	        ToolList.prototype.componentWillUnmount = function () {
	            toolStore_1.default.removeChangeToolsListener(this.handleToolsChange);
	        };
	        ToolList.prototype.componentDidMount = function () {
	            toolActions_1.default.init(pageParamsManager_1.default.getPage(), pageParamsManager_1.default.getPageSize(), pageParamsManager_1.default.getSearchText());
	        };
	        ToolList.prototype.handleToolsChange = function () {
	            this.setState({
	                tools: toolStore_1.default.getAll(),
	                currentTool: null,
	                isConfirmDeleting: false,
	                toolAmount: toolStore_1.default.getToolAmount(),
	                toolsPerPage: toolStore_1.default.getToolsPerPage()
	            });
	        };
	        ToolList.prototype.changeCurrent = function (tool) {
	            this.setState({
	                tools: this.state.tools,
	                currentTool: tool,
	                isConfirmDeleting: this.state.isConfirmDeleting,
	                toolAmount: this.state.toolAmount,
	                toolsPerPage: this.state.toolsPerPage
	            });
	        };
	        ToolList.prototype.toolRowDoubleClick = function (tool) {
	            navigationManager_1.default.openToolEditor(tool.id);
	        };
	        ToolList.prototype.newToolBtnClickHandler = function () {
	            navigationManager_1.default.openToolEditor(0);
	        };
	        ToolList.prototype.handleDeleteSuccess = function () {
	            toolActions_1.default.remove(this.state.currentTool.id);
	        };
	        ToolList.prototype.handleDeleteCancel = function () {
	            this.setState({
	                tools: this.state.tools,
	                currentTool: this.state.currentTool,
	                isConfirmDeleting: !this.state.isConfirmDeleting,
	                toolAmount: this.state.toolAmount,
	                toolsPerPage: this.state.toolsPerPage
	            });
	        };
	        ToolList.prototype.handleToolsPerPageChange = function (toolsPerPage) {
	            pageParamsManager_1.default.changePageSize(toolsPerPage);
	            toolActions_1.default.changeToolsPerPage(toolsPerPage);
	        };
	        ToolList.prototype.handleToolPageChange = function (page) {
	            pageParamsManager_1.default.changePage(page);
	            toolActions_1.default.changeToolPage(page);
	        };
	        ToolList.prototype.handleToolSearchTextChange = function (text) {
	            pageParamsManager_1.default.changeSearchText(text);
	            toolActions_1.default.changeToolSearchText(text);
	        };
	        ToolList.prototype.refreshBtnClickHandler = function (text) {
	            toolActions_1.default.init(pageParamsManager_1.default.getPage(), pageParamsManager_1.default.getPageSize(), pageParamsManager_1.default.getSearchText());
	            this.setState({
	                tools: [],
	                currentTool: null,
	                isConfirmDeleting: false,
	                toolAmount: 0,
	                toolsPerPage: this.state.toolsPerPage
	            });
	        };
	        ToolList.prototype.render = function () {
	            var toolRows = [];
	            for (var key in this.state.tools) {
	                var tool = this.state.tools[key];
	                toolRows.push(React.createElement(tableRow_1.default, {key: key, item: tool, isCurrent: this.state.currentTool == tool, changeCurrent: this.changeCurrent, rowDoubleClickHandler: this.toolRowDoubleClick}, React.createElement("td", {style: { width: 25 + '%' }}, tool.id), React.createElement("td", {style: { width: 75 + '%' }}, tool.name)));
	            }
	            return (React.createElement("div", {className: "panel panel-default inner", style: { marginBottom: 0 + 'px', display: 'flex', flexDirection: 'column' }}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", null, "Инструменты")), React.createElement("div", {className: "panel-body", style: { display: 'flex', flexDirection: 'column' }}, this.state.isConfirmDeleting ?
	                React.createElement(confirmDelete_1.default, {id: this.state.currentTool.id, title: "Подтверждение удаления инструмента", message: "Вы действительно хотите удалить инструмент " + this.state.currentTool.name, success: this.handleDeleteSuccess, cancel: this.handleDeleteCancel})
	                :
	                    React.createElement("div", {className: "input-group"}, React.createElement("div", {className: "input-group-btn"}, React.createElement("button", {className: "btn btn-default", type: "button", onClick: this.newToolBtnClickHandler}, React.createElement("span", {className: "glyphicon glyphicon-plus"})), React.createElement("button", {className: "btn btn-default", type: "button", onClick: function () { this.setState({ currentTool: this.state.currentTool, isConfirmDeleting: true }); }.bind(this)}, React.createElement("span", {className: "glyphicon glyphicon-trash"})), React.createElement("button", {className: "btn btn-default", type: "button", onClick: this.refreshBtnClickHandler}, React.createElement("span", {className: "glyphicon glyphicon-refresh"}))), React.createElement(searchInput_1.default, {text: "Поиск...", onChange: function (text) { this.handleToolSearchTextChange(text); }.bind(this)}), React.createElement(itemsPerPageSelector_1.default, {onChange: this.handleToolsPerPageChange})), React.createElement("div", {style: { marginBottom: 10 + 'px', display: 'flex', flexDirection: 'column' }}, React.createElement("div", {style: { overflowY: 'auto' }}, React.createElement("table", {className: "table table-bordered", style: { marginBottom: 1 + 'px' }}, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {style: { width: 25 + '%' }}, "ID"), React.createElement("th", {style: { width: 75 + '%' }}, "Наименование"))), React.createElement("tbody", null, toolRows)))), React.createElement(pagination_1.default, {itemAmount: this.state.toolAmount, itemsPerPage: this.state.toolsPerPage, firstSymbol: "&laquo;", nextSymbol: "&rsaquo;", prevSymbol: "&lsaquo;", lastSymbol: "&raquo;", updatePage: this.handleToolPageChange}))));
	        };
	        return ToolList;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = ToolList;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=toolList.js.map

/***/ },
/* 12 */
/*!***************************************************!*\
  !*** ./Scripts/app/managers/navigationManager.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../typings/tsd.d.ts" />
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react-router */ 4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ReactRouter) {
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
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=navigationManager.js.map

/***/ },
/* 13 */
/*!**********************************************!*\
  !*** ./Scripts/app/flux/stores/toolStore.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! jquery */ 18), __webpack_require__(/*! ../dispatcher/appDispatcher */ 15), __webpack_require__(/*! ../actions/toolActionTypes */ 19), __webpack_require__(/*! ../actions/errorActions */ 14), __webpack_require__(/*! ../../constants/pageConstants */ 20), __webpack_require__(/*! ../../managers/navigationManager */ 12), __webpack_require__(/*! object-assign */ 21), __webpack_require__(/*! eventemitter3 */ 22)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, $, appDispatcher_1, toolActionTypes_1, errorActions_1, pageConstants_1, navigationManager_1, assign, EventEmitter) {
	    "use strict";
	    var CHANGE_TOOLS_EVENT = 'change_tools';
	    var CHANGE_EDITTOOL_EVENT = 'change_edittool';
	    var _tools = new Array();
	    var _tool;
	    var _toolSearchText = "";
	    var _totalToolAmount = 0;
	    var _toolsPerPage = pageConstants_1.default.ITEMS_PER_PAGE_INIT;
	    var _currentToolPage = 0;
	    function _loadTools() {
	        $.get(location.origin + "/api/tools?search=" + _toolSearchText + "&page=" + _currentToolPage + "&pageSize=" + _toolsPerPage, function (toolListModel) {
	            _totalToolAmount = toolListModel.toolAmount;
	            _tools = new Array();
	            toolListModel.tools.forEach(function (tool) {
	                _tools[tool.id] = tool;
	            });
	            ToolStore.emitChangeTools();
	        });
	    }
	    function _loadTool(id) {
	        if (id == 0) {
	            _tool = { id: 0, name: "", price: 0 };
	            ToolStore.emitChangeEditTool();
	            return;
	        }
	        if (_tools[id]) {
	            _tool = _tools[id];
	            ToolStore.emitChangeEditTool();
	        }
	        else {
	            $.ajax({
	                url: location.origin + "/api/tools/" + id,
	                type: 'GET',
	                success: function (tool) {
	                    _tool = tool;
	                    ToolStore.emitChangeEditTool();
	                },
	                error: function (data) {
	                    errorActions_1.default.received(data.responseJSON);
	                }
	            });
	        }
	    }
	    function _addTool(tool) {
	        $.ajax({
	            url: location.origin + '/api/tools',
	            dataType: 'json',
	            type: 'PUT',
	            data: {
	                id: tool.id,
	                name: tool.name,
	                price: tool.price,
	                __RequestVerificationToken: antiForgeryToken
	            },
	            success: function (tool) {
	                _tool = tool;
	                if (_tools[tool.id]) {
	                    _tools[tool.id] = assign({}, _tools[tool.id], tool);
	                    ToolStore.emitChangeTools();
	                }
	                navigationManager_1.default.openToolEditor(tool.id);
	            },
	            error: function (xhr, status, err) {
	                console.error(this.props.url, status, err.toString());
	            }.bind(this)
	        });
	    }
	    function _deleteTool(id) {
	        $.ajax({
	            url: location.origin + '/api/tools/' + id,
	            dataType: 'json',
	            type: 'DELETE',
	            data: { __RequestVerificationToken: antiForgeryToken },
	            success: function (id) {
	                _loadTools();
	            },
	            error: function (xhr, status, err) {
	                console.error(this.props.url, status, err.toString());
	            }
	        });
	    }
	    function _updateTool(tool) {
	        $.ajax({
	            url: location.origin + '/api/tools',
	            dataType: 'json',
	            type: 'POST',
	            data: {
	                id: tool.id,
	                name: tool.name,
	                price: tool.price,
	                __RequestVerificationToken: antiForgeryToken
	            },
	            success: function (tool) {
	                if (_tools[tool.id]) {
	                    _tools[tool.id] = assign({}, _tools[tool.id], tool);
	                    ToolStore.emitChangeTools();
	                }
	            },
	            error: function (xhr, status, err) {
	                console.error(this.props.url, status, err.toString());
	            }
	        });
	    }
	    function _init(currentPage, toolsPerPage, searchText) {
	        _toolsPerPage = toolsPerPage;
	        _currentToolPage = currentPage;
	        _toolSearchText = searchText;
	        _loadTools();
	    }
	    var ToolStoreStatic = (function (_super) {
	        __extends(ToolStoreStatic, _super);
	        function ToolStoreStatic() {
	            _super.apply(this, arguments);
	        }
	        ToolStoreStatic.prototype.getAll = function () {
	            return _tools;
	        };
	        ToolStoreStatic.prototype.getToolAmount = function () {
	            return _totalToolAmount;
	        };
	        ToolStoreStatic.prototype.getToolsPerPage = function () {
	            return _toolsPerPage;
	        };
	        ToolStoreStatic.prototype.getEditTool = function () {
	            return _tool;
	        };
	        ToolStoreStatic.prototype.emitChangeTools = function () {
	            this.emit(CHANGE_TOOLS_EVENT);
	        };
	        ToolStoreStatic.prototype.emitChangeEditTool = function () {
	            this.emit(CHANGE_EDITTOOL_EVENT);
	        };
	        /**
	         * @param {function} callback
	         */
	        ToolStoreStatic.prototype.addChangeEditToolListener = function (callback) {
	            this.on(CHANGE_EDITTOOL_EVENT, callback);
	        };
	        /**
	         * @param {function} callback
	         */
	        ToolStoreStatic.prototype.removeChangeEditToolListener = function (callback) {
	            this.removeListener(CHANGE_EDITTOOL_EVENT, callback);
	        };
	        /**
	         * @param {function} callback
	         */
	        ToolStoreStatic.prototype.addChangeToolsListener = function (callback) {
	            this.on(CHANGE_TOOLS_EVENT, callback);
	        };
	        /**
	         * @param {function} callback
	         */
	        ToolStoreStatic.prototype.removeChangeToolsListener = function (callback) {
	            this.removeListener(CHANGE_TOOLS_EVENT, callback);
	        };
	        return ToolStoreStatic;
	    }(EventEmitter));
	    var ToolStore = new ToolStoreStatic();
	    appDispatcher_1.default.register(function (payload) {
	        switch (payload.actionType) {
	            case toolActionTypes_1.default.TOOL_INIT:
	                _init(payload.currentPage, payload.pageSize, payload.searchText);
	                break;
	            case toolActionTypes_1.default.TOOL_LOAD_EDIT:
	                _loadTool(payload.id);
	                break;
	            case toolActionTypes_1.default.TOOL_CREATE:
	                _addTool(payload.tool);
	                break;
	            case toolActionTypes_1.default.TOOL_UPDATE:
	                _updateTool(payload.tool);
	                break;
	            case toolActionTypes_1.default.TOOL_DELETE:
	                _deleteTool(payload.id);
	                break;
	            case toolActionTypes_1.default.TOOL_PAGE_CHANGE:
	                _currentToolPage = payload.currentPage;
	                _loadTools();
	                break;
	            case toolActionTypes_1.default.TOOLS_PER_PAGE_CHANGE:
	                _toolsPerPage = payload.pageSize;
	                _loadTools();
	                break;
	            case toolActionTypes_1.default.TOOL_SEARCH_TEXT_CHANGE:
	                _toolSearchText = payload.searchText;
	                _loadTools();
	                break;
	            default:
	        }
	    });
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = ToolStore;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=toolStore.js.map

/***/ },
/* 14 */
/*!**************************************************!*\
  !*** ./Scripts/app/flux/actions/errorActions.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../../typings/tsd.d.ts" />
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../dispatcher/appDispatcher */ 15), __webpack_require__(/*! ./errorActionTypes */ 17)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, appDispatcher_1, errorActionTypes_1) {
	    "use strict";
	    var ErrorActionsStatic = (function () {
	        function ErrorActionsStatic() {
	        }
	        ErrorActionsStatic.prototype.received = function (message) {
	            appDispatcher_1.default.dispatch({
	                actionType: errorActionTypes_1.default.RECEIVE_ERROR_MESSAGE,
	                errorMessage: message
	            });
	        };
	        return ErrorActionsStatic;
	    }());
	    var ErrorActions = new ErrorActionsStatic();
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = ErrorActions;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=errorActions.js.map

/***/ },
/* 15 */
/*!******************************************************!*\
  !*** ./Scripts/app/flux/dispatcher/appDispatcher.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../../typings/tsd.d.ts" />
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! flux */ 16)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, Flux) {
	    "use strict";
	    var Dispatcher = new Flux.Dispatcher();
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = Dispatcher;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=appDispatcher.js.map

/***/ },
/* 16 */
/*!***********************!*\
  !*** external "Flux" ***!
  \***********************/
/***/ function(module, exports) {

	module.exports = Flux;

/***/ },
/* 17 */
/*!******************************************************!*\
  !*** ./Scripts/app/flux/actions/errorActionTypes.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    "use strict";
	    var ErrorActionTypes;
	    (function (ErrorActionTypes) {
	        ErrorActionTypes[ErrorActionTypes["RECEIVE_ERROR_MESSAGE"] = 0] = "RECEIVE_ERROR_MESSAGE";
	    })(ErrorActionTypes || (ErrorActionTypes = {}));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = ErrorActionTypes;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=errorActionTypes.js.map

/***/ },
/* 18 */
/*!********************!*\
  !*** external "$" ***!
  \********************/
/***/ function(module, exports) {

	module.exports = $;

/***/ },
/* 19 */
/*!*****************************************************!*\
  !*** ./Scripts/app/flux/actions/toolActionTypes.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    "use strict";
	    var ToolActionTypes;
	    (function (ToolActionTypes) {
	        ToolActionTypes[ToolActionTypes["TOOL_INIT"] = 0] = "TOOL_INIT";
	        ToolActionTypes[ToolActionTypes["TOOL_LOAD_EDIT"] = 1] = "TOOL_LOAD_EDIT";
	        ToolActionTypes[ToolActionTypes["TOOL_CREATE"] = 2] = "TOOL_CREATE";
	        ToolActionTypes[ToolActionTypes["TOOL_DELETE"] = 3] = "TOOL_DELETE";
	        ToolActionTypes[ToolActionTypes["TOOL_UPDATE"] = 4] = "TOOL_UPDATE";
	        ToolActionTypes[ToolActionTypes["TOOL_PAGE_CHANGE"] = 5] = "TOOL_PAGE_CHANGE";
	        ToolActionTypes[ToolActionTypes["TOOLS_PER_PAGE_CHANGE"] = 6] = "TOOLS_PER_PAGE_CHANGE";
	        ToolActionTypes[ToolActionTypes["TOOL_SEARCH_TEXT_CHANGE"] = 7] = "TOOL_SEARCH_TEXT_CHANGE";
	    })(ToolActionTypes || (ToolActionTypes = {}));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = ToolActionTypes;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=toolActionTypes.js.map

/***/ },
/* 20 */
/*!************************************************!*\
  !*** ./Scripts/app/constants/pageConstants.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    "use strict";
	    var PageConstants = (function () {
	        function PageConstants() {
	        }
	        PageConstants.ITEMS_PER_PAGE_INIT = 10;
	        return PageConstants;
	    }());
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = PageConstants;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=pageConstants.js.map

/***/ },
/* 21 */
/*!*************************!*\
  !*** external "assign" ***!
  \*************************/
/***/ function(module, exports) {

	module.exports = assign;

/***/ },
/* 22 */
/*!*******************************!*\
  !*** external "EventEmitter" ***!
  \*******************************/
/***/ function(module, exports) {

	module.exports = EventEmitter;

/***/ },
/* 23 */
/*!*************************************************!*\
  !*** ./Scripts/app/flux/actions/toolActions.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../../typings/tsd.d.ts" />
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../dispatcher/appDispatcher */ 15), __webpack_require__(/*! ./toolActionTypes */ 19)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, appDispatcher_1, toolActionTypes_1) {
	    "use strict";
	    var ToolActionsStatic = (function () {
	        function ToolActionsStatic() {
	        }
	        ToolActionsStatic.prototype.init = function (currentPage, pageSize, searchText) {
	            appDispatcher_1.default.dispatch({
	                actionType: toolActionTypes_1.default.TOOL_INIT,
	                currentPage: currentPage,
	                pageSize: pageSize,
	                searchText: searchText
	            });
	        };
	        ToolActionsStatic.prototype.loadEditTool = function (id) {
	            appDispatcher_1.default.dispatch({
	                actionType: toolActionTypes_1.default.TOOL_LOAD_EDIT,
	                id: id
	            });
	        };
	        ToolActionsStatic.prototype.create = function (tool) {
	            appDispatcher_1.default.dispatch({
	                actionType: toolActionTypes_1.default.TOOL_CREATE,
	                tool: tool
	            });
	        };
	        ToolActionsStatic.prototype.update = function (tool) {
	            appDispatcher_1.default.dispatch({
	                actionType: toolActionTypes_1.default.TOOL_UPDATE,
	                tool: tool
	            });
	        };
	        ToolActionsStatic.prototype.remove = function (id) {
	            appDispatcher_1.default.dispatch({
	                actionType: toolActionTypes_1.default.TOOL_DELETE
	            });
	        };
	        ToolActionsStatic.prototype.changeToolPage = function (page) {
	            appDispatcher_1.default.dispatch({
	                actionType: toolActionTypes_1.default.TOOL_PAGE_CHANGE,
	                currentPage: page
	            });
	        };
	        ToolActionsStatic.prototype.changeToolsPerPage = function (toolsPerPage) {
	            appDispatcher_1.default.dispatch({
	                actionType: toolActionTypes_1.default.TOOLS_PER_PAGE_CHANGE,
	                pageSize: toolsPerPage
	            });
	        };
	        ToolActionsStatic.prototype.changeToolSearchText = function (text) {
	            appDispatcher_1.default.dispatch({
	                actionType: toolActionTypes_1.default.TOOL_SEARCH_TEXT_CHANGE,
	                searchText: text
	            });
	        };
	        return ToolActionsStatic;
	    }());
	    var ToolActions = new ToolActionsStatic();
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = ToolActions;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=toolActions.js.map

/***/ },
/* 24 */
/*!***************************************************!*\
  !*** ./Scripts/app/managers/pageParamsManager.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../typings/tsd.d.ts" />
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react-router */ 4), __webpack_require__(/*! ../constants/pageConstants */ 20)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ReactRouter, pageConstants_1) {
	    "use strict";
	    var currentPage = 0;
	    var itemsPerPage = pageConstants_1.default.ITEMS_PER_PAGE_INIT;
	    var searchText = '';
	    var PageParamsManagerStatic = (function () {
	        function PageParamsManagerStatic() {
	        }
	        PageParamsManagerStatic.prototype.locationChangeHandler = function (location) {
	            var query = location.query;
	            if (query.page) {
	                if (query.page != currentPage)
	                    currentPage = query.page;
	            }
	            if (query.search) {
	                if (query.search != searchText)
	                    searchText = query.search;
	            }
	            if (query.pageSize) {
	                if (query.pageSize != itemsPerPage)
	                    itemsPerPage = query.pageSize;
	            }
	        };
	        PageParamsManagerStatic.prototype.changePage = function (page) {
	            this.navigation.query.page = page;
	            this.changeLocation();
	        };
	        PageParamsManagerStatic.prototype.changeSearchText = function (text) {
	            this.navigation.query.search = text;
	            this.changeLocation();
	        };
	        PageParamsManagerStatic.prototype.changePageSize = function (pageSize) {
	            this.navigation.query.pageSize = pageSize;
	            this.changeLocation();
	        };
	        PageParamsManagerStatic.prototype.getPage = function () {
	            return currentPage;
	        };
	        PageParamsManagerStatic.prototype.getPageSize = function () {
	            return itemsPerPage;
	        };
	        PageParamsManagerStatic.prototype.getSearchText = function () {
	            return searchText;
	        };
	        PageParamsManagerStatic.prototype.changeLocation = function () {
	            ReactRouter.browserHistory.push(this.navigation);
	        };
	        return PageParamsManagerStatic;
	    }());
	    var PageParamsManager = new PageParamsManagerStatic();
	    ReactRouter.browserHistory.listen(PageParamsManager.locationChangeHandler);
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = PageParamsManager;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=pageParamsManager.js.map

/***/ },
/* 25 */
/*!***************************************************!*\
  !*** ./Scripts/app/components/common/tableRow.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React) {
	    "use strict";
	    var TableRow = (function (_super) {
	        __extends(TableRow, _super);
	        function TableRow() {
	            _super.apply(this, arguments);
	        }
	        TableRow.prototype.getInitialState = function () {
	            return {
	                color: this.props.isCurrent ? 'info' : null
	            };
	        };
	        TableRow.prototype.onMouseEnterHandler = function () {
	            if (!this.props.isCurrent)
	                this.setState({ color: "active" });
	        };
	        TableRow.prototype.onMouseLeaveHandler = function () {
	            if (!this.props.isCurrent)
	                this.setState({ color: null });
	        };
	        TableRow.prototype.onClickHandler = function () {
	            if (!this.props.isCurrent) {
	                this.setState({ color: null });
	                this.props.changeCurrent(this.props.item);
	            }
	            else {
	                this.setState({ color: "active" });
	                this.props.changeCurrent(null);
	            }
	        };
	        TableRow.prototype.onDoubleClickHandler = function () {
	            this.props.rowDoubleClickHandler(this.props.item);
	        };
	        TableRow.prototype.render = function () {
	            return (React.createElement("tr", {className: this.props.isCurrent ? 'info' : this.state.color, onMouseEnter: this.onMouseEnterHandler, onMouseLeave: this.onMouseLeaveHandler, onClick: this.onClickHandler, onDoubleClick: this.onDoubleClickHandler}, this.props.children));
	        };
	        return TableRow;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = TableRow;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=tableRow.js.map

/***/ },
/* 26 */
/*!********************************************************!*\
  !*** ./Scripts/app/components/common/confirmDelete.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React) {
	    "use strict";
	    var ConfirmDelete = (function (_super) {
	        __extends(ConfirmDelete, _super);
	        function ConfirmDelete() {
	            _super.apply(this, arguments);
	        }
	        ConfirmDelete.prototype.handleConfirm = function (e) {
	            e.preventDefault();
	            this.props.success(this.props.id);
	        };
	        ConfirmDelete.prototype.handleCancelClick = function () {
	            this.props.cancel();
	        };
	        ConfirmDelete.prototype.render = function () {
	            return (React.createElement("div", {className: "form-group"}, React.createElement("h3", null, this.props.title), React.createElement("hr", null), React.createElement("form", {onSubmit: this.handleConfirm}, React.createElement("h4", null, this.props.message), React.createElement("div", {className: "btn-toolbar pull-right", style: { marginBottom: 5 + 'px' }}, React.createElement("button", {type: "submit", className: "btn btn-danger"}, "Да"), React.createElement("button", {type: "button", className: "btn btn-default", onClick: this.handleCancelClick}, "Нет")))));
	        };
	        return ConfirmDelete;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = ConfirmDelete;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=confirmDelete.js.map

/***/ },
/* 27 */
/*!*****************************************************!*\
  !*** ./Scripts/app/components/common/pagination.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React) {
	    "use strict";
	    var PageButton = (function (_super) {
	        __extends(PageButton, _super);
	        function PageButton() {
	            _super.apply(this, arguments);
	        }
	        PageButton.prototype.handleClick = function () {
	            this.props.onClick(this.props.pageNumber);
	        };
	        PageButton.prototype.render = function () {
	            return (React.createElement("li", {className: this.props.mode}, React.createElement("a", {href: "#", onClick: this.handleClick}, this.props.symbol)));
	        };
	        return PageButton;
	    }(React.Component));
	    var Pagination = (function (_super) {
	        __extends(Pagination, _super);
	        function Pagination() {
	            _super.apply(this, arguments);
	        }
	        Pagination.prototype.pageButtonClickHandler = function (pageNumber) {
	            var totalPageAmount = Math.ceil(this.props.itemAmount / this.props.itemsPerPage);
	            if (pageNumber == -1 && this.state.currentPage != 0) {
	                this.setState({ currentPage: this.state.currentPage - 1 });
	                this.props.updatePage(this.state.currentPage - 1);
	            }
	            if (pageNumber == -2 && this.state.currentPage != totalPageAmount - 1) {
	                this.setState({ currentPage: this.state.currentPage + 1 });
	                this.props.updatePage(this.state.currentPage + 1);
	            }
	            if (pageNumber >= 0 && pageNumber != this.state.currentPage) {
	                this.setState({ currentPage: pageNumber });
	                this.props.updatePage(pageNumber);
	            }
	        };
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
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=pagination.js.map

/***/ },
/* 28 */
/*!******************************************************!*\
  !*** ./Scripts/app/components/common/searchInput.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;///< reference path="../../../typings/tsd.d.ts"/>
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React) {
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
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=searchInput.js.map

/***/ },
/* 29 */
/*!***************************************************************!*\
  !*** ./Scripts/app/components/common/itemsPerPageSelector.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2), __webpack_require__(/*! ../../constants/pageConstants */ 20)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React, pageConstants_1) {
	    "use strict";
	    var ItemsPerPageSelector = (function (_super) {
	        __extends(ItemsPerPageSelector, _super);
	        function ItemsPerPageSelector() {
	            _super.apply(this, arguments);
	        }
	        ItemsPerPageSelector.prototype.getInitialState = function () {
	            return {
	                itemsPerPage: pageConstants_1.default.ITEMS_PER_PAGE_INIT,
	                dropdowndisplay: 'none',
	                isButtonClicked: false
	            };
	        };
	        ItemsPerPageSelector.prototype.componentWillMount = function () {
	            document.addEventListener('click', this.pageClick, false);
	        };
	        ItemsPerPageSelector.prototype.componentWillUnmount = function () {
	            document.removeEventListener('click', this.pageClick, false);
	        };
	        ItemsPerPageSelector.prototype.pageClick = function (e) {
	            if (this.state.dropdowndisplay == 'none')
	                return;
	            if (this.state.isButtonClicked) {
	                this.setState({
	                    itemsPerPage: this.state.itemsPerPage, dropdowndisplay: 'block', isButtonClicked: false
	                });
	                return;
	            }
	            this.setState({
	                itemsPerPage: this.state.itemsPerPage, dropdowndisplay: 'none', isButtonClicked: false
	            });
	        };
	        ItemsPerPageSelector.prototype.toggleDropDown = function (e) {
	            if (this.state.dropdowndisplay == 'none')
	                this.setState({ itemsPerPage: this.state.itemsPerPage, dropdowndisplay: 'block', isButtonClicked: true });
	            if (this.state.dropdowndisplay == 'block')
	                this.setState({ itemsPerPage: this.state.itemsPerPage, dropdowndisplay: 'none', isButtonClicked: false });
	        };
	        ItemsPerPageSelector.prototype.updateItemsPerPage = function (itemsPerPage) {
	            this.setState({
	                itemsPerPage: itemsPerPage, dropdowndisplay: 'none', isButtonClicked: this.state.isButtonClicked
	            });
	            this.props.onChange(itemsPerPage);
	        };
	        ItemsPerPageSelector.prototype.render = function () {
	            return (React.createElement("div", {className: "input-group-btn"}, React.createElement("button", {type: "button", className: "btn btn-default"}, this.state.itemsPerPage), React.createElement("button", {type: "button", className: "btn btn-default dropdown-toggle", dataToggle: "dropdown", onClick: this.toggleDropDown}, React.createElement("span", {className: "caret"}), React.createElement("span", {className: "sr-only"}, "Split button!")), React.createElement("ul", {className: "dropdown-menu", role: "menu", style: { display: this.state.dropdowndisplay }}, React.createElement("li", null, React.createElement("a", {href: "#", style: { cursor: 'pointer', paddingRight: 12 + 'px', paddingLeft: 12 + 'px' }, onClick: function () { this.updateItemsPerPage(10); }.bind(this)}, "10")), React.createElement("li", null, React.createElement("a", {href: "#", style: { cursor: 'pointer', paddingRight: 12 + 'px', paddingLeft: 12 + 'px' }, onClick: function () { this.updateItemsPerPage(20); }.bind(this)}, "20")), React.createElement("li", null, React.createElement("a", {href: "#", style: { cursor: 'pointer', paddingRight: 12 + 'px', paddingLeft: 12 + 'px' }, onClick: function () { this.updateItemsPerPage(30); }.bind(this)}, "30")), React.createElement("li", null, React.createElement("a", {href: "#", style: { cursor: 'pointer', paddingRight: 12 + 'px', paddingLeft: 12 + 'px' }, onClick: function () { this.updateItemsPerPage(40); }.bind(this)}, "40")), React.createElement("li", null, React.createElement("a", {href: "#", style: { cursor: 'pointer', paddingRight: 12 + 'px', paddingLeft: 12 + 'px' }, onClick: function () { this.updateItemsPerPage(50); }.bind(this)}, "50")))));
	        };
	        return ItemsPerPageSelector;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = ItemsPerPageSelector;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=itemsPerPageSelector.js.map

/***/ },
/* 30 */
/*!***************************************************!*\
  !*** ./Scripts/app/components/partListSection.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// A '.tsx' file enables JSX support in the TypeScript compiler, 
	// for more information see the following page on the TypeScript wiki:
	// https://github.com/Microsoft/TypeScript/wiki/JSX
	/// <reference path="../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React) {
	    "use strict";
	    var PartListSection = (function (_super) {
	        __extends(PartListSection, _super);
	        function PartListSection() {
	            _super.apply(this, arguments);
	        }
	        PartListSection.prototype.render = function () {
	            return (React.createElement("div", null, "Hi! I'm a part list section."));
	        };
	        return PartListSection;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = PartListSection;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=partListSection.js.map

/***/ },
/* 31 */
/*!************************************************!*\
  !*** ./Scripts/app/components/toolEditForm.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2), __webpack_require__(/*! ../flux/stores/toolStore */ 13), __webpack_require__(/*! ../flux/stores/errorStore */ 32), __webpack_require__(/*! ../flux/actions/toolActions */ 23), __webpack_require__(/*! ../managers/navigationManager */ 12), __webpack_require__(/*! ./common/textInput */ 33)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React, toolStore_1, errorStore_1, toolActions_1, navigationManager_1, textInput_1) {
	    "use strict";
	    var ToolEditForm = (function (_super) {
	        __extends(ToolEditForm, _super);
	        function ToolEditForm() {
	            _super.apply(this, arguments);
	        }
	        ToolEditForm.prototype.getInitialState = function () {
	            return {
	                tool: null,
	                errorMessage: null,
	                isValid: true
	            };
	        };
	        ToolEditForm.prototype.componentWillMount = function () {
	            this.inputs = {};
	            toolStore_1.default.addChangeEditToolListener(this.handleEditToolChange);
	            errorStore_1.default.addChangeErrorListener(this.handleNewError);
	        };
	        ToolEditForm.prototype.componentWillUnmount = function () {
	            toolStore_1.default.removeChangeEditToolListener(this.handleEditToolChange);
	            errorStore_1.default.removeChangeErrorListener(this.handleNewError);
	        };
	        ToolEditForm.prototype.componentDidMount = function () {
	            toolActions_1.default.loadEditTool(this.props.params.toolId);
	        };
	        ToolEditForm.prototype.componentWillReceiveProps = function (nextProps) {
	            toolActions_1.default.loadEditTool(nextProps.params.toolId);
	        };
	        ToolEditForm.prototype.handleEditToolChange = function () {
	            this.setState({
	                tool: toolStore_1.default.getEditTool(),
	                errorMessage: null,
	                isValid: true
	            });
	        };
	        ToolEditForm.prototype.handleNewError = function () {
	            this.setState({
	                tool: null,
	                errorMessage: errorStore_1.default.getError(),
	                isValid: true
	            });
	        };
	        ToolEditForm.prototype.nameValidate = function () {
	            //you could do something here that does general validation for any form field
	            return true;
	        };
	        ToolEditForm.prototype.handleSubmit = function (e) {
	            e.preventDefault();
	            if (this.state.tool.id == 0) {
	                toolActions_1.default.create(this.state.tool);
	            }
	            else {
	                toolActions_1.default.update(this.state.tool);
	            }
	        };
	        ToolEditForm.prototype.cancelClickHandler = function () {
	            navigationManager_1.default.closeToolEditor();
	        };
	        ToolEditForm.prototype.registerInput = function (input) {
	            this.inputs[input.props.name] = input;
	        };
	        ToolEditForm.prototype.setToolName = function (event) {
	            this.setState({
	                tool: {
	                    id: this.state.tool.id,
	                    name: event.target.value,
	                    price: this.state.tool.price,
	                },
	                errorMessage: null,
	                isValid: true
	            });
	        };
	        ToolEditForm.prototype.setToolPrice = function (event) {
	            this.setState({
	                tool: {
	                    id: this.state.tool.id,
	                    name: this.state.tool.name,
	                    price: event.target.value
	                },
	                errorMessage: null,
	                isValid: true
	            });
	        };
	        ToolEditForm.prototype.render = function () {
	            return (React.createElement("div", {className: "panel panel-default inner", style: { marginBottom: 0 + 'px' }}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", null, "Редактирование инструмента")), React.createElement("div", {className: "panel-body"}, this.state.errorMessage != null ?
	                React.createElement("div", null, React.createElement("div", {className: "form-group"}, React.createElement("span", null, this.state.errorMessage)), React.createElement("div", {className: "form-group"}, React.createElement("div", {className: "btn-toolbar"}, React.createElement("button", {className: "btn btn-default", type: "button", onClick: this.cancelClickHandler}, "Закрыть"))))
	                : null, this.state.tool == null ?
	                this.state.errorMessage == null ?
	                    React.createElement("p", null, "Загрузка данных...")
	                    : null
	                :
	                    React.createElement("form", {role: "form", onSubmit: this.handleSubmit}, React.createElement("div", {className: "form-group"}, React.createElement("label", {className: "control-label"}, "Наименование: "), React.createElement(textInput_1.default, {name: "toolName", text: "", value: this.state.tool.name, required: true, onChange: this.setToolName, errorMessage: "Данное наименование недействительно", emptyMessage: "Наименование обязательно для ввода", register: this.registerInput, validate: this.nameValidate, minCharacters: '', uniqueName: ''})), React.createElement("div", {className: "form-group"}, React.createElement("label", {className: "control-label"}, "Цена: "), React.createElement(textInput_1.default, {name: "toolPrice", text: "", value: String(this.state.tool.price), required: true, onChange: this.setToolPrice, errorMessage: "Данное значение недействительно", emptyMessage: "Цена обязательна для ввода", register: this.registerInput, validate: this.nameValidate, minCharacters: '', uniqueName: ''})), React.createElement("div", {className: "form-group"}, React.createElement("div", {className: "btn-toolbar"}, React.createElement("input", {className: "btn btn-primary", type: "submit", value: "Сохранить"}), React.createElement("button", {className: "btn btn-default", type: "button", onClick: this.cancelClickHandler}, "Закрыть")))))));
	        };
	        return ToolEditForm;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = ToolEditForm;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=toolEditForm.js.map

/***/ },
/* 32 */
/*!***********************************************!*\
  !*** ./Scripts/app/flux/stores/errorStore.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! eventemitter3 */ 22), __webpack_require__(/*! ../dispatcher/appDispatcher */ 15), __webpack_require__(/*! ../actions/errorActionTypes */ 17)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, EventEmitter, appDispatcher_1, errorActionTypes_1) {
	    "use strict";
	    var CHANGE_ERROR_EVENT = 'change_error_event';
	    var _errorMessage = null;
	    var _changeErrorMessage = function (errorMessage) {
	        _errorMessage = errorMessage;
	    };
	    var ErrorStoreStatic = (function (_super) {
	        __extends(ErrorStoreStatic, _super);
	        function ErrorStoreStatic() {
	            _super.apply(this, arguments);
	        }
	        ErrorStoreStatic.prototype.getError = function () {
	            return _errorMessage;
	        };
	        ErrorStoreStatic.prototype.emitChangeError = function () {
	            this.emit(CHANGE_ERROR_EVENT);
	        };
	        /**
	         * @param {function} callback
	         */
	        ErrorStoreStatic.prototype.addChangeErrorListener = function (callback) {
	            this.on(CHANGE_ERROR_EVENT, callback);
	        };
	        /**
	         * @param {function} callback
	         */
	        ErrorStoreStatic.prototype.removeChangeErrorListener = function (callback) {
	            this.removeListener(CHANGE_ERROR_EVENT, callback);
	        };
	        return ErrorStoreStatic;
	    }(EventEmitter));
	    var ErrorStore = new ErrorStoreStatic();
	    appDispatcher_1.default.register(function (payload) {
	        switch (payload.actionType) {
	            case errorActionTypes_1.default.RECEIVE_ERROR_MESSAGE:
	                _changeErrorMessage(payload.errorMessage);
	                ErrorStore.emitChangeError();
	                break;
	            default:
	        }
	    });
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = ErrorStore;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=errorStore.js.map

/***/ },
/* 33 */
/*!****************************************************!*\
  !*** ./Scripts/app/components/common/textInput.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2), __webpack_require__(/*! ./inputError */ 34)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React, inputError_1) {
	    "use strict";
	    var TextInput = (function (_super) {
	        __extends(TextInput, _super);
	        function TextInput() {
	            _super.apply(this, arguments);
	        }
	        TextInput.prototype.getInitialState = function () {
	            //most of these variables have to do with handling errors
	            return {
	                isEmpty: true,
	                value: this.props.value,
	                valid: false,
	                errorMessage: "Input is invalid",
	                errorVisible: false
	            };
	        };
	        TextInput.prototype.componentWillReceiveProps = function (nextProps) {
	            this.setState({
	                isEmpty: true,
	                value: nextProps.value,
	                valid: false,
	                errorMessage: "Input is invalid",
	                errorVisible: false
	            });
	        };
	        TextInput.prototype.handleChange = function (event) {
	            //validate the field locally
	            this.validation(event.target.value);
	            //Call onChange method on the parent component for updating it's state
	            //If saving this field for final form submission, it gets passed
	            // up to the top component for sending to the server
	            if (this.props.onChange) {
	                this.props.onChange(event);
	            }
	        };
	        TextInput.prototype.componentDidMount = function () {
	            this.props.register(this);
	        };
	        TextInput.prototype.validation = function (value, valid) {
	            //The valid variable is optional, and true if not passed in:
	            if (typeof valid === 'undefined') {
	                valid = true;
	            }
	            var message = "";
	            var errorVisible = false;
	            //we know how to validate text fields based on information passed through props
	            if (!valid) {
	                //This happens when the user leaves the field, but it is not valid
	                //(we do final validation in the parent component, then pass the result
	                //here for display)
	                message = this.props.errorMessage;
	                valid = false;
	                errorVisible = true;
	            }
	            else if (this.props.required && jQuery.isEmptyObject(value)) {
	                //this happens when we have a required field with no text entered
	                //in this case, we want the "emptyMessage" error message
	                message = this.props.emptyMessage;
	                valid = false;
	                errorVisible = true;
	            }
	            else if (value.length < this.props.minCharacters) {
	                //This happens when the text entered is not the required length,
	                //in which case we show the regular error message
	                message = this.props.errorMessage;
	                valid = false;
	                errorVisible = true;
	            }
	            //setting the state will update the display,
	            //causing the error message to display if there is one.
	            this.setState({
	                value: value,
	                isEmpty: jQuery.isEmptyObject(value),
	                valid: valid,
	                errorMessage: message,
	                errorVisible: errorVisible
	            });
	        };
	        TextInput.prototype.handleBlur = function (event) {
	            //Complete final validation from parent element when complete
	            var valid = this.props.validate(event.target.value);
	            //pass the result to the local validation element for displaying the error
	            this.validation(event.target.value, valid);
	        };
	        TextInput.prototype.render = function () {
	            return (React.createElement("div", {className: this.props.uniqueName}, React.createElement("input", {className: 'form-control', placeholder: this.props.text, onChange: this.handleChange, onBlur: this.handleBlur, value: this.props.value}), this.state.errorVisible ?
	                React.createElement(inputError_1.default, {errorMessage: this.state.errorMessage}) : null));
	        };
	        return TextInput;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = TextInput;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=textInput.js.map

/***/ },
/* 34 */
/*!*****************************************************!*\
  !*** ./Scripts/app/components/common/inputError.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React) {
	    "use strict";
	    var InputError = (function (_super) {
	        __extends(InputError, _super);
	        function InputError() {
	            _super.apply(this, arguments);
	        }
	        InputError.prototype.render = function () {
	            return (React.createElement("div", null, React.createElement("span", {style: { color: 'red' }}, this.props.errorMessage)));
	        };
	        return InputError;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = InputError;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=inputError.js.map

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map