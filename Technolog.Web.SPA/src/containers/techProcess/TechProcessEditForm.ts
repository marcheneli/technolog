import { connect } from 'react-redux';
import TechProcessEditForm from '../../components/techProcess/TechProcessEditForm';
import * as TechProcessActionCreator from '../../actions/techProcessActionCreator';
import * as PanelActionCreator from '../../actions/panelActionCreator';

const mapStateToTechProcessEditFormProps = (state, ownProps) => {
    const techProcessEditFormState = state.techProcessEditForms.filter(
        techProcessEditForm => techProcessEditForm.id == ownProps.id)[0];

    const values = techProcessEditFormState.values;

    return {
        techProcessId: techProcessEditFormState.techProcessId,
        values: values,
        techOperations: techProcessEditFormState.techOperations,
        selectedTechOperations: techProcessEditFormState.selectedTechOperations,
        isSaving: techProcessEditFormState.isSaving,
        isTechOperationListOpen: techProcessEditFormState.isTechOperationListOpen,
        techOperationListId: techProcessEditFormState.techOperationListId
    };
};

const mapDispatchToTechProcessEditFormProps = (dispatch, ownProps) => {
    return {
        handleSubmit: (event) => {
            event.preventDefault();
            dispatch(TechProcessActionCreator.save(ownProps.id));
        },
        onNameChange: (event) => {
            dispatch(TechProcessActionCreator.techProcessNameChange(ownProps.id, event.target.value));
        },
        onTechOperationListOpenBtnClick: () => {
            dispatch(PanelActionCreator.openTechOperationEditor(0, ownProps.id));
        },
        onTableRowDoubleClick: (techOperation) => {
            dispatch(PanelActionCreator.openTechOperationEditor(techOperation.id));
        },
        onTechOperationSelect: (selectedTechOperations) => {
            dispatch(TechProcessActionCreator.selectTechOperations(ownProps.id, selectedTechOperations));
        },
        onAllTechOperationsSelect: (selectedTechOperations) => {
            dispatch(TechProcessActionCreator.selectTechOperations(ownProps.id, selectedTechOperations));
        }
    };
};

export default connect(
    mapStateToTechProcessEditFormProps,
    mapDispatchToTechProcessEditFormProps
)(TechProcessEditForm);



