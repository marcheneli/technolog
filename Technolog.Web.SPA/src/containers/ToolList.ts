import { connect } from 'react-redux';
import ToolList from '../components/ToolList';
import * as ToolActionCreator from '../actions/toolActionCreator';
import * as PanelActionCreator from '../actions/panelActionCreator';
import * as PanelType from '../components/panelType';
import * as PagingParameter from '../constants/pagingParameter';

const mapStateToToolListProps = (state, ownProps) => {
    const toolListState = state.toolLists.filter(toolList => toolList.id === ownProps.id)[0];
    
    return {
        tools: toolListState.tools.map(toolId => state.entities.tools[toolId]),
        selectedTools: toolListState.selectedTools,
        disabledTools: toolListState.disabledTools,
        params: toolListState.params
    };
};

const mapDispatchToToolListProps = (dispatch, ownProps) => {

    return {
        onMount: () => {
            dispatch(ToolActionCreator.load(ownProps.id,
                PagingParameter.FIRST_PAGE,
                PagingParameter.ITEMS_PER_PAGE_INIT,
                PagingParameter.EMPTY_SEARCH_TEXT
            ));
        },
        onDeleteBtnClick: () => {
            dispatch(ToolActionCreator.confirmDelete(ownProps.id));
        },
        onAddBtnClick: () => {
            dispatch(PanelActionCreator.open(PanelType.TOOL_EDIT_FORM, "Редактирование инструмента", { tool: { id: 0, name: null, price: null} }));
        },
        load: (page, itemsPerPage, searchText) => {
            dispatch(ToolActionCreator.load(ownProps.id,
                page,
                itemsPerPage,
                searchText
            ));
        },
        onDeleteConfirm: (tools) => {
            dispatch(ToolActionCreator.remove(ownProps.id, tools));
        },
        onDeleteCancel: () => {
            dispatch(ToolActionCreator.cancelDelete(ownProps.id));
        }
    };
};

export default connect<{}, { onMount(): void }, { id: number }>(
    mapStateToToolListProps, mapDispatchToToolListProps
)(ToolList);