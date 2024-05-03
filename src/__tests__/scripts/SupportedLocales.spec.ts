import SupportedLocales from '../../scripts/i18n/SupportedLocales'
import fixture from '../fixtures/locales'
import { Locale } from '../../scripts/i18n/types'

describe('SupportedLocales', () => {
  test('should return gb locale as default', () => {
    const locale: Locale = SupportedLocales.default
    expect(locale).toEqual(fixture[0])
  })
  test('should return default locale in case of invalid code', () => {
    const locale: Locale = SupportedLocales.getOrDefault('invalidCode')
    expect(locale).toEqual(SupportedLocales.default)
  })
  test.each(fixture)('should return $code locale by code', (expected: Locale) => {
    const actual: Locale = SupportedLocales.getOrDefault(expected.code)
    expect(actual).toEqual(expected)
  })
  test.each(fixture)('should return all locales except of $code locale', (expected: Locale) => {
    const actual: Locale[] = SupportedLocales.getExceptOf(expected.code)
    expect(actual).toEqual(fixture.filter((l: Locale) => l !== expected))
  })
})
