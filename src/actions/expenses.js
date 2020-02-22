import uuid from "uuid";
import database from "../firebase/firebase"

// ADD_EXPENSE
const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense
});

const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData

    const expense={
      description,
      note,
      amount,
      createdAt
    }

    return database.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }))
    })
  }
}

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => {
  const action = {
    type: "REMOVE_EXPENSE",
    id
  }
  return action
};

const startRemoveExpense = ( { id } = {}) => {
  return (dispatch) => { 
    database.ref(`expenses/${id}`).remove().then(() => {
      dispatch(removeExpense({id}))
    }).catch((error) => {
      console.log('Error deleting expense: ', error)
    })
  }
}

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

const startEditExpense = (id, expenseData) => {
  const {
    description = "",
    note = "",
    amount = 0,
    createdAt = 0
  } = expenseData

  const updates = {description, note, amount, createdAt}

  return (dispatch) => {
    database.ref(`expenses/${id}`)
      .set(updates)
      .then(() => {
        dispatch(editExpense(id, updates))
      })
      .catch((error) => {
        console.log('Error updating db: ', error)
      })
  }
}

// SET_EXPENSES
const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

// START_SET_EXPENSES
const startSetExpenses = () => {
  return (dispatch) => {
    return database.ref('expenses')
      .once('value')
      .then((snapshot) => {
        const expenses = []
        snapshot.forEach(expense => {
          expenses.push({
            id: expense.key,
            ...expense.val()
          })
        })
        dispatch(setExpenses(expenses))
      })
      .catch('failed initial read from DB')
  }
}

export { addExpense, removeExpense, editExpense, setExpenses, startAddExpense, startSetExpenses, startRemoveExpense, startEditExpense };
