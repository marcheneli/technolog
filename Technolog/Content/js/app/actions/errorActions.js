var ErrorActions = {
    received: function (message) {
        AppDispatcher.handleViewAction({
            actionType: ErrorConstants.RECEIVE_ERROR_MESSAGE,
            errorMessage: message
        });
    }
};