var AppDispatcher = assign(new Flux.Dispatcher(), {
    handleViewAction: function (action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        });
    }
});