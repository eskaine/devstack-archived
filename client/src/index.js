import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import App from "./Pages/App";
import configureStore, { history } from "./store";
import "./styles/styles.scss";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />,
        </ConnectedRouter>
      </Provider>
    </BrowserRouter>
    ,
  </React.StrictMode>,

  document.getElementById("root")
);
