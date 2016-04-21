import { connect } from 'react-redux';
import * as PanelActionCreator from '../actions/panelActionCreator';
import Tab from '../components/Tab';

const mapDispatchToTabProps = (dispatch, ownProps) => {
    return {
        onTabClick: () => {
            dispatch(PanelActionCreator.open(ownProps.name))
        }
    };
}

export default connect(null, mapDispatchToTabProps)(Tab);