import * as React from 'react';

export default function TableRow(props: any) {
    return (
        <tr onDoubleClick={props.onTableRowDoubleClick}>
            {props.children}
        </tr>    
    );
}