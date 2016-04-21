import * as React from 'react';

export default function Tab(props) {
    return (
        <li>
            <a onClick={props.onTabClick}>{props.children}</a>
        </li>    
    );
}