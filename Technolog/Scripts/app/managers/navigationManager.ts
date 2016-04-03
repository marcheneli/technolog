/// <reference path="../../typings/tsd.d.ts" />

import * as ReactRouter from "react-router";

class NavigationManagerStatic {
    private navigation;

    public handler = (args): void => {
        this.navigation = args;
    }

    public openToolEditor = (id: number): void => {
        this.navigation.pathname = '/tools/' + id;
        this.changeLocation();
    }

    public closeToolEditor = (): void => {
        this.navigation.pathname = '/tools';
        this.changeLocation();
    }

    public openPartEditor = (id: number): void => {
        this.navigation.pathname = '/parts/' + id;
        this.changeLocation();
    }

    public closePartEditor = (): void => {
        this.navigation.pathname = '/parts';
        this.changeLocation();
    }

    public openTechStepEditor = (id: number): void => {
        this.navigation.pathname = '/steps/' + id;
        this.changeLocation();
    }

    public closeTechStepEditor = (): void => {
        this.navigation.pathname = '/steps';
        this.changeLocation();
    }

    public openTechOperationEditor = (id: number): void => {
        this.navigation.pathname = '/operations/' + id;
        this.changeLocation();
    }

    public closeTechOperationEditor = (): void => {
        this.navigation.pathname = '/operations';
        this.changeLocation();
    }

    public openTechProcessEditor = (id: number): void => {
        this.navigation.pathname = '/processes/' + id;
        this.changeLocation();
    }

    public closeTechProcessEditor = (): void => {
        this.navigation.pathname = '/processes';
        this.changeLocation();
    }

    public newTool = (): void => {
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

    public openTool = (id: number) => {
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