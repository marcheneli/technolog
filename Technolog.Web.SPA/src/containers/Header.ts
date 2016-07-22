import { connect } from 'react-redux';
import * as AuthActionCreator from '../actions/authActionCreator';
import Header from '../components/Header';

const mapDispatchToProps = (dispatch) => {
    return {
        signoutUser: () => {
            dispatch(AuthActionCreator.signoutUser());
        }
    };
};

export default connect(null, mapDispatchToProps)(Header);