import * as React from 'react';
import DialogBackground from '../common/DialogBackground';
import ConfirmationDialogPanel from '../common/ConfirmationDialogPanel';
import PendingPanel from '../common/PendingPanel';
import PendingAnimation from '../common/PendingAnimation';

export default function TechOperationEditForm(props: any) {
    return (
        <div style={{ width: '100%' }}>
            <DialogBackground isShow={props.isSaving}>
                <PendingPanel title={"Сохранение инструмента"}>
                    <PendingAnimation>
                        <h4>Пожалуйста, подождите.</h4>
                        <h4>Идет сохранение.</h4>
                    </PendingAnimation>
                </PendingPanel>
            </DialogBackground>
            <form role="form" onSubmit={props.handleSubmit}>
                <div
                    className="form-group">
                    <label className="control-label">Наименование: </label>
                    <input className='form-control'
                        onChange={props.onNameChange}
                        value={props.values.name} />
                </div>
                <div className="form-group">
                    <div className="btn-toolbar">
                        <button
                            className="btn btn-primary"
                            type="submit"
                            disabled={false}>Сохранить</button>
                    </div>
                </div>
            </form>
        </div>    
    );
}