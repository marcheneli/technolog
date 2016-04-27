var CHANGE_ERROR_EVENT = 'change_error_event';

var _errorMessage = null;

var _changeErrorMessage = function (errorMessage) {
    _errorMessage = errorMessage;
}

var ErrorStore = assign({}, EventEmitter.prototype, {
    getError: function () {
        return _errorMessage;
    },

    emitChangeError: function () {
        this.emit(CHANGE_ERROR_EVENT);
    },

    addChangeErrorListener: function (callback) {
        this.on(CHANGE_ERROR_EVENT, callback);
    },

    removeChangeErrorListener: function (callback) {
        this.removeListener(CHANGE_ERROR_EVENT, callback);
    }
});

AppDispatcher.register(function (payload) {

    switch (payload.action.actionType) {
        case ErrorConstants.RECEIVE_ERROR_MESSAGE:
            _changeErrorMessage(payload.action.errorMessage);
            ErrorStore.emitChangeError();
            break;

        default:
    }
});