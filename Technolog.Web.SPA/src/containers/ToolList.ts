import { connect } from 'react-redux';
import ToolList from '../components/ToolList';
import * as ToolActionCreator from '../actions/toolActionCreator';
import * as PagingParameter from '../constants/pagingParameter';

const mapStateToToolListProps = (state, ownProps) => {
    const toolListState = state.toolLists.filter(toolList => toolList.id === ownProps.id)[0];

    return {
        tools: (toolListState.tools.map(toolId => state.entities.tools.filter(tool => tool.id === toolId)[0])),
        selectedTools: toolListState.selectedTools,
        isPending: toolListState.isPending,
        isConfirmDeleting: toolListState.isConfirmDeleting,
        isDeleting: toolListState.isDeleting,
        totalAmount: toolListState.totalAmount,
        toolPage: toolListState.toolPage,
        toolsPerPage: toolListState.toolsPerPage,
        searchText: toolListState.searchText
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
        onAddBtnClick: () => { },
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