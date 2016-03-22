// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
/// <reference path="../typings/tsd.d.ts" />

import * as ReactDOM from "react-dom";
import * as ReactRouter from "react-router";
import Main from "./components/main";
import TechProcessListSection from "./components/techProcessListSection";
import TechOperationListSection from "./components/techOperationListSection";
import ToolListSection from "./components/toolListSection";
import PartListSection from "./components/partListSection";
import ToolEditForm from "./components/toolEditForm";

let routers = (
    <ReactRouter.Router history={ReactRouter.browserHistory}>
        <ReactRouter.Route path="/" component={Main}>
            <ReactRouter.Route path="processes" component={TechProcessListSection} />
            <ReactRouter.Route path="operations" component={TechOperationListSection} />
            <ReactRouter.Route path="tools" component={ToolListSection}>
                <ReactRouter.Route path=":toolId" component={ToolEditForm} />
            </ReactRouter.Route>
            <ReactRouter.Route path="parts" component={PartListSection} />
        </ReactRouter.Route>
    </ReactRouter.Router>
);

ReactDOM.render(
    routers,
    document.getElementById('content')
);