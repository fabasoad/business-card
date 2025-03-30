import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'
import { ServiceFactory } from '../../../components/Stats/hooks'
import * as StatsHooks from '../../../components/Stats/hooks'

import StatsGitHub from '../../../components/Stats/StatsGitHub'
import { GitHubService } from '../../../scripts/services/GitHubService'
import { randomNumber } from '../../TestUtils'

jest.mock('../../../components/LoadingSpinner')
jest.mock('../../../components/Stats/StatsCommon')
jest.mock('../../../scripts/services/GitHubService')

describe('StatsGitHub', () => {
  let useFetchStatsSpy: jest.SpyInstance

  beforeEach(() => {
    useFetchStatsSpy = jest.spyOn(StatsHooks, 'useFetchStats')
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
