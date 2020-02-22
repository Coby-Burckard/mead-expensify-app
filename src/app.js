import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import { startSetExpenses } from "./actions/expenses";
import configureStore from "./store/configureStore";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./firebase/firebase"

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDom.render(<p>Loading...</p>, document.getElementById("app"));

store.dispatch(startSetExpenses()).then(() => {
  ReactDom.render(jsx, document.getElementById("app"));
})

