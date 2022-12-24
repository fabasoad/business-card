import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'

import FooterEmail from '../../../components/Footer/FooterEmail'
import { testFooterEmail } from './TestUtils'

test('should render FooterEmail correctly', () => {
  const { container } = render(<FooterEmail/>)
  testFooterEmail(container.querySelector('div'))
})
