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

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../typings/tsd.d.ts" />
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react-dom */ 40), __webpack_require__(/*! react-router */ 13), __webpack_require__(/*! ./components/main */ 41), __webpack_require__(/*! ./components/techProcessListSection */ 70), __webpack_require__(/*! ./components/techOperationListSection */ 71), __webpack_require__(/*! ./components/techStepListSection */ 72), __webpack_require__(/*! ./components/toolListSection */ 1), __webpack_require__(/*! ./components/partListSection */ 73), __webpack_require__(/*! ./components/toolEditForm */ 47), __webpack_require__(/*! ./components/partEditForm */ 74), __webpack_require__(/*! ./components/techStepEditForm */ 76), __webpack_require__(/*! ./components/techOperationEditForm */ 82), __webpack_require__(/*! ./components/techProcessEditForm */ 83)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ReactDOM, ReactRouter, main_1, techProcessListSection_1, techOperationListSection_1, techStepListSection_1, toolListSection_1, partListSection_1, toolEditForm_1, partEditForm_1, techStepEditForm_1, techOperationEditForm_1, techProcessEditForm_1) {
	    "use strict";
	    var routers = (React.createElement(ReactRouter.Router, {history: ReactRouter.browserHistory}, React.createElement(ReactRouter.Route, {path: "/", component: main_1.default}, React.createElement(ReactRouter.Route, {path: "processes", component: techProcessListSection_1.default}, React.createElement(ReactRouter.Route, {path: ":techProcessId", component: techProcessEditForm_1.default})), React.createElement(ReactRouter.Route, {path: "operations", component: techOperationListSection_1.default}, React.createElement(ReactRouter.Route, {path: ":techOperationId", component: techOperationEditForm_1.default})), React.createElement(ReactRouter.Route, {path: "steps", component: techStepListSection_1.default}, React.createElement(ReactRouter.Route, {path: ":techStepId", component: techStepEditForm_1.default})), React.createElement(ReactRouter.Route, {path: "tools", component: toolListSection_1.default}, React.createElement(ReactRouter.Route, {path: ":toolId", component: toolEditForm_1.default})), React.createElement(ReactRouter.Route, {path: "parts", component: partListSection_1.default}, React.createElement(ReactRouter.Route, {path: ":partId", component: partEditForm_1.default})))));
	    ReactDOM.render(React.createElement(main_1.default, null), document.getElementById('content'));
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=app.js.map

/***/ },
/* 1 */
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2), __webpack_require__(/*! ./toolListPanel */ 3)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React, toolListPanel_1) {
	    "use strict";
	    var ToolListSection = (function (_super) {
	        __extends(ToolListSection, _super);
	        function ToolListSection() {
	            _super.apply(this, arguments);
	        }
	        ToolListSection.prototype.render = function () {
	            return (React.createElement("div", {className: "outer"}, React.createElement(toolListPanel_1.default, {componentId: ""}), this.props.children));
	        };
	        return ToolListSection;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = ToolListSection;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=toolListSection.js.map

/***/ },
/* 2 */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 3 */
/*!*************************************************!*\
  !*** ./Scripts/app/components/toolListPanel.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2), __webpack_require__(/*! ../flux/actions/toolActions */ 4), __webpack_require__(/*! ../flux/actions/panelActions */ 10), __webpack_require__(/*! ../managers/pageParamsManager */ 12), __webpack_require__(/*! ../managers/navigationManager */ 15), __webpack_require__(/*! ./toolList */ 16), __webpack_require__(/*! ./common/panel */ 33)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React, toolActions_1, panelActions_1, pageParamsManager_1, navigationManager_1, toolList_1, panel_1) {
	    "use strict";
	    var ToolListPanel = (function (_super) {
	        __extends(ToolListPanel, _super);
	        function ToolListPanel(props, context) {
	            var _this = this;
	            _super.call(this, props, context);
	            this.toolEditFormOpen = function (toolId) {
	                navigationManager_1.default.openToolEditor(toolId);
	            };
	            this.newToolBtnClickHandler = function () {
	                navigationManager_1.default.openToolEditor(0);
	            };
	            this.handleToolsPerPageChange = function (toolsPerPage) {
	                pageParamsManager_1.default.changePageSize(toolsPerPage);
	                toolActions_1.default.changeToolsPerPage(toolsPerPage);
	            };
	            this.handleToolPageChange = function (page) {
	                pageParamsManager_1.default.changePage(page);
	                toolActions_1.default.changeToolPage(page);
	            };
	            this.handleToolSearchTextChange = function (text) {
	                pageParamsManager_1.default.changeSearchText(text);
	                toolActions_1.default.changeToolSearchText(text);
	            };
	            this.handleSelectedToolsChange = function (selectedTools) {
	                _this.setState({
	                    selectedTools: selectedTools
	                });
	            };
	            this.closePanelHandler = function () {
	                panelActions_1.default.close(_this.props.componentId);
	            };
	            this.props = props;
	            this.context = context;
	            this.state = {
	                selectedTools: []
	            };
	        }
	        ToolListPanel.prototype.render = function () {
	            return (React.createElement(panel_1.default, {title: "Инструменты", size: "inner", onClosePanel: this.closePanelHandler}, React.createElement("div", {className: "panel-body", style: { position: 'relative', display: 'flex', flexGrow: 2, flexBasis: 0 + '%', minHeight: 0, minWidth: 0 }}, React.createElement(toolList_1.default, {componentId: this.props.componentId, selectedTools: this.state.selectedTools, onSelectedToolsChange: this.handleSelectedToolsChange}))));
	        };
	        return ToolListPanel;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = ToolListPanel;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=toolListPanel.js.map

/***/ },
/* 4 */
/*!*************************************************!*\
  !*** ./Scripts/app/flux/actions/toolActions.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../../typings/tsd.d.ts" />
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../dispatcher/appDispatcher */ 5), __webpack_require__(/*! ./actionSourceTypes */ 7), __webpack_require__(/*! ./toolActionTypes */ 8), __webpack_require__(/*! ../services/toolService */ 9)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, appDispatcher_1, actionSourceTypes_1, toolActionTypes_1, toolService_1) {
	    "use strict";
	    var ToolActionsStatic = (function () {
	        function ToolActionsStatic() {
	        }
	        ToolActionsStatic.prototype.init = function (currentPage, pageSize, searchText) {
	            appDispatcher_1.default.dispatch({
	                actionType: toolActionTypes_1.default.TOOL_INIT,
	                actionSource: actionSourceTypes_1.default.TOOL,
	                currentPage: currentPage,
	                pageSize: pageSize,
	                searchText: searchText
	            });
	        };
	        ToolActionsStatic.prototype.load = function (componentId, currentPage, pageSize, searchText) {
	            toolService_1.default.loadTools(componentId, currentPage, pageSize, searchText);
	        };
	        ToolActionsStatic.prototype.loadPending = function (componentId, currentPage, pageSize, searchText) {
	            appDispatcher_1.default.dispatch({
	                actionType: toolActionTypes_1.default.TOOL_LOAD_PENDING,
	                actionSource: actionSourceTypes_1.default.TOOL,
	                componentId: componentId
	            });
	        };
	        ToolActionsStatic.prototype.loadSucceed = function (componentId) {
	            appDispatcher_1.default.dispatch({
	                actionType: toolActionTypes_1.default.TOOL_LOAD_SUCCEED,
	                actionSource: actionSourceTypes_1.default.TOOL,
	                componentId: componentId
	            });
	        };
	        ToolActionsStatic.prototype.loadFailed = function (componentId) {
	            appDispatcher_1.default.dispatch({
	                actionType: toolActionTypes_1.default.TOOL_LOAD_FAILED,
	                actionSource: actionSourceTypes_1.default.TOOL,
	                componentId: componentId
	            });
	        };
	        ToolActionsStatic.prototype.updateToolList = function (componentId, toolList, totalAmount, toolsPerPage, page, searchText) {
	            appDispatcher_1.default.dispatch({
	                actionType: toolActionTypes_1.default.TOOL_UPDATE_TOOL_LIST,
	                actionSource: actionSourceTypes_1.default.TOOL,
	                tools: toolList,
	                totalAmount: totalAmount,
	                currentPage: page,
	                searchText: searchText,
	                pageSize: toolsPerPage,
	                componentId: componentId
	            });
	        };
	        ToolActionsStatic.prototype.showToolDeleteConfirmation = function (compoentId) {
	            appDispatcher_1.default.dispatch({
	                actionType: toolActionTypes_1.default.TOOL_SHOW_DELETE_CONFIRMATION,
	                actionSource: actionSourceTypes_1.default.TOOL,
	                componentId: compoentId
	            });
	        };
	        ToolActionsStatic.prototype.closeToolDeleteConfirmation = function (compoentId) {
	            appDispatcher_1.default.dispatch({
	                actionType: toolActionTypes_1.default.TOOL_CLOSE_DELETE_CONFIRMATION,
	                actionSource: actionSourceTypes_1.default.TOOL,
	                componentId: compoentId
	            });
	        };
	        ToolActionsStatic.prototype.loadEditTool = function (id) {
	            appDispatcher_1.default.dispatch({
	                actionType: toolActionTypes_1.default.TOOL_LOAD_EDIT,
	                actionSource: actionSourceTypes_1.default.TOOL,
	                id: id
	            });
	        };
	        ToolActionsStatic.prototype.create = function (tool) {
	            appDispatcher_1.default.dispatch({
	                actionType: toolActionTypes_1.default.TOOL_CREATE,
	                actionSource: actionSourceTypes_1.default.TOOL,
	                tool: tool
	            });
	        };
	        ToolActionsStatic.prototype.update = function (tool) {
	            appDispatcher_1.default.dispatch({
	                actionType: toolActionTypes_1.default.TOOL_UPDATE,
	                actionSource: actionSourceTypes_1.default.TOOL,
	                tool: tool
	            });
	        };
	        ToolActionsStatic.prototype.remove = function (id) {
	            appDispatcher_1.default.dispatch({
	                actionType: toolActionTypes_1.default.TOOL_DELETE,
	                actionSource: actionSourceTypes_1.default.TOOL,
	                id: id
	            });
	        };
	        ToolActionsStatic.prototype.changeToolPage = function (page) {
	            appDispatcher_1.default.dispatch({
	                actionType: toolActionTypes_1.default.TOOL_PAGE_CHANGE,
	                actionSource: actionSourceTypes_1.default.TOOL,
	                currentPage: page
	            });
	        };
	        ToolActionsStatic.prototype.changeToolsPerPage = function (toolsPerPage) {
	            appDispatcher_1.default.dispatch({
	                actionType: toolActionTypes_1.default.TOOLS_PER_PAGE_CHANGE,
	                actionSource: actionSourceTypes_1.default.TOOL,
	                pageSize: toolsPerPage
	            });
	        };
	        ToolActionsStatic.prototype.changeToolSearchText = function (text) {
	            appDispatcher_1.default.dispatch({
	                actionType: toolActionTypes_1.default.TOOL_SEARCH_TEXT_CHANGE,
	                actionSource: actionSourceTypes_1.default.TOOL,
	                searchText: text
	            });
	        };
	        ToolActionsStatic.prototype.undo = function (componentId) {
	            appDispatcher_1.default.dispatch({
	                actionType: toolActionTypes_1.default.TOOL_UNDO,
	                actionSource: actionSourceTypes_1.default.TOOL,
	                componentId: componentId
	            });
	        };
	        ToolActionsStatic.prototype.redo = function (componentId) {
	            appDispatcher_1.default.dispatch({
	                actionType: toolActionTypes_1.default.TOOL_REDO,
	                actionSource: actionSourceTypes_1.default.TOOL,
	                componentId: componentId
	            });
	        };
	        ToolActionsStatic.prototype.change = function (componentId, changedTool) {
	            appDispatcher_1.default.dispatch({
	                actionType: toolActionTypes_1.default.TOOL_REDO,
	                actionSource: actionSourceTypes_1.default.TOOL,
	                componentId: componentId,
	                tool: changedTool
	            });
	        };
	        ToolActionsStatic.prototype.save = function (componentId, tool) {
	            toolService_1.default.saveTool(componentId, tool);
	        };
	        ToolActionsStatic.prototype.savePending = function (componentId) {
	            appDispatcher_1.default.dispatch({
	                actionType: toolActionTypes_1.default.TOOL_SAVE_PENDING,
	                actionSource: actionSourceTypes_1.default.TOOL,
	                componentId: componentId
	            });
	        };
	        ToolActionsStatic.prototype.saveSucceed = function (componentId, savedTool) {
	            appDispatcher_1.default.dispatch({
	                actionType: toolActionTypes_1.default.TOOL_SAVE_SUCCEED,
	                actionSource: actionSourceTypes_1.default.TOOL,
	                componentId: componentId,
	                tool: savedTool
	            });
	        };
	        ToolActionsStatic.prototype.saveFailed = function (componentId, message) {
	            appDispatcher_1.default.dispatch({
	                actionType: toolActionTypes_1.default.TOOL_SAVE_FAILED,
	                actionSource: actionSourceTypes_1.default.TOOL,
	                errorMessage: message
	            });
	        };
	        ToolActionsStatic.prototype.delete = function (componentId, tools) {
	            toolService_1.default.deleteTools(componentId, tools);
	        };
	        ToolActionsStatic.prototype.deletePending = function (componentId) {
	            appDispatcher_1.default.dispatch({
	                actionType: toolActionTypes_1.default.TOOL_DELETE_PENDING,
	                actionSource: actionSourceTypes_1.default.TOOL,
	                componentId: componentId
	            });
	        };
	        ToolActionsStatic.prototype.deleteSucceed = function (componentId) {
	            appDispatcher_1.default.dispatch({
	                actionType: toolActionTypes_1.default.TOOL_DELETE_SUCCEED,
	                actionSource: actionSourceTypes_1.default.TOOL,
	                componentId: componentId
	            });
	        };
	        ToolActionsStatic.prototype.deleteFailed = function (componentId, message) {
	            appDispatcher_1.default.dispatch({
	                actionType: toolActionTypes_1.default.TOOL_SAVE_FAILED,
	                actionSource: actionSourceTypes_1.default.TOOL,
	                errorMessage: message
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
/* 5 */
/*!******************************************************!*\
  !*** ./Scripts/app/flux/dispatcher/appDispatcher.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../../typings/tsd.d.ts" />
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! flux */ 6)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, Flux) {
	    "use strict";
	    var Dispatcher = new Flux.Dispatcher();
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = Dispatcher;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=appDispatcher.js.map

/***/ },
/* 6 */
/*!***********************!*\
  !*** external "Flux" ***!
  \***********************/
/***/ function(module, exports) {

	module.exports = Flux;

/***/ },
/* 7 */
/*!*******************************************************!*\
  !*** ./Scripts/app/flux/actions/actionSourceTypes.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    "use strict";
	    var ActionSourceTypes;
	    (function (ActionSourceTypes) {
	        ActionSourceTypes[ActionSourceTypes["ERROR"] = 0] = "ERROR";
	        ActionSourceTypes[ActionSourceTypes["TOOL"] = 1] = "TOOL";
	        ActionSourceTypes[ActionSourceTypes["PART"] = 2] = "PART";
	        ActionSourceTypes[ActionSourceTypes["TECHSTEP"] = 3] = "TECHSTEP";
	        ActionSourceTypes[ActionSourceTypes["TECHOPERATION"] = 4] = "TECHOPERATION";
	        ActionSourceTypes[ActionSourceTypes["TECHPROCESS"] = 5] = "TECHPROCESS";
	        ActionSourceTypes[ActionSourceTypes["PANEL"] = 6] = "PANEL";
	        ActionSourceTypes[ActionSourceTypes["Entity"] = 7] = "Entity";
	    })(ActionSourceTypes || (ActionSourceTypes = {}));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = ActionSourceTypes;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=actionSourceTypes.js.map

/***/ },
/* 8 */
/*!*****************************************************!*\
  !*** ./Scripts/app/flux/actions/toolActionTypes.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    "use strict";
	    var ToolActionTypes;
	    (function (ToolActionTypes) {
	        ToolActionTypes[ToolActionTypes["TOOL_INIT"] = 0] = "TOOL_INIT";
	        ToolActionTypes[ToolActionTypes["TOOL_LOAD"] = 1] = "TOOL_LOAD";
	        ToolActionTypes[ToolActionTypes["TOOL_LOAD_PENDING"] = 2] = "TOOL_LOAD_PENDING";
	        ToolActionTypes[ToolActionTypes["TOOL_LOAD_SUCCEED"] = 3] = "TOOL_LOAD_SUCCEED";
	        ToolActionTypes[ToolActionTypes["TOOL_LOAD_FAILED"] = 4] = "TOOL_LOAD_FAILED";
	        ToolActionTypes[ToolActionTypes["TOOL_UPDATE_TOOL_LIST"] = 5] = "TOOL_UPDATE_TOOL_LIST";
	        ToolActionTypes[ToolActionTypes["TOOL_SAVE_PENDING"] = 6] = "TOOL_SAVE_PENDING";
	        ToolActionTypes[ToolActionTypes["TOOL_SAVE_SUCCEED"] = 7] = "TOOL_SAVE_SUCCEED";
	        ToolActionTypes[ToolActionTypes["TOOL_SAVE_FAILED"] = 8] = "TOOL_SAVE_FAILED";
	        ToolActionTypes[ToolActionTypes["TOOL_DELETE_PENDING"] = 9] = "TOOL_DELETE_PENDING";
	        ToolActionTypes[ToolActionTypes["TOOL_DELETE_SUCCEED"] = 10] = "TOOL_DELETE_SUCCEED";
	        ToolActionTypes[ToolActionTypes["TOOL_DELETE_FAILED"] = 11] = "TOOL_DELETE_FAILED";
	        ToolActionTypes[ToolActionTypes["TOOL_SHOW_DELETE_CONFIRMATION"] = 12] = "TOOL_SHOW_DELETE_CONFIRMATION";
	        ToolActionTypes[ToolActionTypes["TOOL_CLOSE_DELETE_CONFIRMATION"] = 13] = "TOOL_CLOSE_DELETE_CONFIRMATION";
	        ToolActionTypes[ToolActionTypes["TOOL_REDO"] = 14] = "TOOL_REDO";
	        ToolActionTypes[ToolActionTypes["TOOL_UNDO"] = 15] = "TOOL_UNDO";
	        ToolActionTypes[ToolActionTypes["TOOL_CHANGE"] = 16] = "TOOL_CHANGE";
	        ToolActionTypes[ToolActionTypes["TOOL_LOAD_EDIT"] = 17] = "TOOL_LOAD_EDIT";
	        ToolActionTypes[ToolActionTypes["TOOL_CREATE"] = 18] = "TOOL_CREATE";
	        ToolActionTypes[ToolActionTypes["TOOL_DELETE"] = 19] = "TOOL_DELETE";
	        ToolActionTypes[ToolActionTypes["TOOL_UPDATE"] = 20] = "TOOL_UPDATE";
	        ToolActionTypes[ToolActionTypes["TOOL_PAGE_CHANGE"] = 21] = "TOOL_PAGE_CHANGE";
	        ToolActionTypes[ToolActionTypes["TOOLS_PER_PAGE_CHANGE"] = 22] = "TOOLS_PER_PAGE_CHANGE";
	        ToolActionTypes[ToolActionTypes["TOOL_SEARCH_TEXT_CHANGE"] = 23] = "TOOL_SEARCH_TEXT_CHANGE";
	    })(ToolActionTypes || (ToolActionTypes = {}));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = ToolActionTypes;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=toolActionTypes.js.map

/***/ },
/* 9 */
/*!**************************************************!*\
  !*** ./Scripts/app/flux/services/toolService.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../actions/toolActions */ 4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, toolActions_1) {
	    "use strict";
	    var ToolService = (function () {
	        function ToolService() {
	        }
	        ToolService.loadTools = function (componentId, page, toolsPerPage, searchText) {
	            $.get(location.origin + "/api/tools?search="
	                + searchText + "&page=" + page + "&pageSize="
	                + toolsPerPage, function (toolListModel) {
	                var totalToolAmount = toolListModel.toolAmount;
	                var tools = toolListModel.tools;
	                toolActions_1.default.updateToolList(componentId, tools, totalToolAmount, toolsPerPage, page, searchText);
	            });
	        };
	        ToolService.saveTool = function (componentId, tool) {
	            toolActions_1.default.savePending(componentId);
	            var type = tool.id == 0 ? "PUT" : "POST";
	            $.ajax({
	                url: location.origin + '/api/tools',
	                dataType: 'json',
	                type: type,
	                data: {
	                    id: tool.id,
	                    name: tool.name,
	                    price: tool.price,
	                    __RequestVerificationToken: antiForgeryToken
	                },
	                success: function (savedTool) {
	                    toolActions_1.default.saveSucceed(componentId, savedTool);
	                },
	                error: function (xhr, status, err) {
	                    toolActions_1.default.saveFailed(componentId, err);
	                }.bind(this)
	            });
	        };
	        ToolService.deleteTools = function (componentId, deletingTools) {
	            toolActions_1.default.deletePending(componentId);
	            $.ajax({
	                url: location.origin + '/api/tools/',
	                dataType: 'json',
	                type: 'DELETE',
	                data: {
	                    tools: deletingTools,
	                    __RequestVerificationToken: antiForgeryToken
	                },
	                success: function () {
	                    toolActions_1.default.deleteSucceed(componentId);
	                },
	                error: function (xhr, status, err) {
	                    toolActions_1.default.deleteFailed(componentId, err);
	                }
	            });
	        };
	        return ToolService;
	    }());
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = ToolService;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=toolService.js.map

/***/ },
/* 10 */
/*!**************************************************!*\
  !*** ./Scripts/app/flux/actions/panelActions.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../../typings/tsd.d.ts" />
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../dispatcher/appDispatcher */ 5), __webpack_require__(/*! ./actionSourceTypes */ 7), __webpack_require__(/*! ./panelActionTypes */ 11)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, appDispatcher_1, actionSourceTypes_1, panelActionTypes_1) {
	    "use strict";
	    var PanelActionsStatic = (function () {
	        function PanelActionsStatic() {
	        }
	        PanelActionsStatic.prototype.open = function (callerId, type, params) {
	            appDispatcher_1.default.dispatch({
	                actionType: panelActionTypes_1.default.PANEL_OPEN,
	                actionSource: actionSourceTypes_1.default.PANEL,
	                callerPanelId: callerId,
	                panelType: type,
	                params: params
	            });
	        };
	        PanelActionsStatic.prototype.close = function (panelId) {
	            appDispatcher_1.default.dispatch({
	                actionType: panelActionTypes_1.default.PANEL_CLOSE,
	                actionSource: actionSourceTypes_1.default.PANEL,
	                callerPanelId: panelId
	            });
	        };
	        PanelActionsStatic.prototype.init = function (type) {
	            appDispatcher_1.default.dispatch({
	                actionType: panelActionTypes_1.default.PANEL_INIT,
	                actionSource: actionSourceTypes_1.default.PANEL,
	                panelType: type
	            });
	        };
	        return PanelActionsStatic;
	    }());
	    var PanelActions = new PanelActionsStatic();
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = PanelActions;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=panelActions.js.map

/***/ },
/* 11 */
/*!******************************************************!*\
  !*** ./Scripts/app/flux/actions/panelActionTypes.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    "use strict";
	    var PanelActionTypes;
	    (function (PanelActionTypes) {
	        PanelActionTypes[PanelActionTypes["PANEL_OPEN"] = 0] = "PANEL_OPEN";
	        PanelActionTypes[PanelActionTypes["PANEL_CLOSE"] = 1] = "PANEL_CLOSE";
	        PanelActionTypes[PanelActionTypes["PANEL_INIT"] = 2] = "PANEL_INIT";
	    })(PanelActionTypes || (PanelActionTypes = {}));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = PanelActionTypes;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=panelActionTypes.js.map

/***/ },
/* 12 */
/*!***************************************************!*\
  !*** ./Scripts/app/managers/pageParamsManager.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../typings/tsd.d.ts" />
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react-router */ 13), __webpack_require__(/*! ../constants/pageConstants */ 14)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ReactRouter, pageConstants_1) {
	    "use strict";
	    var PageParamsManagerStatic = (function () {
	        function PageParamsManagerStatic() {
	            var _this = this;
	            this.locationChangeHandler = function (location) {
	                var query = location.query;
	                _this.navigation = location;
	                if (query.page) {
	                    if (query.page != _this.currentPage)
	                        _this.currentPage = query.page;
	                }
	                if (query.search) {
	                    if (query.search != _this.searchText)
	                        _this.searchText = query.search;
	                }
	                if (query.pageSize) {
	                    if (query.pageSize != _this.itemsPerPage)
	                        _this.itemsPerPage = query.pageSize;
	                }
	            };
	            this.changePage = function (page) {
	                _this.navigation.query.page = page;
	                _this.changeLocation();
	            };
	            this.changeSearchText = function (text) {
	                _this.navigation.query.search = text;
	                _this.changeLocation();
	            };
	            this.changePageSize = function (pageSize) {
	                _this.navigation.query.pageSize = pageSize;
	                _this.changeLocation();
	            };
	            this.getPage = function () {
	                return _this.currentPage;
	            };
	            this.getPageSize = function () {
	                return _this.itemsPerPage;
	            };
	            this.getSearchText = function () {
	                return _this.searchText;
	            };
	            this.currentPage = 0;
	            this.itemsPerPage = pageConstants_1.default.ITEMS_PER_PAGE_INIT;
	            this.searchText = '';
	        }
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
/* 13 */
/*!******************************!*\
  !*** external "ReactRouter" ***!
  \******************************/
/***/ function(module, exports) {

	module.exports = ReactRouter;

/***/ },
/* 14 */
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
/* 15 */
/*!***************************************************!*\
  !*** ./Scripts/app/managers/navigationManager.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../typings/tsd.d.ts" />
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react-router */ 13)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ReactRouter) {
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
	                _this.navigation.pathname = '/steps/' + id;
	                _this.changeLocation();
	            };
	            this.closeTechStepEditor = function () {
	                _this.navigation.pathname = '/steps';
	                _this.changeLocation();
	            };
	            this.openTechOperationEditor = function (id) {
	                _this.navigation.pathname = '/operations/' + id;
	                _this.changeLocation();
	            };
	            this.closeTechOperationEditor = function () {
	                _this.navigation.pathname = '/operations';
	                _this.changeLocation();
	            };
	            this.openTechProcessEditor = function (id) {
	                _this.navigation.pathname = '/processes/' + id;
	                _this.changeLocation();
	            };
	            this.closeTechProcessEditor = function () {
	                _this.navigation.pathname = '/processes';
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
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=navigationManager.js.map

/***/ },
/* 16 */
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2), __webpack_require__(/*! ../constants/pageConstants */ 14), __webpack_require__(/*! ../utils/utils */ 18), __webpack_require__(/*! ../flux/stores/secondToolStore */ 19), __webpack_require__(/*! ../flux/actions/toolActionCreator */ 24), __webpack_require__(/*! ../flux/actions/panelActions */ 10), __webpack_require__(/*! ./componentType */ 29), __webpack_require__(/*! ./common/tableRow */ 17), __webpack_require__(/*! ./common/pagination */ 30), __webpack_require__(/*! ./common/dialogContainer */ 31), __webpack_require__(/*! ./common/confirmationDialogPanel */ 32), __webpack_require__(/*! ./common/itemsPerPageSelector */ 34), __webpack_require__(/*! ./common/itemListControlPanel */ 35), __webpack_require__(/*! ./common/alert */ 37), __webpack_require__(/*! ./common/pendingAnimation */ 38), __webpack_require__(/*! ./common/pendingPanel */ 39)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React, pageConstants_1, utils_1, secondToolStore_1, toolActionCreator_1, panelActions_1, componentType_1, tableRow_1, pagination_1, dialogContainer_1, confirmationDialogPanel_1, itemsPerPageSelector_1, itemListControlPanel_1, alert_1, pendingAnimation_1, pendingPanel_1) {
	    "use strict";
	    var ToolTable = (function (_super) {
	        __extends(ToolTable, _super);
	        function ToolTable(props, context) {
	            var _this = this;
	            _super.call(this, props, context);
	            this.onToolSelect = function (event) {
	                var selectedTools = _this.props.selectedTools;
	                var tools = _this.props.tools;
	                if (event.target.checked) {
	                    var tool;
	                    for (var i = 0; i < tools.length; i++) {
	                        if (tools[i].id == event.target.value) {
	                            tool = tools[i];
	                            break;
	                        }
	                    }
	                    selectedTools.push(tool);
	                }
	                else {
	                    for (var i = 0; i < selectedTools.length; i++) {
	                        if (selectedTools[i].id == event.target.value) {
	                            selectedTools.splice(i, 1);
	                            break;
	                        }
	                    }
	                }
	                _this.props.onSelectedToolsChange(selectedTools);
	            };
	            this.onAllToolSelect = function (event) {
	                var selectedTools;
	                var tools = _this.props.tools;
	                if (event.target.checked) {
	                    selectedTools = tools.map(function (tool) {
	                        return tool;
	                    });
	                }
	                else {
	                    selectedTools = [];
	                }
	                _this.props.onSelectedToolsChange(selectedTools);
	            };
	            this.onRowDoubleClick = function (tool) {
	                panelActions_1.default.open(_this.props.componentId, componentType_1.default.ToolEditPanel, { tool: tool });
	            };
	            this.props = props;
	            this.context = context;
	            this.state = {};
	        }
	        ToolTable.prototype.render = function () {
	            var toolRows = [];
	            var tools = this.props.tools;
	            var selectedTools = this.props.selectedTools;
	            var isAllChecked = tools.length == selectedTools.length && tools.length != 0;
	            for (var i = 0; i < tools.length; i++) {
	                var tool = tools[i];
	                var selectedTool = null;
	                for (var j = 0; j < selectedTools.length; j++) {
	                    if (selectedTools[j].id == tool.id) {
	                        selectedTool = selectedTools[j];
	                        break;
	                    }
	                }
	                toolRows.push(React.createElement(tableRow_1.default, {key: i, item: tool, isCurrent: false, changeCurrent: function () { }, rowDoubleClickHandler: this.onRowDoubleClick}, React.createElement("td", {style: { width: 5 + '%' }}, React.createElement("input", {type: 'checkbox', value: tool.id, onChange: this.onToolSelect, checked: selectedTool})), React.createElement("td", {style: { width: 15 + '%' }}, tool.id), React.createElement("td", {style: { width: 80 + '%' }}, tool.name)));
	            }
	            return (React.createElement("div", {style: { marginBottom: 10 + 'px', overflow: 'auto' }}, React.createElement("table", {className: "table table-bordered", style: { marginBottom: 1 + 'px' }}, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {style: { width: 5 + '%' }}, React.createElement("input", {type: 'checkbox', onChange: this.onAllToolSelect, checked: isAllChecked})), React.createElement("th", {style: { width: 15 + '%' }}, "ID"), React.createElement("th", {style: { width: 80 + '%' }}, "Наименование"))), React.createElement("tbody", null, toolRows))));
	        };
	        return ToolTable;
	    }(React.Component));
	    var ToolList = (function (_super) {
	        __extends(ToolList, _super);
	        function ToolList(props, context) {
	            var _this = this;
	            _super.call(this, props, context);
	            this.handleToolsChange = function () {
	                _this.setState(secondToolStore_1.default.getState(_this.props.componentId));
	            };
	            this.toolRowDoubleClick = function (tool) {
	            };
	            this.newToolBtnClickHandler = function () {
	                panelActions_1.default.open(_this.props.componentId, componentType_1.default.ToolEditPanel, { tool: { id: 0, name: "", price: 0 } });
	            };
	            this.toolDeleteHandler = function () {
	                toolActionCreator_1.default.openDeleteConfirmation(_this.props.componentId);
	            };
	            this.handleDeleteSuccess = function () {
	                toolActionCreator_1.default.closeDeleteConfirmation(_this.props.componentId);
	                toolActionCreator_1.default.delete(_this.props.componentId, _this.props.selectedTools);
	            };
	            this.handleDeleteCancel = function () {
	                toolActionCreator_1.default.closeDeleteConfirmation(_this.props.componentId);
	            };
	            this.handleToolsPerPageChange = function (toolsPerPage) {
	                toolActionCreator_1.default.load(_this.props.componentId, utils_1.default.uuid(), 0, toolsPerPage, _this.state.toolSearchText);
	            };
	            this.handleToolPageChange = function (page) {
	                toolActionCreator_1.default.load(_this.props.componentId, utils_1.default.uuid(), page, _this.state.toolsPerPage, _this.state.toolSearchText);
	            };
	            this.handleToolSearchTextChange = function (text) {
	                toolActionCreator_1.default.load(_this.props.componentId, utils_1.default.uuid(), _this.state.toolPage, _this.state.toolsPerPage, text);
	            };
	            this.refreshBtnClickHandler = function () {
	                toolActionCreator_1.default.load(_this.props.componentId, utils_1.default.uuid(), _this.state.toolPage, _this.state.toolsPerPage, _this.state.toolSearchText);
	            };
	            this.props = props;
	            this.context = context;
	            this.state = {
	                tools: [],
	                isConfirmDeleting: false,
	                totalAmount: 0,
	                toolsPerPage: pageConstants_1.default.ITEMS_PER_PAGE_INIT,
	                toolSearchText: "",
	                toolPage: 0,
	                alerts: [],
	                isDeleting: false,
	                isLoading: false
	            };
	        }
	        ToolList.prototype.componentWillMount = function () {
	            secondToolStore_1.default.addChangeListener(this.handleToolsChange, this.props.componentId);
	        };
	        ToolList.prototype.componentWillUnmount = function () {
	            secondToolStore_1.default.removeChangeListener(this.handleToolsChange, this.props.componentId);
	        };
	        ToolList.prototype.componentDidMount = function () {
	            toolActionCreator_1.default.load(this.props.componentId, utils_1.default.uuid(), 0, pageConstants_1.default.ITEMS_PER_PAGE_INIT, "");
	        };
	        ToolList.prototype.getAlerts = function () {
	            var alerts = [];
	            alerts = this.state.alerts.map(function (alert, index) {
	                return (React.createElement(alert_1.default, {key: alert.id, alert: alert, onCloseClick: function () { }}, React.createElement("span", null, alert.message)));
	            });
	            return alerts;
	        };
	        ToolList.prototype.render = function () {
	            return (React.createElement("div", {style: { position: 'relative', display: 'flex', flexGrow: 2, flexBasis: 0 + '%', minHeight: 0, minWidth: 0 }}, this.getAlerts(), React.createElement(dialogContainer_1.default, {isShow: this.state.isConfirmDeleting}, React.createElement(confirmationDialogPanel_1.default, {title: "Удаление инструмента", onSuccess: this.handleDeleteSuccess, onCancel: this.handleDeleteCancel}, React.createElement("span", null, "Вы действительно хотите удалить данный инструмент?"))), React.createElement(dialogContainer_1.default, {isShow: this.state.isDeleting}, React.createElement(pendingPanel_1.default, {title: "Удаление инструмента"}, React.createElement(pendingAnimation_1.default, null, React.createElement("h4", null, "Пожалуйста, подождите."), React.createElement("h4", null, "Идет удаление.")))), React.createElement("div", {style: { position: 'relative', display: 'flex', flexFlow: 'column', flexGrow: 2, flexBasis: 0 + '%', minHeight: 0, minWidth: 0 }}, React.createElement("div", {style: { flexShrink: 0 }}, React.createElement(itemListControlPanel_1.default, {onNewItem: this.newToolBtnClickHandler, onItemDelete: this.toolDeleteHandler, onRefresh: this.refreshBtnClickHandler, onSearchTextChange: function (text) { this.handleToolSearchTextChange(text); }.bind(this), isDeleteEnable: this.props.selectedTools.length > 0, isUpdating: this.state.isLoading})), React.createElement(ToolTable, {componentId: this.props.componentId, tools: this.state.tools, selectedTools: this.props.selectedTools, onSelectedToolsChange: this.props.onSelectedToolsChange}), React.createElement("div", {className: "btn-toolbar", style: { flexShrink: 0 }}, React.createElement(itemsPerPageSelector_1.default, {onChange: this.handleToolsPerPageChange}), React.createElement(pagination_1.default, {itemAmount: this.state.totalAmount, itemsPerPage: this.state.toolsPerPage, currentPage: this.state.toolPage, firstSymbol: '«', nextSymbol: '›', prevSymbol: '‹', lastSymbol: '»', updatePage: this.handleToolPageChange})))));
	        };
	        return ToolList;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = ToolList;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=toolList.js.map

/***/ },
/* 17 */
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
	        function TableRow(props, context) {
	            var _this = this;
	            _super.call(this, props, context);
	            this.onMouseEnterHandler = function () {
	                if (!_this.props.isCurrent)
	                    _this.setState({ color: "active" });
	            };
	            this.onMouseLeaveHandler = function () {
	                if (!_this.props.isCurrent)
	                    _this.setState({ color: null });
	            };
	            this.onClickHandler = function () {
	                if (!_this.props.isCurrent) {
	                    _this.setState({ color: null });
	                    _this.props.changeCurrent(_this.props.item);
	                }
	                else {
	                    _this.setState({ color: "active" });
	                    _this.props.changeCurrent(null);
	                }
	            };
	            this.onDoubleClickHandler = function () {
	                _this.props.rowDoubleClickHandler(_this.props.item);
	            };
	            this.props = props;
	            this.context = context;
	            this.state = {
	                color: this.props.isCurrent ? 'info' : null
	            };
	        }
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
/* 18 */
/*!************************************!*\
  !*** ./Scripts/app/utils/utils.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    "use strict";
	    var Utils = (function () {
	        function Utils() {
	        }
	        Utils.uuid = function () {
	            var i, random;
	            var uuid = '';
	            for (i = 0; i < 32; i++) {
	                random = Math.random() * 16 | 0;
	                if (i === 8 || i === 12 || i === 16 || i === 20) {
	                    uuid += '-';
	                }
	                uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
	                    .toString(16);
	            }
	            return uuid;
	        };
	        return Utils;
	    }());
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = Utils;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=utils.js.map

/***/ },
/* 19 */
/*!****************************************************!*\
  !*** ./Scripts/app/flux/stores/secondToolStore.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./entityStore */ 20), __webpack_require__(/*! ../actions/entityType */ 23)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, entityStore_1, entityType_1) {
	    "use strict";
	    var ToolStore = (function (_super) {
	        __extends(ToolStore, _super);
	        function ToolStore() {
	            _super.call(this, entityType_1.default.Tool);
	        }
	        ToolStore.prototype.updateEntityList = function (componentId, tools) {
	            this.entityComponentStates[componentId].tools = tools;
	        };
	        ToolStore.prototype.updateEntityPage = function (componentId, entityPage) {
	            this.entityComponentStates[componentId].toolPage = entityPage;
	        };
	        ToolStore.prototype.updateEntitysPerPage = function (componentId, entitiesPerPage) {
	            this.entityComponentStates[componentId].toolsPerPage = entitiesPerPage;
	        };
	        ToolStore.prototype.deleteSelectedEntities = function (componentId, deletedTools) {
	            var tools = this.entityComponentStates[componentId].tools;
	            deletedTools.forEach(function (tool) {
	                tools.splice(tools.indexOf(tool), 1);
	            });
	        };
	        return ToolStore;
	    }(entityStore_1.default));
	    var toolStore = new ToolStore();
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = toolStore;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=secondToolStore.js.map

/***/ },
/* 20 */
/*!************************************************!*\
  !*** ./Scripts/app/flux/stores/entityStore.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! eventemitter3 */ 21), __webpack_require__(/*! ../dispatcher/appDispatcher */ 5), __webpack_require__(/*! ../actions/actionSourceTypes */ 7), __webpack_require__(/*! ../actions/entityActionType */ 22), __webpack_require__(/*! ../../utils/utils */ 18)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, EventEmitter, appDispatcher_1, actionSourceTypes_1, entityActionType_1, utils_1) {
	    "use strict";
	    var EntityStore = (function (_super) {
	        __extends(EntityStore, _super);
	        function EntityStore(entityType) {
	            _super.call(this);
	            this.entityComponentStates = {};
	            this.entityComponentHistories = {};
	            this.entityType = entityType;
	            this.dispatcherToken = this.register();
	        }
	        EntityStore.prototype.getState = function (componentId) {
	            return this.entityComponentStates[componentId];
	        };
	        EntityStore.prototype.emitChange = function (componentId) {
	            this.emit(componentId);
	        };
	        /**
	         * @param {function} callback
	         */
	        EntityStore.prototype.addChangeListener = function (callback, componentId) {
	            this.entityComponentStates[componentId] = {};
	            this.on(componentId, callback);
	        };
	        /**
	         * @param {function} callback
	         */
	        EntityStore.prototype.removeChangeListener = function (callback, componentId) {
	            delete this.entityComponentStates[componentId];
	            this.removeListener(componentId, callback);
	        };
	        EntityStore.prototype.updateTotalAmount = function (componentId, totalAmount) {
	            this.entityComponentStates[componentId].totalAmount = totalAmount;
	        };
	        EntityStore.prototype.initEntityState = function (componentId, entity) {
	            this.entityComponentStates[componentId] = {
	                entity: entity,
	                isRedoAvailable: false,
	                isUndoAvailable: false
	            };
	            this.entityComponentHistories[componentId] = {
	                entityUnDoes: [entity],
	                entityReDoes: []
	            };
	        };
	        EntityStore.prototype.updateDeleteConfirmation = function (componentId) {
	            this.entityComponentStates[componentId].isConfirmDeleting =
	                !this.entityComponentStates[componentId].isConfirmDeleting;
	        };
	        EntityStore.prototype.updateLoadPending = function (componentId, isPending) {
	            this.entityComponentStates[componentId].isLoading = isPending;
	        };
	        EntityStore.prototype.updateSavePending = function (componentId) {
	            this.entityComponentStates[componentId].isSaving =
	                !this.entityComponentStates[componentId].isSaving;
	        };
	        EntityStore.prototype.updateDeletePending = function (componentId) {
	            this.entityComponentStates[componentId].isDeleting =
	                !this.entityComponentStates[componentId].isDeleting;
	        };
	        EntityStore.prototype.updateEntityComponentHistory = function (componentId, changedEntity) {
	            var entityComponentHistory = this.entityComponentHistories[componentId];
	            entityComponentHistory.entityUnDoes.push(changedEntity);
	            entityComponentHistory.entityReDoes = [];
	            this.entityComponentStates[componentId] = {
	                entity: changedEntity,
	                isRedoAvailable: false,
	                isUndoAvailable: true
	            };
	        };
	        EntityStore.prototype.addAlert = function (componentId, message, alertType) {
	            this.entityComponentStates[componentId].alerts.push({ id: utils_1.default.uuid(), message: message, type: alertType });
	        };
	        EntityStore.prototype.removeAlert = function (componentId, alertId) {
	            var alerts = this.entityComponentStates[componentId].alerts;
	            var alert;
	            for (var i = 0; i < alerts.length; i++) {
	                if (alerts[i].id == alertId) {
	                    alert = alerts[i];
	                    break;
	                }
	            }
	            alerts.splice(alerts.indexOf(alert), 1);
	        };
	        EntityStore.prototype.unDoEntityComponentHistory = function (componentId) {
	            var entityComponentHistory = this.entityComponentHistories[componentId];
	            var entity;
	            if (entityComponentHistory.entityUnDoes.length > 1) {
	                entity = entityComponentHistory.entityUnDoes.pop();
	                entityComponentHistory.entityReDoes.push(entity);
	                entity = entityComponentHistory.entityUnDoes[entityComponentHistory.entityUnDoes.length - 1];
	            }
	            else {
	                entity = entityComponentHistory.entityUnDoes[0];
	            }
	            this.entityComponentStates[componentId] = {
	                entity: entity,
	                isRedoAvailable: true,
	                isUndoAvailable: entityComponentHistory.entityUnDoes.length > 1
	            };
	        };
	        EntityStore.prototype.reDoEntityComponentHistory = function (componentId) {
	            var entityComponentHistory = this.entityComponentHistories[componentId];
	            var entity = entityComponentHistory.entityReDoes.pop();
	            entityComponentHistory.entityUnDoes.push(entity);
	            this.entityComponentStates[componentId] = {
	                entity: entity,
	                isRedoAvailable: entityComponentHistory.entityReDoes.length > 0,
	                isUndoAvailable: true
	            };
	        };
	        EntityStore.prototype.register = function () {
	            var _this = this;
	            return appDispatcher_1.default.register(function (payload) {
	                if (payload.actionSource != actionSourceTypes_1.default.Entity)
	                    return;
	                if (payload.entityType != _this.entityType)
	                    return;
	                switch (payload.actionType) {
	                    case entityActionType_1.default.InitEntityState:
	                        _this.initEntityState(payload.componentId, payload.entity);
	                        _this.emitChange(payload.componentId);
	                        break;
	                    case entityActionType_1.default.LoadPending:
	                        _this.updateLoadPending(payload.componentId, true);
	                        _this.emitChange(payload.componentId);
	                        break;
	                    case entityActionType_1.default.LoadSucceed:
	                        _this.updateEntityList(payload.componentId, payload.entities);
	                        _this.updateTotalAmount(payload.componentId, payload.totalAmount);
	                        _this.updateEntityPage(payload.componentId, payload.currentPage);
	                        _this.updateEntitysPerPage(payload.componentId, payload.pageSize);
	                        _this.updateLoadPending(payload.componentId, false);
	                        _this.emitChange(payload.componentId);
	                        break;
	                    case entityActionType_1.default.SavePending:
	                        _this.updateSavePending(payload.componentId);
	                        _this.emitChange(payload.componentId);
	                        break;
	                    case entityActionType_1.default.SaveSucceed:
	                        _this.updateSavePending(payload.componentId);
	                        _this.emitChange(payload.componentId);
	                        break;
	                    case entityActionType_1.default.DeletePending:
	                        _this.updateDeletePending(payload.componentId);
	                        _this.emitChange(payload.componentId);
	                        break;
	                    case entityActionType_1.default.DeleteSucceed:
	                        _this.deleteSelectedEntities(payload.componentId, payload.entities);
	                        _this.updateDeletePending(payload.componentId);
	                        _this.emitChange(payload.componentId);
	                        break;
	                    case entityActionType_1.default.OpenDeleteConfirmation:
	                        _this.updateDeleteConfirmation(payload.componentId);
	                        _this.emitChange(payload.componentId);
	                        break;
	                    case entityActionType_1.default.CloseDeleteConfirmation:
	                        _this.updateDeleteConfirmation(payload.componentId);
	                        _this.emitChange(payload.componentId);
	                        break;
	                    case entityActionType_1.default.Change:
	                        _this.updateEntityComponentHistory(payload.componentId, payload.entity);
	                        _this.emitChange(payload.componentId);
	                        break;
	                    case entityActionType_1.default.Undo:
	                        _this.unDoEntityComponentHistory(payload.componentId);
	                        _this.emitChange(payload.componentId);
	                        break;
	                    case entityActionType_1.default.Redo:
	                        _this.reDoEntityComponentHistory(payload.componentId);
	                        _this.emitChange(payload.componentId);
	                        break;
	                }
	            });
	        };
	        return EntityStore;
	    }(EventEmitter));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = EntityStore;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=entityStore.js.map

/***/ },
/* 21 */
/*!*******************************!*\
  !*** external "EventEmitter" ***!
  \*******************************/
