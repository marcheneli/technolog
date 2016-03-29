/// <reference path="../../../typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "eventemitter3", "../dispatcher/appDispatcher", "../actions/actionSourceTypes", "../actions/errorActionTypes"], function (require, exports, EventEmitter, appDispatcher_1, actionSourceTypes_1, errorActionTypes_1) {
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
});
//# sourceMappingURL=errorStore.js.map