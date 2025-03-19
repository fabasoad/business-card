import '@testing-library/jest-dom'
import * as React from 'react'
import StatsStackOverflow from '../../../components/Stats/StatsStackOverflow'
import { render } from '@testing-library/react'
import { randomNumber } from '../../TestUtils'

jest.mock('../../../components/Stats/StatsStackExchange')

describe('StatsStackOverflow', () => {
  test('should render StatsStackOverflow correctly', async () => {
    const expectedReputation: number = randomNumber(1, 100)
    const expectedAnswerCount: number = randomNumber(1, 100)
    const { container } = render(
      <StatsStackOverflow
        reputation={expectedReputation}
        answerCount={expectedAnswerCount}
      />
    )
    const div = container.querySelector('div[data-testid="StatsStackExchange"]')
    expect(div).toBeInTheDocument()
    expect(
      div.querySelector('div[data-testid="factory"]')
    ).toHaveTextContent('StackOverflowService')
    expect(
      div.querySelector('div[data-testid="techName"]')
    ).toHaveTextContent('stackoverflow')
    expect(
      div.querySelector('div[data-testid="url"]')
    ).toHaveTextContent('https://stackoverflow.com/users/470214/fabasoad')
    expect(
      div.querySelector('div[data-testid="icon"]')
    ).toHaveTextContent('🏆')
  })
})
