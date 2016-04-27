/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";
import TechStepList from "./techStepList";

export default class ToolListSection extends React.Component<{}, {}> {
    render(): React.ReactElement<{}> {
        return (
            <div className="outer">
                <TechStepList />
                {this.props.children}
            </div>
        )
    }
}