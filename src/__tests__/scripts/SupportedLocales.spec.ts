import SupportedLocales from '../../scripts/i18n/SupportedLocales'
import type { Locale } from '../../scripts/i18n/types'
import fixture from '../fixtures/locales'

describe('SupportedLocales', () => {
  it('should return gb locale as default', () => {
    const locale: Locale = SupportedLocales.default
    expect(locale).toEqual(fixture[0])
  })
  it('should return default locale in case of invalid code', () => {
    const locale: Locale = SupportedLocales.getOrDefault('invalidCode')
    expect(locale).toEqual(SupportedLocales.default)
  })
  it.each<Locale>(fixture)('should return $code locale by code', (f) => {
    const actual: Locale = SupportedLocales.getOrDefault(f.code)
    expect(actual).toEqual(f)
  })
  it.each<Locale>(fixture)('should return all locales except of $code locale', (f) => {
    const actual: Locale[] = SupportedLocales.getExceptOf(f.code)
    expect(actual).toEqual(fixture.filter((l: Locale) => l !== f))
  })
})
