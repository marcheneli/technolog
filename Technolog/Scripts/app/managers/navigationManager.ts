/// <reference path="../../typings/tsd.d.ts" />

import * as ReactRouter from "react-router";

class NavigationManagerStatic {
    private navigation;

    public handler(args) {
        this.navigation = args;
    }

    public openToolEditor(id: number) {
        this.navigation.pathname = '/tools/' + id;
        this.changeLocation();
    }

    public closeToolEditor() {
        this.navigation.pathname = '/tools';
        this.changeLocation();
    }

    public newTool() {
        if (this.navigation.query["toolIds"]) {
            if (Array.isArray(this.navigation.query["toolIds"])) {
                this.navigation.query["toolIds"].push(0);
            } else {
                var toolId = this.navigation.query["toolIds"];

                this.navigation.query["toolIds"] = [];
                this.navigation.query["toolIds"].push(toolId);
                this.navigation.query["toolIds"].push(0);
            }
        }
        else {
            this.navigation.query["toolIds"] = [];
            this.navigation.query["toolIds"].push(0);
        }

        ReactRouter.browserHistory.push(this.navigation);
    }

    public openTool(id) {
        if (this.navigation.query["toolIds"]) {
            if (Array.isArray(this.navigation.query["toolIds"])) {
                this.navigation.query["toolIds"].push(id);
            } else {
                var toolId = this.navigation.query["toolIds"];

                this.navigation.query["toolIds"] = [];
                this.navigation.query["toolIds"].push(toolId);
                this.navigation.query["toolIds"].push(id);
            }
        }
        else {
            this.navigation.query["toolIds"] = [];
            this.navigation.query["toolIds"].push(id);
        }

        ReactRouter.browserHistory.push(this.navigation);
    }

    private changeLocation() {
        ReactRouter.browserHistory.push(this.navigation);
    }
}

let NavigationManager: NavigationManagerStatic = new NavigationManagerStatic();

ReactRouter.browserHistory.listen(NavigationManager.handler);

export default NavigationManager;