import '@testing-library/jest-dom'
import * as React from 'react'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'

import JobPeriod from '../../../components/Experience/JobPeriod'
import SupportedLocales from '../../../scripts/SupportedLocales'
import { testJobPeriod } from './TestUtils'

const mockStore = configureMockStore()

for (const locale of SupportedLocales._items) {
  test(`[${locale.code}] should render JobPeriod correctly with from and to`, () => {
    const store = mockStore({ locale })
    const fromMonthIndex = 1
    const fromYear = 2019
    const toMonthIndex = 4
    const toYear = 2020
    const { container } = render(
      <Provider store={store}>
        <JobPeriod
          fromMonthIndex={fromMonthIndex}
          fromYear={fromYear}
          toMonthIndex={toMonthIndex}
          toYear={toYear}
        />
      </Provider>
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

  test(`[${locale.code}] should render JobPeriod correctly with from`, () => {
    const store = mockStore({ locale })
    const fromMonthIndex = 0
    const fromYear = 2018
    const { container } = render(
      <Provider store={store}>
        <JobPeriod
          fromMonthIndex={fromMonthIndex}
          fromYear={fromYear}
        />
      </Provider>
    )
    testJobPeriod(
      container.querySelector('div.timeline-image'),
      locale,
      fromMonthIndex,
      fromYear
    )
  })
}
