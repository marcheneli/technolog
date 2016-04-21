///<reference path="../typings/main.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Technolog from "./components/Technolog";
import configureStore from "./store/configureStore";

const store = configureStore({
    panels: []
});

ReactDOM.render(
    <Provider store={store}>
        <Technolog></Technolog>
    </Provider>,
    document.getElementById('content')
);