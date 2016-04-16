/// <reference path="../../../typings/tsd.d.ts" />

import * as React from "react";

interface ILoadingAnimationProps {
}

interface ICLoadingAnimationState {

}

export default class PendingAnimation
    extends React.Component<ILoadingAnimationProps, ICLoadingAnimationState> {

    render(): React.ReactElement<ILoadingAnimationProps> {
        return (
            <div style={{ position: 'relative', display: 'table', margin: 0 + ' auto'}}>
                <div style={{ display: 'table-cell', verticalAlign: 'middle', zIndex: 1050, position: 'relative' }}>
                    <img src="Content/loaders/spin.gif"/>
                </div>
                <div style={{ display: 'table-cell', verticalAlign: 'middle', textAlign: 'center', zIndex: 1050 }}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}