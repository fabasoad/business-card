import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'
import { ServiceFactory } from '../../../components/Stats/hooks'
import * as StatsHooks from '../../../components/Stats/hooks'

import StatsStackExchange from '../../../components/Stats/StatsStackExchange'
import RemoteService from '../../../scripts/services/RemoteService'
import {
  StackExchangeData
} from '../../../scripts/services/StackExchangeService'
import StringUtils from '../../../scripts/utils/StringUtils'
import { randomNumber } from '../../TestUtils'

jest.mock('../../../components/LoadingSpinner')
jest.mock('../../../components/Stats/StatsCommon')

class TestService implements RemoteService<StackExchangeData> {
  public stats: StackExchangeData

  constructor(reputation: number, answerCount: number) {
    this.stats = { reputation, answerCount }
  }

  request(): Promise<StackExchangeData> {
    return Promise.resolve(this.stats)
  }
}

describe('StatsStackExchange', () => {
  let useFetchStatsSpy: jest.SpyInstance

  beforeEach(() => {
    useFetchStatsSpy = jest.spyOn(StatsHooks, 'useFetchStats')
  })

  afterEach(() => {
    useFetchStatsSpy.mockRestore()
  })

  test('should render StatsStackExchange correctly while loading', () => {
    useFetchStatsSpy.mockImplementation(() => ({ data: null, isLoading: true }))
    const { container } = render(
      <StatsStackExchange factory={() => new TestService(1, 2)} techName="" url="" icon="" />
    )
    expect(
      container.querySelector('div[data-testid="LoadingSpinner-undefined-undefined"]')
    ).toBeInTheDocument()
  })

  test('should render StatsStackExchange correctly when loaded', () => {
    const expectedReputation: number = randomNumber(1, 100)
    const expectedTechName: string = StringUtils.random(10)
    const expectedUrl: string = StringUtils.random(10)
    const expectedIcon: string = StringUtils.random(10)
    useFetchStatsSpy.mockImplementation(
      (factory: ServiceFactory<TestService, StackExchangeData>) => (
        { data: factory()['stats'], isLoading: false }
      )
    )
    const { container } = render(
      <StatsStackExchange
        factory={() => new TestService(expectedReputation, randomNumber(1, 100))}
        techName={expectedTechName}
        url={expectedUrl}
        icon={expectedIcon}
      />
    )
    expect(
      container.querySelector(`div[data-testid="StatsCommon-${expectedTechName}-${expectedUrl}"]`)
    ).toHaveTextContent(`${expectedIcon} ${expectedReputation}`)
  })
})
