import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'

import StatsGitHub from '../../../components/Stats/StatsGitHub'
import { testStatsGitHub } from './TestUtils'

test('should render StatsGitHub correctly', () => {
  const { container } = render(<StatsGitHub autoload={false} />)
  testStatsGitHub(container.querySelector('div.stats-item'))
})
