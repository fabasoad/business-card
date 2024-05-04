import '@testing-library/jest-dom'
import * as React from 'react'
import StatsLeetcode from '../../../components/Stats/StatsLeetcode'
import { act, render } from '@testing-library/react'
import { testStatsLeetcode } from './TestUtils'

jest.mock('../../../scripts/services/LeetcodeService')

describe('StatsLeetcode', () => {
  test('should render StatsLeetcode correctly', async () => {
    const { container} = await act(async () => render(<StatsLeetcode />))
    testStatsLeetcode(
      container.querySelector('div.stats-item'),
      6
    )
  })
})
