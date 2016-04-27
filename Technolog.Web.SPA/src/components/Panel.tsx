import * as React from 'react';

export default function Panel(props: any) {
    return (
        <div className="panel panel-default inner" style={{ marginBottom: 0 + 'px', position: 'relative', display: 'flex', flexFlow: 'column', height: 100 + '%' }}>
            <div className="panel-heading table-style" style={{ zIndex: 1050, position: 'relative', flex: '0 1 auto' }}>
                <h2 className="panel-title">{props.title}</h2>
                <div className="button-wrap">
                    <div
                        className="btn btn-default"
                        onClick={props.onCloseClick}>
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