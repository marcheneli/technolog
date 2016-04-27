/// <reference path="../../../typings/tsd.d.ts" />

import AppDispatcher from "../dispatcher/appDispatcher";
import ActionSourceTypes from "./actionSourceTypes";
import ErrorActionTypes from "./errorActionTypes";

class ErrorActionsStatic {
    public received(message: string): void {
        AppDispatcher.dispatch({
            actionType: ErrorActionTypes.RECEIVE_ERROR_MESSAGE,
            actionSource: ActionSourceTypes.ERROR,
            errorMessage: message
        });
    }
}

let ErrorActions: ErrorActionsStatic = new ErrorActionsStatic();

export default ErrorActions;
