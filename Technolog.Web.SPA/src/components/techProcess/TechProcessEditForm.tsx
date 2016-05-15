import * as React from 'react';
import DialogBackground from '../common/DialogBackground';
import ConfirmationDialogPanel from '../common/ConfirmationDialogPanel';
import PendingPanel from '../common/PendingPanel';
import PendingAnimation from '../common/PendingAnimation';
import InnerPanel from '../common/InnerPanel';
import TechOperationList from '../../containers/techOperation/TechOperationList';
import TechOperationTable from '../../components/techOperation/TechOperationTable';

export default function TechProcessEditForm(props: any) {
    const onTechOperationSelect = (event) => {
        var selectedTechOperations = props.selectedTechOperations;
        var techOperations = props.techOperations;

        if (event.target.checked) {
            var techOperation;

            for (var i = 0; i < techOperations.length; i++) {
                if (techOperations[i].id == event.target.value) {
                    techOperation = techOperations[i];
                    break;
                }
            }

            selectedTechOperations = [
                ...selectedTechOperations,
                techOperation.id
            ];

        } else {
            selectedTechOperations = selectedTechOperations.filter(id => id != event.target.value);
        }

        props.onTechOperationSelect(selectedTechOperations);
    }

    const onAllTechOperationsSelect = (event) => {
        var selectedTechOperations = [];
        var techOperations = props.techOperations;

        if (event.target.checked) {
            selectedTechOperations = techOperations.map(techOperation => techOperation.id);
        }

        props.onAllTechOperationsSelect(selectedTechOperations);
    }
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
                    <label className="control-label">Наименование:</label>
                    <input className='form-control'
                        onChange={props.onNameChange}
                        value={props.values.name} />
                </div>
                <div className="form-group">
                    <label className="control-label">Операции: </label>
                    <br/>
                    { props.techOperations.length == 0 ?
                        <div style={{ textAlign: 'center' }}>
                            На данный момент операции отсутствуют.
                            <br/>
                            Для добавления нажмите кнопку&nbsp;
                            <button type="button" onClick={props.onTechOperationListOpenBtnClick} className="btn btn-default">
                                <span className="glyphicon glyphicon-plus"></span>
                            </button>.
                        </div>
                        :
                        <div>
                            <div className="btn-toolbar" style={{ marginBottom: '5px' }}>
                                <button type="button"
                                    onClick={props.onTechOperationListOpenBtnClick}
                                    className="btn btn-default">
                                    <span className="glyphicon glyphicon-plus"></span>
                                </button>
                                <button type="button"
                                    onClick={props.onTechOperationDeletetOpenBtnClick}
                                    className="btn btn-default"
                                    disabled={props.selectedTechOperations.length == 0}>
                                    <span className="glyphicon glyphicon-trash"></span>
                                </button>
                            </div>
                            <TechOperationTable
                                techOperations={props.techOperations}
                                selectedTechOperations={props.selectedTechOperations}
                                onTechOperationSelect={onTechOperationSelect}
                                onAllTechOperationsSelect={onAllTechOperationsSelect}
                                onTableRowDoubleClick={props.onTableRowDoubleClick}
                                />
                        </div>
                    }
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