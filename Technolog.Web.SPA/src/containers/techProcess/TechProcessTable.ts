import { connect } from 'react-redux';
import TechProcessTable from '../../components/techProcess/TechProcessTable';
import * as PanelActionCreator from '../../actions/panelActionCreator';
import * as TechProcessActionCreator from '../../actions/techProcessActionCreator';
import * as PanelType from '../../components/panelType';

const mapDispatchToTechProcessTableProps = (dispatch, ownProps) => {
    return {
        onTableRowDoubleClick: (techProcess) => {
            dispatch(PanelActionCreator.openTechProcessEditor(techProcess.id));
        },
        onTechProcessSelect: (event) => {
            var selectedTechProcesses = ownProps.selectedTechProcesses;
            var techProcesses = ownProps.techProcesses;

            if (event.target.checked) {
                var techProcess;

                for (var i = 0; i < techProcesses.length; i++) {
                    if (techProcesses[i].id == event.target.value) {
                        techProcess = techProcesses[i];
                        break;
                    }
                }

                selectedTechProcesses = [
                    ...selectedTechProcesses,
                    techProcess.id
                ];

            } else {
                selectedTechProcesses = selectedTechProcesses.filter(id => id != event.target.value);
            }

            dispatch(TechProcessActionCreator.select(ownProps.id, selectedTechProcesses));
        },
        onAllTechProcessesSelect: (event) => {
            var selectedTechProcesses = [];
            var techProcesses = ownProps.techProcesses;

            if (event.target.checked) {
                selectedTechProcesses = techProcesses.map(techProcess => techProcess.id);
            }

            dispatch(TechProcessActionCreator.select(ownProps.id, selectedTechProcesses));
        }
    };
};

export default connect(null, mapDispatchToTechProcessTableProps)(TechProcessTable);
