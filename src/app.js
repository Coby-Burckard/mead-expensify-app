import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import AppRouter, { history } from "./routers/AppRouter";
import { startSetExpenses } from "./actions/expenses";
import configureStore from "./store/configureStore";
import { login, logout } from "./actions/auth";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import Loading  from "./components/Loading"
import { firebase } from "./firebase/firebase"

const store = configureStore();

let hasRendered = false
const renderApp = () => {
  if (!hasRendered) {
    ReactDom.render(jsx, document.getElementById("app"));
    hasRendered = true
  }
}

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDom.render(<Loading />, document.getElementById("app"));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid))
    store.dispatch(startSetExpenses()).then(() => {
      renderApp()
      if (history.location.pathname === '/') {
        history.push('/dashboard')
      }
    })
  } else {
    store.dispatch(logout())
    renderApp()
    history.push('/')
  }
})