/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";
import ToolList from "./toolList";

export default class ToolListSection extends React.Component<{}, {}> {
    render(): React.ReactElement<{}> {
        return (
            <div className="outer">
                <ToolList />
                {this.props.children}
            </div>
        )
    }
}