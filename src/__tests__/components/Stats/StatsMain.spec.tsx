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
    for (const statsTestId of [
      'StatsGitHub', 'StatsLeetcode', 'StatsStackOverflow', 'StatsSuperUser'
    ]) {
      const el = div.querySelector(
        `div.container > div.row > div.col.m-2 > div[data-testid="${statsTestId}"]`
      )
      expect(el).not.toBeNull()
    }
  })
})
