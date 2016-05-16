import { connect } from 'react-redux';
import Technolog from '../components/Technolog';

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    };
}

export default connect(mapStateToProps)(Technolog);