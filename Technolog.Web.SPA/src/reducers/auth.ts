import * as AuthActionType from '../actions/authActionType';
import * as _ from 'lodash';

export default function (state = {}, action) {
    switch (action.type) {
        case AuthActionType.AUTH_USER:
            return _.assign(
                {},
                state,
                { isAuthenticated: true, errorMessage: null }
            );
        case AuthActionType.UNAUTH_USER:
            return _.assign(
                {},
                state,
                { isAuthenticated: false, errorMessage: null }
            );
        case AuthActionType.AUTH_ERROR:
            return _.assign(
                {},
                state,
                { errorMessage: action.payload }
            );
        default:
            return state;
    }
}