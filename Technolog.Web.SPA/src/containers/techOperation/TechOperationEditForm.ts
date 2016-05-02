import { connect } from 'react-redux';
import TechOperationEditForm from '../../components/techOperation/TechOperationEditForm';
import * as TechOperationActionCreator from '../../actions/techOperationActionCreator';

const mapStateToTechOperationEditFormProps = (state, ownProps) => {
    const techOperationEditFormState = state.techOperationEditForms.filter(
        techOperationEditForm => techOperationEditForm.id == ownProps.id)[0];

    const values = techOperationEditFormState.values;

    return {
        techOperationId: techOperationEditFormState.techOperationId,
        values: values,
        isSaving: techOperationEditFormState.isSaving
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
        }
    };
};

export default connect(
    mapStateToTechOperationEditFormProps,
    mapDispatchToTechOperationEditFormProps
)(TechOperationEditForm);



