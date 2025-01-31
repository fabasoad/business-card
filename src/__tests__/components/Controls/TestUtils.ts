import { humanize } from '../../../scripts/utils/DateUtils'
import { Locale } from '../../../scripts/i18n/types'

export function testDateDuration(
  div: HTMLDivElement,
  code: string,
  fromMonthIndex: number,
  fromYear: number,
  toMonthIndex?: number,
  toYear?: number
): void {
  expect(div).toHaveTextContent(
    humanize(
      new Date(fromYear, fromMonthIndex),
      !toYear || toMonthIndex == undefined
        ? new Date()
        : new Date(toYear, toMonthIndex),
      code
    )
  )
}

export function testDateLocale(
  container: HTMLElement, { code }: Locale, year: number, monthIndex?: number
): void {
  let expectedText
  switch (code) {
    case 'gb':
    case 'ua':
      expectedText = monthIndex == undefined
        ? year
        : `month.${monthIndex} ${year}`
      break
    case 'jp':
      expectedText = monthIndex == undefined
        ? 'business-card-year-singular'
        : `business-card-year-singularmonth.${monthIndex}`
      break
    default:
      throw new Error(`${code} locale is not covered by tests`)
  }
  expect(container).toHaveTextContent(expectedText)
}

export function testDateTimeline(
  div: HTMLDivElement,
  locale: Locale,
  fromMonthIndex: number,
  fromYear: number,
  toMonthIndex?: number,
  toYear?: number
): void {
  expect(div).toHaveClass('col')
  const divRows = div.querySelectorAll('div.row')
  expect(divRows).toHaveLength(3)
  const divDateTo = divRows[0] as HTMLElement
  if (toYear && toMonthIndex != undefined) {
    testDateLocale(divDateTo, locale, toYear, toMonthIndex)
  } else {
    expect(divDateTo).toHaveTextContent('experience.present')
  }
  expect(divRows[1]).toHaveTextContent('-')
  const divDateFrom = divRows[2] as HTMLElement
  testDateLocale(divDateFrom, locale, fromYear, fromMonthIndex)
}

export function testSectionTitle(div: HTMLDivElement, title: string) {
  expect(div).toHaveClass('section-title')
  expect(div).toHaveClass('text-center')
  expect(div).toHaveClass('center')
  expect(div.querySelector('h2')).toHaveTextContent(title)
  expect(div.querySelector('hr')).not.toBeNull()
}
