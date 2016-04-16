/// <reference path="../../../typings/tsd.d.ts" />

import * as React from "react";

interface BlockingContainerProps {
    isBlocked: boolean;
}

interface BlockingContainerState {
}

export default class BlockingContainer
    extends React.Component<BlockingContainerProps, BlockingContainerState> {
    render(): React.ReactElement<BlockingContainerProps> {
        return (
            <div style={{ position: 'relative' }}>
                { this.props.isBlocked ?
                    <div style={{
                            position: 'absolute',
                            height: 100 + '%',
                            width: 100 + '%',
                            bottom: 0,
                            zIndex: 1040,
                            backgroundColor: 'white',
                            opacity: 0.3
                        }}>
                    </div>
                    :
                    null
                }
                {this.props.children}
            </div>
        );
    }
}
