import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import * as React from 'react'

import StatsMain from '../../../components/Stats/StatsMain'
import { testStatsMain } from './TestUtils'

test('should render StatsMain correctly', () => {
  const { container } = render(<StatsMain autoload={false} />)
  testStatsMain(container.querySelector('div#stats'))
})
