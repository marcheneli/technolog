import * as React from 'react';
import DialogBackground from './common/DialogBackground';
import ConfirmationDialogPanel from './common/ConfirmationDialogPanel';
import PendingPanel from './common/PendingPanel';
import PendingAnimation from './common/PendingAnimation';
import TextInput from './common/TextInput';
import * as ValidationMessageType from '../validators/validationMessageType';

export default function ToolEditForm(props: any) {
    const onToolNameChange = (event) => {
        props.onNameChange(event.target.value, props.toolId);
    };

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
                    className={ props.validationResults.name.type == ValidationMessageType.WARNING ?
                        "form-group has-warning has-feedback" : "form-group has-feedback"}>
                    <label className="control-label">Наименование: </label>
                    <input className='form-control'
                        onChange={onToolNameChange}
                        value={props.values.name} />
                    { props.validationResults.name.type == ValidationMessageType.PENDING ?

                        <span
                            className="glyphicon glyphicon-refresh form-control-feedback glyphicon-refresh-animate"></span>
                        : null
                    }
                    { props.validationResults.name.type == ValidationMessageType.WARNING ?
                        <div className="help-block" style={{ wordWrap: 'break-all', whiteSpace: 'normal' }}>
                            {props.validationResults.name.errorMessage}
                        </div>
                        : null
                    }
                </div>
                <div className="form-group">
                    <label className="control-label">Цена: </label>
                    <input className='form-control'
                        onChange={props.onPriceChange}
                        value={props.values.price} />
                    { props.validationResults.price.type == ValidationMessageType.DANGER ?
                        <div>
                            <span style={{ color: 'red' }}>{props.validationResults.price.message}</span>
                        </div>
                        : null
                    }
                </div>
                <div className="form-group">
                    <div className="btn-toolbar">
                        <button
                            className="btn btn-primary"
                            type="submit"
                            disabled={!props.isValid}>Сохранить</button>
                        <button
                            className="btn btn-default"
                            type="button"
                            onClick={props.onUndoClick}
                            disabled={!props.isUndoAvailable}>Отменить</button>
                        <button
                            className="btn btn-default"
                            type="button"
                            onClick={props.onRedoClick}
                            disabled={!props.isRedoAvailable}>Вернуть</button>
                    </div>
                </div>
            </form>
        </div>    
    );
}