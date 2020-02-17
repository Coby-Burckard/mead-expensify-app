import { connect } from 'react-redux'
import numeral from 'numeral'
import React from 'react'
import getVisibleExpenses from '../selectors/expenses'
import getExpensesTotal from '../selectors/selectedExpensesTotal'

export const ExpensesVisibleSummary = (props) => {
    const expenseWord = props.expensesCount === 1 ? ' expense ' : ' expenses '
    const formattedTotal = numeral(props.expensesTotal/100).format('$0,0.00')
    return (
        <div>
            <span>
                Viewing {props.expensesCount} {expenseWord} totalling {formattedTotal}
            </span>
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