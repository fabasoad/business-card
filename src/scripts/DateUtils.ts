import * as humanizeDuration from 'humanize-duration'

export default class DateUtils {
  public static humanize(from: Date, to: Date, code: string = 'gb'): string {
    const opts = {
      delimiter: ' ',
      fallbacks: ['en'],
      language: DateUtils.i18nCode(code),
      largest: 2,
      round: true,
      units: ['y', 'mo']
    }
    const duration: number = to.getTime() - from.getTime()
    return humanizeDuration(duration, opts)
  }

  private static i18nCode(code: string) {
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
}
