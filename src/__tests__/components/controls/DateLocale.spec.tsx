import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import SupportedLocales from '../../../scripts/SupportedLocales'
import { DateLocale } from '../../../components/controls/DateLocale'
import { testDateLocale } from './TestUtils'

for (const locale of SupportedLocales._items) {
  test(`[${locale.code}] should render correctly with year and month`, () => {
    const monthIndex = 1
    const year = 2022
    const { container } = render(
      <DateLocale year={year} monthIndex={monthIndex} locale={locale} />
    )
    testDateLocale(container, locale, year, monthIndex)
  })

  test(`[${locale.code}] should render correctly with year`, () => {
    const year = 2014
    const { container } = render(
      <DateLocale year={year} locale={locale} />
    )
    testDateLocale(container, locale, year)
  })
}
