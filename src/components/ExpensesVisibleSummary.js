import { connect } from 'react-redux'
import numeral from 'numeral'
import React from 'react'
import { Link } from 'react-router-dom'
import getVisibleExpenses from '../selectors/expenses'
import getExpensesTotal from '../selectors/selectedExpensesTotal'

export const ExpensesVisibleSummary = (props) => {
    const expenseWord = props.expensesCount === 1 ? ' expense ' : ' expenses '
    const formattedTotal = numeral(props.expensesTotal/100).format('$0,0.00')
    return (
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">
                Viewing <span>{props.expensesCount}</span> {expenseWord} totalling <span>{formattedTotal}</span>
            </h1>
            <div className="page-header__actions">
              <Link className="button" to="/create">Add Expense</Link>
            </div>
          </div>
        </div>
    )
}

const mapStateToProps = (state => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: getExpensesTotal(visibleExpenses)
    }
})

export default connect(mapStateToProps)(ExpensesVisibleSummary)