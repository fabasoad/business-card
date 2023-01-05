import * as React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Skills from '../../components/Skills'
import { testSkills } from './TestUtils'

test('should render Skills correctly', () => {
  const { container } = render(<Skills />)
  testSkills(container.querySelector('div#skills'))
})
