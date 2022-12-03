import * as React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import JobTechnologies from '../../../components/Experience/JobTechnologies'

test('should render JobTechnologies correctly', () => {
  render(<JobTechnologies keys={['maven', 'java']} />)
  expect(screen.getByRole('heading', { level: 5 }))
    .toHaveTextContent('business-card-experience-technologies-title')
  const imgJava = screen.getByAltText('java')
  expect(imgJava).toHaveAttribute('src', '[object Object]')
  expect(imgJava).toHaveAttribute('title', 'Java')
  const imgMaven = screen.getByAltText('maven')
  expect(imgMaven).toHaveAttribute('src', '[object Object]')
  expect(imgMaven).toHaveAttribute('title', 'Maven')
})
