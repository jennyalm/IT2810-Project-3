import React from 'react'
import renderer from 'react-test-renderer'


import App from "../App.js"

test('App snapshot test', () => {

    const tree = renderer.create(<App />)

    expect(tree).toMatchSnapshot()

})