/// <reference path="../../../typings/tsd.d.ts" />

import * as React from "react";

interface IInputErrorProps {
    errorMessage: string
}

export default class InputError extends React.Component<IInputErrorProps, {}> {
    render(): React.ReactElement<{}> {
        return (
            <div>
                <span style={{ color: 'red' }}>{this.props.errorMessage}</span>
            </div>
        )
    }
}
