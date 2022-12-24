import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'

import FooterInfo from '../../../components/Footer/FooterInfo'
import { testFooterInfo } from './TestUtils'

test('should render FooterInfo correctly', () => {
  const { container } = render(<FooterInfo />)
  testFooterInfo(container.querySelector('div'))
})
