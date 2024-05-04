import '@testing-library/jest-dom'
import * as React from 'react'
import StatsLeetcode from '../../../components/Stats/StatsLeetcode'
import {act, render, waitFor} from '@testing-library/react'
import { testStatsLeetcode } from './TestUtils'
import { getLeetcodeStatsMock, LeetcodeStatsMock } from '../TestUtils'

const leetcodeStatsMock: LeetcodeStatsMock = getLeetcodeStatsMock()
leetcodeStatsMock.mock()

describe('StatsLeetcode', () => {
  test('should render StatsLeetcode correctly', async () => {
    const { container} = await act(async () => render(<StatsLeetcode />))
    await waitFor(() => testStatsLeetcode(
      container.querySelector('div.stats-item'),
      leetcodeStatsMock.expectedTotalSolved
    ))
  })
})
