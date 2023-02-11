import '@testing-library/jest-dom'
import * as React from 'react'
import configureMockStore from 'redux-mock-store'
import { render } from '@testing-library/react'

import DateTimeline from '../../../components/Controls/DateTimeline'
import SupportedLocales from '../../../scripts/SupportedLocales'
import { Provider } from 'react-redux'
import { testDateTimeline } from './TestUtils'

const mockStore = configureMockStore()

for (const locale of SupportedLocales._items) {
  test(`[${locale.code}] should render DateTimeline correctly with from and to`, () => {
    const store = mockStore({ locale })
    const fromMonthIndex = 6
    const fromYear = 2017
    const toMonthIndex = 2
    const toYear = 2021
    const { container } = render(
      <Provider store={store}>
        <DateTimeline
          fromMonthIndex={fromMonthIndex}
          fromYear={fromYear}
          toMonthIndex={toMonthIndex}
          toYear={toYear}
        />
      </Provider>
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

  test(`[${locale.code}] should render DateTimeline correctly with from`, () => {
    const store = mockStore({ locale })
    const fromMonthIndex = 6
    const fromYear = 2017
    const { container } = render(
      <Provider store={store}>
        <DateTimeline
          fromMonthIndex={fromMonthIndex}
          fromYear={fromYear}
        />
      </Provider>
    )
    testDateTimeline(
      container.querySelector('div.controls__date-timeline'),
      locale,
      fromMonthIndex,
      fromYear
    )
  })
}
