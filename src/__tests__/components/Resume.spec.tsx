import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Resume from '../../components/Resume'
import { testSectionTitle } from './Controls/TestUtils'

jest.mock('../../components/Controls/SectionTitle')

describe('Resume', () => {
  test('should render Resume correctly', () => {
    const { container } = render(<Resume />)
    const div = container.querySelector<HTMLDivElement>('div#resume.light-component')
    testSectionTitle(div, 'resume.title')
    expect(
      div.querySelector('div.container > div.col.text-center')
    ).toHaveTextContent('resume.body')
  })
})
