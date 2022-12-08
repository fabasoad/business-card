import * as React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import JobTitle from '../../../components/Experience/JobTitle'

test('should render JobTitle correctly', () => {
  const company = 'test-company'
  const location = 'test-location'
  const logo = 'test-logo'
  const title = 'test-title'
  const { container } = render(<JobTitle
    logo={logo}
    company={company}
    title={title}
    location={location}
  />)
  const imgElement = container.querySelector('img')
  expect(imgElement).toHaveAttribute('src', logo)
  expect(imgElement).toHaveAttribute('alt', company)
  expect(imgElement).toHaveAttribute('title', company)
  expect(container.querySelector('h4.subheading')).toHaveTextContent(title)
  expect(screen.getByRole('heading', { level: 6 })).toHaveTextContent(location)
})
