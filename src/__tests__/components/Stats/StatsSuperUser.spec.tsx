import '@testing-library/jest-dom'
import * as React from 'react'
import StatsSuperUser from '../../../components/Stats/StatsSuperUser'
import { render } from '@testing-library/react'
import { randomNumber } from '../../TestUtils'

jest.mock('../../../components/Stats/StatsStackExchange')

describe('StatsSuperUser', () => {
  test('should render StatsSuperUser correctly', async () => {
    const expectedReputation: number = randomNumber(1, 100)
    const expectedAnswerCount: number = randomNumber(1, 100)
    const { container } = render(
      <StatsSuperUser
        reputation={expectedReputation}
        answerCount={expectedAnswerCount}
      />
    )
    const div = container.querySelector('div[data-testid="StatsStackExchange"]')
    expect(div).toBeInTheDocument()
    expect(
      div.querySelector('div[data-testid="factory"]')
    ).toHaveTextContent('SuperUserService')
    expect(
      div.querySelector('div[data-testid="techName"]')
    ).toHaveTextContent('superuser')
    expect(
      div.querySelector('div[data-testid="url"]')
    ).toHaveTextContent('https://superuser.com/users/1123723/fabasoad')
    expect(
      div.querySelector('div[data-testid="icon"]')
    ).toHaveTextContent('➕')
  })
})
