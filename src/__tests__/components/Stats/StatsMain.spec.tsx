import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'

import StatsMain from '../../../components/Stats/StatsMain'
import { testSectionTitle } from '../Controls/TestUtils'

jest.mock('../../../components/Stats/StatsGitHub')
jest.mock('../../../components/Stats/StatsLeetcode')
jest.mock('../../../components/Stats/StatsStackOverflow')
jest.mock('../../../components/Stats/StatsSuperUser')

test('should render StatsMain correctly', () => {
  const { container } = render(<StatsMain />)
  const div = container.querySelector('div#stats')
  testSectionTitle(
    div.querySelector('div.section-title'),
    'stats.title'
  )
  const cols = div.querySelectorAll('div.container div.row div.col')
  expect(cols).toHaveLength(4)
})
