import * as React from 'react';
import DialogPanel from './DialogPanel';

export default function ConfirmationDialogPanel(props: any) {
    return (
        <DialogPanel
            onCloseClick={props.onCancelClick}
            title={props.title}>
            <div className="panel-body">
                {props.children}
            </div>
            <div className="panel-footer clearfix">
                <div className="btn-toolbar pull-right">
                    <button type="button" className="btn btn-danger" onClick={props.onConfirmClick}>Да</button>
                    <button type="button" className="btn btn-default" onClick={props.onCancelClick}>Нет</button>
                </div>
            </div>
        </DialogPanel>    
    );
}