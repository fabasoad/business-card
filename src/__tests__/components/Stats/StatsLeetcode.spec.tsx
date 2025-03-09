import '@testing-library/jest-dom'
import * as React from 'react'
import StatsLeetcode from '../../../components/Stats/StatsLeetcode'
import { act, render } from '@testing-library/react'
import { testStatsCommon } from './TestUtils'
import { randomNumber } from '../../TestUtils'

jest.mock('../../../components/Controls/ThemeImage')
jest.mock('../../../scripts/services/LeetcodeService')

test('should render StatsLeetcode correctly', async () => {
  const expectedTotalSolved: number = randomNumber(1, 100)
  const { container} = await act(async () => render(
    <StatsLeetcode totalSolved={expectedTotalSolved} />
  ))
  testStatsCommon(
    container.querySelector('div.row.justify-content-center'),
    'https://leetcode.com/fabasoad',
    `✔️ ${expectedTotalSolved}`,
    'leetcode'
  )
})