/***/ function(module, exports) {

	module.exports = EventEmitter;

/***/ },
/* 22 */
/*!******************************************************!*\
  !*** ./Scripts/app/flux/actions/entityActionType.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    "use strict";
	    var EntityActionType;
	    (function (EntityActionType) {
	        EntityActionType[EntityActionType["InitEntityState"] = 0] = "InitEntityState";
	        EntityActionType[EntityActionType["Load"] = 1] = "Load";
	        EntityActionType[EntityActionType["LoadSucceed"] = 2] = "LoadSucceed";
	        EntityActionType[EntityActionType["LoadFailed"] = 3] = "LoadFailed";
	        EntityActionType[EntityActionType["LoadPending"] = 4] = "LoadPending";
	        EntityActionType[EntityActionType["Save"] = 5] = "Save";
	        EntityActionType[EntityActionType["SaveSucceed"] = 6] = "SaveSucceed";
	        EntityActionType[EntityActionType["SaveFailed"] = 7] = "SaveFailed";
	        EntityActionType[EntityActionType["SavePending"] = 8] = "SavePending";
	        EntityActionType[EntityActionType["Delete"] = 9] = "Delete";
	        EntityActionType[EntityActionType["OpenDeleteConfirmation"] = 10] = "OpenDeleteConfirmation";
	        EntityActionType[EntityActionType["CloseDeleteConfirmation"] = 11] = "CloseDeleteConfirmation";
	        EntityActionType[EntityActionType["DeleteSucceed"] = 12] = "DeleteSucceed";
	        EntityActionType[EntityActionType["DeleteFailed"] = 13] = "DeleteFailed";
	        EntityActionType[EntityActionType["DeletePending"] = 14] = "DeletePending";
	        EntityActionType[EntityActionType["Change"] = 15] = "Change";
	        EntityActionType[EntityActionType["Redo"] = 16] = "Redo";
	        EntityActionType[EntityActionType["Undo"] = 17] = "Undo";
	    })(EntityActionType || (EntityActionType = {}));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = EntityActionType;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=entityActionType.js.map

/***/ },
/* 23 */
/*!************************************************!*\
  !*** ./Scripts/app/flux/actions/entityType.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    "use strict";
	    var EntityType;
	    (function (EntityType) {
	        EntityType[EntityType["Tool"] = 0] = "Tool";
	        EntityType[EntityType["Part"] = 1] = "Part";
	        EntityType[EntityType["TechStep"] = 2] = "TechStep";
	        EntityType[EntityType["TechOperation"] = 3] = "TechOperation";
	        EntityType[EntityType["TechProcess"] = 4] = "TechProcess";
	    })(EntityType || (EntityType = {}));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = EntityType;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=entityType.js.map

/***/ },
/* 24 */
/*!*******************************************************!*\
  !*** ./Scripts/app/flux/actions/toolActionCreator.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./entityActionCreator */ 25), __webpack_require__(/*! ./entityType */ 23), __webpack_require__(/*! ../services/newToolService */ 26)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, entityActionCreator_1, entityType_1, newToolService_1) {
	    "use strict";
	    var ToolActionCreator = (function (_super) {
	        __extends(ToolActionCreator, _super);
	        function ToolActionCreator(entityService) {
	            _super.call(this, entityType_1.default.Tool, entityService);
	        }
	        return ToolActionCreator;
	    }(entityActionCreator_1.default));
	    var toolService = new newToolService_1.default();
	    var toolActionCreator = new ToolActionCreator(toolService);
	    toolService.setActionCreator(toolActionCreator);
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = toolActionCreator;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=toolActionCreator.js.map

/***/ },
/* 25 */
/*!*********************************************************!*\
  !*** ./Scripts/app/flux/actions/entityActionCreator.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../../typings/tsd.d.ts" />
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../dispatcher/appDispatcher */ 5), __webpack_require__(/*! ./entityActionType */ 22), __webpack_require__(/*! ./actionSourceTypes */ 7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, appDispatcher_1, entityActionType_1, actionSourceTypes_1) {
	    "use strict";
	    var EntityActionCreator = (function () {
	        function EntityActionCreator(entityType, entityService) {
	            this.entityType = entityType;
	            this.entityService = entityService;
	        }
	        EntityActionCreator.prototype.initEntityState = function (componentId, entity) {
	            appDispatcher_1.default.dispatch({
	                actionType: entityActionType_1.default.InitEntityState,
	                actionSource: actionSourceTypes_1.default.Entity,
	                entityType: this.entityType,
	                entity: entity,
	                componentId: componentId
	            });
	        };
	        EntityActionCreator.prototype.load = function (componentId, loadId, page, pageSize, searchText) {
	            this.entityService.load(componentId, loadId, page, pageSize, searchText);
	        };
	        EntityActionCreator.prototype.loadPending = function (componentId) {
	            appDispatcher_1.default.dispatch({
	                actionType: entityActionType_1.default.LoadPending,
	                actionSource: actionSourceTypes_1.default.Entity,
	                entityType: this.entityType,
	                componentId: componentId
	            });
	        };
	        EntityActionCreator.prototype.loadSucceed = function (componentId, entities, totalEntityAmount, entitiesPerPage, page, searchText) {
	            appDispatcher_1.default.dispatch({
	                actionType: entityActionType_1.default.LoadSucceed,
	                actionSource: actionSourceTypes_1.default.Entity,
	                entityType: this.entityType,
	                componentId: componentId,
	                entities: entities,
	                totalAmount: totalEntityAmount,
	                pageSize: entitiesPerPage,
	                currentPage: page,
	                searchText: searchText
	            });
	        };
	        EntityActionCreator.prototype.loadFailed = function (componentId, errorMessage) {
	            appDispatcher_1.default.dispatch({
	                actionType: entityActionType_1.default.LoadPending,
	                actionSource: actionSourceTypes_1.default.Entity,
	                entityType: this.entityType,
	                componentId: componentId,
	                errorMessage: errorMessage
	            });
	        };
	        EntityActionCreator.prototype.save = function (componentId, entity) {
	            this.entityService.save(componentId, entity);
	        };
	        EntityActionCreator.prototype.savePending = function (componentId) {
	            appDispatcher_1.default.dispatch({
	                actionType: entityActionType_1.default.SavePending,
	                actionSource: actionSourceTypes_1.default.Entity,
	                entityType: this.entityType,
	                componentId: componentId
	            });
	        };
	        EntityActionCreator.prototype.saveSucceed = function (componentId) {
	            appDispatcher_1.default.dispatch({
	                actionType: entityActionType_1.default.SaveSucceed,
	                actionSource: actionSourceTypes_1.default.Entity,
	                entityType: this.entityType,
	                componentId: componentId
	            });
	        };
	        EntityActionCreator.prototype.saveFailed = function (componentId, errorMessage) {
	            appDispatcher_1.default.dispatch({
	                actionType: entityActionType_1.default.SaveSucceed,
	                actionSource: actionSourceTypes_1.default.Entity,
	                entityType: this.entityType,
	                componentId: componentId,
	                errorMessage: errorMessage
	            });
	        };
	        EntityActionCreator.prototype.delete = function (componentId, entities) {
	            this.entityService.delete(componentId, entities);
	        };
	        EntityActionCreator.prototype.deletePending = function (componentId) {
	            appDispatcher_1.default.dispatch({
	                actionType: entityActionType_1.default.DeletePending,
	                actionSource: actionSourceTypes_1.default.Entity,
	                entityType: this.entityType,
	                componentId: componentId
	            });
	        };
	        EntityActionCreator.prototype.deleteSucceed = function (componentId, deletedEntities) {
	            appDispatcher_1.default.dispatch({
	                actionType: entityActionType_1.default.DeleteSucceed,
	                actionSource: actionSourceTypes_1.default.Entity,
	                entityType: this.entityType,
	                entities: deletedEntities,
	                componentId: componentId
	            });
	        };
	        EntityActionCreator.prototype.deleteFailed = function (componentId, errorMessage) {
	            appDispatcher_1.default.dispatch({
	                actionType: entityActionType_1.default.DeleteFailed,
	                actionSource: actionSourceTypes_1.default.Entity,
	                entityType: this.entityType,
	                componentId: componentId,
	                errorMessage: errorMessage
	            });
	        };
	        EntityActionCreator.prototype.openDeleteConfirmation = function (componentId) {
	            appDispatcher_1.default.dispatch({
	                actionType: entityActionType_1.default.OpenDeleteConfirmation,
	                actionSource: actionSourceTypes_1.default.Entity,
	                entityType: this.entityType,
	                componentId: componentId
	            });
	        };
	        EntityActionCreator.prototype.closeDeleteConfirmation = function (componentId) {
	            appDispatcher_1.default.dispatch({
	                actionType: entityActionType_1.default.CloseDeleteConfirmation,
	                actionSource: actionSourceTypes_1.default.Entity,
	                entityType: this.entityType,
	                componentId: componentId
	            });
	        };
	        EntityActionCreator.prototype.change = function (componentId, entity) {
	            appDispatcher_1.default.dispatch({
	                actionType: entityActionType_1.default.Change,
	                actionSource: actionSourceTypes_1.default.Entity,
	                entityType: this.entityType,
	                entity: entity,
	                componentId: componentId
	            });
	        };
	        EntityActionCreator.prototype.undo = function (componentId) {
	            appDispatcher_1.default.dispatch({
	                actionType: entityActionType_1.default.Undo,
	                actionSource: actionSourceTypes_1.default.Entity,
	                entityType: this.entityType,
	                componentId: componentId
	            });
	        };
	        EntityActionCreator.prototype.redo = function (componentId) {
	            appDispatcher_1.default.dispatch({
	                actionType: entityActionType_1.default.Redo,
	                actionSource: actionSourceTypes_1.default.Entity,
	                entityType: this.entityType,
	                componentId: componentId
	            });
	        };
	        return EntityActionCreator;
	    }());
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = EntityActionCreator;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=entityActionCreator.js.map

/***/ },
/* 26 */
/*!*****************************************************!*\
  !*** ./Scripts/app/flux/services/newToolService.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./entityService */ 27)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, entityService_1) {
	    "use strict";
	    var ToolService = (function (_super) {
	        __extends(ToolService, _super);
	        function ToolService() {
	            _super.call(this, "tools");
	        }
	        ToolService.prototype.getEntitiesAmount = function (entityListModel) {
	            return entityListModel.toolAmount;
	        };
	        ToolService.prototype.getEntities = function (entityListModel) {
	            return entityListModel.tools;
	        };
	        ToolService.prototype.getDeleteData = function (entities) {
	            return {
	                tools: entities,
	                __RequestVerificationToken: antiForgeryToken
	            };
	        };
	        return ToolService;
	    }(entityService_1.default));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = ToolService;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=newToolService.js.map

/***/ },
/* 27 */
/*!****************************************************!*\
  !*** ./Scripts/app/flux/services/entityService.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../../typings/tsd.d.ts" />
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! object-assign */ 28)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, assign) {
	    "use strict";
	    var EntityService = (function () {
	        function EntityService(controllerName) {
	            this.lastLoadIds = {};
	            this.controllerName = controllerName;
	        }
	        EntityService.prototype.setActionCreator = function (actionCreator) {
	            this.actionCreator = actionCreator;
	        };
	        EntityService.prototype.load = function (componentId, loadId, page, entitiesPerPage, searchText) {
	            var _this = this;
	            this.actionCreator.loadPending(componentId);
	            this.lastLoadIds[componentId] = loadId;
	            $.ajax({
	                url: (location.origin + "/api/"
	                    + this.controllerName + '/'
	                    + "?search=" + searchText
	                    + "&page=" + page + "&pageSize="
	                    + entitiesPerPage),
	                dataType: 'json',
	                type: 'GET',
	                success: function (entityListModel) {
	                    if (_this.lastLoadIds[componentId] != loadId)
	                        return;
	                    var totalEntityAmount = _this.getEntitiesAmount(entityListModel);
	                    var entities = _this.getEntities(entityListModel);
	                    _this.actionCreator.loadSucceed(componentId, entities, totalEntityAmount, entitiesPerPage, page, searchText);
	                },
	                error: function (xhr, status, err) {
	                    if (_this.lastLoadIds[componentId] != loadId)
	                        return;
	                    _this.actionCreator.loadFailed(componentId, err);
	                }
	            });
	        };
	        EntityService.prototype.save = function (componentId, entity) {
	            var _this = this;
	            this.actionCreator.savePending(componentId);
	            var type = entity.id == 0 ? "PUT" : "POST";
	            $.ajax({
	                url: location.origin + '/api/' + this.controllerName + '/',
	                dataType: 'json',
	                type: type,
	                data: assign({}, entity, { __RequestVerificationToken: antiForgeryToken }),
	                success: function (savedTool) {
	                    _this.actionCreator.saveSucceed(componentId);
	                },
	                error: function (xhr, status, err) {
	                    _this.actionCreator.saveFailed(componentId, err);
	                }
	            });
	        };
	        EntityService.prototype.delete = function (componentId, entities) {
	            var _this = this;
	            this.actionCreator.deletePending(componentId);
	            $.ajax({
	                url: location.origin + '/api/' + this.controllerName + "/",
	                type: 'DELETE',
	                dataType: "json",
	                data: this.getDeleteData(entities),
	                success: function (response) {
	                    _this.actionCreator.deleteSucceed(componentId, entities);
	                },
	                error: function (xhr, status, err) {
	                    _this.actionCreator.deleteFailed(componentId, err);
	                }
	            });
	        };
	        return EntityService;
	    }());
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = EntityService;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=EntityService.js.map

/***/ },
/* 28 */
/*!*************************!*\
  !*** external "assign" ***!
  \*************************/
