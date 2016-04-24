import { connect } from 'react-redux';
import ToolTable from '../components/ToolTable';
import * as PanelActionCreator from '../actions/panelActionCreator';
import * as PanelType from '../components/panelType';

const mapStateToToolTableProps = (state, ownProps) => {
    console.log(ownProps);
    return {
        tools: (state.toolLists.filter(toolList => toolList.id === ownProps.id)[0]
            .tools.map(toolId => state.entities.tools.filter(tool => tool.id === toolId)[0])),
        selectedTools: (state.toolLists.filter(toolList => toolList.id === ownProps.id)[0]
            .selectedTools.map(toolId => state.entities.tools.filter(tool => tool.id === toolId)[0]))
    };
};

const mapDispatchToToolTableProps = (dispatch, ownProps) => {
    return {
        onTableRowDoubleClick: (toolId) => {
            dispatch(PanelActionCreator.open(PanelType.TOOL_EDIT_FORM, { toolId: toolId }));
        },
        onToolSelect: (toolId) => {
            dispatch();
        },
        onAllToolsSelect: () => {
            dispatch();
        }
    };
};

export default connect(mapStateToToolTableProps, mapDispatchToToolTableProps)(ToolTable);
