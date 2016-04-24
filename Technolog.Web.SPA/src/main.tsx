import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Technolog from "./components/Technolog";
import configureStore from "./store/configureStore";
import * as $ from 'jquery';
import serviceDomain from './constants/serviceDomain';
import * as AntiForgeryToken from './utils/antiForgeryToken';

const store = configureStore({
    panels: []
});

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

ReactDOM.render(
    <Provider store={store}>
        <Technolog></Technolog>
    </Provider>,
    document.getElementById('content')
);