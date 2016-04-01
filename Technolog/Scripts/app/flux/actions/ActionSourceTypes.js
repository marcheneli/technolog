define(["require", "exports"], function (require, exports) {
    "use strict";
    var ActionSourceTypes;
    (function (ActionSourceTypes) {
        ActionSourceTypes[ActionSourceTypes["ERROR"] = 0] = "ERROR";
        ActionSourceTypes[ActionSourceTypes["TOOL"] = 1] = "TOOL";
        ActionSourceTypes[ActionSourceTypes["PART"] = 2] = "PART";
        ActionSourceTypes[ActionSourceTypes["TECHSTEP"] = 3] = "TECHSTEP";
        ActionSourceTypes[ActionSourceTypes["TECHOPERATION"] = 4] = "TECHOPERATION";
        ActionSourceTypes[ActionSourceTypes["TECHPROCESS"] = 5] = "TECHPROCESS";
    })(ActionSourceTypes || (ActionSourceTypes = {}));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ActionSourceTypes;
});
//# sourceMappingURL=actionSourceTypes.js.map