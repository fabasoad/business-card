import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Resume from '../../components/Resume'

jest.mock('../../components/Controls/Section')
jest.mock('../../components/Controls/SectionTitle')

describe('Resume', () => {
  test('should render Resume correctly', () => {
    const { container } = render(<Resume />)
    expect(
      container.querySelector('div[data-testid="Section-resume"] > div.col.text-center')
    ).toHaveTextContent('resume.body')
  })
})
