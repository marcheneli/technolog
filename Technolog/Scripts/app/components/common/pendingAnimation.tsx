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
            <div style={{ position: 'absolute', height: 100 + '%', width: 100 + '%', bottom: 0, zIndex: 1030, }}>
                <div style={{ position: 'absolute', height: 100 + '%', width: 100 + '%', bottom: 0, zIndex: 1040, backgroundColor: '#333', opacity: 0.15 }}>

                </div>
                <div style={{ position: 'relative', display: 'table', height: 100 + '%', width: 100 + '%', zIndex: 1050 }}>
                    <div style={{ display: 'table-cell', height: 100 + '%', verticalAlign: 'middle', zIndex: 1050 }}>
                        <div style={{ width: 100 + '%', textAlign: 'center' }}>
                            <div className='uil-spin-css' style={{ transform: 'scale(0.79)', display: 'inline-block' }}>
                                <div>
                                    <div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                    </div>
                                </div>
                            </div>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}