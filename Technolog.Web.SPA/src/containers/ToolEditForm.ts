import { connect } from 'react-redux';
import ToolEditForm from '../components/ToolEditForm';
import * as ToolActionCreator from '../actions/toolActionCreator';

const mapStateToToolEditFormProps = (state, ownProps) => {
    const toolEditFormState = state.toolEditForms.filter(
        toolEditForm => toolEditForm.id == ownProps.id)[0];

    const values = toolEditFormState.values;

    return {
        toolId: toolEditFormState.toolId,
        values: values,
        isSaving: toolEditFormState.isSaving
    };
};

const mapDispatchToToolEditFormProps = (dispatch, ownProps) => {
    return {
        handleSubmit: (event) => {
            event.preventDefault();
            dispatch(ToolActionCreator.save(ownProps.id));
        },
        onNameChange: (event) => {
            dispatch(ToolActionCreator.toolNameChange(ownProps.id, event.target.value));
        },
        onPriceChange: (event) => {
            dispatch(ToolActionCreator.toolPriceChange(ownProps.id, event.target.value));
        }
    };
};

export default connect(
    mapStateToToolEditFormProps,
    mapDispatchToToolEditFormProps
)(ToolEditForm);



