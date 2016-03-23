// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";

export default class ToolEditForm extends React.Component<{}, {}> {
    render(): React.ReactElement<{}> {
        return (
                <div>Hi! I'm tool edit form.</div>
            )
    }
}