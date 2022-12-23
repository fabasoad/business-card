import '@testing-library/jest-dom'
import * as React from 'react'
import configureMockStore from 'redux-mock-store'
import { render } from '@testing-library/react'

import JobPeriod from '../../../components/Experience/JobPeriod'
import { Provider } from 'react-redux'
import SupportedLocales from '../../../scripts/SupportedLocales'
import { testJobDuration } from './TestUtils.spec'
import { testJobTimeline } from './TestUtils.spec'

const mockStore = configureMockStore()

test('t', () => {})

for (const code of ['gb', 'jp', 'ua']) {
  test(`[${code}] should render JobPeriod correctly with from and to`, () => {
    const locale = SupportedLocales.find(code)
    expect(locale).not.toBeNull()
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
    const div = container.querySelector('div.timeline-image')
    expect(div).not.toBeNull()
    testJobDuration(
      div.querySelector('div.job-duration'),
      code,
      fromMonthIndex,
      fromYear,
      toMonthIndex,
      toYear
    )
    testJobTimeline(
      div.querySelector('div.job-timeline'),
      locale,
      fromMonthIndex,
      fromYear,
      toMonthIndex,
      toYear
    )
  })

  test(`[${code}] should render JobPeriod correctly with from`, () => {
    const locale = SupportedLocales.find(code)
    expect(locale).not.toBeNull()
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
    const div = container.querySelector('div.timeline-image')
    expect(div).not.toBeNull()
    testJobDuration(
      div.querySelector('div.job-duration'),
      code,
      fromMonthIndex,
      fromYear
    )
    testJobTimeline(
      div.querySelector('div.job-timeline'),
      locale,
      fromMonthIndex,
      fromYear
    )
  })
}
