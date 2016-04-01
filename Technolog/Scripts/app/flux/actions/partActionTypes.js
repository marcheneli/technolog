define(["require", "exports"], function (require, exports) {
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
});
//# sourceMappingURL=partActionTypes.js.map