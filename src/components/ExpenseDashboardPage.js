import React from "react";
import ExpensesList from "./ExpensesList";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpensesVisibleSummary from "./ExpensesVisibleSummary"

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpensesVisibleSummary />
    <ExpensesList />
  </div>
);

export default ExpenseDashboardPage;
