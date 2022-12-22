import '@testing-library/jest-dom'
import * as React from 'react'
import configureMockStore from 'redux-mock-store'
import { render } from '@testing-library/react'

import JobDuration from '../../../components/Experience/JobDuration'
import SupportedLocales from '../../../scripts/SupportedLocales'
import { Provider } from 'react-redux'
import DateUtils from '../../../scripts/DateUtils';

const mockStore = configureMockStore()

for (const code of ['gb', 'jp', 'ua']) {
  test(`[${code}] should render JobDuration correctly with from and to`, () => {
    const store = mockStore({
      locale: SupportedLocales.getOrDefault(code)
    })
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
    expect(container.querySelector('div.job-duration')).toHaveTextContent(
      DateUtils.humanize(
        new Date(fromYear, fromMonthIndex),
        new Date(toYear, toMonthIndex),
        code
      )
    )
  })

  test(`[${code}] should render JobDuration correctly with from only`, () => {
    const store = mockStore({
      locale: SupportedLocales.getOrDefault(code)
    })
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
    expect(container.querySelector('div.job-duration')).toHaveTextContent(
      DateUtils.humanize(new Date(fromYear, fromMonthIndex), new Date(), code)
    )
  })
}
