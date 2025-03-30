import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'
import { ServiceFactory } from '../../../components/Stats/hooks'
import * as StatsHooks from '../../../components/Stats/hooks'

import StatsLeetcode from '../../../components/Stats/StatsLeetcode'
import {
  LeetcodeService,
  LeetcodeStats
} from '../../../scripts/services/LeetcodeService'
import { randomNumber } from '../../TestUtils'

jest.mock('../../../components/LoadingSpinner')
jest.mock('../../../components/Stats/StatsCommon')
jest.mock('../../../scripts/services/LeetcodeService')

describe('StatsLeetcode', () => {
  let useFetchStatsSpy: jest.SpyInstance

  beforeEach(() => {
    useFetchStatsSpy = jest.spyOn(StatsHooks, 'useFetchStats')
  })

  afterEach(() => {
    useFetchStatsSpy.mockRestore()
  })

  test('should render StatsLeetcode correctly while loading', () => {
    useFetchStatsSpy.mockImplementation(() => ({ data: null, isLoading: true }))
    const { container } = render(
      <StatsLeetcode
        totalSolved={randomNumber(1, 100)}
        easySolved={randomNumber(1, 100)}
        mediumSolved={randomNumber(1, 100)}
        hardSolved={randomNumber(1, 100)}
      />
    )
    expect(
      container.querySelector('div[data-testid="LoadingSpinner-undefined-undefined"]')
    ).toBeInTheDocument()
  })

  test('should render StatsLeetcode correctly when loaded', () => {
    const expectedTotalSolved: number = randomNumber(1, 100)
    useFetchStatsSpy.mockImplementation(
      (factory: ServiceFactory<LeetcodeService, LeetcodeStats>) => (
        { data: factory()['stats'], isLoading: false }
      )
    )
    const { container } = render(
      <StatsLeetcode
        totalSolved={expectedTotalSolved}
        easySolved={randomNumber(1, 100)}
        mediumSolved={randomNumber(1, 100)}
        hardSolved={randomNumber(1, 100)}
      />
    )
    expect(
      container.querySelector('div[data-testid="StatsCommon-leetcode-https://leetcode.com/fabasoad"]')
    ).toHaveTextContent(`✔️ ${expectedTotalSolved}`)
  })
})