/***/ function(module, exports) {

	module.exports = assign;

/***/ },
/* 29 */
/*!*************************************************!*\
  !*** ./Scripts/app/components/componentType.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    "use strict";
	    var ComponentType;
	    (function (ComponentType) {
	        ComponentType[ComponentType["MainPanel"] = 0] = "MainPanel";
	        ComponentType[ComponentType["ToolListPanel"] = 1] = "ToolListPanel";
	        ComponentType[ComponentType["PartListPanel"] = 2] = "PartListPanel";
	        ComponentType[ComponentType["TechStepListPanel"] = 3] = "TechStepListPanel";
	        ComponentType[ComponentType["TechOperationListPanel"] = 4] = "TechOperationListPanel";
	        ComponentType[ComponentType["TechProcessListPanel"] = 5] = "TechProcessListPanel";
	        ComponentType[ComponentType["ToolEditPanel"] = 6] = "ToolEditPanel";
	    })(ComponentType || (ComponentType = {}));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = ComponentType;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=componentType.js.map

/***/ },
/* 30 */
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
	                if (pageNumber == -1 && _this.props.currentPage != 0) {
	                    _this.props.updatePage(_this.props.currentPage - 1);
	                }
	                if (pageNumber == -2 && _this.props.currentPage != totalPageAmount - 1) {
	                    _this.props.updatePage(_this.props.currentPage + 1);
	                }
	                if (pageNumber >= 0 && pageNumber != _this.props.currentPage) {
	                    _this.props.updatePage(pageNumber);
	                }
	            };
	            this.props = props;
	            this.context = context;
	            this.state = {};
	        }
	        Pagination.prototype.render = function () {
	            var totalPageAmount = Math.ceil(this.props.itemAmount / this.props.itemsPerPage);
	            var pageButtons = [];
	            if (totalPageAmount > 0) {
	                if (totalPageAmount != 1 && this.props.currentPage != 0) {
	                    pageButtons.push(React.createElement(PageButton, {key: 0, mode: '', onClick: this.pageButtonClickHandler, symbol: this.props.firstSymbol, pageNumber: 0}));
	                    pageButtons.push(React.createElement(PageButton, {key: 1, mode: '', onClick: this.pageButtonClickHandler, symbol: this.props.prevSymbol, pageNumber: -1}));
	                }
	                for (var i = 0; i < totalPageAmount; i++) {
	                    if (this.props.currentPage == i) {
	                        pageButtons.push(React.createElement(PageButton, {key: i + 2, mode: 'active', onClick: function () { }, symbol: String(i + 1), pageNumber: i}));
	                    }
	                    else {
	                        pageButtons.push(React.createElement(PageButton, {key: i + 2, mode: '', onClick: this.pageButtonClickHandler, symbol: String(i + 1), pageNumber: i}));
	                    }
	                }
	                if (totalPageAmount != 1 && this.props.currentPage != totalPageAmount - 1) {
	                    pageButtons.push(React.createElement(PageButton, {key: i + 3, mode: '', onClick: this.pageButtonClickHandler, symbol: this.props.nextSymbol, pageNumber: -2}));
	                    pageButtons.push(React.createElement(PageButton, {key: i + 4, mode: '', onClick: this.pageButtonClickHandler, symbol: this.props.lastSymbol, pageNumber: totalPageAmount - 1}));
	                }
	            }
	            return (React.createElement("div", {style: { float: 'right' }}, React.createElement("ul", {className: "pagination", style: { marginTop: 0 + 'px', marginBottom: 0 + 'px', float: 'right' }}, pageButtons)));
	        };
	        return Pagination;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = Pagination;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=pagination.js.map

