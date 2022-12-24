import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import JobTitle from '../../../components/Experience/JobTitle'
import { testJobTitle } from './TestUtils'

test('should render JobTitle correctly', () => {
  const company = 'test-company'
  const location = 'test-location'
  const logo = 'test-logo'
  const title = 'test-title'
  const { container } = render(
    <JobTitle
      logo={logo}
      company={company}
      title={title}
      location={location}
    />
  )
  testJobTitle(
    container.querySelector('div.job-title'),
    logo,
    company,
    title,
    location
  )
})
