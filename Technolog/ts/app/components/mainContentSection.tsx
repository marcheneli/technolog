// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";

export default class MainContentSection extends React.Component<{}, {}> {
    render(): React.ReactElement<{}> {
        return (
            <div className="col-lg-10 col-lg-offset-2 col-md-9 col-md-offset-3 col-sm-9 col-sm-offset-3 col-xs-8 col-xs-offset-4 full-height" id='infopanel'>
                {this.props.children}
            </div>
        )
    }
}