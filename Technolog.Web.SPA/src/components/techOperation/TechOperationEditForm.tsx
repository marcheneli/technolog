import * as React from 'react';
import DialogBackground from '../common/DialogBackground';
import ConfirmationDialogPanel from '../common/ConfirmationDialogPanel';
import PendingPanel from '../common/PendingPanel';
import PendingAnimation from '../common/PendingAnimation';
import InnerPanel from '../common/InnerPanel';
import TechStepList from '../../containers/techStep/TechStepList';
import TechStepTable from '../techStep/TechStepTable';

export default function TechOperationEditForm(props: any) {
    const onTechStepSelect = (event) => {
        var selectedTechSteps = props.selectedTechSteps;
        var techSteps = props.techSteps;

        if (event.target.checked) {
            var techStep;

            for (var i = 0; i < techSteps.length; i++) {
                if (techSteps[i].id == event.target.value) {
                    techStep = techSteps[i];
                    break;
                }
            }

            selectedTechSteps = [
                ...selectedTechSteps,
                techStep.id
            ];

        } else {
            selectedTechSteps = selectedTechSteps.filter(id => id != event.target.value);
        }

        props.onTechStepSelect(selectedTechSteps);
    }

    const onAllTechStepsSelect = (event) => {
        var selectedTechSteps = [];
        var techSteps = props.techSteps;

        if (event.target.checked) {
            selectedTechSteps = techSteps.map(techStep => techStep.id);
        }

        props.onAllTechStepsSelect(selectedTechSteps);
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
                    <label className="control-label">Шаги: </label>
                    <br/>
                    { props.techSteps.length == 0 ?
                        <div style={{ textAlign: 'center' }}>
                            На данный момент шаги отсутствуют.
                            <br/>
                            Для добавления нажмите кнопку&nbsp;
                            <button type="button" onClick={props.onTechStepListOpenBtnClick} className="btn btn-default">
                                <span className="glyphicon glyphicon-plus"></span>
                            </button>.
                        </div>
                        :
                        <div>
                            <div className="btn-toolbar" style={{ marginBottom: '5px' }}>
                                <button type="button" onClick={props.onTechStepListOpenBtnClick} className="btn btn-default">
                                    <span className="glyphicon glyphicon-plus"></span>
                                </button>
                                <button type="button"
                                    onClick={props.onTechStepDeleteBtnClick}
                                    className="btn btn-default"
                                    disabled={props.selectedTechSteps.length == 0}>
                                    <span className="glyphicon glyphicon-trash"></span>
                                </button>
                            </div>
                            <TechStepTable
                                techSteps={props.techSteps}
                                selectedTechSteps={props.selectedTechSteps}
                                onTableRowDoubleClick={props.onTableRowDoubleClick}
                                onTechStepSelect={onTechStepSelect}
                                onAllTechStepsSelect={onAllTechStepsSelect}/>
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