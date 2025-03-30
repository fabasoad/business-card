import '@testing-library/jest-dom'
import * as React from 'react'
import App from '../../components/App'
import { render } from '@testing-library/react'
import * as ThemeContext from '../../components/Contexts/ThemeContext'

jest.mock('../../components/About/AboutMain')
jest.mock('../../components/BackToTopButton')
jest.mock('../../components/Badges')
jest.mock('../../components/Certificates/CertificatesMain')
jest.mock('../../components/Experience/ExperienceMain')
jest.mock('../../components/Education/EducationMain')
jest.mock('../../components/Footer/FooterMain')
jest.mock('../../components/Header')
jest.mock('../../components/Languages/LanguagesMain')
jest.mock('../../components/Menu/MenuMain')
jest.mock('../../components/Resume')
jest.mock('../../components/Skills')
jest.mock('../../components/Stats/StatsMain')
jest.mock('../../scripts/services/LeetcodeService')

describe('App', () => {
  let initThemeSpy: jest.SpyInstance

  beforeAll(() => {
    initThemeSpy = jest.spyOn(ThemeContext, 'initTheme')
  })

  afterEach(() => initThemeSpy.mockRestore())

  const testBlock = (div: Element, testId: string) => {
    expect(div.querySelector(`div[data-testid="${testId}"]`)).toBeInTheDocument()
  }

  test('should render App correctly', async () => {
    const theme = 'dark'
    initThemeSpy.mockImplementation(() => theme)

    const { container } = render(<App />)

    const div = container.querySelector('div.font-regular')
    testBlock(div, 'BackToTopButton')
    testBlock(div, 'Header')
    testBlock(div, 'MenuMain')
    testBlock(div, 'AboutMain')
    testBlock(div, 'StatsMain')
    testBlock(div, 'Resume')
    testBlock(div, 'Skills')
    testBlock(div, 'ExperienceMain')
    testBlock(div, 'EducationMain')
    testBlock(div, 'CertificatesMain')
    testBlock(div, 'LanguagesMain')
    testBlock(div, 'Badges')
    testBlock(div, 'FooterMain')
  })
})
