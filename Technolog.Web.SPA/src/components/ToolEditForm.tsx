import * as React from 'react';
import DialogBackground from './common/DialogBackground';
import ConfirmationDialogPanel from './common/ConfirmationDialogPanel';
import PendingPanel from './common/PendingPanel';
import PendingAnimation from './common/PendingAnimation';
import TextInput from './common/TextInput';
import * as ValidationMessageType from '../validators/validationMessageType';

export default function ToolEditForm(props: any) {
    return (
        <div>
            <DialogBackground isShow={props.isSaving}>
                <PendingPanel title={"Сохранение инструмента"}>
                    <PendingAnimation>
                        <h4>Пожалуйста, подождите.</h4>
                        <h4>Идет сохранение.</h4>
                    </PendingAnimation>
                </PendingPanel>
            </DialogBackground>
            <form role="form" onSubmit={props.handleSubmit}>
                <div className="form-group">
                    <label className="control-label">Наименование: </label>
                    <input className='form-control'
                        onChange={props.onNameChange}
                        value={props.values.name} />
                    { props.validationResults.name.type == ValidationMessageType.WARNING ?
                        <div>
                            <span style={{ color: 'yellow' }}>{props.nameValidation.message}</span>
                        </div>
                        : null
                    }
                    { props.validationResults.name.type == ValidationMessageType.PENDING ?
                        <div>
                            <span className="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span>
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