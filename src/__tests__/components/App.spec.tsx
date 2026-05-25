import type { MockInstance } from 'vitest'
import '@testing-library/jest-dom'
import * as React from 'react'
import App from '../../components/App'
import { render } from '@testing-library/react'
import * as ThemeContext from '../../components/Contexts/ThemeContext'

vi.mock('../../components/About/AboutMain')
vi.mock('../../components/BackToTopButton')
vi.mock('../../components/Badges')
vi.mock('../../components/Certificates/CertificatesMain')
vi.mock('../../components/Experience/ExperienceMain')
vi.mock('../../components/Education/EducationMain')
vi.mock('../../components/Footer/FooterMain')
vi.mock('../../components/Header')
vi.mock('../../components/Languages/LanguagesMain')
vi.mock('../../components/Menu/MenuMain')
vi.mock('../../components/Resume')
vi.mock('../../components/Skills')
vi.mock('../../components/Stats/StatsMain')
vi.mock('../../scripts/services/LeetcodeService')

describe('App', () => {
  let initThemeSpy: MockInstance

  beforeAll(() => {
    initThemeSpy = vi.spyOn(ThemeContext, 'initTheme')
  })

  afterEach(() => initThemeSpy.mockRestore())

  const testBlock = (div: Element, testId: string) => {
    expect(div.querySelector(`div[data-testid="${testId}"]`)).toBeInTheDocument()
  }

  test('should render App correctly', async () => {
    const theme = 'dark'
    initThemeSpy.mockImplementation(() => theme)

    const { container } = render(<App />)

    const div = container.querySelector('div.font-regular')!
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
