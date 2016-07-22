import * as React from 'react';

export default function (props: any) {
    return (
        <div className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" dataToggle="collapse" dataTarget=".navbar-collapse">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <span className="navbar-brand">Технолог</span>
                </div>
                <div className="navbar-collapse collapse navbar-right">
                    <ul className="nav navbar-nav">
                        <li>
                            <a title="Выход" style={{ cursor: "pointer" }}
                                onClick={props.signoutUser}>
                                <span className="glyphicon glyphicon-log-out">
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}