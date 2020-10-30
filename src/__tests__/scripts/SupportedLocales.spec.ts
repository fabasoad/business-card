import SupportedLocales from '../../scripts/SupportedLocales'
import fixture from '../fixtures/locales'
import { Locale } from '../../store/locale/types'

test('should return gb locale as default', () => {
  const locale: Locale = SupportedLocales.default
  expect(locale).toEqual(fixture[0])
})
test('should return default locale in case of invalid code', () => {
  const locale: Locale = SupportedLocales.getOrDefault('invalidCode')
  expect(locale).toEqual(SupportedLocales.default)
})
fixture.forEach((expected: Locale) => {
  test(`should return ${expected.code} locale by code`, () => {
    const actual: Locale = SupportedLocales.getOrDefault(expected.code)
    expect(actual).toEqual(expected)
  })
})
fixture.forEach((expected: Locale) => {
  test(`should return all locales except of ${expected.code} locale`, () => {
    const actual: Locale[] = SupportedLocales.getExceptOf(expected.code)
    expect(actual).toEqual(fixture.filter((l: Locale) => l !== expected))
  })
})