/***/ },
/* 31 */
/*!**********************************************************!*\
  !*** ./Scripts/app/components/common/dialogContainer.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React) {
	    "use strict";
	    var DialogContainer = (function (_super) {
	        __extends(DialogContainer, _super);
	        function DialogContainer() {
	            _super.apply(this, arguments);
	        }
	        DialogContainer.prototype.render = function () {
	            return (this.props.isShow ?
	                React.createElement("div", {style: {
	                    position: 'absolute',
	                    height: 100 + '%',
	                    width: 100 + '%',
	                    bottom: 0,
	                    left: 0,
	                    zIndex: 1030
	                }}, React.createElement("div", {style: {
	                    position: 'absolute',
	                    height: 100 + '%',
	                    width: 100 + '%',
	                    bottom: 0,
	                    zIndex: 1040,
	                    backgroundColor: 'white', opacity: 0.3
	                }}), React.createElement("div", {style: {
	                    position: 'relative',
	                    top: 200 + 'px',
	                    margin: 0 + ' auto',
	                    width: 400 + 'px',
	                    zIndex: 1050
	                }}, this.props.children))
	                :
	                    null);
	        };
	        return DialogContainer;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = DialogContainer;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=dialogContainer.js.map

/***/ },
/* 32 */
/*!******************************************************************!*\
  !*** ./Scripts/app/components/common/confirmationDialogPanel.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2), __webpack_require__(/*! ./panel */ 33)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React, panel_1) {
	    "use strict";
	    var ConfirmationDialogPanel = (function (_super) {
	        __extends(ConfirmationDialogPanel, _super);
	        function ConfirmationDialogPanel() {
	            var _this = this;
	            _super.apply(this, arguments);
	            this.handleConfirmClick = function (e) {
	                _this.props.onSuccess();
	            };
	            this.handleCancelClick = function () {
	                _this.props.onCancel();
	            };
	        }
	        ConfirmationDialogPanel.prototype.render = function () {
	            return (React.createElement(panel_1.default, {onClosePanel: this.handleCancelClick, title: this.props.title}, React.createElement("div", {className: "panel-body"}, this.props.children), React.createElement("div", {className: "panel-footer clearfix"}, React.createElement("div", {className: "btn-toolbar pull-right"}, React.createElement("button", {type: "button", className: "btn btn-danger", onClick: this.handleConfirmClick}, "Да"), React.createElement("button", {type: "button", className: "btn btn-default", onClick: this.handleCancelClick}, "Нет")))));
	        };
	        return ConfirmationDialogPanel;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = ConfirmationDialogPanel;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=confirmationDialogPanel.js.map

/***/ },
/* 33 */
/*!************************************************!*\
  !*** ./Scripts/app/components/common/panel.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React) {
	    "use strict";
	    var Panel = (function (_super) {
	        __extends(Panel, _super);
	        function Panel() {
	            _super.apply(this, arguments);
	        }
	        Panel.prototype.render = function () {
	            return (React.createElement("div", {className: "panel panel-default " + this.props.size, style: { marginBottom: 0 + 'px', position: 'relative', display: 'flex', flexFlow: 'column', height: 100 + '%' }}, React.createElement("div", {className: "panel-heading table-style", style: { zIndex: 1050, position: 'relative', flex: '0 1 auto' }}, React.createElement("h2", {className: "panel-title"}, this.props.title), React.createElement("div", {className: "button-wrap"}, React.createElement("div", {className: "btn btn-default", onClick: this.props.onClosePanel}, React.createElement("div", {style: { display: 'table-cell', verticalAlign: 'middle' }}, React.createElement("span", null, '❌'))))), this.props.children));
	        };
	        return Panel;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = Panel;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=panel.js.map

/***/ },
/* 34 */
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2), __webpack_require__(/*! ../../constants/pageConstants */ 14)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React, pageConstants_1) {
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
	                        itemsPerPage: _this.state.itemsPerPage,
	                        dropdowndisplay: 'block',
	                        isButtonClicked: false
	                    });
	                    return;
	                }
	                _this.setState({
	                    itemsPerPage: _this.state.itemsPerPage,
	                    dropdowndisplay: 'none',
	                    isButtonClicked: false
	                });
	            };
	            this.toggleDropDown = function (e) {
	                if (_this.state.dropdowndisplay == 'none')
	                    _this.setState({
	                        itemsPerPage: _this.state.itemsPerPage,
	                        dropdowndisplay: 'block',
	                        isButtonClicked: true
	                    });
	                if (_this.state.dropdowndisplay == 'block')
	                    _this.setState({
	                        itemsPerPage: _this.state.itemsPerPage,
	                        dropdowndisplay: 'none',
	                        isButtonClicked: false
	                    });
	            };
	            this.updateItemsPerPage = function (itemsPerPage) {
	                _this.setState({
	                    itemsPerPage: itemsPerPage,
	                    dropdowndisplay: 'none',
	                    isButtonClicked: _this.state.isButtonClicked
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
	            return (React.createElement("div", {className: "btn-group dropup", style: { float: 'left' }}, React.createElement("button", {type: "button", className: "btn btn-default"}, this.state.itemsPerPage), React.createElement("button", {type: "button", className: "btn btn-default dropdown-toggle", dataToggle: "dropdown", onClick: this.toggleDropDown}, React.createElement("span", {className: "caret"}), React.createElement("span", {className: "sr-only"}, "Split button!")), React.createElement("ul", {className: "dropdown-menu", role: "menu", style: { display: this.state.dropdowndisplay }}, React.createElement("li", null, React.createElement("a", {href: "#", style: { cursor: 'pointer', paddingRight: 12 + 'px', paddingLeft: 12 + 'px' }, onClick: function () { this.updateItemsPerPage(10); }.bind(this)}, "10")), React.createElement("li", null, React.createElement("a", {href: "#", style: { cursor: 'pointer', paddingRight: 12 + 'px', paddingLeft: 12 + 'px' }, onClick: function () { this.updateItemsPerPage(20); }.bind(this)}, "20")), React.createElement("li", null, React.createElement("a", {href: "#", style: { cursor: 'pointer', paddingRight: 12 + 'px', paddingLeft: 12 + 'px' }, onClick: function () { this.updateItemsPerPage(30); }.bind(this)}, "30")), React.createElement("li", null, React.createElement("a", {href: "#", style: { cursor: 'pointer', paddingRight: 12 + 'px', paddingLeft: 12 + 'px' }, onClick: function () { this.updateItemsPerPage(40); }.bind(this)}, "40")), React.createElement("li", null, React.createElement("a", {href: "#", style: { cursor: 'pointer', paddingRight: 12 + 'px', paddingLeft: 12 + 'px' }, onClick: function () { this.updateItemsPerPage(50); }.bind(this)}, "50")))));
	        };
	        return ItemsPerPageSelector;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = ItemsPerPageSelector;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=itemsPerPageSelector.js.map

/***/ },
/* 35 */
/*!***************************************************************!*\
  !*** ./Scripts/app/components/common/itemListControlPanel.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2), __webpack_require__(/*! ./searchInput */ 36)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React, searchInput_1) {
	    "use strict";
	    var ItemListControlPanel = (function (_super) {
	        __extends(ItemListControlPanel, _super);
	        function ItemListControlPanel(props, context) {
	            var _this = this;
	            _super.call(this, props, context);
	            this.searchTextInputChangeHandler = function (text) {
	                _this.setState({ searchText: text });
	                setTimeout(function () {
	                    if (_this.state.searchText == text) {
	                        _this.props.onSearchTextChange(text);
	                    }
	                }, 1000);
	            };
	            this.props = props;
	            this.context = context;
	            this.state = {
	                searchText: ""
	            };
	        }
	        ItemListControlPanel.prototype.render = function () {
	            return (React.createElement("div", null, React.createElement("div", {className: "input-group"}, React.createElement("div", {className: "input-group-btn"}, React.createElement("button", {className: "btn btn-default", type: "button", onClick: this.props.onNewItem}, React.createElement("span", {className: "glyphicon glyphicon-plus"})), React.createElement("button", {className: "btn btn-default", type: "button", onClick: this.props.onItemDelete, disabled: !this.props.isDeleteEnable}, React.createElement("span", {className: "glyphicon glyphicon-trash"})), React.createElement("button", {className: "btn btn-default", type: "button", onClick: this.props.onRefresh}, React.createElement("span", {className: this.props.isUpdating ?
	                "glyphicon glyphicon-refresh glyphicon-refresh-animate" :
	                "glyphicon glyphicon-refresh"}))), React.createElement(searchInput_1.default, {text: "Поиск...", onChange: this.searchTextInputChangeHandler}))));
	        };
	        return ItemListControlPanel;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = ItemListControlPanel;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=itemListControlPanel.js.map

/***/ },
/* 36 */
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
	            var _this = this;
	            _super.apply(this, arguments);
	            this.handleChange = function (e) {
	                _this.props.onChange(e.target.value);
	            };
	        }
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
/* 37 */
/*!************************************************!*\
  !*** ./Scripts/app/components/common/alert.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React) {
	    "use strict";
	    var Alert = (function (_super) {
	        __extends(Alert, _super);
	        function Alert() {
	            _super.apply(this, arguments);
	        }
	        Alert.prototype.render = function () {
	            return (React.createElement("div", {class: "alert alert-" + this.props.alert.type + " alert-dismissible", role: "alert"}, React.createElement("button", {type: "button", class: "close", "data-dismiss": "alert", "aria-label": "Close"}, React.createElement("span", {"aria-hidden": "true"}, "×")), this.props.children));
	        };
	        return Alert;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = Alert;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=alert.js.map

/***/ },
/* 38 */
/*!***********************************************************!*\
  !*** ./Scripts/app/components/common/pendingAnimation.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React) {
	    "use strict";
	    var PendingAnimation = (function (_super) {
	        __extends(PendingAnimation, _super);
	        function PendingAnimation() {
	            _super.apply(this, arguments);
	        }
	        PendingAnimation.prototype.render = function () {
	            return (React.createElement("div", {style: { position: 'relative', display: 'table', margin: 0 + ' auto' }}, React.createElement("div", {style: { display: 'table-cell', verticalAlign: 'middle', zIndex: 1050, position: 'relative' }}, React.createElement("img", {src: "Content/loaders/spin.gif"})), React.createElement("div", {style: { display: 'table-cell', verticalAlign: 'middle', textAlign: 'center', zIndex: 1050 }}, this.props.children)));
	        };
	        return PendingAnimation;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = PendingAnimation;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=pendingAnimation.js.map

/***/ },
/* 39 */
/*!*******************************************************!*\
  !*** ./Scripts/app/components/common/pendingPanel.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React) {
	    "use strict";
	    var PendingPanel = (function (_super) {
	        __extends(PendingPanel, _super);
	        function PendingPanel() {
	            _super.apply(this, arguments);
	        }
	        PendingPanel.prototype.render = function () {
	            return (React.createElement("div", {className: "panel panel-default"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h2", {className: "panel-title"}, this.props.title)), React.createElement("div", {className: "panel-body"}, this.props.children)));
	        };
	        return PendingPanel;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = PendingPanel;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=pendingPanel.js.map

/***/ },
/* 40 */
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 41 */
/*!****************************************!*\
  !*** ./Scripts/app/components/main.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2), __webpack_require__(/*! ./mainSidebar */ 42), __webpack_require__(/*! ./mainContentSection */ 44), __webpack_require__(/*! ./componentType */ 29)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React, mainSidebar_1, mainContentSection_1, componentType_1) {
	    "use strict";
	    var tabList = [
	        { id: 1, name: 'Технологические процессы', linkName: 'processes', mode: "", type: componentType_1.default.TechProcessListPanel },
	        { id: 2, name: 'Технологические операции', linkName: 'operations', mode: "", type: componentType_1.default.TechOperationListPanel },
	        { id: 3, name: 'Технологические шаги', linkName: 'steps', mode: "", type: componentType_1.default.TechStepListPanel },
	        { id: 4, name: 'Инструменты', linkName: 'tools', mode: "", type: componentType_1.default.ToolListPanel },
	        { id: 5, name: 'Детали', linkName: 'parts', mode: "", type: componentType_1.default.PartListPanel }
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
/* 42 */
/*!***********************************************!*\
  !*** ./Scripts/app/components/mainSidebar.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2), __webpack_require__(/*! ./tabs */ 43)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React, tabs_1) {
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
/* 43 */
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2), __webpack_require__(/*! ../flux/actions/panelActions */ 10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React, panelActions_1) {
	    "use strict";
	    var Tab = (function (_super) {
	        __extends(Tab, _super);
	        function Tab(props, context) {
	            var _this = this;
	            _super.call(this, props, context);
	            this.clickHandler = function (event) {
	                event.preventDefault();
	                _this.props.onClick(_this.props.tab);
	            };
	            this.props = props;
	            this.context = context;
	            this.state = {};
	        }
	        Tab.prototype.render = function () {
	            return (React.createElement("li", {key: this.props.tab.id}, React.createElement("a", {className: this.props.mode, onClick: this.clickHandler}, this.props.children)));
	        };
	        return Tab;
	    }(React.Component));
	    var Tabs = (function (_super) {
	        __extends(Tabs, _super);
	        function Tabs(props, context) {
	            var _this = this;
	            _super.call(this, props, context);
	            this.onTabClick = function (tab) {
	                _this.setState({
	                    activeTabId: tab.id
	                });
	                panelActions_1.default.init(tab.type);
	            };
	            this.props = props;
	            this.context = context;
	            this.state = {
	                activeTabId: 0
	            };
	        }
	        Tabs.prototype.getRouteLinks = function () {
	            return (this.props.tabList.map(function (tab) {
	                return (React.createElement("li", {key: tab.id}, React.createElement(ReactRouter.Link, {activeClassName: 'active', to: '/' + tab.linkName}, tab.name)));
	            }.bind(this)));
	        };
	        Tabs.prototype.getSimpleLinks = function () {
	            var _this = this;
	            return (this.props.tabList.map(function (tab, index) {
	                return (React.createElement(Tab, {key: index, tab: tab, mode: tab.id == _this.state.activeTabId ? 'active' : 'unactive', onClick: _this.onTabClick}, tab.name));
	            }));
	        };
	        Tabs.prototype.render = function () {
	            return (React.createElement("ul", {className: "nav nav-sidebar"}, this.getSimpleLinks()));
	        };
	        return Tabs;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = Tabs;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=tabs.js.map

/***/ },
/* 44 */
/*!******************************************************!*\
  !*** ./Scripts/app/components/mainContentSection.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2), __webpack_require__(/*! ../flux/stores/panelStore */ 45), __webpack_require__(/*! ./componentFactory */ 46)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React, panelStore_1, componentFactory_1) {
	    "use strict";
	    var MainContentSection = (function (_super) {
	        __extends(MainContentSection, _super);
	        function MainContentSection(props, context) {
	            var _this = this;
	            _super.call(this, props, context);
	            this.handlePanelsChange = function () {
	                _this.setState({
	                    panels: panelStore_1.default.getPanels()
	                });
	            };
	            this.props = props;
	            this.context = context;
	            this.state = {
	                panels: []
	            };
	        }
	        MainContentSection.prototype.componentWillMount = function () {
	            panelStore_1.default.addChangeListener(this.handlePanelsChange);
	        };
	        MainContentSection.prototype.componentWillUnmount = function () {
	            panelStore_1.default.removeChangeListener(this.handlePanelsChange);
	        };
	        MainContentSection.prototype.componentDidMount = function () {
	            //PanelActions.init(ComponentType.MainPanel);
	        };
	        MainContentSection.prototype.render = function () {
	            var panels = [];
	            panels = this.state.panels.map(function (panel, index) {
	                var Component = componentFactory_1.default.getComponent(panel.type);
	                return React.createElement("div", {key: panel.id, style: { display: 'inline-block', height: 100 + '%' }}, React.createElement(Component, {key: panel.id, componentId: panel.id, params: panel.params}));
	            });
	            return (React.createElement("div", {className: "col-lg-10 col-lg-offset-2 col-md-9 col-md-offset-3 col-sm-9 col-sm-offset-3 col-xs-8 col-xs-offset-4 full-height", id: 'infopanel', style: { overflowX: 'auto', whiteSpace: 'nowrap' }}, React.createElement("div", {className: "outer"}, panels)));
	        };
	        return MainContentSection;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = MainContentSection;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=mainContentSection.js.map

/***/ },
/* 45 */
/*!***********************************************!*\
  !*** ./Scripts/app/flux/stores/panelStore.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../dispatcher/appDispatcher */ 5), __webpack_require__(/*! eventemitter3 */ 21), __webpack_require__(/*! ../actions/actionSourceTypes */ 7), __webpack_require__(/*! ../actions/panelActionTypes */ 11), __webpack_require__(/*! ../../utils/utils */ 18)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, appDispatcher_1, EventEmitter, actionSourceTypes_1, panelActionTypes_1, utils_1) {
	    "use strict";
	    var CHANGE_EVENT = "PANEL_CHANGE_EVENT";
	    var _panels = [];
	    function _initialize(panelType, params) {
	        //_panels = [];
	        var panelId = utils_1.default.uuid();
	        var panel = { type: panelType, id: panelId, params: params };
	        _panels.push(panel);
	    }
	    function _addPanel(callerPanelId, panelType, params) {
	        var panelId = utils_1.default.uuid();
	        var panel = { type: panelType, id: panelId, params: params };
	        var callerPanel = _panels.filter(function (panel, index) { return panel.id == callerPanelId; })[0];
	        var indexOfCallerPanel = _panels.indexOf(callerPanel);
	        _panels.splice(indexOfCallerPanel + 1, 0, panel);
	    }
	    function _removePanel(id) {
	        for (var i = 0; i < _panels.length; i++) {
	            if (_panels[i].id === id) {
	                _panels.splice(i, 1);
	                break;
	            }
	        }
	    }
	    var PanelStoreStatic = (function (_super) {
	        __extends(PanelStoreStatic, _super);
	        function PanelStoreStatic() {
	            _super.apply(this, arguments);
	        }
	        PanelStoreStatic.prototype.getPanels = function () {
	            return _panels;
	        };
	        PanelStoreStatic.prototype.emitChange = function () {
	            this.emit(CHANGE_EVENT);
	        };
	        /**
	         * @param {function} callback
	         */
	        PanelStoreStatic.prototype.addChangeListener = function (callback) {
	            this.on(CHANGE_EVENT, callback);
	        };
	        /**
	         * @param {function} callback
	         */
	        PanelStoreStatic.prototype.removeChangeListener = function (callback) {
	            this.removeListener(CHANGE_EVENT, callback);
	        };
	        return PanelStoreStatic;
	    }(EventEmitter));
	    var PanelStore = new PanelStoreStatic();
	    appDispatcher_1.default.register(function (payload) {
	        if (payload.actionSource != actionSourceTypes_1.default.PANEL)
	            return;
	        switch (payload.actionType) {
	            case panelActionTypes_1.default.PANEL_OPEN:
	                _addPanel(payload.callerPanelId, payload.panelType, payload.params);
	                PanelStore.emitChange();
	                break;
	            case panelActionTypes_1.default.PANEL_CLOSE:
	                _removePanel(payload.callerPanelId);
	                PanelStore.emitChange();
	                break;
	            case panelActionTypes_1.default.PANEL_INIT:
	                _initialize(payload.panelType);
	                PanelStore.emitChange();
	                break;
	            default:
	        }
	    });
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = PanelStore;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=panelStore.js.map

/***/ },
/* 46 */
/*!****************************************************!*\
  !*** ./Scripts/app/components/componentFactory.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../typings/tsd.d.ts" />
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./mainPanel */ 50), __webpack_require__(/*! ./partList */ 51), __webpack_require__(/*! ./toolListPanel */ 3), __webpack_require__(/*! ./toolEditForm */ 47), __webpack_require__(/*! ./techStepList */ 58), __webpack_require__(/*! ./techOperationList */ 62), __webpack_require__(/*! ./techProcessList */ 66), __webpack_require__(/*! ./componentType */ 29)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, mainPanel_1, partList_1, toolListPanel_1, toolEditForm_1, techStepList_1, techOperationList_1, techProcessList_1, componentType_1) {
	    "use strict";
	    var ComponentFactory = (function () {
	        function ComponentFactory() {
	        }
	        ComponentFactory.getComponent = function (componentType) {
	            switch (componentType) {
	                case componentType_1.default.MainPanel:
	                    return mainPanel_1.default;
	                case componentType_1.default.PartListPanel:
	                    return partList_1.default;
	                case componentType_1.default.ToolListPanel:
	                    return toolListPanel_1.default;
	                case componentType_1.default.TechStepListPanel:
	                    return techStepList_1.default;
	                case componentType_1.default.TechOperationListPanel:
	                    return techOperationList_1.default;
	                case componentType_1.default.TechProcessListPanel:
	                    return techProcessList_1.default;
	                case componentType_1.default.ToolEditPanel:
	                    return toolEditForm_1.default;
	                default:
	            }
	        };
	        return ComponentFactory;
	    }());
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = ComponentFactory;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=componentFactory.js.map

/***/ },
/* 47 */
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2), __webpack_require__(/*! ../flux/stores/secondToolStore */ 19), __webpack_require__(/*! ../flux/actions/panelActions */ 10), __webpack_require__(/*! ../flux/actions/toolActionCreator */ 24), __webpack_require__(/*! ./common/textInput */ 48), __webpack_require__(/*! ./common/pendingAnimation */ 38), __webpack_require__(/*! ./common/panel */ 33), __webpack_require__(/*! ./common/dialogContainer */ 31), __webpack_require__(/*! ./common/pendingPanel */ 39)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React, secondToolStore_1, panelActions_1, toolActionCreator_1, textInput_1, pendingAnimation_1, panel_1, dialogContainer_1, pendingPanel_1) {
	    "use strict";
	    var ToolEditForm = (function (_super) {
	        __extends(ToolEditForm, _super);
	        function ToolEditForm(props, context) {
	            var _this = this;
	            _super.call(this, props, context);
	            this.handleEditToolChange = function () {
	                var state = secondToolStore_1.default.getState(_this.props.componentId);
	                _this.setState({
	                    tool: state.entity,
	                    isRedoAvailable: state.isRedoAvailable,
	                    isUndoAvailable: state.isUndoAvailable,
	                    isValid: _this.toolValidate(state.entity),
	                    isSaving: state.isSaving
	                });
	            };
	            this.nameValidate = function (value) {
	                if (value == "")
	                    return false;
	                return true;
	            };
	            this.priceValidate = function (value) {
	                var price = parseFloat(value);
	                return !isNaN(price);
	            };
	            this.toolValidate = function (tool) {
	                if (!_this.nameValidate(tool.name))
	                    return false;
	                if (!_this.priceValidate(tool.price))
	                    return false;
	                return true;
	            };
	            this.handleSubmit = function (e) {
	                e.preventDefault();
	                toolActionCreator_1.default.save(_this.props.componentId, _this.state.tool);
	            };
	            this.registerInput = function (input) {
	                _this.inputs[input.props.name] = input;
	            };
	            this.setToolName = function (event) {
	                var tool = {
	                    id: _this.state.tool.id,
	                    name: event.target.value,
	                    price: _this.state.tool.price
	                };
	                _this.onToolChange(tool);
	            };
	            this.setToolPrice = function (event) {
	                var tool = {
	                    id: _this.state.tool.id,
	                    name: _this.state.tool.name,
	                    price: event.target.value
	                };
	                _this.onToolChange(tool);
	            };
	            this.closePanelClickHandler = function () {
	                panelActions_1.default.close(_this.props.componentId);
	            };
	            this.undoClickHandler = function () {
	                toolActionCreator_1.default.undo(_this.props.componentId);
	            };
	            this.redoClickHandler = function () {
	                toolActionCreator_1.default.redo(_this.props.componentId);
	            };
	            this.onToolChange = function (newTool) {
	                toolActionCreator_1.default.change(_this.props.componentId, newTool);
	            };
	            this.errorHandler = function () {
	            };
	            this.props = props;
	            this.context = context;
	            this.state = {
	                tool: props.params.tool,
	                isRedoAvailable: false,
	                isUndoAvailable: false,
	                isValid: this.toolValidate(props.params.tool),
	                isSaving: false,
	            };
	        }
	        ToolEditForm.prototype.componentWillMount = function () {
	            this.inputs = {};
	            secondToolStore_1.default.addChangeListener(this.handleEditToolChange, this.props.componentId);
	        };
	        ToolEditForm.prototype.componentWillUnmount = function () {
	            secondToolStore_1.default.removeChangeListener(this.handleEditToolChange, this.props.componentId);
	        };
	        ToolEditForm.prototype.componentDidMount = function () {
	            toolActionCreator_1.default.initEntityState(this.props.componentId, this.state.tool);
	        };
	        ToolEditForm.prototype.render = function () {
	            return (React.createElement(panel_1.default, {title: "Редактирование инструмента", size: "inner", onClosePanel: this.closePanelClickHandler}, React.createElement("div", {className: "panel-body", style: { display: 'flex', flexDirection: 'column' }}, React.createElement(dialogContainer_1.default, {isShow: this.state.isSaving}, React.createElement(pendingPanel_1.default, {title: "Сохранение инструмента"}, React.createElement(pendingAnimation_1.default, null, React.createElement("h4", null, "Пожалуйста, подождите."), React.createElement("h4", null, "Идет сохранение.")))), React.createElement("form", {role: "form", onSubmit: this.handleSubmit}, React.createElement("div", {className: "form-group"}, React.createElement("label", {className: "control-label"}, "Наименование: "), React.createElement(textInput_1.default, {name: "toolName", text: "", value: this.state.tool.name, required: true, onChange: this.setToolName, onError: this.errorHandler, errorMessage: "Данное наименование недействительно", emptyMessage: "Наименование обязательно для ввода", register: this.registerInput, validate: this.nameValidate, minCharacters: 1, uniqueName: ''})), React.createElement("div", {className: "form-group"}, React.createElement("label", {className: "control-label"}, "Цена: "), React.createElement(textInput_1.default, {name: "toolPrice", text: "", value: String(this.state.tool.price), required: true, onChange: this.setToolPrice, onError: this.errorHandler, errorMessage: "Данное значение недействительно", emptyMessage: "Цена обязательна для ввода", register: this.registerInput, validate: this.priceValidate, minCharacters: 1, uniqueName: ''})), React.createElement("div", {className: "form-group"}, React.createElement("div", {className: "btn-toolbar"}, React.createElement("button", {className: "btn btn-primary", type: "submit", disabled: !this.state.isValid}, "Сохранить"), React.createElement("button", {className: "btn btn-default", type: "button", onClick: this.undoClickHandler, disabled: !this.state.isUndoAvailable}, "Отменить"), React.createElement("button", {className: "btn btn-default", type: "button", onClick: this.redoClickHandler, disabled: !this.state.isRedoAvailable}, "Вернуть")))))));
	        };
	        return ToolEditForm;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = ToolEditForm;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=toolEditForm.js.map

/***/ },
/* 48 */
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2), __webpack_require__(/*! ./inputError */ 49)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React, inputError_1) {
	    "use strict";
	    var TextInput = (function (_super) {
	        __extends(TextInput, _super);
	        function TextInput(props, context) {
	            var _this = this;
	            _super.call(this, props, context);
	            this.handleChange = function (event) {
	                _this.validation(event.target.value, _this.props.validate(event.target.value));
	                _this.props.onChange(event);
	            };
	            this.handleBlur = function (event) {
	                //Complete final validation from parent element when complete
	                var valid = _this.props.validate(event.target.value);
	                //pass the result to the local validation element for displaying the error
	                _this.validation(event.target.value, valid);
	            };
	            this.props = props;
	            this.context = context;
	            this.state = {
	                valid: false,
	                errorMessage: "Input is invalid",
	                errorVisible: false
	            };
	        }
	        TextInput.prototype.componentDidMount = function () {
	            this.props.register(this);
	        };
	        TextInput.prototype.componentWillReceiveProps = function (nextProps) {
	            console.log("receive");
	            this.validation(nextProps.value, this.props.validate(nextProps.value));
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
	            if (this.props.required && jQuery.isEmptyObject(value)) {
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
	                valid: valid,
	                errorMessage: message,
	                errorVisible: errorVisible
	            });
	        };
	        TextInput.prototype.render = function () {
	            console.log("render");
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
/* 49 */
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

/***/ },
/* 50 */
/*!*********************************************!*\
  !*** ./Scripts/app/components/mainPanel.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React) {
	    "use strict";
	    var MainPanel = (function (_super) {
	        __extends(MainPanel, _super);
	        function MainPanel() {
	            _super.apply(this, arguments);
	        }
	        MainPanel.prototype.render = function () {
	            return (React.createElement("div", {className: "inner", style: { marginBottom: 0 + 'px', display: 'flex', flexDirection: 'column' }}, "Hi!I'm a main panel. Component id: ", this.props.componentId));
	        };
	        return MainPanel;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = MainPanel;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=mainPanel.js.map

/***/ },
/* 51 */
/*!********************************************!*\
  !*** ./Scripts/app/components/partList.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2), __webpack_require__(/*! ../flux/stores/partStore */ 52), __webpack_require__(/*! ../constants/pageConstants */ 14), __webpack_require__(/*! ../flux/actions/partActions */ 57), __webpack_require__(/*! ../managers/pageParamsManager */ 12), __webpack_require__(/*! ../managers/navigationManager */ 15), __webpack_require__(/*! ./common/tableRow */ 17), __webpack_require__(/*! ./common/searchInput */ 36), __webpack_require__(/*! ./common/itemsPerPageSelector */ 34)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React, partStore_1, pageConstants_1, partActions_1, pageParamsManager_1, navigationManager_1, tableRow_1, searchInput_1, itemsPerPageSelector_1) {
	    "use strict";
	    var PartList = (function (_super) {
	        __extends(PartList, _super);
	        function PartList(props, context) {
	            var _this = this;
	            _super.call(this, props, context);
	            this.handlePartsChange = function () {
	                _this.setState({
	                    parts: partStore_1.default.getAll(),
	                    currentPart: null,
	                    isConfirmDeleting: false,
	                    partAmount: partStore_1.default.getPartAmount(),
	                    partsPerPage: partStore_1.default.getPartsPerPage()
	                });
	            };
	            this.changeCurrent = function (part) {
	                _this.setState({
	                    parts: _this.state.parts,
	                    currentPart: part,
	                    isConfirmDeleting: _this.state.isConfirmDeleting,
	                    partAmount: _this.state.partAmount,
	                    partsPerPage: _this.state.partsPerPage
	                });
	            };
	            this.partRowDoubleClick = function (part) {
	                navigationManager_1.default.openPartEditor(part.id);
	            };
	            this.newPartBtnClickHandler = function () {
	                navigationManager_1.default.openPartEditor(0);
	            };
	            this.handleDeleteSuccess = function () {
	                partActions_1.default.remove(_this.state.currentPart.id);
	            };
	            this.handleDeleteCancel = function () {
	                _this.setState({
	                    parts: _this.state.parts,
	                    currentPart: _this.state.currentPart,
	                    isConfirmDeleting: !_this.state.isConfirmDeleting,
	                    partAmount: _this.state.partAmount,
	                    partsPerPage: _this.state.partsPerPage
	                });
	            };
	            this.handlePartsPerPageChange = function (partsPerPage) {
	                pageParamsManager_1.default.changePageSize(partsPerPage);
	                partActions_1.default.changePartsPerPage(partsPerPage);
	            };
	            this.handlePartPageChange = function (page) {
	                pageParamsManager_1.default.changePage(page);
	                partActions_1.default.changePartPage(page);
	            };
	            this.handlePartSearchTextChange = function (text) {
	                pageParamsManager_1.default.changeSearchText(text);
	                partActions_1.default.changePartSearchText(text);
	            };
	            this.refreshBtnClickHandler = function (text) {
	                partActions_1.default.init(pageParamsManager_1.default.getPage(), pageParamsManager_1.default.getPageSize(), pageParamsManager_1.default.getSearchText());
	                _this.setState({
	                    parts: [],
	                    currentPart: null,
	                    isConfirmDeleting: false,
	                    partAmount: 0,
	                    partsPerPage: _this.state.partsPerPage
	                });
	            };
	            this.props = props;
	            this.context = context;
	            this.state = {
	                parts: [],
	                currentPart: null,
	                isConfirmDeleting: false,
	                partAmount: 0,
	                partsPerPage: pageConstants_1.default.ITEMS_PER_PAGE_INIT
	            };
	        }
	        PartList.prototype.componentWillMount = function () {
	            partStore_1.default.addChangePartsListener(this.handlePartsChange);
	        };
	        PartList.prototype.componentWillUnmount = function () {
	            partStore_1.default.removeChangePartsListener(this.handlePartsChange);
	        };
	        PartList.prototype.componentDidMount = function () {
	            partActions_1.default.init(pageParamsManager_1.default.getPage(), pageParamsManager_1.default.getPageSize(), pageParamsManager_1.default.getSearchText());
	        };
	        PartList.prototype.render = function () {
	            var partRows = [];
	            for (var key in this.state.parts) {
	                var part = this.state.parts[key];
	                partRows.push(React.createElement(tableRow_1.default, {key: key, item: part, isCurrent: this.state.currentPart == part, changeCurrent: this.changeCurrent, rowDoubleClickHandler: this.partRowDoubleClick}, React.createElement("td", {style: { width: 25 + '%' }}, part.id), React.createElement("td", {style: { width: 75 + '%' }}, part.name)));
	            }
	            return (React.createElement("div", {className: "panel panel-default inner", style: { marginBottom: 0 + 'px', display: 'flex', flexDirection: 'column' }}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", null, "Детали")), React.createElement("div", {className: "panel-body", style: { display: 'flex', flexDirection: 'column' }}, this.state.isConfirmDeleting ?
	                null
	                :
	                    React.createElement("div", {className: "input-group"}, React.createElement("div", {className: "input-group-btn"}, React.createElement("button", {className: "btn btn-default", type: "button", onClick: this.newPartBtnClickHandler}, React.createElement("span", {className: "glyphicon glyphicon-plus"})), React.createElement("button", {className: "btn btn-default", type: "button", onClick: function () { this.setState({ currentPart: this.state.currentPart, isConfirmDeleting: true }); }.bind(this)}, React.createElement("span", {className: "glyphicon glyphicon-trash"})), React.createElement("button", {className: "btn btn-default", type: "button", onClick: this.refreshBtnClickHandler}, React.createElement("span", {className: "glyphicon glyphicon-refresh"}))), React.createElement(searchInput_1.default, {text: "Поиск...", onChange: function (text) { this.handlePartSearchTextChange(text); }.bind(this)}), React.createElement(itemsPerPageSelector_1.default, {onChange: this.handlePartsPerPageChange})), React.createElement("div", {style: { marginBottom: 10 + 'px', display: 'flex', flexDirection: 'column' }}, React.createElement("div", {style: { overflowY: 'auto' }}, React.createElement("table", {className: "table table-bordered", style: { marginBottom: 1 + 'px' }}, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {style: { width: 25 + '%' }}, "ID"), React.createElement("th", {style: { width: 75 + '%' }}, "Наименование"))), React.createElement("tbody", null, partRows)))))));
	        };
	        return PartList;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = PartList;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=partList.js.map

