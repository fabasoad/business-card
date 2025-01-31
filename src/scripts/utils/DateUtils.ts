import * as humanizeDuration from 'humanize-duration'
import DigitConverter from '../DigitConverter'
import { getI18n } from 'react-i18next'

const i18CodeMap = new Map<string, string>()
i18CodeMap.set('jp', 'ja')
i18CodeMap.set('ua', 'uk')
i18CodeMap.set('gb', 'en')

export function getDateLocale(year: number, monthIndex?: number): string {
  const i18n = getI18n()
  const converter = new DigitConverter()

  return i18n.language === 'jp'
    ? converter.toDoubleByte(year.toString()) + i18n.t('business-card-year-singular') + (monthIndex != undefined ? i18n.t(`month.${monthIndex}`) : '')
    : (monthIndex != undefined ? i18n.t(`month.${monthIndex}`) + ' ' : '') + year
}

export function humanize(from: Date, to: Date, code: string = 'gb'): string {
  const opts = {
    delimiter: ' ',
    fallbacks: ['en'],
    language: getOrDefault<string, string>(i18CodeMap, code, code),
    largest: 2,
    round: true,
    units: ['y', 'mo']
  }
  const duration: number = to.getTime() - from.getTime()
  return humanizeDuration(duration, opts)
}

function getOrDefault<K, V>(map: Map<K, V>, key: K, defaultValue: V): V {
  return map.has(key) ? map.get(key)! : defaultValue;
}
