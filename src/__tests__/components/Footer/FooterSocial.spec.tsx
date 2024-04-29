import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import * as React from 'react'

import FooterSocial from '../../../components/Footer/FooterSocial'
import { testFooterSocial } from './TestUtils'

test('should render FooterSocial correctly', () => {
  const { container } = render(<FooterSocial />)
  testFooterSocial(container.querySelector('div'))
})
