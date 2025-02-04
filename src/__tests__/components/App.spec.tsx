import '@testing-library/jest-dom'
import * as React from 'react'
import App from '../../components/App'
import SupportedLocales from '../../scripts/i18n/SupportedLocales'
import { Locale } from '../../scripts/i18n/types'
import { render } from '@testing-library/react'
import {
  testHeader,
  testSkills
} from './TestUtils'
import { testLanguageMain } from './Languages/TestUtils'
import { testMenuMain } from './Menu/TestUtils'

jest.mock('../../components/About/AboutMain')
jest.mock('../../components/BackToTopButton')
jest.mock('../../components/Badges')
jest.mock('../../components/Certificates/CertificatesMain')
jest.mock('../../components/Experience/ExperienceMain')
jest.mock('../../components/Education/EducationMain')
jest.mock('../../components/Footer/FooterMain')
jest.mock('../../components/Resume')
jest.mock('../../components/Stats/StatsMain')
jest.mock('../../scripts/services/LeetcodeService')

describe('App', () => {
  const testBlock = (div: Element, testId: string) => {
    expect(div.querySelector(`div[data-testid="${testId}"]`)).not.toBeNull()
  }

  test('should render App correctly', async () => {
    const { container } = render(<App />)
    const locale: Locale = SupportedLocales.default
    const div = container.querySelector('div.font-regular')
    expect(div).toHaveClass(`font-${locale.code === 'jp' ? '' : 'non-'}jp`)
    testBlock(div, 'BackToTopButton')
    testHeader(div.querySelector('header#header'))
    testMenuMain(div.querySelector('div#nav'))
    testBlock(div, 'AboutMain')
    testBlock(div, 'StatsMain')
    testBlock(div, 'Resume')
    testSkills(div.querySelector('div#skills'))
    testBlock(div, 'ExperienceMain')
    testBlock(div, 'EducationMain')
    testBlock(div, 'CertificatesMain')
    testLanguageMain(div.querySelector('div#languages'))
    testBlock(div, 'Badges')
    testBlock(div, 'FooterMain')
  })
})
