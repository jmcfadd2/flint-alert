import React from 'react'
import App from './App'
import { render, screen } from '@testing-library/react'

describe('App tests', () => {
  it('renders', () => {
    render(<App />) 

    screen.debug()
  })
})