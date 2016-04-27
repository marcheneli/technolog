var navigation

var NavigationManager = {
    handler: function (args) {
        navigation = args;
    },

    openToolEditor: function (id) {
        navigation.pathname = '/tools/' + id;
        this.changeLocation();
    },

    closeToolEditor: function () {
        navigation.pathname = '/tools';
        this.changeLocation();
    },

    newTool: function () {
        if (navigation.query["toolIds"]) {
            if (Array.isArray(navigation.query["toolIds"])) {
                navigation.query["toolIds"].push(0);
            } else {
                var toolId = navigation.query["toolIds"];

                navigation.query["toolIds"] = [];
                navigation.query["toolIds"].push(toolId);
                navigation.query["toolIds"].push(0);
            }
        }
        else {
            navigation.query["toolIds"] = [];
            navigation.query["toolIds"].push(0);
        }

        ReactRouter.browserHistory.push(navigation);
    },

    openTool: function (id) {
        if (navigation.query["toolIds"]) {
            if (Array.isArray(navigation.query["toolIds"])) {
                navigation.query["toolIds"].push(id);
            } else {
                var toolId = navigation.query["toolIds"];

                navigation.query["toolIds"] = [];
                navigation.query["toolIds"].push(toolId);
                navigation.query["toolIds"].push(id);
            }
        }
        else {
            navigation.query["toolIds"] = [];
            navigation.query["toolIds"].push(id);
        }

        ReactRouter.browserHistory.push(navigation);
    },

    changeLocation: function () {
        ReactRouter.browserHistory.push(navigation);
    }
};

ReactRouter.browserHistory.listen(NavigationManager.handler);