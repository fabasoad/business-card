import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import * as React from 'react'

import Skills from '../../components/Skills'
import { testSkills } from './TestUtils'

test('should render Skills correctly', () => {
  const { container } = render(<Skills />)
  testSkills(container.querySelector('div#skills'))
})
