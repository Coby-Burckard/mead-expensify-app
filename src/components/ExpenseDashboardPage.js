import React from "react";
import ExpensesList from "./ExpensesList";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpensesVisibleSummary from "./ExpensesVisibleSummary"

const ExpenseDashboardPage = () => (
  <div>
    <ExpensesVisibleSummary />
    <ExpenseListFilters />
    <ExpensesList />
  </div>
);

export default ExpenseDashboardPage;
