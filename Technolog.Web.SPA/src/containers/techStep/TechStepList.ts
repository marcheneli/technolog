import { connect } from 'react-redux';
import TechStepList from '../../components/techStep/TechStepList';
import * as TechStepActionCreator from '../../actions/techStepActionCreator';
import * as PanelActionCreator from '../../actions/panelActionCreator';
import * as PanelType from '../../components/panelType';
import * as PagingParameter from '../../constants/pagingParameter';

const mapStateToTechStepListProps = (state, ownProps) => {
    const techStepListState = state.techStepLists.filter(techStepList => techStepList.id === ownProps.id)[0];

    return {
        techSteps: techStepListState.techSteps.map(techStepId => state.entities.techSteps[techStepId]),
        selectedTechSteps: techStepListState.selectedTechSteps,
        params: techStepListState.params
    };
};

const mapDispatchToTechStepListProps = (dispatch, ownProps) => {

    return {
        onMount: () => {
            dispatch(TechStepActionCreator.load(ownProps.id,
                PagingParameter.FIRST_PAGE,
                PagingParameter.ITEMS_PER_PAGE_INIT,
                PagingParameter.EMPTY_SEARCH_TEXT
            ));
        },
        onDeleteBtnClick: () => {
            dispatch(TechStepActionCreator.confirmDelete(ownProps.id));
        },
        onAddBtnClick: () => {
            dispatch(PanelActionCreator.open(PanelType.TOOL_EDIT_FORM, "Редактирование технологического шага", { techStep: { id: 0, name: null } }));
        },
        load: (page, itemsPerPage, searchText) => {
            dispatch(TechStepActionCreator.load(ownProps.id,
                page,
                itemsPerPage,
                searchText
            ));
        },
        onDeleteConfirm: (techSteps) => {
            dispatch(TechStepActionCreator.remove(ownProps.id, techSteps));
        },
        onDeleteCancel: () => {
            dispatch(TechStepActionCreator.cancelDelete(ownProps.id));
        }
    };
};

export default connect<{}, { onMount(): void }, { id: number }>(
    mapStateToTechStepListProps, mapDispatchToTechStepListProps
)(TechStepList);