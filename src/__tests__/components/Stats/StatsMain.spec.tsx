import '@testing-library/jest-dom'
import * as React from 'react'
import { act, render } from '@testing-library/react'

import StatsMain from '../../../components/Stats/StatsMain'
import { testStatsMain } from './TestUtils'
import { randomNumber } from '../../TestUtils'
import StatsMainContext, {
  defaultStatsDefaultProps,
  StatsDefaultProps
} from '../../../contexts/StatsMainContext'

jest.mock('../../../scripts/services/LeetcodeService')

test('should render StatsMain correctly', async () => {
  const expectedLeetcodeTotalSolved: number = randomNumber(1, 100)
  const expectedStackOverflowReputation: number = randomNumber(1, 100)
  const expectedSuperUserReputation: number = randomNumber(1, 100)
  const expectedGitHubStarsAmount: number = randomNumber(1, 100)
  const stats: StatsDefaultProps = defaultStatsDefaultProps
  stats.leetcode.totalSolved = expectedLeetcodeTotalSolved
  stats.stackOverflow.reputation = expectedStackOverflowReputation
  stats.superUser.reputation = expectedSuperUserReputation
  stats.github.starsAmount = expectedGitHubStarsAmount
  const { container } = await act(() => render(
    <StatsMainContext.Provider value={stats}>
      <StatsMain />
    </StatsMainContext.Provider>
  ))
  testStatsMain(container.querySelector('div#stats'), {
    leetcodeTotalSolved: expectedLeetcodeTotalSolved,
    stackOverflowReputation: expectedStackOverflowReputation,
    superUserReputation: expectedSuperUserReputation,
    githubStarsAmount: expectedGitHubStarsAmount
  })
})
