import { Locale } from '../../../store/locale/types'

export function testDateLocale(
  container: HTMLElement, { code }: Locale, year: number, monthIndex?: number) {
  let expectedText
  if (code === 'gb' || code === 'ua') {
    expectedText = monthIndex == undefined
      ? year
      : `business-card-month-${monthIndex} ${year}`
  } else if (code === 'jp') {
    expectedText = monthIndex == undefined
      ? 'business-card-year-singular'
      : `business-card-year-singularbusiness-card-month-${monthIndex}`
  } else {
    throw new Error(`${code} locale is not covered by tests`)
  }
  expect(container).toHaveTextContent(expectedText)
}
