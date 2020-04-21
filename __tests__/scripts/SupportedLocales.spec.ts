import { expect } from 'chai';
import SupportedLocales, { Locale } from '../../src/scripts/SupportedLocales';

const fixture = [
  new Locale('gb', 'en'),
  new Locale('ru')
];

describe('Test SupportedLocales class', () => {
  it('should return gb locale as default', () => {
    const locale : Locale = SupportedLocales.default();
    expect(locale).to.eql(fixture[0]);
  });
  it('should return default locale in case of invalid code', () => {
    const locale : Locale = SupportedLocales.getOrDefault('invalidCode');
    expect(locale).to.eql(SupportedLocales.default());
  });
  fixture.forEach((expected : Locale) => {
    it(`should return ${expected.code} locale by code`, () => {
      const actual : Locale = SupportedLocales.getOrDefault(expected.code);
      expect(actual).to.eql(expected);
    });
  });
  fixture.forEach((expected : Locale) => {
    it(`should return all locales except of ${expected.code} locale`, () => {
      const actual : Locale[] = SupportedLocales.getExceptOf(expected.code);
      expect(actual).to.eql(fixture.filter((l : Locale) => l !== expected));
    });
  });
});