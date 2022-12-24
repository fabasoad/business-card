import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'

import FooterLocation from '../../../components/Footer/FooterLocation'
import { testFooterLocation } from './TestUtils'

test('should render FooterLocation correctly', () => {
  const { container } = render(<FooterLocation />)
  testFooterLocation(container.querySelector('div'))
})
