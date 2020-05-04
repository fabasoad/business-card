/// <reference types="jest" />
import * as React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { DateLocale } from '../../../components/controls/DateLocale'
import { useTranslation } from '../../__mocks__/react-i18next'

let tMock

beforeAll(() => {
  tMock = useTranslation().t
})

test('should render DateLocale with month in JP locale correctly', () => {
  const month = 1
  const year = 2019
  tMock.mockImplementation(k => `jp-${k}`)
  const toDoubleByteSpy = jest.fn(k => k)
  const wrapper: ShallowWrapper = shallow(
    <DateLocale
      converter={{
        toDoubleByte: toDoubleByteSpy,
        toSingleByte: jest.fn()
      }}
      locale={{
        code: 'jp',
        title: ''
      }}
      month={month}
      year={year}
    />
  )
  expect(wrapper).toMatchSnapshot()
  expect(tMock).toHaveBeenCalledTimes(2)
  expect(tMock).toHaveBeenNthCalledWith(1, 'business-card-year-singular')
  expect(tMock).toHaveBeenNthCalledWith(2, `business-card-month-${month}`)
  expect(toDoubleByteSpy).toHaveBeenCalledWith(year.toString())
})

test('should render DateLocale without month in JP locale correctly', () => {
  const year = 2019
  tMock.mockImplementation(k => `jp-${k}`)
  const toDoubleByteSpy = jest.fn(k => k)
  const wrapper: ShallowWrapper = shallow(
    <DateLocale
      converter={{
        toDoubleByte: toDoubleByteSpy,
        toSingleByte: jest.fn()
      }}
      locale={{
        code: 'jp',
        title: ''
      }}
      year={year}
    />
  )
  expect(wrapper).toMatchSnapshot()
  expect(tMock).toHaveBeenCalledTimes(1)
  expect(tMock).toHaveBeenCalledWith('business-card-year-singular')
  expect(tMock).not.toHaveBeenCalledWith(expect.stringMatching(/^business-card-month-.*$/))
  expect(toDoubleByteSpy).toHaveBeenCalledWith(year.toString())
})

test('should render DateLocale with month in non-JP locale correctly', () => {
  const month = 1
  const year = 2019
  tMock.mockImplementation(k => `gb-${k}`)
  const toDoubleByteSpy = jest.fn(k => k)
  const wrapper: ShallowWrapper = shallow(
    <DateLocale
      converter={{
        toDoubleByte: toDoubleByteSpy,
        toSingleByte: jest.fn()
      }}
      locale={{
        code: 'gb',
        title: ''
      }}
      month={month}
      year={year}
    />
  )
  expect(wrapper).toMatchSnapshot()
  expect(tMock).toHaveBeenCalledTimes(1)
  expect(tMock).toHaveBeenCalledWith(`business-card-month-${month}`)
  expect(toDoubleByteSpy).not.toHaveBeenCalled()
})

test('should render DateLocale without month in non-JP locale correctly', () => {
  const year = 2019
  const toDoubleByteSpy = jest.fn(k => k)
  const wrapper: ShallowWrapper = shallow(
    <DateLocale
      converter={{
        toDoubleByte: toDoubleByteSpy,
        toSingleByte: jest.fn()
      }}
      locale={{
        code: 'gb',
        title: ''
      }}
      year={year}
    />
  )
  expect(wrapper).toMatchSnapshot()
  expect(tMock).not.toHaveBeenCalled()
  expect(toDoubleByteSpy).not.toHaveBeenCalled()
})

afterEach(() => {
  jest.clearAllMocks()
})