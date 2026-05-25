import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'
import type { ServiceFactory } from '../../../components/Stats/hooks'
import * as StatsHooks from '../../../components/Stats/hooks'

import StatsGitHub from '../../../components/Stats/StatsGitHub'
import type { GitHubService } from '../../../scripts/services/GitHubService'
import { randomNumber } from '../../TestUtils'

vi.mock('../../../components/LoadingSpinner')
vi.mock('../../../components/Stats/StatsCommon')
vi.mock('../../../scripts/services/GitHubService')

describe('StatsGitHub', () => {
  let useFetchStatsSpy: vi.SpyInstance

  beforeEach(() => {
    useFetchStatsSpy = vi.spyOn(StatsHooks, 'useFetchStats')
  })

  afterEach(() => {
    useFetchStatsSpy.mockRestore()
  })

  test('should render StatsGitHub correctly while loading', () => {
    useFetchStatsSpy.mockImplementation(() => ({ data: null, isLoading: true }))
    const { container } = render(
      <StatsGitHub starsAmount={randomNumber(1, 100)} />
    )
    expect(
      container.querySelector('div[data-testid="LoadingSpinner-undefined-undefined"]')
    ).toBeInTheDocument()
  })

  test('should render StatsGitHub correctly when loaded', () => {
    const expectedStarsAmount: number = randomNumber(1, 100)
    useFetchStatsSpy.mockImplementation(
      (factory: ServiceFactory<GitHubService, number>) => (
        { data: factory()['actual'], isLoading: false }
      )
    )
    const { container } = render(
      <StatsGitHub starsAmount={expectedStarsAmount} />
    )
    expect(
      container.querySelector('div[data-testid="StatsCommon-gitHub-https://github.com/fabasoad"]')
    ).toHaveTextContent(`⭐️ ${expectedStarsAmount}`)
  })
})
