import '@testing-library/jest-dom'
import * as React from 'react'
import StatsStackOverflow from '../../../components/Stats/StatsStackOverflow'
import { render } from '@testing-library/react'
import { testStatsStackOverflow } from './TestUtils'
import { randomNumber } from '../../TestUtils'

test('should render StatsStackOverflow correctly', () => {
  const expectedReputation: number = randomNumber(1, 100)
  const { container } = render(
    <StatsStackOverflow defaultStackOverflowReputation={expectedReputation} />
  )
  testStatsStackOverflow(
    container.querySelector('div.stats-item'),
    expectedReputation
  )
})
