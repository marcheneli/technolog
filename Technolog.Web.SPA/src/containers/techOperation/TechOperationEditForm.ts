import { connect } from 'react-redux';
import TechOperationEditForm from '../../components/techOperation/TechOperationEditForm';
import * as TechOperationActionCreator from '../../actions/techOperationActionCreator';
import * as PanelActionCreator from '../../actions/panelActionCreator';

const mapStateToTechOperationEditFormProps = (state, ownProps) => {
    const techOperationEditFormState = state.techOperationEditForms.filter(
        techOperationEditForm => techOperationEditForm.id == ownProps.id)[0];

    const values = techOperationEditFormState.values;

    return {
        techOperationId: techOperationEditFormState.techOperationId,
        values: values,
        techSteps: techOperationEditFormState.techSteps,
        selectedTechSteps: techOperationEditFormState.selectedTechSteps,
        isSaving: techOperationEditFormState.isSaving,
        techStepListId: techOperationEditFormState.techStepListId,
        isTechStepListOpen: techOperationEditFormState.isTechStepListOpen
    };
};

const mapDispatchToTechOperationEditFormProps = (dispatch, ownProps) => {
    return {
        handleSubmit: (event) => {
            event.preventDefault();
            dispatch(TechOperationActionCreator.save(ownProps.id));
        },
        onNameChange: (event) => {
            dispatch(TechOperationActionCreator.techOperationNameChange(ownProps.id, event.target.value));
        },
        onTechStepListOpenBtnClick: () => {
            dispatch(PanelActionCreator.openTechStepEditor(0, ownProps.id));
        },
        onTechStepDeleteBtnClick: () => {
            dispatch(TechOperationActionCreator.deleteTechSteps(ownProps.id));
        },
        onTableRowDoubleClick: (techStep) => {
            dispatch(PanelActionCreator.openTechStepEditor(techStep.id));
        },
        onTechStepSelect: (selectedTechSteps) => {
            dispatch(TechOperationActionCreator.selectTechSteps(ownProps.id, selectedTechSteps));
        },
        onAllTechStepsSelect: (selectedTechSteps) => {
            dispatch(TechOperationActionCreator.selectTechSteps(ownProps.id, selectedTechSteps));
        }
    };
};

export default connect(
    mapStateToTechOperationEditFormProps,
    mapDispatchToTechOperationEditFormProps
)(TechOperationEditForm);



