import { connect } from 'react-redux';
import ToolTable from '../components/ToolTable';
import * as PanelActionCreator from '../actions/panelActionCreator';
import * as ToolActionCreator from '../actions/toolActionCreator';
import * as PanelType from '../components/panelType';

const mapDispatchToToolTableProps = (dispatch, ownProps) => {
    return {
        onTableRowDoubleClick: (toolId) => {
            dispatch(PanelActionCreator.open(PanelType.TOOL_EDIT_FORM, { toolId: toolId }));
        },
        onToolSelect: (event) => {
            var selectedTools = ownProps.selectedTools;
            var tools = ownProps.tools;

            if (event.target.checked) {
                var tool;

                for (var i = 0; i < tools.length; i++) {
                    if (tools[i].id == event.target.value) {
                        tool = tools[i];
                        break;
                    }
                }

                selectedTools = [
                    ...selectedTools,
                    tool.id
                ];

            } else {
                selectedTools = selectedTools.filter(id => id != event.target.value);
            }

            dispatch(ToolActionCreator.select(ownProps.id, selectedTools));
        },
        onAllToolsSelect: (event) => {
            var selectedTools = [];
            var tools = ownProps.tools;

            if (event.target.checked) {
                selectedTools = tools.map(tool => tool.id);
            }

            dispatch(ToolActionCreator.select(ownProps.id, selectedTools));
        }
    };
};

export default connect(null, mapDispatchToToolTableProps)(ToolTable);
