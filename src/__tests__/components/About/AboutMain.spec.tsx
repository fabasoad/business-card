import '@testing-library/jest-dom'
import * as React from 'react'
import AboutMain from '../../../components/About/AboutMain'
import { render } from '@testing-library/react'
import { testAboutMain } from './TestUtils'

test('should render AboutMain correctly', () => {
  const { container } = render(<AboutMain />)
  testAboutMain(container.querySelector('div#about-me'))
})
