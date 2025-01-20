import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'

import StatsGitHub from '../../../components/Stats/StatsGitHub'
import { randomNumber } from '../../TestUtils'
import { testStatsCommon } from './TestUtils'

jest.mock('../../../scripts/services/GitHubService')

test('should render StatsGitHub correctly', () => {
  const expectedStarsAmount: number = randomNumber(1, 100)
  const { container } = render(
    <StatsGitHub starsAmount={expectedStarsAmount} />
  )
  testStatsCommon(
    container.querySelector('div.row.justify-content-center'),
    'https://github.com/fabasoad',
    `⭐️ ${expectedStarsAmount}`,
    'gitHub'
  )
})
