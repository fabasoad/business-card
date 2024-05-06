import '@testing-library/jest-dom'
import * as React from 'react'
import StatsStackOverflow from '../../../components/Stats/StatsStackOverflow'
import { render } from '@testing-library/react'
import { testStatsCommon } from './TestUtils'
import { randomNumber } from '../../TestUtils'

jest.mock('../../../scripts/services/StackExchangeService')

test('should render StatsStackOverflow correctly', () => {
  const expectedReputation: number = randomNumber(1, 100)
  const { container } = render(
    <StatsStackOverflow reputation={expectedReputation} />
  )
  testStatsCommon(
    container.querySelector('div.stats-item'),
    'https://stackoverflow.com/users/470214/fabasoad',
    `🏆 ${expectedReputation}`,
    'stackoverflow'
  )
})
