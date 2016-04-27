import * as React from 'react';

export default function DialogBackground(props: any) {
    return (
        props.isShow ?
            <div style={{
                position: 'absolute',
                height: 100 + '%',
                width: 100 + '%',
                bottom: 0,
                left: 0,
                zIndex: 1030
            }}>
                <div style={{
                    position: 'absolute',
                    height: 100 + '%',
                    width: 100 + '%',
                    bottom: 0,
                    zIndex: 1040,
                    backgroundColor: 'white', opacity: 0.3
                }}></div>
                <div style={{
                    position: 'relative',
                    top: 200 + 'px',
                    margin: 0 + ' auto',
                    width: 400 + 'px',
                    zIndex: 1050
                }}>
                    {props.children}
                </div>
            </div>
            :
            null
    );
}

