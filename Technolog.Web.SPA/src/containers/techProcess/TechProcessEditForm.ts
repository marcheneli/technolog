import { connect } from 'react-redux';
import TechProcessEditForm from '../../components/techProcess/TechProcessEditForm';
import * as TechProcessActionCreator from '../../actions/techProcessActionCreator';

const mapStateToTechProcessEditFormProps = (state, ownProps) => {
    const techProcessEditFormState = state.techProcessEditForms.filter(
        techProcessEditForm => techProcessEditForm.id == ownProps.id)[0];

    const values = techProcessEditFormState.values;

    return {
        techProcessId: techProcessEditFormState.techProcessId,
        values: values,
        isSaving: techProcessEditFormState.isSaving
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
        }
    };
};

export default connect(
    mapStateToTechProcessEditFormProps,
    mapDispatchToTechProcessEditFormProps
)(TechProcessEditForm);



