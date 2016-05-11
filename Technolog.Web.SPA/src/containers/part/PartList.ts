import { connect } from 'react-redux';
import PartList from '../../components/part/PartList';
import * as PartActionCreator from '../../actions/partActionCreator';
import * as PanelActionCreator from '../../actions/panelActionCreator';
import * as PanelType from '../../components/panelType';
import * as PagingParameter from '../../constants/pagingParameter';

const mapStateToPartListProps = (state, ownProps) => {
    const partListState = state.partLists.filter(partList => partList.id === ownProps.id)[0];
    console.log(ownProps);
    return {
        parts: partListState.parts.map(partId => state.entities.parts[partId]),
        selectedParts: partListState.selectedParts,
        disabledParts: partListState.disabledParts,
        params: partListState.params
    };
};

const mapDispatchToPartListProps = (dispatch, ownProps) => {

    return {
        onMount: () => {
            dispatch(PartActionCreator.load(ownProps.id,
                PagingParameter.FIRST_PAGE,
                PagingParameter.ITEMS_PER_PAGE_INIT,
                PagingParameter.EMPTY_SEARCH_TEXT
            ));
        },
        onDeleteBtnClick: () => {
            dispatch(PartActionCreator.confirmDelete(ownProps.id));
        },
        onAddBtnClick: () => {
            dispatch(PanelActionCreator.open(PanelType.TOOL_EDIT_FORM, "Редактирование инструмента", { part: { id: 0, name: null, price: null} }));
        },
        load: (page, itemsPerPage, searchText) => {
            dispatch(PartActionCreator.load(ownProps.id,
                page,
                itemsPerPage,
                searchText
            ));
        },
        onDeleteConfirm: (parts) => {
            dispatch(PartActionCreator.remove(ownProps.id, parts));
        },
        onDeleteCancel: () => {
            dispatch(PartActionCreator.cancelDelete(ownProps.id));
        }
    };
};

export default connect<{}, { onMount(): void }, { id: number }>(
    mapStateToPartListProps, mapDispatchToPartListProps
)(PartList);