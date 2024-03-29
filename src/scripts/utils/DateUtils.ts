import * as humanizeDuration from 'humanize-duration'
import DigitConverter from '../DigitConverter'
import { getI18n } from 'react-i18next'

export function getDateLocale(year: number, monthIndex?: number): string {
  const i18n = getI18n()
  const converter = new DigitConverter()

  return i18n.language === 'jp'
    ? converter.toDoubleByte(year.toString()) + i18n.t('business-card-year-singular') + (monthIndex != undefined ? i18n.t(`business-card-month-${monthIndex}`) : '')
    : (monthIndex != undefined ? i18n.t(`business-card-month-${monthIndex}`) + ' ' : '') + year
}

export function humanize(from: Date, to: Date, code: string = 'gb'): string {
  const opts = {
    delimiter: ' ',
    fallbacks: ['en'],
    language: i18nCode(code),
    largest: 2,
    round: true,
    units: ['y', 'mo']
  }
  const duration: number = to.getTime() - from.getTime()
  return humanizeDuration(duration, opts)
}

function i18nCode(code: string) {
  switch (code) {
    case 'jp':
      return 'ja'
    case 'ua':
      return 'uk'
    case 'gb':
      return 'en'
    default:
      return code
  }
}
