import '@testing-library/jest-dom'
import * as React from 'react'
import { act, render } from '@testing-library/react'

import StatsMain from '../../../components/Stats/StatsMain'
import { testStatsMain } from './TestUtils'

jest.mock('../../../scripts/services/LeetcodeService')

test('should render StatsMain correctly', async () => {
  const { container } = await act(() => render(<StatsMain />))
  testStatsMain(container.querySelector('div#stats'), {
    leetcode: { totalSolved: 6 }
  })
})
