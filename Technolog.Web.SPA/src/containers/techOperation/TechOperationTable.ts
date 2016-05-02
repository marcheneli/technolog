import { connect } from 'react-redux';
import TechOperationTable from '../../components/techOperation/TechOperationTable';
import * as PanelActionCreator from '../../actions/panelActionCreator';
import * as TechOperationActionCreator from '../../actions/techOperationActionCreator';
import * as PanelType from '../../components/panelType';

const mapDispatchToTechOperationTableProps = (dispatch, ownProps) => {
    return {
        onTableRowDoubleClick: (techOperation) => {
            dispatch(PanelActionCreator.open(PanelType.TECHOPERATION_EDIT_FORM, "Редактирование детали", { techOperation: techOperation }));
        },
        onTechOperationSelect: (event) => {
            var selectedTechOperations = ownProps.selectedTechOperations;
            var techOperations = ownProps.techOperations;

            if (event.target.checked) {
                var techOperation;

                for (var i = 0; i < techOperations.length; i++) {
                    if (techOperations[i].id == event.target.value) {
                        techOperation = techOperations[i];
                        break;
                    }
                }

                selectedTechOperations = [
                    ...selectedTechOperations,
                    techOperation.id
                ];

            } else {
                selectedTechOperations = selectedTechOperations.filter(id => id != event.target.value);
            }

            dispatch(TechOperationActionCreator.select(ownProps.id, selectedTechOperations));
        },
        onAllTechOperationsSelect: (event) => {
            var selectedTechOperations = [];
            var techOperations = ownProps.techOperations;

            if (event.target.checked) {
                selectedTechOperations = techOperations.map(techOperation => techOperation.id);
            }

            dispatch(TechOperationActionCreator.select(ownProps.id, selectedTechOperations));
        }
    };
};

export default connect(null, mapDispatchToTechOperationTableProps)(TechOperationTable);
