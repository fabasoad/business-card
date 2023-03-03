import '@testing-library/jest-dom'
import * as React from 'react'
import DateDuration from '../../../components/Controls/DateDuration'
import SupportedLocales from '../../../scripts/i18n/SupportedLocales'
import { Locale } from '../../../scripts/i18n/types'
import { render } from '@testing-library/react'
import { testDateDuration } from './TestUtils'

describe('DateDuration', () => {
  const locale: Locale = SupportedLocales.default

  test('should render DateDuration correctly with from and to', () => {
    const fromMonthIndex = 7
    const fromYear = 2018
    const toMonthIndex = 3
    const toYear = 2022
    const { container } = render(
      <DateDuration
        fromMonthIndex={fromMonthIndex}
        fromYear={fromYear}
        toMonthIndex={toMonthIndex}
        toYear={toYear}
      />
    )
    testDateDuration(
      container.querySelector('div.controls__date-duration'),
      locale.code,
      fromMonthIndex,
      fromYear,
      toMonthIndex,
      toYear
    )
  })

  test('should render DateDuration correctly with from only', () => {
    const fromMonthIndex = 5
    const fromYear = 2017
    const { container } = render(
      <DateDuration
        fromMonthIndex={fromMonthIndex}
        fromYear={fromYear}
      />
    )
    testDateDuration(
      container.querySelector('div.controls__date-duration'),
      locale.code,
      fromMonthIndex,
      fromYear
    )
  })
})
