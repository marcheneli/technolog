import { connect } from 'react-redux';
import ToolList from '../components/ToolList';
import * as ToolActionCreator from '../actions/toolActionCreator';
import * as PagingParameter from '../constants/pagingParameter';

const mapDispatchToToolListProps = (dispatch, ownProps) => {
    return {
        onMount: () => {
            dispatch(ToolActionCreator.load(ownProps.id,
                PagingParameter.FIRST_PAGE,
                PagingParameter.ITEMS_PER_PAGE_INIT,
                PagingParameter.EMPTY_SEARCH_TEXT
            ));
        }
    };
};

export default connect<{}, { onMount(): void }, { id: number }>(
    null, mapDispatchToToolListProps
)(ToolList);