import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import thunk from 'redux-thunk'
import {createStore,applyMiddleware} from 'redux'
import {smurfReducer} from '../src/reducers/index'
import {Provider} from 'react-redux'
import App from "./components/App";

const store = createStore(smurfReducer,applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById("root"));
