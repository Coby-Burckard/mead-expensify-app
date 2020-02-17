import expenses from '../fixtures/expenses'
import selectedExpensesTotal from '../../selectors/selectedExpensesTotal'

test('should return 0 if an empty array is passed in', () => {
    const total = selectedExpensesTotal([])
    expect(total).toBe(0)
})

test('should return expense amount if one expense passed in', () => {
    const expenses = [
        {
            amount: 100
        }
    ]
    const total = selectedExpensesTotal(expenses)
    expect(total).toBe(100)
})

test('should return the sum of the expenses passed in', () => {
    const total = selectedExpensesTotal(expenses)
    expect(total).toBe(195207)
})