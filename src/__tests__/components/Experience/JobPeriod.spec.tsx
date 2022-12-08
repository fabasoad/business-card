import '@testing-library/jest-dom'
import * as React from 'react'
import configureMockStore from 'redux-mock-store'
import { render, screen } from '@testing-library/react'

import JobPeriod from '../../../components/Experience/JobPeriod'
import { Provider } from 'react-redux'
import SupportedLocales from '../../../scripts/SupportedLocales'

const mockStore = configureMockStore()

const fixtures = [{
  code: 'gb',
  duration: '1 year 3 months',
  from: 'business-card-month-1 2019',
  to: 'business-card-month-4 2020'
}, {
  code: 'jp',
  duration: '1 年 3 ヶ月',
  from: '２０１９business-card-year-singularbusiness-card-month-1',
  to: '２０２０business-card-year-singularbusiness-card-month-4'
}, {
  code: 'ua',
  duration: '1 рік 3 місяці',
  from: 'business-card-month-1 2019',
  to: 'business-card-month-4 2020'
}]

for (const { code, duration, from, to } of fixtures) {
  test(`[${code}] should render JobPeriod correctly with from and to`, () => {
    const store = mockStore({
      locale: SupportedLocales.getOrDefault(code)
    })
    const { container } = render(
      <Provider store={store}>
        <JobPeriod
          fromMonth={1}
          fromYear={2019}
          toMonth={4}
          toYear={2020}
        />
      </Provider>
    )
    expect(container.querySelector('div.job-duration'))
      .toHaveTextContent(duration)
    expect(screen.getByRole('heading', { level: 4 }))
      .toHaveTextContent(`${to}-${from}`)
  })

  test(`[${code}] should render JobPeriod correctly with from only`, () => {
    const store = mockStore({
      locale: SupportedLocales.getOrDefault(code)
    })
    const now = new Date()
    const fromMonth = now.getMonth() > 2
      ? now.getMonth() - 3
      : now.getMonth() + 9
    const fromYear = now.getFullYear() - 1
    const { container } = render(
      <Provider store={store}>
        <JobPeriod
          fromMonth={fromMonth}
          fromYear={fromYear}
        />
      </Provider>
    )
    expect(container.querySelector('div.job-duration'))
      .toHaveTextContent(duration)
    expect(screen.queryByRole('heading', { level: 4 })).not.toBeNull()
  })
}
