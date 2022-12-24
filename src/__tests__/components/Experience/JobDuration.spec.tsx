import '@testing-library/jest-dom'
import * as React from 'react'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'

import JobDuration from '../../../components/Experience/JobDuration'
import SupportedLocales from '../../../scripts/SupportedLocales'
import { testJobDuration } from './TestUtils'

const mockStore = configureMockStore()

for (const code of ['gb', 'jp', 'ua']) {
  test(`[${code}] should render JobDuration correctly with from and to`, () => {
    const locale = SupportedLocales.find(code)
    expect(locale).not.toBeNull()
    const store = mockStore({ locale })
    const fromMonthIndex = 7
    const fromYear = 2018
    const toMonthIndex = 3
    const toYear = 2022
    const { container } = render(
      <Provider store={store}>
        <JobDuration
          fromMonthIndex={fromMonthIndex}
          fromYear={fromYear}
          toMonthIndex={toMonthIndex}
          toYear={toYear}
        />
      </Provider>
    )
    testJobDuration(
      container.querySelector('div.job-duration'),
      code,
      fromMonthIndex,
      fromYear,
      toMonthIndex,
      toYear
    )
  })

  test(`[${code}] should render JobDuration correctly with from only`, () => {
    const locale = SupportedLocales.find(code)
    expect(locale).not.toBeNull()
    const store = mockStore({ locale })
    const fromMonthIndex = 5
    const fromYear = 2017
    const { container } = render(
      <Provider store={store}>
        <JobDuration
          fromMonthIndex={fromMonthIndex}
          fromYear={fromYear}
        />
      </Provider>
    )
    testJobDuration(
      container.querySelector('div.job-duration'),
      code,
      fromMonthIndex,
      fromYear
    )
  })
}
