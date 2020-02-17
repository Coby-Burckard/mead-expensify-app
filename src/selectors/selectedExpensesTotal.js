export default (expenses) => {
    if (expenses.length > 0) {
        return expenses.reduce((accumulator, expense) => {
            return accumulator + expense.amount
        }, 0)
        
    }
    return 0
}