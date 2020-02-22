import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";

const EditExpensePage = props => {
  return (
    <div>
      <ExpenseForm
        onSubmit={expense => {
          props.startEditExpense(props.match.params.id, expense);
          props.history.push("/");
        }}
        expense={props.expense}
      />
      <button
        onClick={() => {
          props.startRemoveExpense({id: props.match.params.id});
          props.history.push("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStatetoProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startRemoveExpense: (id) => dispatch(startRemoveExpense(id)),
    startEditExpense: (id, updates) => dispatch(startEditExpense(id, updates))
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(EditExpensePage);
