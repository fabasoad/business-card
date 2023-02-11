import '@testing-library/jest-dom'
import * as React from 'react'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'

import SupportedLocales from '../../../scripts/SupportedLocales'
import { testDateDuration } from './TestUtils'
import DateDuration from '../../../components/Controls/DateDuration'

const mockStore = configureMockStore()

for (const locale of SupportedLocales._items) {
  test(`[${locale.code}] should render DateDuration correctly with from and to`, () => {
    const store = mockStore({ locale })
    const fromMonthIndex = 7
    const fromYear = 2018
    const toMonthIndex = 3
    const toYear = 2022
    const { container } = render(
      <Provider store={store}>
        <DateDuration
          fromMonthIndex={fromMonthIndex}
          fromYear={fromYear}
          toMonthIndex={toMonthIndex}
          toYear={toYear}
        />
      </Provider>
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

  test(`[${locale.code}] should render DateDuration correctly with from only`, () => {
    const store = mockStore({ locale })
    const fromMonthIndex = 5
    const fromYear = 2017
    const { container } = render(
      <Provider store={store}>
        <DateDuration
          fromMonthIndex={fromMonthIndex}
          fromYear={fromYear}
        />
      </Provider>
    )
    testDateDuration(
      container.querySelector('div.controls__date-duration'),
      locale.code,
      fromMonthIndex,
      fromYear
    )
  })
}
