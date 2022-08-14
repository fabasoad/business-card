/// <reference types="jest" />
import * as React from 'react'
import { render } from '@testing-library/react'
import JobTitle from '../../../components/Experience/JobTitle'

test('should render JobTitle correctly', () => {
  const { container } = render(
    <JobTitle
      company="test-company"
      title="test-title"
      location="test-location"
    />
  )
  expect(container.firstChild).toMatchSnapshot()
})
