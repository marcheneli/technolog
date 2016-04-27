// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";
import PartList from "./partList";

export default class PartListSection extends React.Component<{}, {}> {
    render(): React.ReactElement<{}> {
        return (
            <div className="outer">
                <PartList />
                {this.props.children}
            </div>
        )
    }
}