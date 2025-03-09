import '@testing-library/jest-dom'
import * as React from 'react'
import StatsStackOverflow from '../../../components/Stats/StatsStackOverflow'
import { act, render } from '@testing-library/react'
import { testStatsCommon } from './TestUtils'
import { randomNumber } from '../../TestUtils'

jest.mock('../../../components/Controls/ThemeImage')
jest.mock('../../../scripts/services/StackExchangeService')

test('should render StatsStackOverflow correctly', async () => {
  const expectedReputation: number = randomNumber(1, 100)
  const { container } = await act(async () => render(
    <StatsStackOverflow reputation={expectedReputation} />
  ))
  testStatsCommon(
    container.querySelector('div.row.justify-content-center'),
    'https://stackoverflow.com/users/470214/fabasoad',
    `🏆 ${expectedReputation}`,
    'stackoverflow'
  )
})
