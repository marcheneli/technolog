import { connect } from 'react-redux';
import TechStepTable from '../../components/techStep/TechStepTable';
import * as PanelActionCreator from '../../actions/panelActionCreator';
import * as TechStepActionCreator from '../../actions/techStepActionCreator';
import * as PanelType from '../../components/panelType';

const mapDispatchToTechStepTableProps = (dispatch, ownProps) => {
    return {
        onTableRowDoubleClick: (techStep) => {
            dispatch(PanelActionCreator.open(PanelType.PART_EDIT_FORM, "Редактирование детали", { techStep: techStep }));
        },
        onTechStepSelect: (event) => {
            var selectedTechSteps = ownProps.selectedTechSteps;
            var techSteps = ownProps.techSteps;

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

            dispatch(TechStepActionCreator.select(ownProps.id, selectedTechSteps));
        },
        onAllTechStepsSelect: (event) => {
            var selectedTechSteps = [];
            var techSteps = ownProps.techSteps;

            if (event.target.checked) {
                selectedTechSteps = techSteps.map(techStep => techStep.id);
            }

            dispatch(TechStepActionCreator.select(ownProps.id, selectedTechSteps));
        }
    };
};

export default connect(null, mapDispatchToTechStepTableProps)(TechStepTable);
