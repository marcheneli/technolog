import * as AuthActionType from './authActionType';
import * as axios from 'axios';
import { stringify } from 'query-string';

const ROOT_URL = 'http://localhost:63808';

export function signinUser(email, password) {
    return (dispatch) => {
        axios.post(`${ROOT_URL}/connect/token`,
            stringify({
                client_id: 'socialnetwork',
                client_secret: 'secret',
                grant_type: 'password',
                scope: 'openid',
                username: email,
                password: password
            }),
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        ).then(response => {
            dispatch({ type: AuthActionType.AUTH_USER });
            localStorage.setItem('token', (response.data as any).access_token);
        }).catch(() => {
            dispatch(authError("Bad login info"))
        });
    }
}

export function signoutUser() {
    localStorage.removeItem('token');

    return {
        type: AuthActionType.UNAUTH_USER
    };
}

export function authError(error) {
    return {
        type: AuthActionType.AUTH_ERROR,
        payload: error
    };
}