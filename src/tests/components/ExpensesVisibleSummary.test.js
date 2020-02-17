import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesVisibleSummary } from '../../components/ExpensesVisibleSummary'
import expenses from '../fixtures/expenses'

test('should render statement for 0 expenses', ()=> {
    const expensesCount = 0
    const expensesTotal = 0
    const wrapper = shallow(<ExpensesVisibleSummary expensesCount={expensesCount} expensesTotal={expensesTotal}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should render statement for 1 expense', ()=> {
    const expensesCount = 1
    const expensesTotal = 12678.55
    const wrapper = shallow(<ExpensesVisibleSummary expensesCount={expensesCount} expensesTotal={expensesTotal}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should render statement for multiple expenses', ()=> {
    const expensesCount = 4
    const expensesTotal = 102.55
    const wrapper = shallow(<ExpensesVisibleSummary expensesCount={expensesCount} expensesTotal={expensesTotal}/>)
    expect(wrapper).toMatchSnapshot()
})
