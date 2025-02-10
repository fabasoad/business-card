import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'

import StatsMain from '../../../components/Stats/StatsMain'
import { testSectionTitle } from '../Controls/TestUtils'

jest.mock('../../../components/Controls/SectionTitle')
jest.mock('../../../components/Stats/StatsGitHub')
jest.mock('../../../components/Stats/StatsLeetcode')
jest.mock('../../../components/Stats/StatsStackOverflow')
jest.mock('../../../components/Stats/StatsSuperUser')

describe('StatsMain', () => {
  test('should render StatsMain correctly', () => {
    const { container } = render(<StatsMain />)
    const div = container.querySelector<HTMLDivElement>('div#stats')
    testSectionTitle(div, 'stats.title')
    const selector = (testId: string) =>
      `div.container > div.row > div.col.text-center > div[data-testid="${testId}"]`
    let el = div.querySelector(selector('StatsGitHub'))
    expect(el).toBeInTheDocument()
    expect(
      el.querySelector('div[data-testid="starsAmount"]')
    ).toHaveTextContent('1')
    el = div.querySelector(selector('StatsLeetcode'))
    expect(el).toBeInTheDocument()
    expect(
      el.querySelector('div[data-testid="totalSolved"]')
    ).toHaveTextContent('6')
    expect(
      el.querySelector('div[data-testid="easySolved"]')
    ).toHaveTextContent('3')
    expect(
      el.querySelector('div[data-testid="mediumSolved"]')
    ).toHaveTextContent('2')
    expect(
      el.querySelector('div[data-testid="hardSolved"]')
    ).toHaveTextContent('1')
    el = div.querySelector(selector('StatsStackOverflow'))
    expect(el).toBeInTheDocument()
    expect(
      el.querySelector('div[data-testid="reputation"]')
    ).toHaveTextContent('10')
    expect(
      el.querySelector('div[data-testid="answerCount"]')
    ).toHaveTextContent('1')
    el = div.querySelector(selector('StatsSuperUser'))
    expect(el).toBeInTheDocument()
    expect(
      el.querySelector('div[data-testid="reputation"]')
    ).toHaveTextContent('10')
    expect(
      el.querySelector('div[data-testid="answerCount"]')
    ).toHaveTextContent('1')
  })
})
