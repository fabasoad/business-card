import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import * as React from 'react'

import Badges from '../../components/Badges'
import { testBadges } from './TestUtils'

test('should render Badges correctly', () => {
  const { container } = render(<Badges />)
  testBadges(container.querySelector('div#badges'))
})
