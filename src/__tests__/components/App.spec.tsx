import '@testing-library/jest-dom'
import * as React from 'react'
import App from '../../components/App'
import StatsMainContext, {
  defaultStatsDefaultProps,
  StatsDefaultProps
} from '../../contexts/StatsMainContext'
import SupportedLocales from '../../scripts/i18n/SupportedLocales'
import { Locale } from '../../scripts/i18n/types'
import { act, render } from '@testing-library/react'
import { randomNumber } from '../TestUtils'
import { testAboutMain } from './About/TestUtils'
import {
  testBackToTopButton,
  testBadges,
  testHeader,
  testResume,
  testSkills
} from './TestUtils'
import { testCertificatesMain } from './Certificates/TestUtils'
import { testEducationMain } from './Education/TestUtils'
import { testExperienceMain } from './Experience/TestUtils'
import { testFooterMain } from './Footer/TestUtils'
import { testLanguageMain } from './Languages/TestUtils'
import { testMenuMain } from './Menu/TestUtils'
import { testPortfolioMain } from './Portfolio/TestUtils'
import { testStatsMain } from './Stats/TestUtils'

jest.mock('../../scripts/services/LeetcodeService')

describe('App', () => {
  test('should render App correctly', async () => {
    const expectedLeetcodeTotalSolved: number = randomNumber(1, 100)
    const expectedStackOverflowReputation: number = randomNumber(1, 100)
    const expectedSuperUserReputation: number = randomNumber(1, 100)
    const expectedGitHubStarsAmount: number = randomNumber(1, 100)
    const stats: StatsDefaultProps = defaultStatsDefaultProps
    stats.leetcode.totalSolved = expectedLeetcodeTotalSolved
    stats.stackOverflow.reputation = expectedStackOverflowReputation
    stats.superUser.reputation = expectedSuperUserReputation
    stats.github.starsAmount = expectedGitHubStarsAmount
    const { container } = await act(() => render(
      <StatsMainContext.Provider value={stats}>
        <App />
      </StatsMainContext.Provider>
    ))

    const locale: Locale = SupportedLocales.default
    const div = container.querySelector('div.font-regular')
    expect(div).toHaveClass(`font-${locale.code === 'jp' ? '' : 'non-'}jp`)
    testBackToTopButton(div.querySelector('a.back-to-top'))
    testHeader(div.querySelector('header#header'))
    testMenuMain(div.querySelector('div#nav'))
    testAboutMain(div.querySelector('div#about'))
    testStatsMain(div.querySelector('div#stats'), {
      leetcodeTotalSolved: expectedLeetcodeTotalSolved,
      stackOverflowReputation: expectedStackOverflowReputation,
      superUserReputation: expectedSuperUserReputation,
      githubStarsAmount: expectedGitHubStarsAmount
    })
    testResume(div.querySelector('div#resume'))
    testSkills(div.querySelector('div#skills'))
    testExperienceMain(div.querySelector('div#experience'), locale)
    testEducationMain(div.querySelector('div#education'), locale)
    testCertificatesMain(div.querySelector('div#certificates'), locale)
    testLanguageMain(div.querySelector('div#languages'))
    testPortfolioMain(div.querySelector('div#portfolio'))
    testBadges(div.querySelector('div#badges'))
    testFooterMain(div.querySelector('div.footer'))
  })
})
