import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test("should set up remove expense option object", () => {
  const action = removeExpense({ id: "1" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "1"
  });
});

test("should create an edit expense action object", () => {
  const action = editExpense("3bef", {
    description: "hello",
    amount: "123.32"
  });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "3bef",
    updates: {
      description: "hello",
      amount: "123.32"
    }
  });
});

test("should set up add expense action object with provided values", () => {
  const expenseData = {
    description: "Rent",
    amount: 1234,
    createdAt: 1000,
    note: "this was last months rent"
  };

  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test("should set up add expense action object with default values", () => {
  const action = addExpense();

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      createdAt: 0,
      amount: 0
    }
  });
});
