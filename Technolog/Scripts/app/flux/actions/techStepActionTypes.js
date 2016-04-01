define(["require", "exports"], function (require, exports) {
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
});
//# sourceMappingURL=techStepActionTypes.js.map