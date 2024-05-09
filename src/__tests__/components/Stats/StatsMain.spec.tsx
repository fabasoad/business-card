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
    'business-card-stats-title'
  )
  const divCol = div.querySelector('div.container div.row div.col')
  expect(divCol).toHaveClass('stats-list')
  expect(divCol).toHaveClass('d-flex')
  expect(divCol).toHaveClass('justify-content-center')
  const divStatsItems = divCol.querySelectorAll('div.stats-item')
  expect(divStatsItems).toHaveLength(4)
})
