import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Badges from '../../components/Badges'
import { testBadges } from './TestUtils'

test('should render Badges correctly', () => {
  const { container } = render(<Badges/>)
  testBadges(container.querySelector('div#badges'))
})
