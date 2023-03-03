import '@testing-library/jest-dom'
import * as React from 'react'
import DateTimeline from '../../../components/Controls/DateTimeline'
import SupportedLocales from '../../../scripts/i18n/SupportedLocales'
import { Locale } from '../../../scripts/i18n/types'
import { render } from '@testing-library/react'
import { testDateTimeline } from './TestUtils'

describe('DateTimeline', () => {
  const locale: Locale = SupportedLocales.default

  test('should render DateTimeline correctly with from and to', () => {
    const fromMonthIndex = 6
    const fromYear = 2017
    const toMonthIndex = 2
    const toYear = 2021
    const { container } = render(
      <DateTimeline
        fromMonthIndex={fromMonthIndex}
        fromYear={fromYear}
        toMonthIndex={toMonthIndex}
        toYear={toYear}
      />
    )
    testDateTimeline(
      container.querySelector('div.controls__date-timeline'),
      locale,
      fromMonthIndex,
      fromYear,
      toMonthIndex,
      toYear
    )
  })

  test('should render DateTimeline correctly with from', () => {
    const fromMonthIndex = 6
    const fromYear = 2017
    const { container } = render(
      <DateTimeline
        fromMonthIndex={fromMonthIndex}
        fromYear={fromYear}
      />
    )
    testDateTimeline(
      container.querySelector('div.controls__date-timeline'),
      locale,
      fromMonthIndex,
      fromYear
    )
  })
})