/***/ },
/* 52 */
/*!**********************************************!*\
  !*** ./Scripts/app/flux/stores/partStore.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! jquery */ 55), __webpack_require__(/*! ../dispatcher/appDispatcher */ 5), __webpack_require__(/*! ../actions/actionSourceTypes */ 7), __webpack_require__(/*! ../actions/partActionTypes */ 56), __webpack_require__(/*! ../actions/errorActions */ 53), __webpack_require__(/*! ../../constants/pageConstants */ 14), __webpack_require__(/*! ../../managers/navigationManager */ 15), __webpack_require__(/*! object-assign */ 28), __webpack_require__(/*! eventemitter3 */ 21)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, $, appDispatcher_1, actionSourceTypes_1, partActionTypes_1, errorActions_1, pageConstants_1, navigationManager_1, assign, EventEmitter) {
	    "use strict";
	    var CHANGE_PARTS_EVENT = 'change_parts';
	    var CHANGE_EDITPART_EVENT = 'change_editpart';
	    var _parts = new Array();
	    var _part;
	    var _partSearchText = "";
	    var _totalPartAmount = 0;
	    var _partsPerPage = pageConstants_1.default.ITEMS_PER_PAGE_INIT;
	    var _currentPartPage = 0;
	    function _loadParts() {
	        $.get(location.origin + "/api/parts?search=" + _partSearchText + "&page=" + _currentPartPage + "&pageSize=" + _partsPerPage, function (partListModel) {
	            _totalPartAmount = partListModel.partAmount;
	            _parts = new Array();
	            partListModel.parts.forEach(function (part) {
	                _parts[part.id] = part;
	            });
	            PartStore.emitChangeParts();
	        });
	    }
	    function _loadPart(id) {
	        if (id == 0) {
	            _part = { id: 0, name: "", price: 0 };
	            PartStore.emitChangeEditPart();
	            return;
	        }
	        if (_parts[id]) {
	            _part = _parts[id];
	            PartStore.emitChangeEditPart();
	        }
	        else {
	            $.ajax({
	                url: location.origin + "/api/parts/" + id,
	                type: 'GET',
	                success: function (part) {
	                    _part = part;
	                    PartStore.emitChangeEditPart();
	                },
	                error: function (data) {
	                    errorActions_1.default.received(data.responseJSON);
	                }
	            });
	        }
	    }
	    function _addPart(part) {
	        $.ajax({
	            url: location.origin + '/api/parts',
	            dataType: 'json',
	            type: 'PUT',
	            data: {
	                id: part.id,
	                name: part.name,
	                price: part.price,
	                __RequestVerificationToken: antiForgeryToken
	            },
	            success: function (part) {
	                _part = part;
	                if (_parts[part.id]) {
	                    _parts[part.id] = assign({}, _parts[part.id], part);
	                    PartStore.emitChangeParts();
	                }
	                navigationManager_1.default.openPartEditor(part.id);
	            },
	            error: function (xhr, status, err) {
	                console.error(this.props.url, status, err.toString());
	            }.bind(this)
	        });
	    }
	    function _deletePart(id) {
	        $.ajax({
	            url: location.origin + '/api/parts/' + id,
	            dataType: 'json',
	            type: 'DELETE',
	            data: { __RequestVerificationToken: antiForgeryToken },
	            success: function (id) {
	                _loadParts();
	            },
	            error: function (xhr, status, err) {
	                console.error(this.props.url, status, err.toString());
	            }
	        });
	    }
	    function _updatePart(part) {
	        $.ajax({
	            url: location.origin + '/api/parts',
	            dataType: 'json',
	            type: 'POST',
	            data: {
	                id: part.id,
	                name: part.name,
	                price: part.price,
	                __RequestVerificationToken: antiForgeryToken
	            },
	            success: function (part) {
	                if (_parts[part.id]) {
	                    _parts[part.id] = assign({}, _parts[part.id], part);
	                    PartStore.emitChangeParts();
	                }
	            },
	            error: function (xhr, status, err) {
	                console.error(this.props.url, status, err.toString());
	            }
	        });
	    }
	    function _init(currentPage, partsPerPage, searchText) {
	        _partsPerPage = partsPerPage;
	        _currentPartPage = currentPage;
	        _partSearchText = searchText;
	        _loadParts();
	    }
	    var PartStoreStatic = (function (_super) {
	        __extends(PartStoreStatic, _super);
	        function PartStoreStatic() {
	            _super.apply(this, arguments);
	        }
	        PartStoreStatic.prototype.getAll = function () {
	            return _parts;
	        };
	        PartStoreStatic.prototype.getPartAmount = function () {
	            return _totalPartAmount;
	        };
	        PartStoreStatic.prototype.getPartsPerPage = function () {
	            return _partsPerPage;
	        };
	        PartStoreStatic.prototype.getEditPart = function () {
	            return _part;
	        };
	        PartStoreStatic.prototype.emitChangeParts = function () {
	            this.emit(CHANGE_PARTS_EVENT);
	        };
	        PartStoreStatic.prototype.emitChangeEditPart = function () {
	            this.emit(CHANGE_EDITPART_EVENT);
	        };
	        /**
	         * @param {function} callback
	         */
	        PartStoreStatic.prototype.addChangeEditPartListener = function (callback) {
	            this.on(CHANGE_EDITPART_EVENT, callback);
	        };
	        /**
	         * @param {function} callback
	         */
	        PartStoreStatic.prototype.removeChangeEditPartListener = function (callback) {
	            this.removeListener(CHANGE_EDITPART_EVENT, callback);
	        };
	        /**
	         * @param {function} callback
	         */
	        PartStoreStatic.prototype.addChangePartsListener = function (callback) {
	            this.on(CHANGE_PARTS_EVENT, callback);
	        };
	        /**
	         * @param {function} callback
	         */
	        PartStoreStatic.prototype.removeChangePartsListener = function (callback) {
	            this.removeListener(CHANGE_PARTS_EVENT, callback);
	        };
	        return PartStoreStatic;
	    }(EventEmitter));
	    var PartStore = new PartStoreStatic();
	    appDispatcher_1.default.register(function (payload) {
	        if (payload.actionSource != actionSourceTypes_1.default.PART)
	            return;
	        switch (payload.actionType) {
	            case partActionTypes_1.default.PART_INIT:
	                _init(payload.currentPage, payload.pageSize, payload.searchText);
	                break;
	            case partActionTypes_1.default.PART_LOAD_EDIT:
	                _loadPart(payload.id);
	                break;
	            case partActionTypes_1.default.PART_CREATE:
	                _addPart(payload.part);
	                break;
	            case partActionTypes_1.default.PART_UPDATE:
	                _updatePart(payload.part);
	                break;
	            case partActionTypes_1.default.PART_DELETE:
	                _deletePart(payload.id);
	                break;
	            case partActionTypes_1.default.PART_PAGE_CHANGE:
	                _currentPartPage = payload.currentPage;
	                _loadParts();
	                break;
	            case partActionTypes_1.default.PARTS_PER_PAGE_CHANGE:
	                _partsPerPage = payload.pageSize;
	                _loadParts();
	                break;
	            case partActionTypes_1.default.PART_SEARCH_TEXT_CHANGE:
	                _partSearchText = payload.searchText;
	                _loadParts();
	                break;
	            default:
	        }
	    });
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = PartStore;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=partStore.js.map

/***/ },
/* 53 */
/*!**************************************************!*\
  !*** ./Scripts/app/flux/actions/errorActions.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../../typings/tsd.d.ts" />
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../dispatcher/appDispatcher */ 5), __webpack_require__(/*! ./actionSourceTypes */ 7), __webpack_require__(/*! ./errorActionTypes */ 54)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, appDispatcher_1, actionSourceTypes_1, errorActionTypes_1) {
	    "use strict";
	    var ErrorActionsStatic = (function () {
	        function ErrorActionsStatic() {
	        }
	        ErrorActionsStatic.prototype.received = function (message) {
	            appDispatcher_1.default.dispatch({
	                actionType: errorActionTypes_1.default.RECEIVE_ERROR_MESSAGE,
	                actionSource: actionSourceTypes_1.default.ERROR,
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
/* 54 */
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
/* 55 */
/*!********************!*\
  !*** external "$" ***!
  \********************/
/***/ function(module, exports) {

	module.exports = $;

/***/ },
/* 56 */
/*!*****************************************************!*\
  !*** ./Scripts/app/flux/actions/partActionTypes.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    "use strict";
	    var PartActionTypes;
	    (function (PartActionTypes) {
	        PartActionTypes[PartActionTypes["PART_INIT"] = 0] = "PART_INIT";
	        PartActionTypes[PartActionTypes["PART_LOAD_EDIT"] = 1] = "PART_LOAD_EDIT";
	        PartActionTypes[PartActionTypes["PART_CREATE"] = 2] = "PART_CREATE";
	        PartActionTypes[PartActionTypes["PART_DELETE"] = 3] = "PART_DELETE";
	        PartActionTypes[PartActionTypes["PART_UPDATE"] = 4] = "PART_UPDATE";
	        PartActionTypes[PartActionTypes["PART_PAGE_CHANGE"] = 5] = "PART_PAGE_CHANGE";
	        PartActionTypes[PartActionTypes["PARTS_PER_PAGE_CHANGE"] = 6] = "PARTS_PER_PAGE_CHANGE";
	        PartActionTypes[PartActionTypes["PART_SEARCH_TEXT_CHANGE"] = 7] = "PART_SEARCH_TEXT_CHANGE";
	    })(PartActionTypes || (PartActionTypes = {}));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = PartActionTypes;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=partActionTypes.js.map

/***/ },
/* 57 */
/*!*************************************************!*\
  !*** ./Scripts/app/flux/actions/partActions.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../../typings/tsd.d.ts" />
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../dispatcher/appDispatcher */ 5), __webpack_require__(/*! ./actionSourceTypes */ 7), __webpack_require__(/*! ./partActionTypes */ 56)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, appDispatcher_1, actionSourceTypes_1, partActionTypes_1) {
	    "use strict";
	    var PartActionsStatic = (function () {
	        function PartActionsStatic() {
	        }
	        PartActionsStatic.prototype.init = function (currentPage, pageSize, searchText) {
	            appDispatcher_1.default.dispatch({
	                actionType: partActionTypes_1.default.PART_INIT,
	                actionSource: actionSourceTypes_1.default.PART,
	                currentPage: currentPage,
	                pageSize: pageSize,
	                searchText: searchText
	            });
	        };
	        PartActionsStatic.prototype.loadEditPart = function (id) {
	            appDispatcher_1.default.dispatch({
	                actionType: partActionTypes_1.default.PART_LOAD_EDIT,
	                actionSource: actionSourceTypes_1.default.PART,
	                id: id
	            });
	        };
	        PartActionsStatic.prototype.create = function (part) {
	            appDispatcher_1.default.dispatch({
	                actionType: partActionTypes_1.default.PART_CREATE,
	                actionSource: actionSourceTypes_1.default.PART,
	                part: part
	            });
	        };
	        PartActionsStatic.prototype.update = function (part) {
	            appDispatcher_1.default.dispatch({
	                actionType: partActionTypes_1.default.PART_UPDATE,
	                actionSource: actionSourceTypes_1.default.PART,
	                part: part
	            });
	        };
	        PartActionsStatic.prototype.remove = function (id) {
	            appDispatcher_1.default.dispatch({
	                actionType: partActionTypes_1.default.PART_DELETE,
	                actionSource: actionSourceTypes_1.default.PART,
	                id: id
	            });
	        };
	        PartActionsStatic.prototype.changePartPage = function (page) {
	            appDispatcher_1.default.dispatch({
	                actionType: partActionTypes_1.default.PART_PAGE_CHANGE,
	                actionSource: actionSourceTypes_1.default.PART,
	                currentPage: page
	            });
	        };
	        PartActionsStatic.prototype.changePartsPerPage = function (partsPerPage) {
	            appDispatcher_1.default.dispatch({
	                actionType: partActionTypes_1.default.PARTS_PER_PAGE_CHANGE,
	                actionSource: actionSourceTypes_1.default.PART,
	                pageSize: partsPerPage
	            });
	        };
	        PartActionsStatic.prototype.changePartSearchText = function (text) {
	            appDispatcher_1.default.dispatch({
	                actionType: partActionTypes_1.default.PART_SEARCH_TEXT_CHANGE,
	                actionSource: actionSourceTypes_1.default.PART,
	                searchText: text
	            });
	        };
	        return PartActionsStatic;
	    }());
	    var PartActions = new PartActionsStatic();
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = PartActions;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=partActions.js.map

/***/ },
/* 58 */
/*!************************************************!*\
  !*** ./Scripts/app/components/techStepList.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2), __webpack_require__(/*! ../flux/stores/techStepStore */ 59), __webpack_require__(/*! ../constants/pageConstants */ 14), __webpack_require__(/*! ../flux/actions/techStepActions */ 61), __webpack_require__(/*! ../managers/pageParamsManager */ 12), __webpack_require__(/*! ../managers/navigationManager */ 15), __webpack_require__(/*! ./common/tableRow */ 17), __webpack_require__(/*! ./common/searchInput */ 36), __webpack_require__(/*! ./common/itemsPerPageSelector */ 34)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React, techStepStore_1, pageConstants_1, techStepActions_1, pageParamsManager_1, navigationManager_1, tableRow_1, searchInput_1, itemsPerPageSelector_1) {
	    "use strict";
	    var TechStepList = (function (_super) {
	        __extends(TechStepList, _super);
	        function TechStepList(props, context) {
	            var _this = this;
	            _super.call(this, props, context);
	            this.handleTechStepsChange = function () {
	                _this.setState({
	                    techSteps: techStepStore_1.default.getAll(),
	                    currentTechStep: null,
	                    isConfirmDeleting: false,
	                    techStepAmount: techStepStore_1.default.getTechStepAmount(),
	                    techStepsPerPage: techStepStore_1.default.getTechStepsPerPage()
	                });
	            };
	            this.changeCurrent = function (techStep) {
	                _this.setState({
	                    techSteps: _this.state.techSteps,
	                    currentTechStep: techStep,
	                    isConfirmDeleting: _this.state.isConfirmDeleting,
	                    techStepAmount: _this.state.techStepAmount,
	                    techStepsPerPage: _this.state.techStepsPerPage
	                });
	            };
	            this.techStepRowDoubleClick = function (techStep) {
	                navigationManager_1.default.openTechStepEditor(techStep.id);
	            };
	            this.newTechStepBtnClickHandler = function () {
	                navigationManager_1.default.openTechStepEditor(0);
	            };
	            this.handleDeleteSuccess = function () {
	                techStepActions_1.default.remove(_this.state.currentTechStep.id);
	            };
	            this.handleDeleteCancel = function () {
	                _this.setState({
	                    techSteps: _this.state.techSteps,
	                    currentTechStep: _this.state.currentTechStep,
	                    isConfirmDeleting: !_this.state.isConfirmDeleting,
	                    techStepAmount: _this.state.techStepAmount,
	                    techStepsPerPage: _this.state.techStepsPerPage
	                });
	            };
	            this.handleTechStepsPerPageChange = function (techStepsPerPage) {
	                pageParamsManager_1.default.changePageSize(techStepsPerPage);
	                techStepActions_1.default.changeTechStepsPerPage(techStepsPerPage);
	            };
	            this.handleTechStepPageChange = function (page) {
	                pageParamsManager_1.default.changePage(page);
	                techStepActions_1.default.changeTechStepPage(page);
	            };
	            this.handleTechStepSearchTextChange = function (text) {
	                pageParamsManager_1.default.changeSearchText(text);
	                techStepActions_1.default.changeTechStepSearchText(text);
	            };
	            this.refreshBtnClickHandler = function (text) {
	                techStepActions_1.default.init(pageParamsManager_1.default.getPage(), pageParamsManager_1.default.getPageSize(), pageParamsManager_1.default.getSearchText());
	                _this.setState({
	                    techSteps: [],
	                    currentTechStep: null,
	                    isConfirmDeleting: false,
	                    techStepAmount: 0,
	                    techStepsPerPage: _this.state.techStepsPerPage
	                });
	            };
	            this.props = props;
	            this.context = context;
	            this.state = {
	                techSteps: [],
	                currentTechStep: null,
	                isConfirmDeleting: false,
	                techStepAmount: 0,
	                techStepsPerPage: pageConstants_1.default.ITEMS_PER_PAGE_INIT
	            };
	        }
	        TechStepList.prototype.componentWillMount = function () {
	            techStepStore_1.default.addChangeTechStepsListener(this.handleTechStepsChange);
	        };
	        TechStepList.prototype.componentWillUnmount = function () {
	            techStepStore_1.default.removeChangeTechStepsListener(this.handleTechStepsChange);
	        };
	        TechStepList.prototype.componentDidMount = function () {
	            techStepActions_1.default.init(pageParamsManager_1.default.getPage(), pageParamsManager_1.default.getPageSize(), pageParamsManager_1.default.getSearchText());
	        };
	        TechStepList.prototype.render = function () {
	            var techStepRows = [];
	            for (var key in this.state.techSteps) {
	                var techStep = this.state.techSteps[key];
	                techStepRows.push(React.createElement(tableRow_1.default, {key: key, item: techStep, isCurrent: this.state.currentTechStep == techStep, changeCurrent: this.changeCurrent, rowDoubleClickHandler: this.techStepRowDoubleClick}, React.createElement("td", {style: { width: 25 + '%' }}, techStep.id), React.createElement("td", {style: { width: 75 + '%' }}, techStep.description)));
	            }
	            return (React.createElement("div", {className: "panel panel-default inner", style: { marginBottom: 0 + 'px', display: 'flex', flexDirection: 'column' }}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", null, "Технологические шаги")), React.createElement("div", {className: "panel-body", style: { display: 'flex', flexDirection: 'column' }}, this.state.isConfirmDeleting ?
	                null
	                :
	                    React.createElement("div", {className: "input-group"}, React.createElement("div", {className: "input-group-btn"}, React.createElement("button", {className: "btn btn-default", type: "button", onClick: this.newTechStepBtnClickHandler}, React.createElement("span", {className: "glyphicon glyphicon-plus"})), React.createElement("button", {className: "btn btn-default", type: "button", onClick: function () { this.setState({ currentTechStep: this.state.currentTechStep, isConfirmDeleting: true }); }.bind(this)}, React.createElement("span", {className: "glyphicon glyphicon-trash"})), React.createElement("button", {className: "btn btn-default", type: "button", onClick: this.refreshBtnClickHandler}, React.createElement("span", {className: "glyphicon glyphicon-refresh"}))), React.createElement(searchInput_1.default, {text: "Поиск...", onChange: function (text) { this.handleTechStepSearchTextChange(text); }.bind(this)}), React.createElement(itemsPerPageSelector_1.default, {onChange: this.handleTechStepsPerPageChange})), React.createElement("div", {style: { marginBottom: 10 + 'px', display: 'flex', flexDirection: 'column' }}, React.createElement("div", {style: { overflowY: 'auto' }}, React.createElement("table", {className: "table table-bordered", style: { marginBottom: 1 + 'px' }}, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {style: { width: 25 + '%' }}, "ID"), React.createElement("th", {style: { width: 75 + '%' }}, "Наименование"))), React.createElement("tbody", null, techStepRows)))))));
	        };
	        return TechStepList;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = TechStepList;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=techStepList.js.map

