/// <reference path="../../../typings/tsd.d.ts" />

import * as EventEmitter from "eventemitter3";
import AppDispatcher from "../dispatcher/appDispatcher";
import ErrorActionTypes from "../actions/errorActionTypes";
import ErrorActions from "../actions/errorActions";

let CHANGE_ERROR_EVENT = 'change_error_event';

let _errorMessage = null;

let _changeErrorMessage = function (errorMessage) {
    _errorMessage = errorMessage;
}

class ErrorStoreStatic extends EventEmitter {
    getError(): string {
        return _errorMessage;
    }

    emitChangeError() {
        this.emit(CHANGE_ERROR_EVENT);
    }

    /**
     * @param {function} callback
     */
    public addChangeErrorListener(callback: () => void): void {
        this.on(CHANGE_ERROR_EVENT, callback);
    }

    /**
     * @param {function} callback
     */
    public removeChangeErrorListener(callback: () => void) {
        this.removeListener(CHANGE_ERROR_EVENT, callback);
    }
}

let ErrorStore: ErrorStoreStatic = new ErrorStoreStatic();

AppDispatcher.register(function (payload: AppPayload) {

    switch (payload.actionType) {
        case ErrorActionTypes.RECEIVE_ERROR_MESSAGE:
            _changeErrorMessage(payload.errorMessage);
            ErrorStore.emitChangeError();
            break;

        default:
    }
});

export default ErrorStore;