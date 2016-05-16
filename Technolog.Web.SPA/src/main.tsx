import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Technolog from "./containers/Technolog";
import configureStore from "./store/configureStore";
import * as $ from 'jquery';
import * as _ from 'lodash';
import serviceDomain from './constants/serviceDomain';
import * as AntiForgeryToken from './utils/antiForgeryToken';
import { AUTH_USER } from './actions/authActionType';

const store = configureStore({
    panels: []
});

(React as any).__spread = _.assign;

$.ajax({
    url: (serviceDomain + "/api/"
        + 'antiforgerytoken' + '/'),
    dataType: 'json',
    type: 'GET',
    success: (antiForgeryToken) => {
        AntiForgeryToken.set(antiForgeryToken);
    },
    error: (xhr, status, err) => {

    }
});

if (localStorage.getItem('token')) {
    store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
    <Provider store={store}>
        <Technolog></Technolog>
    </Provider>,
    document.getElementById('content')
);