import React from 'react'
import renderer from 'react-test-renderer'


import Header from "../components/Header/Header"

test('Header snapshot test', () => {

    const tree = renderer.create(<Header />)

    expect(tree).toMatchSnapshot()

})
