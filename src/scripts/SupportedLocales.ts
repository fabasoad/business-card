import { Locale } from '../store/locale/types'

export default class SupportedLocales {
  static _items: Locale[] = [
    new Locale('gb', 'en'),
    new Locale('jp'),
    new Locale('ua')
  ]

  static default: Locale = SupportedLocales._items[0]

  static find(code: string): Locale | undefined {
    return SupportedLocales._items.find((l: Locale) => l.code === code)
  }

  static getOrDefault(code: string): Locale {
    return SupportedLocales.find(code) || SupportedLocales.default
  }

  static getExceptOf(code: string): Locale[] {
    return SupportedLocales._items.filter((l: Locale) => l.code !== code)
  }
}
