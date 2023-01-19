import SupportedLocales from '../../../scripts/SupportedLocales';
import DateUtils from '../../../scripts/utils/DateUtils';

describe('DateUtils', () => {
  type Fixture = { codes: string[], expected: string }

  const expectedMap = new Map<string, Fixture>([
    ['jp', { codes: ['jp', 'ja'], expected: '9 年 1 ヶ月' }],
    ['ua', { codes: ['ua', 'uk'], expected: '9 років 1 місяць' }],
    ['gb', { codes: ['gb', 'en'], expected: '9 years 1 month' }]
  ])

  for (const locale of SupportedLocales._items) {
    for (let i = 0; i < expectedMap.get(locale.code).codes.length; i++) {
      test(`[${expectedMap.get(locale.code).codes[i]}] should return humanized date`, () => {
        const actual: string = DateUtils.humanize(
          new Date('2010-01-23'),
          new Date('2019-02-21'),
          expectedMap.get(locale.code).codes[i]
        )
        expect(actual).toEqual(expectedMap.get(locale.code).expected)
      })
    }
  }
})
