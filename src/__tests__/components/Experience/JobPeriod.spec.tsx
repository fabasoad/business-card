/// <reference types="jest" />
import * as React from 'react'
import { shallow } from 'enzyme'
import JobPeriod from '../../../components/Experience/JobPeriod'
import { useTranslation } from '../../__mocks__/react-i18next'

let tMock

beforeEach(() => {
  tMock = useTranslation().t
})

test('should render JobPeriod correctly', () => {
  const fromMonth = 1
  const fromYear = 2019
  const toMonth = 4
  const toYear = 2020
  const wrapper = shallow(<JobPeriod
    fromMonth={fromMonth}
    fromYear={fromYear}
    toMonth={toMonth}
    toYear={toYear}
  />)
  expect(wrapper).toMatchSnapshot()
  expect(tMock).toHaveBeenNthCalledWith(1, `business-card-month-${toMonth}`)
  expect(tMock).toHaveBeenNthCalledWith(2, `business-card-month-${fromMonth}`)
})