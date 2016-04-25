import * as React from 'react';

export default function PendingAnimation(props: any) {
    return (
        <div style={{ position: 'relative', display: 'table', margin: 0 + ' auto' }}>
            <div style={{ display: 'table-cell', verticalAlign: 'middle', zIndex: 1050, position: 'relative' }}>
                <img src="images/spin.gif"/>
            </div>
            <div style={{ display: 'table-cell', verticalAlign: 'middle', textAlign: 'center', zIndex: 1050 }}>
                {props.children}
            </div>
        </div>
    );
}