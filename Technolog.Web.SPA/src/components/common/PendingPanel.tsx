import * as React from 'react';

export default function PendingPanel(props: any) {
    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <h2 className="panel-title">{props.title}</h2>
            </div>
            <div className="panel-body">
                {props.children}
            </div>
        </div>
    );
}