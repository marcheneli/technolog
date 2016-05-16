import { reduxForm } from 'redux-form';
import Signin from '../../components/auth/Signin';
import * as AuthActionCreator from '../../actions/authActionCreator';

const mapDispatchToProps = (dispatch) => {
    return {
        signinUser: (email, password) => {
            dispatch(AuthActionCreator.signinUser(email, password));
        }
    };
};

export default reduxForm({
    form: 'signin',
    fields: ['email', 'password']
}, null, mapDispatchToProps)(Signin);