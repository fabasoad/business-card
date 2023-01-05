import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Resume from '../../components/Resume'
import { testResume } from './TestUtils'

test('should render Resume correctly', () => {
  const { container } = render(<Resume />)
  testResume(container.querySelector('div#resume'))
})
