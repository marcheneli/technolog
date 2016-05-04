import { connect } from 'react-redux';
import TechStepEditForm from '../../components/techStep/TechStepEditForm';
import * as TechStepActionCreator from '../../actions/techStepActionCreator';
import * as _ from 'lodash';

const mapStateToTechStepEditFormProps = (state, ownProps) => {
    const techStepEditFormState = state.techStepEditForms.filter(
        techStepEditForm => techStepEditForm.id == ownProps.id)[0];
    
    return {
        techStepId: techStepEditFormState.techStepId,
        values: techStepEditFormState.values,
        toolUsages: techStepEditFormState.toolUsages,
        partUsages: techStepEditFormState.partUsages,
        isSaving: techStepEditFormState.isSaving,
        toolListId: techStepEditFormState.toolListId,
        isToolListOpen: techStepEditFormState.isToolListOpen,
        partListId: techStepEditFormState.partListId,
        isPartListOpen: techStepEditFormState.isPartListOpen
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
        },
        onToolUsageChange: (toolId, quantityValue) => {
            dispatch(TechStepActionCreator.changeToolUsage(ownProps.id, toolId, quantityValue));
        },
        onPartUsageChange: (partId, quantityValue) => {
            dispatch(TechStepActionCreator.changePartUsage(ownProps.id, partId, quantityValue));
        },
        onOpenToolList: () => {
            dispatch(TechStepActionCreator.openToolList(ownProps.id));
        },
        onCloseToolList: () => {
            dispatch(TechStepActionCreator.closeToolList(ownProps.id));
        },
        onOpenPartList: () => {
            dispatch(TechStepActionCreator.openPartList(ownProps.id));
        },
        onClosePartList: () => {
            dispatch(TechStepActionCreator.closePartList(ownProps.id));
        }
    };
};

export default connect(
    mapStateToTechStepEditFormProps,
    mapDispatchToTechStepEditFormProps
)(TechStepEditForm);



