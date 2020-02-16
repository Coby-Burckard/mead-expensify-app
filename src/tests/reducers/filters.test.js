import moment from "moment";
import filtersReducer from "../../reducers/filters";

test("should set up default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date", //date or amount
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should set sortBy to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("should set sortBy to date", () => {
  const currentState = {
    text: "",
    sortBy: "amount", //date or amount
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  };
  const state = filtersReducer(currentState, { type: "SORT_BY_DATE" });

  expect(state.sortBy).toBe("date");
});

test("should set end date filter", () => {
  const action = {
    type: "SET_END_DATE",
    endDate: 1
  };
  const state = filtersReducer(undefined, action);

  expect(state.endDate).toBe(1);
});

test("should set start date filter", () => {
  const action = {
    type: "SET_START_DATE",
    startDate: 1
  };
  const state = filtersReducer(undefined, action);

  expect(state.startDate).toBe(1);
});

test("should set text filter", () => {
  const action = {
    type: "SET_TEXT_FILTER",
    text: "hello"
  };
  const state = filtersReducer(undefined, action);

  expect(state.text).toBe("hello");
});