/***/ },
/* 59 */
/*!**************************************************!*\
  !*** ./Scripts/app/flux/stores/techStepStore.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! jquery */ 55), __webpack_require__(/*! ../dispatcher/appDispatcher */ 5), __webpack_require__(/*! ../actions/actionSourceTypes */ 7), __webpack_require__(/*! ../actions/techStepActionTypes */ 60), __webpack_require__(/*! ../actions/errorActions */ 53), __webpack_require__(/*! ../../constants/pageConstants */ 14), __webpack_require__(/*! ../../managers/navigationManager */ 15), __webpack_require__(/*! object-assign */ 28), __webpack_require__(/*! eventemitter3 */ 21)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, $, appDispatcher_1, actionSourceTypes_1, techStepActionTypes_1, errorActions_1, pageConstants_1, navigationManager_1, assign, EventEmitter) {
	    "use strict";
	    var CHANGE_TECHSTEPS_EVENT = 'change_techSteps';
	    var CHANGE_EDITTECHSTEP_EVENT = 'change_edittechStep';
	    var _techSteps = new Array();
	    var _techStep;
	    var _techStepSearchText = "";
	    var _totalTechStepAmount = 0;
	    var _techStepsPerPage = pageConstants_1.default.ITEMS_PER_PAGE_INIT;
	    var _currentTechStepPage = 0;
	    function _loadTechSteps() {
	        $.get(location.origin + "/api/techSteps?search=" + _techStepSearchText + "&page=" + _currentTechStepPage + "&pageSize=" + _techStepsPerPage, function (techStepListModel) {
	            _totalTechStepAmount = techStepListModel.techStepAmount;
	            _techSteps = new Array();
	            techStepListModel.techSteps.forEach(function (techStep) {
	                _techSteps[techStep.id] = techStep;
	            });
	            TechStepStore.emitChangeTechSteps();
	        });
	    }
	    function _loadTechStep(id) {
	        if (id == 0) {
	            _techStep = { id: 0, description: "", toolUsages: [] };
	            TechStepStore.emitChangeEditTechStep();
	            return;
	        }
	        if (_techSteps[id]) {
	            _techStep = _techSteps[id];
	            TechStepStore.emitChangeEditTechStep();
	        }
	        else {
	            $.ajax({
	                url: location.origin + "/api/techSteps/" + id,
	                type: 'GET',
	                success: function (techStep) {
	                    _techStep = techStep;
	                    TechStepStore.emitChangeEditTechStep();
	                },
	                error: function (data) {
	                    errorActions_1.default.received(data.responseJSON);
	                }
	            });
	        }
	    }
	    function _addTechStep(techStep) {
	        $.ajax({
	            url: location.origin + '/api/techSteps',
	            dataType: 'json',
	            type: 'PUT',
	            data: {
	                id: techStep.id,
	                __RequestVerificationToken: antiForgeryToken
	            },
	            success: function (techStep) {
	                _techStep = techStep;
	                if (_techSteps[techStep.id]) {
	                    _techSteps[techStep.id] = assign({}, _techSteps[techStep.id], techStep);
	                    TechStepStore.emitChangeTechSteps();
	                }
	                navigationManager_1.default.openTechStepEditor(techStep.id);
	            },
	            error: function (xhr, status, err) {
	                console.error(this.props.url, status, err.toString());
	            }.bind(this)
	        });
	    }
	    function _deleteTechStep(id) {
	        $.ajax({
	            url: location.origin + '/api/techSteps/' + id,
	            dataType: 'json',
	            type: 'DELETE',
	            data: { __RequestVerificationToken: antiForgeryToken },
	            success: function (id) {
	                _loadTechSteps();
	            },
	            error: function (xhr, status, err) {
	                console.error(this.props.url, status, err.toString());
	            }
	        });
	    }
	    function _updateTechStep(techStep) {
	        $.ajax({
	            url: location.origin + '/api/techSteps',
	            dataType: 'json',
	            type: 'POST',
	            data: {
	                id: techStep.id,
	                __RequestVerificationToken: antiForgeryToken
	            },
	            success: function (techStep) {
	                if (_techSteps[techStep.id]) {
	                    _techSteps[techStep.id] = assign({}, _techSteps[techStep.id], techStep);
	                    TechStepStore.emitChangeTechSteps();
	                }
	            },
	            error: function (xhr, status, err) {
	                console.error(this.props.url, status, err.toString());
	            }
	        });
	    }
	    function _init(currentPage, techStepsPerPage, searchText) {
	        _techStepsPerPage = techStepsPerPage;
	        _currentTechStepPage = currentPage;
	        _techStepSearchText = searchText;
	        _loadTechSteps();
	    }
	    var TechStepStoreStatic = (function (_super) {
	        __extends(TechStepStoreStatic, _super);
	        function TechStepStoreStatic() {
	            _super.apply(this, arguments);
	        }
	        TechStepStoreStatic.prototype.getAll = function () {
	            return _techSteps;
	        };
	        TechStepStoreStatic.prototype.getTechStepAmount = function () {
	            return _totalTechStepAmount;
	        };
	        TechStepStoreStatic.prototype.getTechStepsPerPage = function () {
	            return _techStepsPerPage;
	        };
	        TechStepStoreStatic.prototype.getEditTechStep = function () {
	            return _techStep;
	        };
	        TechStepStoreStatic.prototype.emitChangeTechSteps = function () {
	            this.emit(CHANGE_TECHSTEPS_EVENT);
	        };
	        TechStepStoreStatic.prototype.emitChangeEditTechStep = function () {
	            this.emit(CHANGE_EDITTECHSTEP_EVENT);
	        };
	        /**
	         * @param {function} callback
	         */
	        TechStepStoreStatic.prototype.addChangeEditTechStepListener = function (callback) {
	            this.on(CHANGE_EDITTECHSTEP_EVENT, callback);
	        };
	        /**
	         * @param {function} callback
	         */
	        TechStepStoreStatic.prototype.removeChangeEditTechStepListener = function (callback) {
	            this.removeListener(CHANGE_EDITTECHSTEP_EVENT, callback);
	        };
	        /**
	         * @param {function} callback
	         */
	        TechStepStoreStatic.prototype.addChangeTechStepsListener = function (callback) {
	            this.on(CHANGE_TECHSTEPS_EVENT, callback);
	        };
	        /**
	         * @param {function} callback
	         */
	        TechStepStoreStatic.prototype.removeChangeTechStepsListener = function (callback) {
	            this.removeListener(CHANGE_TECHSTEPS_EVENT, callback);
	        };
	        return TechStepStoreStatic;
	    }(EventEmitter));
	    var TechStepStore = new TechStepStoreStatic();
	    appDispatcher_1.default.register(function (payload) {
	        if (payload.actionSource != actionSourceTypes_1.default.TECHSTEP)
	            return;
	        switch (payload.actionType) {
	            case techStepActionTypes_1.default.TECHSTEP_INIT:
	                _init(payload.currentPage, payload.pageSize, payload.searchText);
	                break;
	            case techStepActionTypes_1.default.TECHSTEP_LOAD_EDIT:
	                _loadTechStep(payload.id);
	                break;
	            case techStepActionTypes_1.default.TECHSTEP_CREATE:
	                _addTechStep(payload.techStep);
	                break;
	            case techStepActionTypes_1.default.TECHSTEP_UPDATE:
	                _updateTechStep(payload.techStep);
	                break;
	            case techStepActionTypes_1.default.TECHSTEP_DELETE:
	                _deleteTechStep(payload.id);
	                break;
	            case techStepActionTypes_1.default.TECHSTEP_PAGE_CHANGE:
	                _currentTechStepPage = payload.currentPage;
	                _loadTechSteps();
	                break;
	            case techStepActionTypes_1.default.TECHSTEPS_PER_PAGE_CHANGE:
	                _techStepsPerPage = payload.pageSize;
	                _loadTechSteps();
	                break;
	            case techStepActionTypes_1.default.TECHSTEP_SEARCH_TEXT_CHANGE:
	                _techStepSearchText = payload.searchText;
	                _loadTechSteps();
	                break;
	            default:
	        }
	    });
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = TechStepStore;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=techStepStore.js.map

/***/ },
/* 60 */
/*!*********************************************************!*\
  !*** ./Scripts/app/flux/actions/techStepActionTypes.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    "use strict";
	    var TechStepActionTypes;
	    (function (TechStepActionTypes) {
	        TechStepActionTypes[TechStepActionTypes["TECHSTEP_INIT"] = 0] = "TECHSTEP_INIT";
	        TechStepActionTypes[TechStepActionTypes["TECHSTEP_LOAD_EDIT"] = 1] = "TECHSTEP_LOAD_EDIT";
	        TechStepActionTypes[TechStepActionTypes["TECHSTEP_CREATE"] = 2] = "TECHSTEP_CREATE";
	        TechStepActionTypes[TechStepActionTypes["TECHSTEP_DELETE"] = 3] = "TECHSTEP_DELETE";
	        TechStepActionTypes[TechStepActionTypes["TECHSTEP_UPDATE"] = 4] = "TECHSTEP_UPDATE";
	        TechStepActionTypes[TechStepActionTypes["TECHSTEP_PAGE_CHANGE"] = 5] = "TECHSTEP_PAGE_CHANGE";
	        TechStepActionTypes[TechStepActionTypes["TECHSTEPS_PER_PAGE_CHANGE"] = 6] = "TECHSTEPS_PER_PAGE_CHANGE";
	        TechStepActionTypes[TechStepActionTypes["TECHSTEP_SEARCH_TEXT_CHANGE"] = 7] = "TECHSTEP_SEARCH_TEXT_CHANGE";
	    })(TechStepActionTypes || (TechStepActionTypes = {}));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = TechStepActionTypes;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=techStepActionTypes.js.map

/***/ },
/* 61 */
/*!*****************************************************!*\
  !*** ./Scripts/app/flux/actions/techStepActions.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../../typings/tsd.d.ts" />
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../dispatcher/appDispatcher */ 5), __webpack_require__(/*! ./actionSourceTypes */ 7), __webpack_require__(/*! ./techStepActionTypes */ 60)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, appDispatcher_1, actionSourceTypes_1, techStepActionTypes_1) {
	    "use strict";
	    var TechStepActionsStatic = (function () {
	        function TechStepActionsStatic() {
	        }
	        TechStepActionsStatic.prototype.init = function (currentPage, pageSize, searchText) {
	            appDispatcher_1.default.dispatch({
	                actionType: techStepActionTypes_1.default.TECHSTEP_INIT,
	                actionSource: actionSourceTypes_1.default.TECHSTEP,
	                currentPage: currentPage,
	                pageSize: pageSize,
	                searchText: searchText
	            });
	        };
	        TechStepActionsStatic.prototype.loadEditTechStep = function (id) {
	            appDispatcher_1.default.dispatch({
	                actionType: techStepActionTypes_1.default.TECHSTEP_LOAD_EDIT,
	                actionSource: actionSourceTypes_1.default.TECHSTEP,
	                id: id
	            });
	        };
	        TechStepActionsStatic.prototype.create = function (techStep) {
	            appDispatcher_1.default.dispatch({
	                actionType: techStepActionTypes_1.default.TECHSTEP_CREATE,
	                actionSource: actionSourceTypes_1.default.TECHSTEP,
	                techStep: techStep
	            });
	        };
	        TechStepActionsStatic.prototype.update = function (techStep) {
	            appDispatcher_1.default.dispatch({
	                actionType: techStepActionTypes_1.default.TECHSTEP_UPDATE,
	                actionSource: actionSourceTypes_1.default.TECHSTEP,
	                techStep: techStep
	            });
	        };
	        TechStepActionsStatic.prototype.remove = function (id) {
	            appDispatcher_1.default.dispatch({
	                actionType: techStepActionTypes_1.default.TECHSTEP_DELETE,
	                actionSource: actionSourceTypes_1.default.TECHSTEP,
	                id: id
	            });
	        };
	        TechStepActionsStatic.prototype.changeTechStepPage = function (page) {
	            appDispatcher_1.default.dispatch({
	                actionType: techStepActionTypes_1.default.TECHSTEP_PAGE_CHANGE,
	                actionSource: actionSourceTypes_1.default.TECHSTEP,
	                currentPage: page
	            });
	        };
	        TechStepActionsStatic.prototype.changeTechStepsPerPage = function (techStepsPerPage) {
	            appDispatcher_1.default.dispatch({
	                actionType: techStepActionTypes_1.default.TECHSTEPS_PER_PAGE_CHANGE,
	                actionSource: actionSourceTypes_1.default.TECHSTEP,
	                pageSize: techStepsPerPage
	            });
	        };
	        TechStepActionsStatic.prototype.changeTechStepSearchText = function (text) {
	            appDispatcher_1.default.dispatch({
	                actionType: techStepActionTypes_1.default.TECHSTEP_SEARCH_TEXT_CHANGE,
	                actionSource: actionSourceTypes_1.default.TECHSTEP,
	                searchText: text
	            });
	        };
	        return TechStepActionsStatic;
	    }());
	    var TechStepActions = new TechStepActionsStatic();
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = TechStepActions;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=techStepActions.js.map

/***/ },
/* 62 */
/*!*****************************************************!*\
  !*** ./Scripts/app/components/techOperationList.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2), __webpack_require__(/*! ../flux/stores/techOperationStore */ 63), __webpack_require__(/*! ../constants/pageConstants */ 14), __webpack_require__(/*! ../flux/actions/techOperationActions */ 65), __webpack_require__(/*! ../managers/pageParamsManager */ 12), __webpack_require__(/*! ../managers/navigationManager */ 15), __webpack_require__(/*! ./common/tableRow */ 17), __webpack_require__(/*! ./common/searchInput */ 36), __webpack_require__(/*! ./common/itemsPerPageSelector */ 34)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React, techOperationStore_1, pageConstants_1, techOperationActions_1, pageParamsManager_1, navigationManager_1, tableRow_1, searchInput_1, itemsPerPageSelector_1) {
	    "use strict";
	    var TechOperationList = (function (_super) {
	        __extends(TechOperationList, _super);
	        function TechOperationList(props, context) {
	            var _this = this;
	            _super.call(this, props, context);
	            this.handleTechOperationsChange = function () {
	                _this.setState({
	                    techOperations: techOperationStore_1.default.getAll(),
	                    currentTechOperation: null,
	                    isConfirmDeleting: false,
	                    techOperationAmount: techOperationStore_1.default.getTechOperationAmount(),
	                    techOperationsPerPage: techOperationStore_1.default.getTechOperationsPerPage()
	                });
	            };
	            this.changeCurrent = function (techOperation) {
	                _this.setState({
	                    techOperations: _this.state.techOperations,
	                    currentTechOperation: techOperation,
	                    isConfirmDeleting: _this.state.isConfirmDeleting,
	                    techOperationAmount: _this.state.techOperationAmount,
	                    techOperationsPerPage: _this.state.techOperationsPerPage
	                });
	            };
	            this.techOperationRowDoubleClick = function (techOperation) {
	                navigationManager_1.default.openTechOperationEditor(techOperation.id);
	            };
	            this.newTechOperationBtnClickHandler = function () {
	                navigationManager_1.default.openTechOperationEditor(0);
	            };
	            this.handleDeleteSuccess = function () {
	                techOperationActions_1.default.remove(_this.state.currentTechOperation.id);
	            };
	            this.handleDeleteCancel = function () {
	                _this.setState({
	                    techOperations: _this.state.techOperations,
	                    currentTechOperation: _this.state.currentTechOperation,
	                    isConfirmDeleting: !_this.state.isConfirmDeleting,
	                    techOperationAmount: _this.state.techOperationAmount,
	                    techOperationsPerPage: _this.state.techOperationsPerPage
	                });
	            };
	            this.handleTechOperationsPerPageChange = function (techOperationsPerPage) {
	                pageParamsManager_1.default.changePageSize(techOperationsPerPage);
	                techOperationActions_1.default.changeTechOperationsPerPage(techOperationsPerPage);
	            };
	            this.handleTechOperationPageChange = function (page) {
	                pageParamsManager_1.default.changePage(page);
	                techOperationActions_1.default.changeTechOperationPage(page);
	            };
	            this.handleTechOperationSearchTextChange = function (text) {
	                pageParamsManager_1.default.changeSearchText(text);
	                techOperationActions_1.default.changeTechOperationSearchText(text);
	            };
	            this.refreshBtnClickHandler = function (text) {
	                techOperationActions_1.default.init(pageParamsManager_1.default.getPage(), pageParamsManager_1.default.getPageSize(), pageParamsManager_1.default.getSearchText());
	                _this.setState({
	                    techOperations: [],
	                    currentTechOperation: null,
	                    isConfirmDeleting: false,
	                    techOperationAmount: 0,
	                    techOperationsPerPage: _this.state.techOperationsPerPage
	                });
	            };
	            this.props = props;
	            this.context = context;
	            this.state = {
	                techOperations: [],
	                currentTechOperation: null,
	                isConfirmDeleting: false,
	                techOperationAmount: 0,
	                techOperationsPerPage: pageConstants_1.default.ITEMS_PER_PAGE_INIT
	            };
	        }
	        TechOperationList.prototype.componentWillMount = function () {
	            techOperationStore_1.default.addChangeTechOperationsListener(this.handleTechOperationsChange);
	        };
	        TechOperationList.prototype.componentWillUnmount = function () {
	            techOperationStore_1.default.removeChangeTechOperationsListener(this.handleTechOperationsChange);
	        };
	        TechOperationList.prototype.componentDidMount = function () {
	            techOperationActions_1.default.init(pageParamsManager_1.default.getPage(), pageParamsManager_1.default.getPageSize(), pageParamsManager_1.default.getSearchText());
	        };
	        TechOperationList.prototype.render = function () {
	            var techOperationRows = [];
	            for (var key in this.state.techOperations) {
	                var techOperation = this.state.techOperations[key];
	                techOperationRows.push(React.createElement(tableRow_1.default, {key: key, item: techOperation, isCurrent: this.state.currentTechOperation == techOperation, changeCurrent: this.changeCurrent, rowDoubleClickHandler: this.techOperationRowDoubleClick}, React.createElement("td", {style: { width: 25 + '%' }}, techOperation.id), React.createElement("td", {style: { width: 75 + '%' }}, techOperation.name)));
	            }
	            return (React.createElement("div", {className: "panel panel-default inner", style: { marginBottom: 0 + 'px', display: 'flex', flexDirection: 'column' }}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", null, "Технологические операции")), React.createElement("div", {className: "panel-body", style: { display: 'flex', flexDirection: 'column' }}, this.state.isConfirmDeleting ?
	                null
	                :
	                    React.createElement("div", {className: "input-group"}, React.createElement("div", {className: "input-group-btn"}, React.createElement("button", {className: "btn btn-default", type: "button", onClick: this.newTechOperationBtnClickHandler}, React.createElement("span", {className: "glyphicon glyphicon-plus"})), React.createElement("button", {className: "btn btn-default", type: "button", onClick: function () { this.setState({ currentTechOperation: this.state.currentTechOperation, isConfirmDeleting: true }); }.bind(this)}, React.createElement("span", {className: "glyphicon glyphicon-trash"})), React.createElement("button", {className: "btn btn-default", type: "button", onClick: this.refreshBtnClickHandler}, React.createElement("span", {className: "glyphicon glyphicon-refresh"}))), React.createElement(searchInput_1.default, {text: "Поиск...", onChange: function (text) { this.handleTechOperationSearchTextChange(text); }.bind(this)}), React.createElement(itemsPerPageSelector_1.default, {onChange: this.handleTechOperationsPerPageChange})), React.createElement("div", {style: { marginBottom: 10 + 'px', display: 'flex', flexDirection: 'column' }}, React.createElement("div", {style: { overflowY: 'auto' }}, React.createElement("table", {className: "table table-bordered", style: { marginBottom: 1 + 'px' }}, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {style: { width: 25 + '%' }}, "ID"), React.createElement("th", {style: { width: 75 + '%' }}, "Наименование"))), React.createElement("tbody", null, techOperationRows)))))));
	        };
	        return TechOperationList;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = TechOperationList;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=techOperationList.js.map

/***/ },
/* 63 */
/*!*******************************************************!*\
  !*** ./Scripts/app/flux/stores/techOperationStore.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! jquery */ 55), __webpack_require__(/*! ../dispatcher/appDispatcher */ 5), __webpack_require__(/*! ../actions/actionSourceTypes */ 7), __webpack_require__(/*! ../actions/techOperationActionTypes */ 64), __webpack_require__(/*! ../actions/errorActions */ 53), __webpack_require__(/*! ../../constants/pageConstants */ 14), __webpack_require__(/*! ../../managers/navigationManager */ 15), __webpack_require__(/*! object-assign */ 28), __webpack_require__(/*! eventemitter3 */ 21)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, $, appDispatcher_1, actionSourceTypes_1, techOperationActionTypes_1, errorActions_1, pageConstants_1, navigationManager_1, assign, EventEmitter) {
	    "use strict";
	    var CHANGE_TECHOPERATIONS_EVENT = 'change_techOperations';
	    var CHANGE_EDITTECHOPERATION_EVENT = 'change_edittechOperation';
	    var _techOperations = new Array();
	    var _techOperation;
	    var _techOperationSearchText = "";
	    var _totalTechOperationAmount = 0;
	    var _techOperationsPerPage = pageConstants_1.default.ITEMS_PER_PAGE_INIT;
	    var _currentTechOperationPage = 0;
	    function _loadTechOperations() {
	        $.get(location.origin + "/api/techOperations?search=" + _techOperationSearchText + "&page=" + _currentTechOperationPage + "&pageSize=" + _techOperationsPerPage, function (techOperationListModel) {
	            _totalTechOperationAmount = techOperationListModel.techOperationAmount;
	            _techOperations = new Array();
	            techOperationListModel.techOperations.forEach(function (techOperation) {
	                _techOperations[techOperation.id] = techOperation;
	            });
	            TechOperationStore.emitChangeTechOperations();
	        });
	    }
	    function _loadTechOperation(id) {
	        if (id == 0) {
	            _techOperation = { id: 0, name: "" };
	            TechOperationStore.emitChangeEditTechOperation();
	            return;
	        }
	        if (_techOperations[id]) {
	            _techOperation = _techOperations[id];
	            TechOperationStore.emitChangeEditTechOperation();
	        }
	        else {
	            $.ajax({
	                url: location.origin + "/api/techOperations/" + id,
	                type: 'GET',
	                success: function (techOperation) {
	                    _techOperation = techOperation;
	                    TechOperationStore.emitChangeEditTechOperation();
	                },
	                error: function (data) {
	                    errorActions_1.default.received(data.responseJSON);
	                }
	            });
	        }
	    }
	    function _addTechOperation(techOperation) {
	        $.ajax({
	            url: location.origin + '/api/techOperations',
	            dataType: 'json',
	            type: 'PUT',
	            data: {
	                id: techOperation.id,
	                __RequestVerificationToken: antiForgeryToken
	            },
	            success: function (techOperation) {
	                _techOperation = techOperation;
	                if (_techOperations[techOperation.id]) {
	                    _techOperations[techOperation.id] = assign({}, _techOperations[techOperation.id], techOperation);
	                    TechOperationStore.emitChangeTechOperations();
	                }
	                navigationManager_1.default.openTechOperationEditor(techOperation.id);
	            },
	            error: function (xhr, status, err) {
	                console.error(this.props.url, status, err.toString());
	            }.bind(this)
	        });
	    }
	    function _deleteTechOperation(id) {
	        $.ajax({
	            url: location.origin + '/api/techOperations/' + id,
	            dataType: 'json',
	            type: 'DELETE',
	            data: { __RequestVerificationToken: antiForgeryToken },
	            success: function (id) {
	                _loadTechOperations();
	            },
	            error: function (xhr, status, err) {
	                console.error(this.props.url, status, err.toString());
	            }
	        });
	    }
	    function _updateTechOperation(techOperation) {
	        $.ajax({
	            url: location.origin + '/api/techOperations',
	            dataType: 'json',
	            type: 'POST',
	            data: {
	                id: techOperation.id,
	                __RequestVerificationToken: antiForgeryToken
	            },
	            success: function (techOperation) {
	                if (_techOperations[techOperation.id]) {
	                    _techOperations[techOperation.id] = assign({}, _techOperations[techOperation.id], techOperation);
	                    TechOperationStore.emitChangeTechOperations();
	                }
	            },
	            error: function (xhr, status, err) {
	                console.error(this.props.url, status, err.toString());
	            }
	        });
	    }
	    function _init(currentPage, techOperationsPerPage, searchText) {
	        _techOperationsPerPage = techOperationsPerPage;
	        _currentTechOperationPage = currentPage;
	        _techOperationSearchText = searchText;
	        _loadTechOperations();
	    }
	    var TechOperationStoreStatic = (function (_super) {
	        __extends(TechOperationStoreStatic, _super);
	        function TechOperationStoreStatic() {
	            _super.apply(this, arguments);
	        }
	        TechOperationStoreStatic.prototype.getAll = function () {
	            return _techOperations;
	        };
	        TechOperationStoreStatic.prototype.getTechOperationAmount = function () {
	            return _totalTechOperationAmount;
	        };
	        TechOperationStoreStatic.prototype.getTechOperationsPerPage = function () {
	            return _techOperationsPerPage;
	        };
	        TechOperationStoreStatic.prototype.getEditTechOperation = function () {
	            return _techOperation;
	        };
	        TechOperationStoreStatic.prototype.emitChangeTechOperations = function () {
	            this.emit(CHANGE_TECHOPERATIONS_EVENT);
	        };
	        TechOperationStoreStatic.prototype.emitChangeEditTechOperation = function () {
	            this.emit(CHANGE_EDITTECHOPERATION_EVENT);
	        };
	        /**
	         * @param {function} callback
	         */
	        TechOperationStoreStatic.prototype.addChangeEditTechOperationListener = function (callback) {
	            this.on(CHANGE_EDITTECHOPERATION_EVENT, callback);
	        };
	        /**
	         * @param {function} callback
	         */
	        TechOperationStoreStatic.prototype.removeChangeEditTechOperationListener = function (callback) {
	            this.removeListener(CHANGE_EDITTECHOPERATION_EVENT, callback);
	        };
	        /**
	         * @param {function} callback
	         */
	        TechOperationStoreStatic.prototype.addChangeTechOperationsListener = function (callback) {
	            this.on(CHANGE_TECHOPERATIONS_EVENT, callback);
	        };
	        /**
	         * @param {function} callback
	         */
	        TechOperationStoreStatic.prototype.removeChangeTechOperationsListener = function (callback) {
	            this.removeListener(CHANGE_TECHOPERATIONS_EVENT, callback);
	        };
	        return TechOperationStoreStatic;
	    }(EventEmitter));
	    var TechOperationStore = new TechOperationStoreStatic();
	    appDispatcher_1.default.register(function (payload) {
	        if (payload.actionSource != actionSourceTypes_1.default.TECHOPERATION)
	            return;
	        switch (payload.actionType) {
	            case techOperationActionTypes_1.default.TECHOPERATION_INIT:
	                _init(payload.currentPage, payload.pageSize, payload.searchText);
	                break;
	            case techOperationActionTypes_1.default.TECHOPERATION_LOAD_EDIT:
	                _loadTechOperation(payload.id);
	                break;
	            case techOperationActionTypes_1.default.TECHOPERATION_CREATE:
	                _addTechOperation(payload.techOperation);
	                break;
	            case techOperationActionTypes_1.default.TECHOPERATION_UPDATE:
	                _updateTechOperation(payload.techOperation);
	                break;
	            case techOperationActionTypes_1.default.TECHOPERATION_DELETE:
	                _deleteTechOperation(payload.id);
	                break;
	            case techOperationActionTypes_1.default.TECHOPERATION_PAGE_CHANGE:
	                _currentTechOperationPage = payload.currentPage;
	                _loadTechOperations();
	                break;
	            case techOperationActionTypes_1.default.TECHOPERATIONS_PER_PAGE_CHANGE:
	                _techOperationsPerPage = payload.pageSize;
	                _loadTechOperations();
	                break;
	            case techOperationActionTypes_1.default.TECHOPERATION_SEARCH_TEXT_CHANGE:
	                _techOperationSearchText = payload.searchText;
	                _loadTechOperations();
	                break;
	            default:
	        }
	    });
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = TechOperationStore;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=techOperationStore.js.map

/***/ },
/* 64 */
/*!**************************************************************!*\
  !*** ./Scripts/app/flux/actions/techOperationActionTypes.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    "use strict";
	    var TechOperationActionTypes;
	    (function (TechOperationActionTypes) {
	        TechOperationActionTypes[TechOperationActionTypes["TECHOPERATION_INIT"] = 0] = "TECHOPERATION_INIT";
	        TechOperationActionTypes[TechOperationActionTypes["TECHOPERATION_LOAD_EDIT"] = 1] = "TECHOPERATION_LOAD_EDIT";
	        TechOperationActionTypes[TechOperationActionTypes["TECHOPERATION_CREATE"] = 2] = "TECHOPERATION_CREATE";
	        TechOperationActionTypes[TechOperationActionTypes["TECHOPERATION_DELETE"] = 3] = "TECHOPERATION_DELETE";
	        TechOperationActionTypes[TechOperationActionTypes["TECHOPERATION_UPDATE"] = 4] = "TECHOPERATION_UPDATE";
	        TechOperationActionTypes[TechOperationActionTypes["TECHOPERATION_PAGE_CHANGE"] = 5] = "TECHOPERATION_PAGE_CHANGE";
	        TechOperationActionTypes[TechOperationActionTypes["TECHOPERATIONS_PER_PAGE_CHANGE"] = 6] = "TECHOPERATIONS_PER_PAGE_CHANGE";
	        TechOperationActionTypes[TechOperationActionTypes["TECHOPERATION_SEARCH_TEXT_CHANGE"] = 7] = "TECHOPERATION_SEARCH_TEXT_CHANGE";
	    })(TechOperationActionTypes || (TechOperationActionTypes = {}));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = TechOperationActionTypes;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=techOperationActionTypes.js.map

/***/ },
/* 65 */
/*!**********************************************************!*\
  !*** ./Scripts/app/flux/actions/techOperationActions.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../../typings/tsd.d.ts" />
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../dispatcher/appDispatcher */ 5), __webpack_require__(/*! ./actionSourceTypes */ 7), __webpack_require__(/*! ./techOperationActionTypes */ 64)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, appDispatcher_1, actionSourceTypes_1, techOperationActionTypes_1) {
	    "use strict";
	    var TechOperationActionsStatic = (function () {
	        function TechOperationActionsStatic() {
	        }
	        TechOperationActionsStatic.prototype.init = function (currentPage, pageSize, searchText) {
	            appDispatcher_1.default.dispatch({
	                actionType: techOperationActionTypes_1.default.TECHOPERATION_INIT,
	                actionSource: actionSourceTypes_1.default.TECHOPERATION,
	                currentPage: currentPage,
	                pageSize: pageSize,
	                searchText: searchText
	            });
	        };
	        TechOperationActionsStatic.prototype.loadEditTechOperation = function (id) {
	            appDispatcher_1.default.dispatch({
	                actionType: techOperationActionTypes_1.default.TECHOPERATION_LOAD_EDIT,
	                actionSource: actionSourceTypes_1.default.TECHOPERATION,
	                id: id
	            });
	        };
	        TechOperationActionsStatic.prototype.create = function (techOperation) {
	            appDispatcher_1.default.dispatch({
	                actionType: techOperationActionTypes_1.default.TECHOPERATION_CREATE,
	                actionSource: actionSourceTypes_1.default.TECHOPERATION,
	                techOperation: techOperation
	            });
	        };
	        TechOperationActionsStatic.prototype.update = function (techOperation) {
	            appDispatcher_1.default.dispatch({
	                actionType: techOperationActionTypes_1.default.TECHOPERATION_UPDATE,
	                actionSource: actionSourceTypes_1.default.TECHOPERATION,
	                techOperation: techOperation
	            });
	        };
	        TechOperationActionsStatic.prototype.remove = function (id) {
	            appDispatcher_1.default.dispatch({
	                actionType: techOperationActionTypes_1.default.TECHOPERATION_DELETE,
	                actionSource: actionSourceTypes_1.default.TECHOPERATION,
	                id: id
	            });
	        };
	        TechOperationActionsStatic.prototype.changeTechOperationPage = function (page) {
	            appDispatcher_1.default.dispatch({
	                actionType: techOperationActionTypes_1.default.TECHOPERATION_PAGE_CHANGE,
	                actionSource: actionSourceTypes_1.default.TECHOPERATION,
	                currentPage: page
	            });
	        };
	        TechOperationActionsStatic.prototype.changeTechOperationsPerPage = function (techOperationsPerPage) {
	            appDispatcher_1.default.dispatch({
	                actionType: techOperationActionTypes_1.default.TECHOPERATIONS_PER_PAGE_CHANGE,
	                actionSource: actionSourceTypes_1.default.TECHOPERATION,
	                pageSize: techOperationsPerPage
	            });
	        };
	        TechOperationActionsStatic.prototype.changeTechOperationSearchText = function (text) {
	            appDispatcher_1.default.dispatch({
	                actionType: techOperationActionTypes_1.default.TECHOPERATION_SEARCH_TEXT_CHANGE,
	                actionSource: actionSourceTypes_1.default.TECHOPERATION,
	                searchText: text
	            });
	        };
	        return TechOperationActionsStatic;
	    }());
	    var TechOperationActions = new TechOperationActionsStatic();
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = TechOperationActions;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=techOperationActions.js.map

/***/ },
/* 66 */
/*!***************************************************!*\
  !*** ./Scripts/app/components/techProcessList.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2), __webpack_require__(/*! ../flux/stores/techProcessStore */ 67), __webpack_require__(/*! ../constants/pageConstants */ 14), __webpack_require__(/*! ../flux/actions/techProcessActions */ 69), __webpack_require__(/*! ../managers/pageParamsManager */ 12), __webpack_require__(/*! ../managers/navigationManager */ 15), __webpack_require__(/*! ./common/tableRow */ 17), __webpack_require__(/*! ./common/searchInput */ 36), __webpack_require__(/*! ./common/itemsPerPageSelector */ 34)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React, techProcessStore_1, pageConstants_1, techProcessActions_1, pageParamsManager_1, navigationManager_1, tableRow_1, searchInput_1, itemsPerPageSelector_1) {
	    "use strict";
	    var TechProcessList = (function (_super) {
	        __extends(TechProcessList, _super);
	        function TechProcessList(props, context) {
	            var _this = this;
	            _super.call(this, props, context);
	            this.handleTechProcessesChange = function () {
	                _this.setState({
	                    techProcesses: techProcessStore_1.default.getAll(),
	                    currentTechProcess: null,
	                    isConfirmDeleting: false,
	                    techProcessAmount: techProcessStore_1.default.getTechProcessAmount(),
	                    techProcessesPerPage: techProcessStore_1.default.getTechProcessesPerPage()
	                });
	            };
	            this.changeCurrent = function (techProcess) {
	                _this.setState({
	                    techProcesses: _this.state.techProcesses,
	                    currentTechProcess: techProcess,
	                    isConfirmDeleting: _this.state.isConfirmDeleting,
	                    techProcessAmount: _this.state.techProcessAmount,
	                    techProcessesPerPage: _this.state.techProcessesPerPage
	                });
	            };
	            this.techProcessRowDoubleClick = function (techProcess) {
	                navigationManager_1.default.openTechProcessEditor(techProcess.id);
	            };
	            this.newTechProcessBtnClickHandler = function () {
	                navigationManager_1.default.openTechProcessEditor(0);
	            };
	            this.handleDeleteSuccess = function () {
	                techProcessActions_1.default.remove(_this.state.currentTechProcess.id);
	            };
	            this.handleDeleteCancel = function () {
	                _this.setState({
	                    techProcesses: _this.state.techProcesses,
	                    currentTechProcess: _this.state.currentTechProcess,
	                    isConfirmDeleting: !_this.state.isConfirmDeleting,
	                    techProcessAmount: _this.state.techProcessAmount,
	                    techProcessesPerPage: _this.state.techProcessesPerPage
	                });
	            };
	            this.handleTechProcessesPerPageChange = function (techProcessesPerPage) {
	                pageParamsManager_1.default.changePageSize(techProcessesPerPage);
	                techProcessActions_1.default.changeTechProcessesPerPage(techProcessesPerPage);
	            };
	            this.handleTechProcessPageChange = function (page) {
	                pageParamsManager_1.default.changePage(page);
	                techProcessActions_1.default.changeTechProcessPage(page);
	            };
	            this.handleTechProcessSearchTextChange = function (text) {
	                pageParamsManager_1.default.changeSearchText(text);
	                techProcessActions_1.default.changeTechProcessSearchText(text);
	            };
	            this.refreshBtnClickHandler = function (text) {
	                techProcessActions_1.default.init(pageParamsManager_1.default.getPage(), pageParamsManager_1.default.getPageSize(), pageParamsManager_1.default.getSearchText());
	                _this.setState({
	                    techProcesses: [],
	                    currentTechProcess: null,
	                    isConfirmDeleting: false,
	                    techProcessAmount: 0,
	                    techProcessesPerPage: _this.state.techProcessesPerPage
	                });
	            };
	            this.props = props;
	            this.context = context;
	            this.state = {
	                techProcesses: [],
	                currentTechProcess: null,
	                isConfirmDeleting: false,
	                techProcessAmount: 0,
	                techProcessesPerPage: pageConstants_1.default.ITEMS_PER_PAGE_INIT
	            };
	        }
	        TechProcessList.prototype.componentWillMount = function () {
	            techProcessStore_1.default.addChangeTechProcessesListener(this.handleTechProcessesChange);
	        };
	        TechProcessList.prototype.componentWillUnmount = function () {
	            techProcessStore_1.default.removeChangeTechProcessesListener(this.handleTechProcessesChange);
	        };
	        TechProcessList.prototype.componentDidMount = function () {
	            techProcessActions_1.default.init(pageParamsManager_1.default.getPage(), pageParamsManager_1.default.getPageSize(), pageParamsManager_1.default.getSearchText());
	        };
	        TechProcessList.prototype.render = function () {
	            var techProcessRows = [];
	            for (var key in this.state.techProcesses) {
	                var techProcess = this.state.techProcesses[key];
	                techProcessRows.push(React.createElement(tableRow_1.default, {key: key, item: techProcess, isCurrent: this.state.currentTechProcess == techProcess, changeCurrent: this.changeCurrent, rowDoubleClickHandler: this.techProcessRowDoubleClick}, React.createElement("td", {style: { width: 25 + '%' }}, techProcess.id), React.createElement("td", {style: { width: 75 + '%' }}, techProcess.name)));
	            }
	            return (React.createElement("div", {className: "panel panel-default inner", style: { marginBottom: 0 + 'px', display: 'flex', flexDirection: 'column' }}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", null, "Технологические процессы")), React.createElement("div", {className: "panel-body", style: { display: 'flex', flexDirection: 'column' }}, this.state.isConfirmDeleting ?
	                null
	                :
	                    React.createElement("div", {className: "input-group"}, React.createElement("div", {className: "input-group-btn"}, React.createElement("button", {className: "btn btn-default", type: "button", onClick: this.newTechProcessBtnClickHandler}, React.createElement("span", {className: "glyphicon glyphicon-plus"})), React.createElement("button", {className: "btn btn-default", type: "button", onClick: function () { this.setState({ currentTechProcess: this.state.currentTechProcess, isConfirmDeleting: true }); }.bind(this)}, React.createElement("span", {className: "glyphicon glyphicon-trash"})), React.createElement("button", {className: "btn btn-default", type: "button", onClick: this.refreshBtnClickHandler}, React.createElement("span", {className: "glyphicon glyphicon-refresh"}))), React.createElement(searchInput_1.default, {text: "Поиск...", onChange: function (text) { this.handleTechProcessSearchTextChange(text); }.bind(this)}), React.createElement(itemsPerPageSelector_1.default, {onChange: this.handleTechProcessesPerPageChange})), React.createElement("div", {style: { marginBottom: 10 + 'px', display: 'flex', flexDirection: 'column' }}, React.createElement("div", {style: { overflowY: 'auto' }}, React.createElement("table", {className: "table table-bordered", style: { marginBottom: 1 + 'px' }}, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {style: { width: 25 + '%' }}, "ID"), React.createElement("th", {style: { width: 75 + '%' }}, "Наименование"))), React.createElement("tbody", null, techProcessRows)))))));
	        };
	        return TechProcessList;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = TechProcessList;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=techProcessList.js.map

