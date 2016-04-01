define(["require", "exports"], function (require, exports) {
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
});
//# sourceMappingURL=techProcessActionTypes.js.map