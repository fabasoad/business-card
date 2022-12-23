import DateUtils from '../../../scripts/DateUtils'
import { Locale } from '../../../store/locale/types'
import { testDateLocale } from '../controls/TestUtils.spec'

export function testJobDuration(
  div: HTMLDivElement,
  code: string,
  fromMonthIndex: number,
  fromYear: number,
  toMonthIndex?: number,
  toYear?: number
) {
  expect(div).toHaveTextContent(
    DateUtils.humanize(
      new Date(fromYear, fromMonthIndex),
      toMonthIndex != undefined && toYear
        ? new Date(toYear, toMonthIndex)
        : new Date(),
      code
    )
  )
}

export function testJobTimeline(
  div: HTMLDivElement,
  locale: Locale,
  fromMonthIndex: number,
  fromYear: number,
  toMonthIndex?: number,
  toYear?: number
) {
  expect(div).toHaveClass('col')
  const divRows = div.querySelectorAll('div.row')
  expect(divRows).toHaveLength(3)
  const divDateTo = divRows[0] as HTMLElement
  if (toYear && toMonthIndex != undefined) {
    testDateLocale(divDateTo, locale, toYear, toMonthIndex)
  } else {
    expect(divDateTo).toHaveTextContent('business-card-experience-present')
  }
  expect(divRows[1]).toHaveTextContent('-')
  const divDateFrom = divRows[2] as HTMLElement
  testDateLocale(divDateFrom, locale, fromYear, fromMonthIndex)
}
