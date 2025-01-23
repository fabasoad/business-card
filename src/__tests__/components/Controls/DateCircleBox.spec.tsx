import '@testing-library/jest-dom'
import * as React from 'react'
import DateCircleBox from '../../../components/Controls/DateCircleBox'
import SupportedLocales from '../../../scripts/i18n/SupportedLocales'
import { Locale } from '../../../scripts/i18n/types'
import { render } from '@testing-library/react'
import { testDateCircleBox } from '../Experience/TestUtils'

describe('DateCircleBox', () => {
  const locale: Locale = SupportedLocales.default

  test('should render DateCircleBox correctly with from and to', () => {
    const fromMonthIndex = 1
    const fromYear = 2019
    const toMonthIndex = 4
    const toYear = 2020
    const { container } = render(
      <DateCircleBox
        fromMonthIndex={fromMonthIndex}
        fromYear={fromYear}
        toMonthIndex={toMonthIndex}
        toYear={toYear}
      />
    )
    testDateCircleBox(
      container.querySelector('div.timeline-image'),
      locale,
      fromMonthIndex,
      fromYear,
      toMonthIndex,
      toYear
    )
  })

  test('should render DateCircleBox correctly with from', () => {
    const fromMonthIndex = 0
    const fromYear = 2018
    const { container } = render(
      <DateCircleBox
        fromMonthIndex={fromMonthIndex}
        fromYear={fromYear}
      />
    )
    testDateCircleBox(
      container.querySelector('div.timeline-image'),
      locale,
      fromMonthIndex,
      fromYear
    )
  })
})
