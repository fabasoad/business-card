import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'

import FooterMain from '../../../components/Footer/FooterMain'
import { testFooterMain } from './TestUtils'

test('should render FooterMain correctly', () => {
  const { container } = render(<FooterMain />)
  testFooterMain(container.querySelector('div.footer'))
})
