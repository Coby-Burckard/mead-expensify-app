import { createStore } from "redux";

/*
  Action generators - functions that return action objects
*/
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});

const resetCount = () => ({
  type: "RESET"
});

const setCount = ({ count }) => ({
  type: "SET",
  count
});

/*
Reducers
  1. reducers are pure functions
      pure function: output only determined by the input. No modifications to or variables from outside scope
  2. never change state or action
*/

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };
    case "RESET":
      return {
        count: 0
      };
    case "SET":
      return {
        count: action.count
      };
    default:
      return state;
  }
};

// setting up the store and default state
const store = createStore(countReducer);

/*
  .subscribe - gets called every time the store changes
    returned value from subscribe is a function which can be called to unsubscribe
*/

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

/*
actions - how you can change values in the redux store
  object that gets sent to the store
  in our case we will increment, decrement, and reset the count

  .dispatch
    takes an object to send to the store
    passed into createStore as second argument

    arguments 
      type: only required argument. Convention naming is ALL CAPS
      other named arguments: can pass dynamic information this way
        forcing a required value
*/

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(resetCount());

store.dispatch(setCount({ count: 112 }));
