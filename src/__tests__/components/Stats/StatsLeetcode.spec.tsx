import '@testing-library/jest-dom'
import * as React from 'react'
import StatsLeetcode from '../../../components/Stats/StatsLeetcode'
import { act, render } from '@testing-library/react'
import { testStatsLeetcode } from './TestUtils'
import { randomNumber } from '../../TestUtils'
import StatsMainContext, {
  defaultStatsDefaultProps,
  StatsDefaultProps
} from '../../../contexts/StatsMainContext'

jest.mock('../../../scripts/services/LeetcodeService')

describe('StatsLeetcode', () => {
  test('should render StatsLeetcode correctly', async () => {
    const expectedTotalSolved: number = randomNumber(1, 100)
    const stats: StatsDefaultProps = defaultStatsDefaultProps
    stats.leetcode.totalSolved = expectedTotalSolved
    const { container} = await act(async () => render(
      <StatsMainContext.Provider value={stats}>
        <StatsLeetcode />
      </StatsMainContext.Provider>
    ))
    testStatsLeetcode(
      container.querySelector('div.stats-item'),
      expectedTotalSolved
    )
  })
})
