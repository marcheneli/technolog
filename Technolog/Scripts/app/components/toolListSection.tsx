/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";
import ToolListPanel from "./toolListPanel";

export default class ToolListSection extends React.Component<{}, {}> {
    render(): React.ReactElement<{}> {
        return (
            <div className="outer">
                <ToolListPanel componentId=""/>
                {this.props.children}
            </div>
        )
    }
}