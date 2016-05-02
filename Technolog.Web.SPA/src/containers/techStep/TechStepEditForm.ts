import { connect } from 'react-redux';
import TechStepEditForm from '../../components/techStep/TechStepEditForm';
import * as TechStepActionCreator from '../../actions/techStepActionCreator';

const mapStateToTechStepEditFormProps = (state, ownProps) => {
    const techStepEditFormState = state.techStepEditForms.filter(
        techStepEditForm => techStepEditForm.id == ownProps.id)[0];

    const values = techStepEditFormState.values;

    return {
        techStepId: techStepEditFormState.techStepId,
        values: values,
        isSaving: techStepEditFormState.isSaving
    };
};

const mapDispatchToTechStepEditFormProps = (dispatch, ownProps) => {
    return {
        handleSubmit: (event) => {
            event.preventDefault();
            dispatch(TechStepActionCreator.save(ownProps.id));
        },
        onNameChange: (event) => {
            dispatch(TechStepActionCreator.techStepNameChange(ownProps.id, event.target.value));
        }
    };
};

export default connect(
    mapStateToTechStepEditFormProps,
    mapDispatchToTechStepEditFormProps
)(TechStepEditForm);



