import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from 'react-redux'
import configureStore from './store/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);


reportWebVitals();