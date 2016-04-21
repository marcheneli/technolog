import { connect } from 'react-redux';
import PanelStack from '../components/PanelStack';

const mapStateToPanelStackProps = (state: any) => {
    return {
        panels: state.panels
    };
};

export default connect(mapStateToPanelStackProps, null)(PanelStack);
