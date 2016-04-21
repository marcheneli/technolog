import { connect } from 'react-redux';
import * as PanelActionCreator from '../actions/panelActionCreator';
import Panel from '../components/Panel';

const mapDispatchToPanelProps = (dispatch, ownProps) => {
    return {
        onCloseClick: () => {
            dispatch(PanelActionCreator.close(ownProps.id))
        }
    };
};

export default connect(null, mapDispatchToPanelProps)(Panel);