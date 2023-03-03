import '@testing-library/jest-dom'
import * as React from 'react'
import StatsLeetcode from '../../../components/Stats/StatsLeetcode'
import { render } from '@testing-library/react'
import { testStatsLeetcode } from './TestUtils'

test('should render StatsLeetcode correctly', () => {
  const { container } = render(<StatsLeetcode autoload={false} />)
  testStatsLeetcode(container.querySelector('div.stats-item'))
})