/***/ },
/* 67 */
/*!*****************************************************!*\
  !*** ./Scripts/app/flux/stores/techProcessStore.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! jquery */ 55), __webpack_require__(/*! ../dispatcher/appDispatcher */ 5), __webpack_require__(/*! ../actions/actionSourceTypes */ 7), __webpack_require__(/*! ../actions/techProcessActionTypes */ 68), __webpack_require__(/*! ../actions/errorActions */ 53), __webpack_require__(/*! ../../constants/pageConstants */ 14), __webpack_require__(/*! ../../managers/navigationManager */ 15), __webpack_require__(/*! object-assign */ 28), __webpack_require__(/*! eventemitter3 */ 21)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, $, appDispatcher_1, actionSourceTypes_1, techProcessActionTypes_1, errorActions_1, pageConstants_1, navigationManager_1, assign, EventEmitter) {
	    "use strict";
	    var CHANGE_TECHPROCESSES_EVENT = 'change_techProcesses';
	    var CHANGE_EDITTECHPROCESS_EVENT = 'change_edittechProcess';
	    var _techProcesses = new Array();
	    var _techProcess;
	    var _techProcessSearchText = "";
	    var _totalTechProcessAmount = 0;
	    var _techProcessesPerPage = pageConstants_1.default.ITEMS_PER_PAGE_INIT;
	    var _currentTechProcessPage = 0;
	    function _loadTechProcesses() {
	        $.get(location.origin + "/api/techProcesses?search=" + _techProcessSearchText + "&page=" + _currentTechProcessPage + "&pageSize=" + _techProcessesPerPage, function (techProcessListModel) {
	            _totalTechProcessAmount = techProcessListModel.techProcessAmount;
	            _techProcesses = new Array();
	            techProcessListModel.techProcesses.forEach(function (techProcess) {
	                _techProcesses[techProcess.id] = techProcess;
	            });
	            TechProcessStore.emitChangeTechProcesses();
	        });
	    }
	    function _loadTechProcess(id) {
	        if (id == 0) {
	            _techProcess = { id: 0, name: "" };
	            TechProcessStore.emitChangeEditTechProcess();
	            return;
	        }
	        if (_techProcesses[id]) {
	            _techProcess = _techProcesses[id];
	            TechProcessStore.emitChangeEditTechProcess();
	        }
	        else {
	            $.ajax({
	                url: location.origin + "/api/techProcesses/" + id,
	                type: 'GET',
	                success: function (techProcess) {
	                    _techProcess = techProcess;
	                    TechProcessStore.emitChangeEditTechProcess();
	                },
	                error: function (data) {
	                    errorActions_1.default.received(data.responseJSON);
	                }
	            });
	        }
	    }
	    function _addTechProcess(techProcess) {
	        $.ajax({
	            url: location.origin + '/api/techProcesses',
	            dataType: 'json',
	            type: 'PUT',
	            data: {
	                id: techProcess.id,
	                __RequestVerificationToken: antiForgeryToken
	            },
	            success: function (techProcess) {
	                _techProcess = techProcess;
	                if (_techProcesses[techProcess.id]) {
	                    _techProcesses[techProcess.id] = assign({}, _techProcesses[techProcess.id], techProcess);
	                    TechProcessStore.emitChangeTechProcesses();
	                }
	                navigationManager_1.default.openTechProcessEditor(techProcess.id);
	            },
	            error: function (xhr, status, err) {
	                console.error(this.props.url, status, err.toString());
	            }.bind(this)
	        });
	    }
	    function _deleteTechProcess(id) {
	        $.ajax({
	            url: location.origin + '/api/techProcesses/' + id,
	            dataType: 'json',
	            type: 'DELETE',
	            data: { __RequestVerificationToken: antiForgeryToken },
	            success: function (id) {
	                _loadTechProcesses();
	            },
	            error: function (xhr, status, err) {
	                console.error(this.props.url, status, err.toString());
	            }
	        });
	    }
	    function _updateTechProcess(techProcess) {
	        $.ajax({
	            url: location.origin + '/api/techProcesses',
	            dataType: 'json',
	            type: 'POST',
	            data: {
	                id: techProcess.id,
	                __RequestVerificationToken: antiForgeryToken
	            },
	            success: function (techProcess) {
	                if (_techProcesses[techProcess.id]) {
	                    _techProcesses[techProcess.id] = assign({}, _techProcesses[techProcess.id], techProcess);
	                    TechProcessStore.emitChangeTechProcesses();
	                }
	            },
	            error: function (xhr, status, err) {
	                console.error(this.props.url, status, err.toString());
	            }
	        });
	    }
	    function _init(currentPage, techProcessesPerPage, searchText) {
	        _techProcessesPerPage = techProcessesPerPage;
	        _currentTechProcessPage = currentPage;
	        _techProcessSearchText = searchText;
	        _loadTechProcesses();
	    }
	    var TechProcessStoreStatic = (function (_super) {
	        __extends(TechProcessStoreStatic, _super);
	        function TechProcessStoreStatic() {
	            _super.apply(this, arguments);
	        }
	        TechProcessStoreStatic.prototype.getAll = function () {
	            return _techProcesses;
	        };
	        TechProcessStoreStatic.prototype.getTechProcessAmount = function () {
	            return _totalTechProcessAmount;
	        };
	        TechProcessStoreStatic.prototype.getTechProcessesPerPage = function () {
	            return _techProcessesPerPage;
	        };
	        TechProcessStoreStatic.prototype.getEditTechProcess = function () {
	            return _techProcess;
	        };
	        TechProcessStoreStatic.prototype.emitChangeTechProcesses = function () {
	            this.emit(CHANGE_TECHPROCESSES_EVENT);
	        };
	        TechProcessStoreStatic.prototype.emitChangeEditTechProcess = function () {
	            this.emit(CHANGE_EDITTECHPROCESS_EVENT);
	        };
	        /**
	         * @param {function} callback
	         */
	        TechProcessStoreStatic.prototype.addChangeEditTechProcessListener = function (callback) {
	            this.on(CHANGE_EDITTECHPROCESS_EVENT, callback);
	        };
	        /**
	         * @param {function} callback
	         */
	        TechProcessStoreStatic.prototype.removeChangeEditTechProcessListener = function (callback) {
	            this.removeListener(CHANGE_EDITTECHPROCESS_EVENT, callback);
	        };
	        /**
	         * @param {function} callback
	         */
	        TechProcessStoreStatic.prototype.addChangeTechProcessesListener = function (callback) {
	            this.on(CHANGE_TECHPROCESSES_EVENT, callback);
	        };
	        /**
	         * @param {function} callback
	         */
	        TechProcessStoreStatic.prototype.removeChangeTechProcessesListener = function (callback) {
	            this.removeListener(CHANGE_TECHPROCESSES_EVENT, callback);
	        };
	        return TechProcessStoreStatic;
	    }(EventEmitter));
	    var TechProcessStore = new TechProcessStoreStatic();
	    appDispatcher_1.default.register(function (payload) {
	        if (payload.actionSource != actionSourceTypes_1.default.TECHPROCESS)
	            return;
	        switch (payload.actionType) {
	            case techProcessActionTypes_1.default.TECHPROCESS_INIT:
	                _init(payload.currentPage, payload.pageSize, payload.searchText);
	                break;
	            case techProcessActionTypes_1.default.TECHPROCESS_LOAD_EDIT:
	                _loadTechProcess(payload.id);
	                break;
	            case techProcessActionTypes_1.default.TECHPROCESS_CREATE:
	                _addTechProcess(payload.techProcess);
	                break;
	            case techProcessActionTypes_1.default.TECHPROCESS_UPDATE:
	                _updateTechProcess(payload.techProcess);
	                break;
	            case techProcessActionTypes_1.default.TECHPROCESS_DELETE:
	                _deleteTechProcess(payload.id);
	                break;
	            case techProcessActionTypes_1.default.TECHPROCESS_PAGE_CHANGE:
	                _currentTechProcessPage = payload.currentPage;
	                _loadTechProcesses();
	                break;
	            case techProcessActionTypes_1.default.TECHPROCESSES_PER_PAGE_CHANGE:
	                _techProcessesPerPage = payload.pageSize;
	                _loadTechProcesses();
	                break;
	            case techProcessActionTypes_1.default.TECHPROCESS_SEARCH_TEXT_CHANGE:
	                _techProcessSearchText = payload.searchText;
	                _loadTechProcesses();
	                break;
	            default:
	        }
	    });
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = TechProcessStore;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=techProcessStore.js.map

/***/ },
/* 68 */
/*!************************************************************!*\
  !*** ./Scripts/app/flux/actions/techProcessActionTypes.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    "use strict";
	    var TechProcessActionTypes;
	    (function (TechProcessActionTypes) {
	        TechProcessActionTypes[TechProcessActionTypes["TECHPROCESS_INIT"] = 0] = "TECHPROCESS_INIT";
	        TechProcessActionTypes[TechProcessActionTypes["TECHPROCESS_LOAD_EDIT"] = 1] = "TECHPROCESS_LOAD_EDIT";
	        TechProcessActionTypes[TechProcessActionTypes["TECHPROCESS_CREATE"] = 2] = "TECHPROCESS_CREATE";
	        TechProcessActionTypes[TechProcessActionTypes["TECHPROCESS_DELETE"] = 3] = "TECHPROCESS_DELETE";
	        TechProcessActionTypes[TechProcessActionTypes["TECHPROCESS_UPDATE"] = 4] = "TECHPROCESS_UPDATE";
	        TechProcessActionTypes[TechProcessActionTypes["TECHPROCESS_PAGE_CHANGE"] = 5] = "TECHPROCESS_PAGE_CHANGE";
	        TechProcessActionTypes[TechProcessActionTypes["TECHPROCESSES_PER_PAGE_CHANGE"] = 6] = "TECHPROCESSES_PER_PAGE_CHANGE";
	        TechProcessActionTypes[TechProcessActionTypes["TECHPROCESS_SEARCH_TEXT_CHANGE"] = 7] = "TECHPROCESS_SEARCH_TEXT_CHANGE";
	    })(TechProcessActionTypes || (TechProcessActionTypes = {}));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = TechProcessActionTypes;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=techProcessActionTypes.js.map

/***/ },
/* 69 */
/*!********************************************************!*\
  !*** ./Scripts/app/flux/actions/techProcessActions.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../../typings/tsd.d.ts" />
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../dispatcher/appDispatcher */ 5), __webpack_require__(/*! ./actionSourceTypes */ 7), __webpack_require__(/*! ./techProcessActionTypes */ 68)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, appDispatcher_1, actionSourceTypes_1, techProcessActionTypes_1) {
	    "use strict";
	    var TechProcessActionsStatic = (function () {
	        function TechProcessActionsStatic() {
	        }
	        TechProcessActionsStatic.prototype.init = function (currentPage, pageSize, searchText) {
	            appDispatcher_1.default.dispatch({
	                actionType: techProcessActionTypes_1.default.TECHPROCESS_INIT,
	                actionSource: actionSourceTypes_1.default.TECHPROCESS,
	                currentPage: currentPage,
	                pageSize: pageSize,
	                searchText: searchText
	            });
	        };
	        TechProcessActionsStatic.prototype.loadEditTechProcess = function (id) {
	            appDispatcher_1.default.dispatch({
	                actionType: techProcessActionTypes_1.default.TECHPROCESS_LOAD_EDIT,
	                actionSource: actionSourceTypes_1.default.TECHPROCESS,
	                id: id
	            });
	        };
	        TechProcessActionsStatic.prototype.create = function (techProcess) {
	            appDispatcher_1.default.dispatch({
	                actionType: techProcessActionTypes_1.default.TECHPROCESS_CREATE,
	                actionSource: actionSourceTypes_1.default.TECHPROCESS,
	                techProcess: techProcess
	            });
	        };
	        TechProcessActionsStatic.prototype.update = function (techProcess) {
	            appDispatcher_1.default.dispatch({
	                actionType: techProcessActionTypes_1.default.TECHPROCESS_UPDATE,
	                actionSource: actionSourceTypes_1.default.TECHPROCESS,
	                techProcess: techProcess
	            });
	        };
	        TechProcessActionsStatic.prototype.remove = function (id) {
	            appDispatcher_1.default.dispatch({
	                actionType: techProcessActionTypes_1.default.TECHPROCESS_DELETE,
	                actionSource: actionSourceTypes_1.default.TECHPROCESS,
	                id: id
	            });
	        };
	        TechProcessActionsStatic.prototype.changeTechProcessPage = function (page) {
	            appDispatcher_1.default.dispatch({
	                actionType: techProcessActionTypes_1.default.TECHPROCESS_PAGE_CHANGE,
	                actionSource: actionSourceTypes_1.default.TECHPROCESS,
	                currentPage: page
	            });
	        };
	        TechProcessActionsStatic.prototype.changeTechProcessesPerPage = function (techProcesssPerPage) {
	            appDispatcher_1.default.dispatch({
	                actionType: techProcessActionTypes_1.default.TECHPROCESSES_PER_PAGE_CHANGE,
	                actionSource: actionSourceTypes_1.default.TECHPROCESS,
	                pageSize: techProcesssPerPage
	            });
	        };
	        TechProcessActionsStatic.prototype.changeTechProcessSearchText = function (text) {
	            appDispatcher_1.default.dispatch({
	                actionType: techProcessActionTypes_1.default.TECHPROCESS_SEARCH_TEXT_CHANGE,
	                actionSource: actionSourceTypes_1.default.TECHPROCESS,
	                searchText: text
	            });
	        };
	        return TechProcessActionsStatic;
	    }());
	    var TechProcessActions = new TechProcessActionsStatic();
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = TechProcessActions;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=techProcessActions.js.map

/***/ },
/* 70 */
/*!**********************************************************!*\
  !*** ./Scripts/app/components/techProcessListSection.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2), __webpack_require__(/*! ./techProcessList */ 66)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React, techProcessList_1) {
	    "use strict";
	    var ToolProcessListSection = (function (_super) {
	        __extends(ToolProcessListSection, _super);
	        function ToolProcessListSection() {
	            _super.apply(this, arguments);
	        }
	        ToolProcessListSection.prototype.render = function () {
	            return (React.createElement("div", {className: "outer"}, React.createElement(techProcessList_1.default, null), this.props.children));
	        };
	        return ToolProcessListSection;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = ToolProcessListSection;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=techProcessListSection.js.map

/***/ },
/* 71 */
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2), __webpack_require__(/*! ./techOperationList */ 62)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React, techOperationList_1) {
	    "use strict";
	    var ToolListOperationSection = (function (_super) {
	        __extends(ToolListOperationSection, _super);
	        function ToolListOperationSection() {
	            _super.apply(this, arguments);
	        }
	        ToolListOperationSection.prototype.render = function () {
	            return (React.createElement("div", {className: "outer"}, React.createElement(techOperationList_1.default, null), this.props.children));
	        };
	        return ToolListOperationSection;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = ToolListOperationSection;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=techOperationListSection.js.map

/***/ },
/* 72 */
/*!*******************************************************!*\
  !*** ./Scripts/app/components/techStepListSection.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2), __webpack_require__(/*! ./techStepList */ 58)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React, techStepList_1) {
	    "use strict";
	    var ToolListSection = (function (_super) {
	        __extends(ToolListSection, _super);
	        function ToolListSection() {
	            _super.apply(this, arguments);
	        }
	        ToolListSection.prototype.render = function () {
	            return (React.createElement("div", {className: "outer"}, React.createElement(techStepList_1.default, null), this.props.children));
	        };
	        return ToolListSection;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = ToolListSection;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=techStepListSection.js.map

/***/ },
/* 73 */
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2), __webpack_require__(/*! ./partList */ 51)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React, partList_1) {
	    "use strict";
	    var PartListSection = (function (_super) {
	        __extends(PartListSection, _super);
	        function PartListSection() {
	            _super.apply(this, arguments);
	        }
	        PartListSection.prototype.render = function () {
	            return (React.createElement("div", {className: "outer"}, React.createElement(partList_1.default, null), this.props.children));
	        };
	        return PartListSection;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = PartListSection;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=partListSection.js.map

/***/ },
/* 74 */
/*!************************************************!*\
  !*** ./Scripts/app/components/partEditForm.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2), __webpack_require__(/*! ../flux/stores/partStore */ 52), __webpack_require__(/*! ../flux/stores/errorStore */ 75), __webpack_require__(/*! ../flux/actions/partActions */ 57), __webpack_require__(/*! ../managers/navigationManager */ 15), __webpack_require__(/*! ./common/textInput */ 48)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React, partStore_1, errorStore_1, partActions_1, navigationManager_1, textInput_1) {
	    "use strict";
	    var PartEditForm = (function (_super) {
	        __extends(PartEditForm, _super);
	        function PartEditForm(props, context) {
	            var _this = this;
	            _super.call(this, props, context);
	            this.handleEditPartChange = function () {
	                _this.setState({
	                    part: partStore_1.default.getEditPart(),
	                    errorMessage: null,
	                    isValid: true
	                });
	            };
	            this.handleNewError = function () {
	                _this.setState({
	                    part: null,
	                    errorMessage: errorStore_1.default.getError(),
	                    isValid: true
	                });
	            };
	            this.handleSubmit = function (e) {
	                e.preventDefault();
	                if (_this.state.part.id == 0) {
	                    partActions_1.default.create(_this.state.part);
	                }
	                else {
	                    partActions_1.default.update(_this.state.part);
	                }
	            };
	            this.cancelClickHandler = function () {
	                navigationManager_1.default.closePartEditor();
	            };
	            this.registerInput = function (input) {
	                _this.inputs[input.props.name] = input;
	            };
	            this.setPartName = function (event) {
	                _this.setState({
	                    part: {
	                        id: _this.state.part.id,
	                        name: event.target.value,
	                        price: _this.state.part.price,
	                    },
	                    errorMessage: null,
	                    isValid: true
	                });
	            };
	            this.setPartPrice = function (event) {
	                _this.setState({
	                    part: {
	                        id: _this.state.part.id,
	                        name: _this.state.part.name,
	                        price: event.target.value
	                    },
	                    errorMessage: null,
	                    isValid: true
	                });
	            };
	            this.props = props;
	            this.context = context;
	            this.state = {
	                part: null,
	                errorMessage: null,
	                isValid: true
	            };
	        }
	        PartEditForm.prototype.componentWillMount = function () {
	            this.inputs = {};
	            partStore_1.default.addChangeEditPartListener(this.handleEditPartChange);
	            errorStore_1.default.addChangeErrorListener(this.handleNewError);
	        };
	        PartEditForm.prototype.componentWillUnmount = function () {
	            partStore_1.default.removeChangeEditPartListener(this.handleEditPartChange);
	            errorStore_1.default.removeChangeErrorListener(this.handleNewError);
	        };
	        PartEditForm.prototype.componentDidMount = function () {
	            partActions_1.default.loadEditPart(this.props.params.partId);
	        };
	        PartEditForm.prototype.componentWillReceiveProps = function (nextProps) {
	            partActions_1.default.loadEditPart(nextProps.params.partId);
	        };
	        PartEditForm.prototype.nameValidate = function () {
	            //you could do something here that does general validation for any form field
	            return true;
	        };
	        PartEditForm.prototype.render = function () {
	            return (React.createElement("div", {className: "panel panel-default inner", style: { marginBottom: 0 + 'px' }}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", null, "Редактирование детали")), React.createElement("div", {className: "panel-body"}, this.state.errorMessage != null ?
	                React.createElement("div", null, React.createElement("div", {className: "form-group"}, React.createElement("span", null, this.state.errorMessage)), React.createElement("div", {className: "form-group"}, React.createElement("div", {className: "btn-partbar"}, React.createElement("button", {className: "btn btn-default", type: "button", onClick: this.cancelClickHandler}, "Закрыть"))))
	                : null, this.state.part == null ?
	                this.state.errorMessage == null ?
	                    React.createElement("p", null, "Загрузка данных...")
	                    : null
	                :
	                    React.createElement("form", {role: "form", onSubmit: this.handleSubmit}, React.createElement("div", {className: "form-group"}, React.createElement("label", {className: "control-label"}, "Наименование: "), React.createElement(textInput_1.default, {name: "partName", text: "", value: this.state.part.name, required: true, onChange: this.setPartName, onError: function () { }, errorMessage: "Данное наименование недействительно", emptyMessage: "Наименование обязательно для ввода", register: this.registerInput, validate: this.nameValidate, minCharacters: 1, uniqueName: ''})), React.createElement("div", {className: "form-group"}, React.createElement("label", {className: "control-label"}, "Цена: "), React.createElement(textInput_1.default, {name: "partPrice", text: "", value: String(this.state.part.price), required: true, onChange: this.setPartPrice, onError: function () { }, errorMessage: "Данное значение недействительно", emptyMessage: "Цена обязательна для ввода", register: this.registerInput, validate: this.nameValidate, minCharacters: 1, uniqueName: ''})), React.createElement("div", {className: "form-group"}, React.createElement("div", {className: "btn-toolbar"}, React.createElement("input", {className: "btn btn-primary", type: "submit", value: "Сохранить"}), React.createElement("button", {className: "btn btn-default", type: "button", onClick: this.cancelClickHandler}, "Закрыть")))))));
	        };
	        return PartEditForm;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = PartEditForm;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=partEditForm.js.map

/***/ },
/* 75 */
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! eventemitter3 */ 21), __webpack_require__(/*! ../dispatcher/appDispatcher */ 5), __webpack_require__(/*! ../actions/actionSourceTypes */ 7), __webpack_require__(/*! ../actions/errorActionTypes */ 54)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, EventEmitter, appDispatcher_1, actionSourceTypes_1, errorActionTypes_1) {
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
	        if (payload.actionSource != actionSourceTypes_1.default.ERROR)
	            return;
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
/* 76 */
/*!****************************************************!*\
  !*** ./Scripts/app/components/techStepEditForm.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2), __webpack_require__(/*! ../flux/stores/techStepStore */ 59), __webpack_require__(/*! ../flux/stores/errorStore */ 75), __webpack_require__(/*! ../flux/actions/techStepActions */ 61), __webpack_require__(/*! ../managers/navigationManager */ 15), __webpack_require__(/*! ./common/textAreaInput */ 77), __webpack_require__(/*! ./toolUsagesEditor */ 78), __webpack_require__(/*! ../flux/actions/toolActions */ 4), __webpack_require__(/*! ../flux/stores/toolStore */ 81)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React, techStepStore_1, errorStore_1, techStepActions_1, navigationManager_1, textAreaInput_1, toolUsagesEditor_1, toolActions_1, toolStore_1) {
	    "use strict";
	    var TechStepEditForm = (function (_super) {
	        __extends(TechStepEditForm, _super);
	        function TechStepEditForm(props, context) {
	            var _this = this;
	            _super.call(this, props, context);
	            this.handleEditTechStepChange = function () {
	                _this.setState({
	                    techStep: techStepStore_1.default.getEditTechStep(),
	                    errorMessage: null,
	                    isValid: true,
	                });
	            };
	            this.handleNewError = function () {
	                _this.setState({
	                    techStep: null,
	                    errorMessage: errorStore_1.default.getError(),
	                    isValid: true,
	                });
	            };
	            this.handleSubmit = function (e) {
	                e.preventDefault();
	                if (_this.state.techStep.id == 0) {
	                    techStepActions_1.default.create(_this.state.techStep);
	                }
	                else {
	                    techStepActions_1.default.update(_this.state.techStep);
	                }
	            };
	            this.cancelClickHandler = function () {
	                navigationManager_1.default.closeTechStepEditor();
	            };
	            this.registerInput = function (input) {
	                _this.inputs[input.props.name] = input;
	            };
	            this.setTechStepDescription = function (event) {
	                _this.setState({
	                    techStep: {
	                        id: _this.state.techStep.id,
	                        description: event.target.value,
	                        toolUsages: _this.state.techStep.toolUsages
	                    },
	                    errorMessage: null,
	                    isValid: true,
	                });
	            };
	            this.handleToolUsagesChange = function (toolUsages) {
	                var techStep = _this.state.techStep;
	                techStep.toolUsages = toolUsages;
	                _this.setState({
	                    techStep: techStep,
	                    errorMessage: _this.state.errorMessage,
	                    isValid: _this.state.isValid,
	                });
	            };
	            this.props = props;
	            this.context = context;
	            this.state = {
	                techStep: null,
	                errorMessage: null,
	                isValid: true
	            };
	        }
	        TechStepEditForm.prototype.componentWillMount = function () {
	            this.inputs = {};
	            techStepStore_1.default.addChangeEditTechStepListener(this.handleEditTechStepChange);
	            errorStore_1.default.addChangeErrorListener(this.handleNewError);
	        };
	        TechStepEditForm.prototype.componentWillUnmount = function () {
	            techStepStore_1.default.removeChangeEditTechStepListener(this.handleEditTechStepChange);
	            errorStore_1.default.removeChangeErrorListener(this.handleNewError);
	        };
	        TechStepEditForm.prototype.componentDidMount = function () {
	            techStepActions_1.default.loadEditTechStep(this.props.params.techStepId);
	            toolActions_1.default.init(toolStore_1.default.getCurrentToolPage(), toolStore_1.default.getToolsPerPage(), toolStore_1.default.getSearchText());
	        };
	        TechStepEditForm.prototype.componentWillReceiveProps = function (nextProps) {
	            techStepActions_1.default.loadEditTechStep(nextProps.params.techStepId);
	        };
	        TechStepEditForm.prototype.nameValidate = function () {
	            //you could do something here that does general validation for any form field
	            return true;
	        };
	        TechStepEditForm.prototype.render = function () {
	            console.log(this.state.techStep);
	            return (React.createElement("div", {className: "panel panel-default wide-inner", style: { marginBottom: 0 + 'px' }}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", null, "Редактирование технологического шага")), React.createElement("div", {className: "panel-body"}, this.state.errorMessage != null ?
	                React.createElement("div", null, React.createElement("div", {className: "form-group"}, React.createElement("span", null, this.state.errorMessage)), React.createElement("div", {className: "form-group"}, React.createElement("div", {className: "btn-techStepbar"}, React.createElement("button", {className: "btn btn-default", type: "button", onClick: this.cancelClickHandler}, "Закрыть"))))
	                : null, this.state.techStep == null ?
	                this.state.errorMessage == null ?
	                    React.createElement("p", null, "Загрузка данных...")
	                    : null
	                :
	                    React.createElement("form", {role: "form", onSubmit: this.handleSubmit}, React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-lg-6"}, React.createElement("fieldset", null, React.createElement("legend", null, "Описание"), React.createElement("div", {className: "form-group"}, React.createElement(textAreaInput_1.default, {text: this.state.techStep.description}))), React.createElement("fieldset", null, React.createElement("legend", null, "Инструменты"), React.createElement(toolUsagesEditor_1.default, {toolUsages: this.state.techStep.toolUsages, onToolUsagesChange: this.handleToolUsagesChange})), React.createElement("fieldset", null, React.createElement("legend", null, "Комплектующие"))), React.createElement("div", {className: "col-lg-6"}, React.createElement("fieldset", null, React.createElement("legend", null, "Визуализация")))), React.createElement("div", {className: "form-group"}, React.createElement("div", {className: "btn-toolbar"}, React.createElement("input", {className: "btn btn-primary", type: "submit", value: "Сохранить"}), React.createElement("button", {className: "btn btn-default", type: "button", onClick: this.cancelClickHandler}, "Закрыть")))))));
	        };
	        return TechStepEditForm;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = TechStepEditForm;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=techStepEditForm.js.map

/***/ },
/* 77 */
/*!********************************************************!*\
  !*** ./Scripts/app/components/common/textAreaInput.js ***!
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
	    var TextAreaInput = (function (_super) {
	        __extends(TextAreaInput, _super);
	        function TextAreaInput() {
	            _super.apply(this, arguments);
	        }
	        TextAreaInput.prototype.render = function () {
	            return (React.createElement("textarea", {className: "form-control", rows: "5", cols: "50", onChange: function () { }, value: this.props.text}));
	        };
	        return TextAreaInput;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = TextAreaInput;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=textAreaInput.js.map

/***/ },
/* 78 */
/*!****************************************************!*\
  !*** ./Scripts/app/components/toolUsagesEditor.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2), __webpack_require__(/*! ../flux/actions/toolActions */ 4), __webpack_require__(/*! ./toolList */ 16), __webpack_require__(/*! ./common/itemUsageRow */ 79), __webpack_require__(/*! ../utils/utils */ 18)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React, toolActions_1, toolList_1, itemUsageRow_1, utils_1) {
	    "use strict";
	    var ToolChooser = (function (_super) {
	        __extends(ToolChooser, _super);
	        function ToolChooser(props, context) {
	            var _this = this;
	            _super.call(this, props, context);
	            this.openCloseToolList = function () {
	                _this.setState({
	                    isToolListOpen: !_this.state.isToolListOpen,
	                    toolListId: !_this.state.isToolListOpen ? utils_1.default.uuid() : "",
	                    selectedTools: _this.state.selectedTools
	                });
	            };
	            this.toolEditFormOpen = function (toolId) {
	            };
	            this.newToolBtnClickHandler = function () {
	            };
	            this.handleToolDelete = function (toolId) {
	                toolActions_1.default.remove(toolId);
	            };
	            this.handleToolsPerPageChange = function (toolsPerPage) {
	                toolActions_1.default.changeToolsPerPage(toolsPerPage);
	            };
	            this.handleToolPageChange = function (page) {
	                toolActions_1.default.changeToolPage(page);
	            };
	            this.handleToolSearchTextChange = function (text) {
	                toolActions_1.default.changeToolSearchText(text);
	            };
	            this.handleSelectedToolsChange = function (selectedTools) {
	                _this.setState({
	                    isToolListOpen: _this.state.isToolListOpen,
	                    toolListId: _this.state.toolListId,
	                    selectedTools: selectedTools
	                });
	            };
	            this.props = props;
	            this.context = context;
	            this.state = {
	                isToolListOpen: false,
	                toolListId: "",
	                selectedTools: []
	            };
	        }
	        ToolChooser.prototype.render = function () {
	            return (React.createElement("div", null, this.state.isToolListOpen ?
	                React.createElement("div", null, React.createElement("div", {className: "form-group"}, React.createElement("button", {onClick: this.openCloseToolList, className: "btn btn-default"}, React.createElement("span", {className: "glyphicon glyphicon-minus"})), React.createElement("button", {onClick: function () { }, className: "btn btn-default pull-right"}, React.createElement("span", {className: "glyphicon glyphicon-plus"}), React.createElement("span", null, " Добавить выбранный"))), React.createElement(toolList_1.default, {componentId: this.state.toolListId, selectedTools: this.state.selectedTools, onSelectedToolsChange: this.handleSelectedToolsChange}))
	                :
	                    React.createElement("div", {className: "form-group"}, React.createElement("button", {onClick: this.openCloseToolList, className: "btn btn-default"}, React.createElement("span", {className: "glyphicon glyphicon-plus"})))));
	        };
	        return ToolChooser;
	    }(React.Component));
	    var ToolUsagesEditor = (function (_super) {
	        __extends(ToolUsagesEditor, _super);
	        function ToolUsagesEditor(props, context) {
	            var _this = this;
	            _super.call(this, props, context);
	            this.toolUsageChanged = function (itemUsage) {
	                var toolUsages = _this.props.toolUsages;
	                for (var i = 0; i < toolUsages.length; i++) {
	                    if (toolUsages[i].toolId == itemUsage.itemId) {
	                        toolUsages[i].quantity = itemUsage.quantity;
	                        break;
	                    }
	                }
	                _this.props.onToolUsagesChange(toolUsages);
	            };
	            this.props = props;
	            this.context = context;
	            this.state = {
	                currentToolUsage: null
	            };
	        }
	        ToolUsagesEditor.prototype.render = function () {
	            var toolUsageRows = [];
	            for (var key in this.props.toolUsages) {
	                var toolUsage = this.props.toolUsages[key];
	                toolUsageRows.push(React.createElement(itemUsageRow_1.default, {key: key, itemId: toolUsage.tool.id, itemName: toolUsage.tool.name, quantity: toolUsage.quantity, onChange: this.toolUsageChanged}));
	            }
	            return (React.createElement("div", null, React.createElement("div", {style: { marginBottom: 10 + 'px', display: 'flex', flexDirection: 'column' }}, React.createElement("div", {style: { overflowY: 'auto' }}, React.createElement("table", {className: "table table-bordered", style: { marginBottom: 1 + 'px' }}, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {style: { width: 25 + '%' }}, "ID"), React.createElement("th", {style: { width: 50 + '%' }}, "Наименование"), React.createElement("th", {style: { width: 25 + '%' }}, "Применяемость"))), React.createElement("tbody", null, toolUsageRows)))), React.createElement(ToolChooser, null)));
	        };
	        return ToolUsagesEditor;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = ToolUsagesEditor;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=toolUsagesEditor.js.map

/***/ },
/* 79 */
/*!*******************************************************!*\
  !*** ./Scripts/app/components/common/itemUsageRow.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2), __webpack_require__(/*! ./contentEditable */ 80), __webpack_require__(/*! ./tableRow */ 17)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React, contentEditable_1, tableRow_1) {
	    "use strict";
	    var ItemUsageRow = (function (_super) {
	        __extends(ItemUsageRow, _super);
	        function ItemUsageRow() {
	            var _this = this;
	            _super.apply(this, arguments);
	            this.onItemUsageQuantityChanged = function (value) {
	                _this.props.onChange({ itemId: _this.props.itemId, quantity: parseInt(value) });
	            };
	        }
	        ItemUsageRow.prototype.render = function () {
	            return (React.createElement(tableRow_1.default, {item: this.props.itemId, isCurrent: false, changeCurrent: function () { }, rowDoubleClickHandler: function () { }}, React.createElement("td", {style: { width: 25 + '%' }}, this.props.itemId), React.createElement("td", {style: { width: 50 + '%' }}, this.props.itemName), React.createElement("td", {style: { width: 25 + '%', position: "relative", padding: 0 + 'px', verticalAlign: 'middle' }}, React.createElement(contentEditable_1.default, {html: String(this.props.quantity), onChange: this.onItemUsageQuantityChanged}))));
	        };
	        return ItemUsageRow;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = ItemUsageRow;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=itemUsageRow.js.map

/***/ },
/* 80 */
/*!**********************************************************!*\
  !*** ./Scripts/app/components/common/contentEditable.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2), __webpack_require__(/*! react-dom */ 40)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React, ReactDOM) {
	    "use strict";
	    var ContentEditable = (function (_super) {
	        __extends(ContentEditable, _super);
	        function ContentEditable() {
	            var _this = this;
	            _super.apply(this, arguments);
	            this.onContentChange = function () {
	                _this.props.onChange(ReactDOM.findDOMNode(_this).innerHTML);
	            };
	        }
	        ContentEditable.prototype.render = function () {
	            return (React.createElement("div", {className: "edit", contentEditable: true, dangerouslySetInnerHTML: { __html: this.props.html }, onInput: this.onContentChange, style: { height: 100 + '%', width: 100 + '%', margin: 0, padding: 0, textAlign: 'center' }}));
	        };
	        return ContentEditable;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = ContentEditable;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=contentEditable.js.map

/***/ },
/* 81 */
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
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! jquery */ 55), __webpack_require__(/*! ../dispatcher/appDispatcher */ 5), __webpack_require__(/*! ../actions/actionSourceTypes */ 7), __webpack_require__(/*! ../actions/toolActionTypes */ 8), __webpack_require__(/*! ../actions/errorActions */ 53), __webpack_require__(/*! ../../constants/pageConstants */ 14), __webpack_require__(/*! ../../managers/navigationManager */ 15), __webpack_require__(/*! object-assign */ 28), __webpack_require__(/*! eventemitter3 */ 21)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, $, appDispatcher_1, actionSourceTypes_1, toolActionTypes_1, errorActions_1, pageConstants_1, navigationManager_1, assign, EventEmitter) {
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
	        ToolStoreStatic.prototype.getCurrentToolPage = function () {
	            return _currentToolPage;
	        };
	        ToolStoreStatic.prototype.getSearchText = function () {
	            return _toolSearchText;
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
	        if (payload.actionSource != actionSourceTypes_1.default.TOOL)
	            return;
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
/* 82 */
/*!*********************************************************!*\
  !*** ./Scripts/app/components/techOperationEditForm.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2), __webpack_require__(/*! ../flux/stores/techOperationStore */ 63), __webpack_require__(/*! ../flux/stores/errorStore */ 75), __webpack_require__(/*! ../flux/actions/techOperationActions */ 65), __webpack_require__(/*! ../managers/navigationManager */ 15), __webpack_require__(/*! ./common/textInput */ 48)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React, techOperationStore_1, errorStore_1, techOperationActions_1, navigationManager_1, textInput_1) {
	    "use strict";
	    var TechOperationEditForm = (function (_super) {
	        __extends(TechOperationEditForm, _super);
	        function TechOperationEditForm(props, context) {
	            var _this = this;
	            _super.call(this, props, context);
	            this.handleEditTechOperationChange = function () {
	                _this.setState({
	                    techOperation: techOperationStore_1.default.getEditTechOperation(),
	                    errorMessage: null,
	                    isValid: true
	                });
	            };
	            this.handleNewError = function () {
	                _this.setState({
	                    techOperation: null,
	                    errorMessage: errorStore_1.default.getError(),
	                    isValid: true
	                });
	            };
	            this.handleSubmit = function (e) {
	                e.preventDefault();
	                if (_this.state.techOperation.id == 0) {
	                    techOperationActions_1.default.create(_this.state.techOperation);
	                }
	                else {
	                    techOperationActions_1.default.update(_this.state.techOperation);
	                }
	            };
	            this.cancelClickHandler = function () {
	                navigationManager_1.default.closeTechOperationEditor();
	            };
	            this.registerInput = function (input) {
	                _this.inputs[input.props.name] = input;
	            };
	            this.setTechOperationName = function (event) {
	                _this.setState({
	                    techOperation: {
	                        id: _this.state.techOperation.id,
	                        name: event.target.value
	                    },
	                    errorMessage: null,
	                    isValid: true
	                });
	            };
	            this.props = props;
	            this.context = context;
	            this.state = {
	                techOperation: null,
	                errorMessage: null,
	                isValid: true
	            };
	        }
	        TechOperationEditForm.prototype.componentWillMount = function () {
	            this.inputs = {};
	            techOperationStore_1.default.addChangeEditTechOperationListener(this.handleEditTechOperationChange);
	            errorStore_1.default.addChangeErrorListener(this.handleNewError);
	        };
	        TechOperationEditForm.prototype.componentWillUnmount = function () {
	            techOperationStore_1.default.removeChangeEditTechOperationListener(this.handleEditTechOperationChange);
	            errorStore_1.default.removeChangeErrorListener(this.handleNewError);
	        };
	        TechOperationEditForm.prototype.componentDidMount = function () {
	            techOperationActions_1.default.loadEditTechOperation(this.props.params.techOperationId);
	        };
	        TechOperationEditForm.prototype.componentWillReceiveProps = function (nextProps) {
	            techOperationActions_1.default.loadEditTechOperation(nextProps.params.techOperationId);
	        };
	        TechOperationEditForm.prototype.nameValidate = function () {
	            //you could do something here that does general validation for any form field
	            return true;
	        };
	        TechOperationEditForm.prototype.render = function () {
	            return (React.createElement("div", {className: "panel panel-default inner", style: { marginBottom: 0 + 'px' }}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", null, "Редактирование технологической операции")), React.createElement("div", {className: "panel-body"}, this.state.errorMessage != null ?
	                React.createElement("div", null, React.createElement("div", {className: "form-group"}, React.createElement("span", null, this.state.errorMessage)), React.createElement("div", {className: "form-group"}, React.createElement("div", {className: "btn-techOperationbar"}, React.createElement("button", {className: "btn btn-default", type: "button", onClick: this.cancelClickHandler}, "Закрыть"))))
	                : null, this.state.techOperation == null ?
	                this.state.errorMessage == null ?
	                    React.createElement("p", null, "Загрузка данных...")
	                    : null
	                :
	                    React.createElement("form", {role: "form", onSubmit: this.handleSubmit}, React.createElement("div", {className: "form-group"}, React.createElement("label", {className: "control-label"}, "Наименование: "), React.createElement(textInput_1.default, {name: "techOperationName", text: "", value: this.state.techOperation.name, required: true, onChange: this.setTechOperationName, onError: function () { }, errorMessage: "Данное наименование недействительно", emptyMessage: "Наименование обязательно для ввода", register: this.registerInput, validate: this.nameValidate, minCharacters: 1, uniqueName: ''})), React.createElement("div", {className: "form-group"}, React.createElement("div", {className: "btn-toolbar"}, React.createElement("input", {className: "btn btn-primary", type: "submit", value: "Сохранить"}), React.createElement("button", {className: "btn btn-default", type: "button", onClick: this.cancelClickHandler}, "Закрыть")))))));
	        };
	        return TechOperationEditForm;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = TechOperationEditForm;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=techOperationEditForm.js.map

/***/ },
/* 83 */
/*!*******************************************************!*\
  !*** ./Scripts/app/components/techProcessEditForm.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <reference path="../../typings/tsd.d.ts" />
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! react */ 2), __webpack_require__(/*! ../flux/stores/techProcessStore */ 67), __webpack_require__(/*! ../flux/stores/errorStore */ 75), __webpack_require__(/*! ../flux/actions/techProcessActions */ 69), __webpack_require__(/*! ../managers/navigationManager */ 15), __webpack_require__(/*! ./common/textInput */ 48)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, React, techProcessStore_1, errorStore_1, techProcessActions_1, navigationManager_1, textInput_1) {
	    "use strict";
	    var TechProcessEditForm = (function (_super) {
	        __extends(TechProcessEditForm, _super);
	        function TechProcessEditForm(props, context) {
	            var _this = this;
	            _super.call(this, props, context);
	            this.handleEditTechProcessChange = function () {
	                _this.setState({
	                    techProcess: techProcessStore_1.default.getEditTechProcess(),
	                    errorMessage: null,
	                    isValid: true
	                });
	            };
	            this.handleNewError = function () {
	                _this.setState({
	                    techProcess: null,
	                    errorMessage: errorStore_1.default.getError(),
	                    isValid: true
	                });
	            };
	            this.handleSubmit = function (e) {
	                e.preventDefault();
	                if (_this.state.techProcess.id == 0) {
	                    techProcessActions_1.default.create(_this.state.techProcess);
	                }
	                else {
	                    techProcessActions_1.default.update(_this.state.techProcess);
	                }
	            };
	            this.cancelClickHandler = function () {
	                navigationManager_1.default.closeTechProcessEditor();
	            };
	            this.registerInput = function (input) {
	                _this.inputs[input.props.name] = input;
	            };
	            this.setTechProcessName = function (event) {
	                _this.setState({
	                    techProcess: {
	                        id: _this.state.techProcess.id,
	                        name: event.target.value
	                    },
	                    errorMessage: null,
	                    isValid: true
	                });
	            };
	            this.props = props;
	            this.context = context;
	            this.state = {
	                techProcess: null,
	                errorMessage: null,
	                isValid: true
	            };
	        }
	        TechProcessEditForm.prototype.componentWillMount = function () {
	            this.inputs = {};
	            techProcessStore_1.default.addChangeEditTechProcessListener(this.handleEditTechProcessChange);
	            errorStore_1.default.addChangeErrorListener(this.handleNewError);
	        };
	        TechProcessEditForm.prototype.componentWillUnmount = function () {
	            techProcessStore_1.default.removeChangeEditTechProcessListener(this.handleEditTechProcessChange);
	            errorStore_1.default.removeChangeErrorListener(this.handleNewError);
	        };
	        TechProcessEditForm.prototype.componentDidMount = function () {
	            techProcessActions_1.default.loadEditTechProcess(this.props.params.techProcessId);
	        };
	        TechProcessEditForm.prototype.componentWillReceiveProps = function (nextProps) {
	            techProcessActions_1.default.loadEditTechProcess(nextProps.params.techProcessId);
	        };
	        TechProcessEditForm.prototype.nameValidate = function () {
	            //you could do something here that does general validation for any form field
	            return true;
	        };
	        TechProcessEditForm.prototype.render = function () {
	            return (React.createElement("div", {className: "panel panel-default inner", style: { marginBottom: 0 + 'px' }}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", null, "Редактирование технологического процесса")), React.createElement("div", {className: "panel-body"}, this.state.errorMessage != null ?
	                React.createElement("div", null, React.createElement("div", {className: "form-group"}, React.createElement("span", null, this.state.errorMessage)), React.createElement("div", {className: "form-group"}, React.createElement("div", {className: "btn-techProcessbar"}, React.createElement("button", {className: "btn btn-default", type: "button", onClick: this.cancelClickHandler}, "Закрыть"))))
	                : null, this.state.techProcess == null ?
	                this.state.errorMessage == null ?
	                    React.createElement("p", null, "Загрузка данных...")
	                    : null
	                :
	                    React.createElement("form", {role: "form", onSubmit: this.handleSubmit}, React.createElement("div", {className: "form-group"}, React.createElement("label", {className: "control-label"}, "Наименование: "), React.createElement(textInput_1.default, {name: "techProcessName", text: "", value: this.state.techProcess.name, required: true, onChange: this.setTechProcessName, onError: function () { }, errorMessage: "Данное наименование недействительно", emptyMessage: "Наименование обязательно для ввода", register: this.registerInput, validate: this.nameValidate, minCharacters: 1, uniqueName: ''})), React.createElement("div", {className: "form-group"}, React.createElement("div", {className: "btn-toolbar"}, React.createElement("input", {className: "btn btn-primary", type: "submit", value: "Сохранить"}), React.createElement("button", {className: "btn btn-default", type: "button", onClick: this.cancelClickHandler}, "Закрыть")))))));
	        };
	        return TechProcessEditForm;
	    }(React.Component));
	    Object.defineProperty(exports, "__esModule", { value: true });
	    exports.default = TechProcessEditForm;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	//# sourceMappingURL=techProcessEditForm.js.map

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map