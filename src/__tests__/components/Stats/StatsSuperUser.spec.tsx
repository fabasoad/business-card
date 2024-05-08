import '@testing-library/jest-dom'
import * as React from 'react'
import StatsSuperUser from '../../../components/Stats/StatsSuperUser'
import { act, render } from '@testing-library/react'
import { testStatsCommon } from './TestUtils'
import { randomNumber } from '../../TestUtils'

jest.mock('../../../scripts/services/StackExchangeService')

test('should render StatsSuperUser correctly', async () => {
  const expectedReputation: number = randomNumber(1, 100)
  const { container } = await act(async () => render(
    <StatsSuperUser reputation={expectedReputation} />
  ))
  testStatsCommon(
    container.querySelector('div.stats-item'),
    'https://superuser.com/users/1123723/fabasoad',
    `➕ ${expectedReputation}`,
    'superuser'
  )
})
