import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import * as React from 'react'

import JobTechnologies from '../../../components/Experience/JobTechnologies'
import { testJobTechnologies } from './TestUtils'

test('should render JobTechnologies correctly', () => {
  const technologies = ['maven', 'java']
  const { container } = render(
    <JobTechnologies keyPrefix="test" names={technologies} />
  )
  testJobTechnologies(container.querySelector('div.technologies'), technologies)
})
