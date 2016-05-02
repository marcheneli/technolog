import { connect } from 'react-redux';
import PartTable from '../../components/part/PartTable';
import * as PanelActionCreator from '../../actions/panelActionCreator';
import * as PartActionCreator from '../../actions/partActionCreator';
import * as PanelType from '../../components/panelType';

const mapDispatchToPartTableProps = (dispatch, ownProps) => {
    return {
        onTableRowDoubleClick: (part) => {
            dispatch(PanelActionCreator.open(PanelType.PART_EDIT_FORM, "Редактирование детали", { part: part }));
        },
        onPartSelect: (event) => {
            var selectedParts = ownProps.selectedParts;
            var parts = ownProps.parts;

            if (event.target.checked) {
                var part;

                for (var i = 0; i < parts.length; i++) {
                    if (parts[i].id == event.target.value) {
                        part = parts[i];
                        break;
                    }
                }

                selectedParts = [
                    ...selectedParts,
                    part.id
                ];

            } else {
                selectedParts = selectedParts.filter(id => id != event.target.value);
            }

            dispatch(PartActionCreator.select(ownProps.id, selectedParts));
        },
        onAllPartsSelect: (event) => {
            var selectedParts = [];
            var parts = ownProps.parts;

            if (event.target.checked) {
                selectedParts = parts.map(part => part.id);
            }

            dispatch(PartActionCreator.select(ownProps.id, selectedParts));
        }
    };
};

export default connect(null, mapDispatchToPartTableProps)(PartTable);
