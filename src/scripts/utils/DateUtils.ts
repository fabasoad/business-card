import * as humanizeDuration from 'humanize-duration'
import DigitConverter from '../DigitConverter'
import { getI18n } from 'react-i18next'
import i18nLanguageCodeTranslator, {
  I18nLanguageCodeFormat,
  I18nLanguageCodeTranslatorFunc
} from '../i18n/I18nLanguageCodeTranslator'

const translate: I18nLanguageCodeTranslatorFunc =
  i18nLanguageCodeTranslator.getTranslateFunc(
    I18nLanguageCodeFormat.ISO_3166_1_alpha_2,
    I18nLanguageCodeFormat.ISO_639_1
  )

export function toDateLocaleFromDate(date: Date): string {
  return toDateLocale(date.getFullYear(), date.getMonth())
}

export function toDateLocale(year: number, monthIndex?: number): string {
  const { language, t } = getI18n()
  const converter = new DigitConverter()

  return language === 'jp'
    ? converter.toDoubleByte(year.toString()) + t('year') + (monthIndex != undefined ? t(`month.${monthIndex}`) : '')
    : (monthIndex != undefined ? t(`month.${monthIndex}`) + ' ' : '') + year
}

export function humanize(from: Date, to: Date, code: string = 'gb'): string {
  const opts = {
    delimiter: ' ',
    fallbacks: ['en'],
    language: translate(code),
    largest: 2,
    round: true,
    units: ['y', 'mo']
  }
  const duration: number = to.getTime() - from.getTime()
  return humanizeDuration(duration, opts)
}
