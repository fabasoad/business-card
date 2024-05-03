import SupportedLocales from '../../../scripts/i18n/SupportedLocales'
import { humanize } from '../../../scripts/utils/DateUtils'
import { Locale } from '../../../scripts/i18n/types'

describe('DateUtils', () => {
  type FixtureInitial = { codes: string[], expected: string }

  const expectedMap = new Map<string, FixtureInitial>([
    ['jp', { codes: ['jp', 'ja'], expected: '9 年 1 ヶ月' }],
    ['ua', { codes: ['ua', 'uk'], expected: '9 років 1 місяць' }],
    ['gb', { codes: ['gb', 'en'], expected: '9 years 1 month' }]
  ])

  type FixtureTransformed = { code: string, expected: string }

  const items: FixtureTransformed[] =
    SupportedLocales._items.flatMap((l: Locale) =>
      expectedMap.get(l.code).codes.map((c: string) =>
        ({ code: c, expected: expectedMap.get(l.code).expected })))

  test.each(items)('[$code] should return humanized date', ({ code, expected }: FixtureTransformed) => {
    const actual: string = humanize(
      new Date('2010-01-23'),
      new Date('2019-02-21'),
      code
    )
    expect(actual).toEqual(expected)
  })
})
