import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";
import App from './App';
import {Provider} from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import {store, persistor} from './redux/index'

ReactDOM.render(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>,
  document.getElementById("root"))
