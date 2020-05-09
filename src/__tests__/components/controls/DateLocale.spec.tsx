/// <reference types="jest" />
import * as React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { DateLocale } from '../../../components/controls/DateLocale'
import { useTranslation } from '../../__mocks__/react-i18next'

let tMock

beforeAll(() => {
  tMock = useTranslation().t
})

interface DateLocaleFixture {
  title: string
  locale: string
  expect: (toDoubleByteSpy: jest.Mock<string, string[]>, year: number, month?: number) => void
}

new Array<DateLocaleFixture>({
  title: 'JP',
  locale: 'jp',
  expect: (toDoubleByteSpy, year, month) => {
    expect(tMock).toHaveBeenCalledTimes(2)
    expect(tMock).toHaveBeenNthCalledWith(1, 'business-card-year-singular')
    expect(tMock).toHaveBeenNthCalledWith(2, `business-card-month-${month}`)
    expect(toDoubleByteSpy).toHaveBeenCalledWith(year.toString())
  }
}, {
  title: 'non-JP',
  locale: 'gb',
  expect: (toDoubleByteSpy, year, month) => {
    expect(tMock).toHaveBeenCalledTimes(1)
    expect(tMock).toHaveBeenCalledWith(`business-card-month-${month}`)
    expect(toDoubleByteSpy).not.toHaveBeenCalled()
  }
}).forEach((f) =>
  test(`should render DateLocale with month in ${f.title} locale correctly`, () => {
    const month = 1
    const year = 2019
    tMock.mockImplementation((k) => `${f.locale}-${k}`)
    const toDoubleByteSpy: jest.Mock<string, string[]> = jest.fn((k) => k)
    const wrapper: ShallowWrapper = shallow(
      <DateLocale
        converter={{
          _convert: null,
          toDoubleByte: toDoubleByteSpy,
          toSingleByte: null
        }}
        locale={{
          code: f.locale,
          title: ''
        }}
        month={month}
        year={year}
      />
    )
    expect(wrapper).toMatchSnapshot()
    f.expect(toDoubleByteSpy, year, month)
  })
)

new Array<DateLocaleFixture>({
  title: 'JP',
  locale: 'jp',
  expect: (toDoubleByteSpy, year) => {
    expect(tMock).toHaveBeenCalledTimes(1)
    expect(tMock).toHaveBeenCalledWith('business-card-year-singular')
    expect(tMock).not.toHaveBeenCalledWith(expect.stringMatching(/^business-card-month-.*$/))
    expect(toDoubleByteSpy).toHaveBeenCalledWith(year.toString())
  }
}, {
  title: 'non-JP',
  locale: 'gb',
  expect: (toDoubleByteSpy, year) => {
    expect(tMock).not.toHaveBeenCalled()
    expect(toDoubleByteSpy).not.toHaveBeenCalled()
  }
}).forEach((f) =>
  test(`should render DateLocale without month in ${f.title} locale correctly`, () => {
    const year = 2019
    tMock.mockImplementation((k) => `${f.locale}-${k}`)
    const toDoubleByteSpy = jest.fn((k) => k)
    const wrapper: ShallowWrapper = shallow(
      <DateLocale
        converter={{
          _convert: null,
          toDoubleByte: toDoubleByteSpy,
          toSingleByte: null
        }}
        locale={{
          code: f.locale,
          title: ''
        }}
        year={year}
      />
    )
    expect(wrapper).toMatchSnapshot()
    f.expect(toDoubleByteSpy, year)
  })
)
