import { connect } from 'react-redux';
import TechOperationList from '../../components/techOperation/TechOperationList';
import * as TechOperationActionCreator from '../../actions/techOperationActionCreator';
import * as PanelActionCreator from '../../actions/panelActionCreator';
import * as PanelType from '../../components/panelType';
import * as PagingParameter from '../../constants/pagingParameter';

const mapStateToTechOperationListProps = (state, ownProps) => {
    const techOperationListState = state.techOperationLists.filter(techOperationList => techOperationList.id === ownProps.id)[0];

    return {
        techOperations: techOperationListState.techOperations.map(techOperationId => state.entities.techOperations[techOperationId]),
        selectedTechOperations: techOperationListState.selectedTechOperations,
        params: techOperationListState.params
    };
};

const mapDispatchToTechOperationListProps = (dispatch, ownProps) => {

    return {
        onMount: () => {
            dispatch(TechOperationActionCreator.load(ownProps.id,
                PagingParameter.FIRST_PAGE,
                PagingParameter.ITEMS_PER_PAGE_INIT,
                PagingParameter.EMPTY_SEARCH_TEXT
            ));
        },
        onDeleteBtnClick: () => {
            dispatch(TechOperationActionCreator.confirmDelete(ownProps.id));
        },
        onAddBtnClick: () => {
            dispatch(PanelActionCreator.open(PanelType.TECHOPERATION_EDIT_FORM, "Редактирование инструмента", { techOperation: { id: 0, name: null, price: null} }));
        },
        load: (page, itemsPerPage, searchText) => {
            dispatch(TechOperationActionCreator.load(ownProps.id,
                page,
                itemsPerPage,
                searchText
            ));
        },
        onDeleteConfirm: (techOperations) => {
            dispatch(TechOperationActionCreator.remove(ownProps.id, techOperations));
        },
        onDeleteCancel: () => {
            dispatch(TechOperationActionCreator.cancelDelete(ownProps.id));
        }
    };
};

export default connect<{}, { onMount(): void }, { id: number }>(
    mapStateToTechOperationListProps, mapDispatchToTechOperationListProps
)(TechOperationList);