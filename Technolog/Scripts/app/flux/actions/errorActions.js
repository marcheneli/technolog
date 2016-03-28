/// <reference path="../../../typings/tsd.d.ts" />
define(["require", "exports", "./dispatcher/appDispatcher", "./errorActionTypes"], function (require, exports, appDispatcher_1, errorActionTypes_1) {
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
});
//# sourceMappingURL=errorActions.js.map