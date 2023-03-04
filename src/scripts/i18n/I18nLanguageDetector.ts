import SupportedLocales from './SupportedLocales'
import { LanguageDetectorModule } from 'i18next'

const map = new Map<string, string>([
  ['en', 'gb'],
  ['ja', 'jp'],
  ['uk', 'ua']
])

const I18nLanguageDetector: LanguageDetectorModule = {
  type: 'languageDetector',
  detect: () => {
    const params = new URLSearchParams(document.location.search)
    let code: string = params.get('lng') ||
      localStorage.getItem('i18nextLng') ||
      SupportedLocales.default.code
    code = map.get(code) ?? code
    if (document.location.search) {
      window.history.replaceState(
        {},
        document.title,
        document.location.origin + document.location.pathname + document.location.hash
      )
    }
    return code
  },
  init: () => {},
  cacheUserLanguage: (lng: string) => {
    localStorage.setItem('i18nextLng', lng)
  },
}
export default I18nLanguageDetector
