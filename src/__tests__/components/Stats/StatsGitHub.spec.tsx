import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'

import StatsGitHub from '../../../components/Stats/StatsGitHub'
import StatsMainContext, {
  defaultStatsDefaultProps,
  StatsDefaultProps
} from '../../../contexts/StatsMainContext'
import { randomNumber } from '../../TestUtils'
import { testStatsGitHub } from './TestUtils'

test('should render StatsGitHub correctly', () => {
  const expectedStarsAmount: number = randomNumber(1, 100)
  const stats: StatsDefaultProps = defaultStatsDefaultProps
  stats.github.starsAmount = expectedStarsAmount
  const { container } = render(
    <StatsMainContext.Provider value={stats}>
      <StatsGitHub />
    </StatsMainContext.Provider>
  )
  testStatsGitHub(
    container.querySelector('div.stats-item'),
    expectedStarsAmount
  )
})
