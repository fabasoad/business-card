import '@testing-library/jest-dom'
import * as React from 'react'
import JobPeriod from '../../../components/Experience/JobPeriod'
import SupportedLocales from '../../../scripts/i18n/SupportedLocales'
import { Locale } from '../../../scripts/i18n/types'
import { render } from '@testing-library/react'
import { testJobPeriod } from './TestUtils'

describe('JobPeriod', () => {
  const locale: Locale = SupportedLocales.default

  test('should render JobPeriod correctly with from and to', () => {
    const fromMonthIndex = 1
    const fromYear = 2019
    const toMonthIndex = 4
    const toYear = 2020
    const { container } = render(
      <JobPeriod
        fromMonthIndex={fromMonthIndex}
        fromYear={fromYear}
        toMonthIndex={toMonthIndex}
        toYear={toYear}
      />
    )
    testJobPeriod(
      container.querySelector('div.timeline-image'),
      locale,
      fromMonthIndex,
      fromYear,
      toMonthIndex,
      toYear
    )
  })

  test('should render JobPeriod correctly with from', () => {
    const fromMonthIndex = 0
    const fromYear = 2018
    const { container } = render(
      <JobPeriod
        fromMonthIndex={fromMonthIndex}
        fromYear={fromYear}
      />
    )
    testJobPeriod(
      container.querySelector('div.timeline-image'),
      locale,
      fromMonthIndex,
      fromYear
    )
  })
})
