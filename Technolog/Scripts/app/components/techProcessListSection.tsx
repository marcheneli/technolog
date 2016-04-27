/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";
import TechProcessList from "./techProcessList";

export default class ToolProcessListSection extends React.Component<{}, {}> {
    render(): React.ReactElement<{}> {
        return (
            <div className="outer">
                <TechProcessList />
                {this.props.children}
            </div>
        )
    }
}