import { connect } from 'react-redux';
import PartEditForm from '../../components/part/PartEditForm';
import * as PartActionCreator from '../../actions/partActionCreator';

const mapStateToPartEditFormProps = (state, ownProps) => {
    const partEditFormState = state.partEditForms.filter(
        partEditForm => partEditForm.id == ownProps.id)[0];

    const values = partEditFormState.values;

    return {
        partId: partEditFormState.partId,
        values: values,
        isSaving: partEditFormState.isSaving
    };
};

const mapDispatchToPartEditFormProps = (dispatch, ownProps) => {
    return {
        handleSubmit: (event) => {
            event.preventDefault();
            dispatch(PartActionCreator.save(ownProps.id));
        },
        onNameChange: (event) => {
            dispatch(PartActionCreator.partNameChange(ownProps.id, event.target.value));
        },
        onPriceChange: (event) => {
            dispatch(PartActionCreator.partPriceChange(ownProps.id, event.target.value));
        }
    };
};

export default connect(
    mapStateToPartEditFormProps,
    mapDispatchToPartEditFormProps
)(PartEditForm);



