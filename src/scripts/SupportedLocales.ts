import { Locale } from '../store/locale/types'

export default class SupportedLocales {
  static default(): Locale {
    return SupportedLocales._items()[0]
  }

  static _items(): Locale[] {
    const result = [
      new Locale('gb', 'en'),
      new Locale('ru')
    ]
    if (process.env.NODE_ENV === 'development') {
      return [...result, new Locale('jp')]
    }
    return result
  }

  static getOrDefault(code: string): Locale {
    return SupportedLocales._items().find((l) => l.code === code) || SupportedLocales.default()
  }

  static getExceptOf(code: string): Locale[] {
    return SupportedLocales._items().filter((l) => l.code !== code)
  }
}
