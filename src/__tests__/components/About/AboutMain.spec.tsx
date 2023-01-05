import * as React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Locale } from '../../../store/locale/types'
import SupportedLocales from '../../../scripts/SupportedLocales'
import { AboutMain } from '../../../components/About/AboutMain'
import { testSectionTitle } from '../Controls/TestUtils'

test('should render AboutMain correctly', () => {
  const humanizeMock = jest.fn((code: string) => `total-${code}`)
  const locale: Locale = SupportedLocales.default

  const { container } = render(
    <AboutMain locale={locale} totalExperience={{
      humanize: humanizeMock
    }} />
  )

  testSectionTitle(
    container.querySelector('div.section-title'),
    'business-card-about-me-title'
  )

  for (let i = 1; i <= 18; i++) {
    const exp = expect(screen.queryByText(`business-card-about-me-general-list-item-${i}`))
    if (i > 17) {
      exp.toBeNull()
    } else {
      exp.not.toBeNull()
    }
  }

  expect(humanizeMock).toHaveBeenCalledTimes(1)
  expect(humanizeMock).toHaveBeenCalledWith(locale.code)
})
