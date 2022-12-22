import '@testing-library/jest-dom'
import * as React from 'react'
import configureMockStore from 'redux-mock-store'
import { render, screen } from '@testing-library/react'

import JobPeriod from '../../../components/Experience/JobPeriod'
import { Provider } from 'react-redux'
import SupportedLocales from '../../../scripts/SupportedLocales'
import DateUtils from '../../../scripts/DateUtils';

const mockStore = configureMockStore()

const fixtures = [{
  code: 'gb',
  from: 'business-card-month-1 2019',
  to: 'business-card-month-4 2020'
}, {
  code: 'jp',
  from: '２０１９business-card-year-singularbusiness-card-month-1',
  to: '２０２０business-card-year-singularbusiness-card-month-4'
}, {
  code: 'ua',
  from: 'business-card-month-1 2019',
  to: 'business-card-month-4 2020'
}]

for (const { code, from, to } of fixtures) {
  test(`[${code}] should render JobPeriod correctly with from and to`, () => {
    const store = mockStore({
      locale: SupportedLocales.getOrDefault(code)
    })
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
    expect(container.querySelector('div.job-duration')).toHaveTextContent(
      DateUtils.humanize(
        new Date(fromYear, fromMonthIndex),
        new Date(toYear, toMonthIndex),
        code
      )
    )
    expect(screen.getByRole('heading', { level: 4 }))
      .toHaveTextContent(`${to}-${from}`)
  })

  test(`[${code}] should render JobPeriod correctly with from only`, () => {
    const store = mockStore({
      locale: SupportedLocales.getOrDefault(code)
    })
    const fromMonthIndex = 3
    const fromYear = 2016
    const { container } = render(
      <Provider store={store}>
        <JobPeriod
          fromMonthIndex={fromMonthIndex}
          fromYear={fromYear}
        />
      </Provider>
    )
    expect(container.querySelector('div.job-duration')).toHaveTextContent(
      DateUtils.humanize(new Date(fromYear, fromMonthIndex), new Date(), code)
    )
    expect(screen.queryByRole('heading', { level: 4 })).not.toBeNull()
  })
}
