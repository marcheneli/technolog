import { connect } from 'react-redux';
import ToolEditForm from '../components/ToolEditForm';
import * as ToolActionCreator from '../actions/toolActionCreator';

const mapStateToToolEditFormProps = (state, ownProps) => {
    const toolEditFormState = state.toolEditForms.filter(
        toolEditForm => toolEditForm.id == ownProps.id)[0];

    const tool = state.entities.tools.filter(
        tool => tool.id == toolEditFormState.toolId)[0];

    const values = toolEditFormState.values;

    if (!values.name) values.name = tool.name;
    if (!values.price) values.price = tool.price;

    return {
        values: values,
        validationResults: toolEditFormState.validationResults,
        isSaving: false
    };
};

const mapDispatchToToolEditFormProps = (dispatch, ownProps) => {
    return {
        handleSubmit: () => { },
        onUndoClick: () => { },
        onRedoClick: () => { },
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



