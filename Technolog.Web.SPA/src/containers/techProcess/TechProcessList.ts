import { connect } from 'react-redux';
import TechProcessList from '../../components/techProcess/TechProcessList';
import * as TechProcessActionCreator from '../../actions/techProcessActionCreator';
import * as PanelActionCreator from '../../actions/panelActionCreator';
import * as PanelType from '../../components/panelType';
import * as PagingParameter from '../../constants/pagingParameter';

const mapStateToTechProcessListProps = (state, ownProps) => {
    const techProcessListState = state.techProcessLists.filter(techProcessList => techProcessList.id === ownProps.id)[0];

    return {
        techProcesses: (techProcessListState.techProcesses.map(
            techProcessId => state.entities.techProcesses.filter(
                techProcess => techProcess.id === techProcessId)[0]
            )
        ),
        selectedTechProcesses: techProcessListState.selectedTechProcesses,
        params: techProcessListState.params
    };
};

const mapDispatchToTechProcessListProps = (dispatch, ownProps) => {

    return {
        onMount: () => {
            dispatch(TechProcessActionCreator.load(ownProps.id,
                PagingParameter.FIRST_PAGE,
                PagingParameter.ITEMS_PER_PAGE_INIT,
                PagingParameter.EMPTY_SEARCH_TEXT
            ));
        },
        onDeleteBtnClick: () => {
            dispatch(TechProcessActionCreator.confirmDelete(ownProps.id));
        },
        onAddBtnClick: () => {
            dispatch(PanelActionCreator.open(PanelType.TECHPROCESS_EDIT_FORM, "Редактирование инструмента", { techProcess: { id: 0, name: null, price: null} }));
        },
        load: (page, itemsPerPage, searchText) => {
            dispatch(TechProcessActionCreator.load(ownProps.id,
                page,
                itemsPerPage,
                searchText
            ));
        },
        onDeleteConfirm: (techProcesses) => {
            dispatch(TechProcessActionCreator.remove(ownProps.id, techProcesses));
        },
        onDeleteCancel: () => {
            dispatch(TechProcessActionCreator.cancelDelete(ownProps.id));
        }
    };
};

export default connect<{}, { onMount(): void }, { id: number }>(
    mapStateToTechProcessListProps, mapDispatchToTechProcessListProps
)(TechProcessList);