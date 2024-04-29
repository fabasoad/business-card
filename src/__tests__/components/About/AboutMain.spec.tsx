import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import * as React from 'react'
import AboutMain from '../../../components/About/AboutMain'
import { testAboutMain } from './TestUtils'

describe('AboutMain', () => {
  test('should render AboutMain correctly', () => {
    const { container } = render(<AboutMain />)
    testAboutMain(container.querySelector('div#about'))
  })
})
