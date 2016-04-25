import * as React from 'react';

export default function DialogPanel(props: any) {
    return (
        <div className={"panel panel-default"}>
            <div className="panel-heading table-style">
                <h4 className="panel-title">{props.title}</h4>
                <div className="button-wrap">
                    <div
                        className="btn btn-default btn-sm"
                        onClick={props.onClosePanel}>
                        <div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
                            <span>{'❌'}</span>
                        </div>
                    </div>
                </div>
            </div>
            {props.children}
        </div>
    );
}