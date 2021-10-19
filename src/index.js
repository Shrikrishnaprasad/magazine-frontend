import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.10.0";

import { AppProvider } from "components/ContextApi/context";
import App from "components/App/App";

var hist = createBrowserHistory();

ReactDOM.render(
  <AppProvider>
    <Router history={hist}>
      <App />
    </Router>
  </AppProvider>,
  document.getElementById("root")
);
