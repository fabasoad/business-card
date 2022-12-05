import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { DateLocale } from '../../../components/controls/DateLocale'
import { Locale } from '../../../store/locale/types'

test('should render correctly with month, year and non-JP locale', () => {
  const { container } = render(
    <DateLocale year={2022} month={1} locale={new Locale('en', 'EN')} />
  )
  expect(container).toHaveTextContent('business-card-month-1 2022')
})

test('should render correctly with year and non-JP locale', () => {
  const { container } = render(
    <DateLocale year={2001} locale={new Locale('en', 'EN')} />
  )
  expect(container).toHaveTextContent('2001')
})

test('should render correctly with month, year and JP locale', () => {
  const { container } = render(
    <DateLocale year={2012} month={4} locale={new Locale('jp', 'JP')} />
  )
  expect(container).toHaveTextContent('２０１２business-card-year-singularbusiness-card-month-4')
})

test('should render correctly with year and JP locale', () => {
  const { container } = render(
    <DateLocale year={2002} locale={new Locale('jp', 'JP')} />
  )
  expect(container).toHaveTextContent('２００２business-card-year-singular')
})
