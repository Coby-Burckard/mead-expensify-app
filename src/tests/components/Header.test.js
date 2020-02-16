import React from 'react'
import { shallow } from "enzyme"
import Header from "../../components/Header"

/*
    Shallow rendering
        just care about about what is getting rendered
        only renders the given component
        no assertions directly on object.... use snapshots instead

        snapshot
            current render of header
            will be compared to in future tests
*/

test('should render Header correctly', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
})
