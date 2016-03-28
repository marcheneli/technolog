define(["require", "exports"], function (require, exports) {
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
});
//# sourceMappingURL=toolActionTypes.js.map