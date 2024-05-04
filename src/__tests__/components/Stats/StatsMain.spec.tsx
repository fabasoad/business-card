import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'

import StatsMain from '../../../components/Stats/StatsMain'
import { testStatsMain } from './TestUtils'
import { getLeetcodeStatsMock, LeetcodeStatsMock } from '../TestUtils'

const leetcodeStatsMock: LeetcodeStatsMock = getLeetcodeStatsMock()
leetcodeStatsMock.mock()

test('should render StatsMain correctly', () => {
  const { container } = render(<StatsMain />)
  testStatsMain(container.querySelector('div#stats'), {
    leetcode: { totalSolved: leetcodeStatsMock.expectedTotalSolved }
  })
})
