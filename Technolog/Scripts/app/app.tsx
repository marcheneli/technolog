/// <reference path="../typings/tsd.d.ts" />

import * as ReactDOM from "react-dom";
import * as ReactRouter from "react-router";
import Main from "./components/main";
import TechProcessListSection from "./components/techProcessListSection";
import TechOperationListSection from "./components/techOperationListSection";
import TechStepListSection from "./components/techStepListSection";
import ToolListSection from "./components/toolListSection";
import PartListSection from "./components/partListSection";
import ToolEditForm from "./components/toolEditForm";
import PartEditForm from "./components/partEditForm";
import TechStepEditForm from "./components/techStepEditForm";
import TechOperationEditForm from "./components/techOperationEditForm";
import TechProcessEditForm from "./components/techProcessEditForm";

let routers = (
    <ReactRouter.Router history={ReactRouter.browserHistory}>
        <ReactRouter.Route path="/" component={Main}>
            <ReactRouter.Route path="processes" component={TechProcessListSection}>
                <ReactRouter.Route path=":techProcessId" component={TechProcessEditForm} />
            </ReactRouter.Route>
            <ReactRouter.Route path="operations" component={TechOperationListSection}>
                <ReactRouter.Route path=":techOperationId" component={TechOperationEditForm} />
            </ReactRouter.Route>
            <ReactRouter.Route path="steps" component={TechStepListSection}>
                <ReactRouter.Route path=":techStepId" component={TechStepEditForm} />
            </ReactRouter.Route>
            <ReactRouter.Route path="tools" component={ToolListSection}>
                <ReactRouter.Route path=":toolId" component={ToolEditForm} />
            </ReactRouter.Route>
            <ReactRouter.Route path="parts" component={PartListSection}>
                <ReactRouter.Route path=":partId" component={PartEditForm} />
            </ReactRouter.Route>
        </ReactRouter.Route>
    </ReactRouter.Router>
);

ReactDOM.render(
    routers,
    document.getElementById('content')
);