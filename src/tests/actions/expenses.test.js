import { addExpense, removeExpense, editExpense, startAddExpense } from "../../actions/expenses";
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])

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
  const action = addExpense(expenses[2]);

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2]
  });
});

test('should add expense to database and store', () => {
  const store = createMockStore({})
  const expenseData = {
    description: 'mouse',
    amount: '3000',
    note: 'this one is better',
    createdAt: 1000
  }
  
  startAddExpense(expenseData)().then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    })

    database.ref(`expenses/${actions.expense.id}`).once('value').then(snapshot => {
      expect(snapshot.val()).toEqual(expenseData)
      done()
    })
    done()
  })
})