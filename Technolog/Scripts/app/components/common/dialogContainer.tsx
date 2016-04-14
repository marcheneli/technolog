/// <reference path="../../../typings/tsd.d.ts" />

import * as React from "react";

interface DialogContainerProps {
    isShow: boolean;
}

interface DialogContainerState {
}

export default class DialogContainer
    extends React.Component<DialogContainerProps, DialogContainerState> {
    render(): React.ReactElement<DialogContainerProps> {
        return (
            this.props.isShow ?
                <div style={{ position: 'absolute', height: 100 + '%', width: 100 + '%', bottom: 0, left: 0, zIndex: 1030, }}>
                    <div style={{ position: 'absolute', height: 100 + '%', width: 100 + '%', bottom: 0, zIndex: 1040, backgroundColor: '#333', opacity: 0.15 }}>

                    </div>
                    <div style={{ position: 'relative', top: 200 + 'px', margin: 0 + ' auto', width: 400 + 'px', zIndex: 1050 }}>
                        {this.props.children}
                    </div>
                </div>
            :
                null    
        );
    }
}
