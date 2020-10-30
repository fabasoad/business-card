import { Locale } from '../store/locale/types'

export default class SupportedLocales {
  static _items: Locale[] = [
    new Locale('gb', 'en'),
    new Locale('jp'),
    new Locale('ru')
  ]

  static default: Locale = SupportedLocales._items[0]

  static getOrDefault(code: string): Locale {
    return SupportedLocales._items.find((l) => l.code === code) || SupportedLocales.default
  }

  static getExceptOf(code: string): Locale[] {
    return SupportedLocales._items.filter((l) => l.code !== code)
  }
}
