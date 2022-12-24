import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import JobTechnologies from '../../../components/Experience/JobTechnologies'
import { testJobTechnologies } from './TestUtils'

test('should render JobTechnologies correctly', () => {
  const technologies = ['maven', 'java'];
  const { container } = render(<JobTechnologies keys={technologies} />)
  testJobTechnologies(
    container.querySelector('div.technologies'),
    technologies
  )
})
