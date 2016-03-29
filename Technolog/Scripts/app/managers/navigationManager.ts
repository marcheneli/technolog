/// <reference path="../../typings/tsd.d.ts" />

import * as ReactRouter from "react-router";

let navigation;

class NavigationManagerStatic {

    public handler(args) {
        navigation = args;
    }

    public openToolEditor(id: number) {
        navigation.pathname = '/tools/' + id;
        this.changeLocation();
    }

    public closeToolEditor() {
        navigation.pathname = '/tools';
        this.changeLocation();
    }

    public newTool() {
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
    }

    public openTool(id) {
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
    }

    private changeLocation() {
        ReactRouter.browserHistory.push(navigation);
    }
}

let NavigationManager: NavigationManagerStatic = new NavigationManagerStatic();

ReactRouter.browserHistory.listen(NavigationManager.handler);

export default NavigationManager;