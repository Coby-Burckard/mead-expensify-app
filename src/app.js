import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import { addExpense } from "./actions/expenses";
import configureStore from "./store/configureStore";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

store.subscribe(() => {
  const expenses = store.getState().expenses;
  const filters = store.getState().filters;
});

store.dispatch(addExpense({ description: "Water Bill", amount: 1000 }));
store.dispatch(addExpense({ description: "Gas Bill", createdAt: 20 }));
store.dispatch(
  addExpense({ description: "youtube tv", amount: 2000, createdAt: 10 })
);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDom.render(jsx, document.getElementById("app"));
