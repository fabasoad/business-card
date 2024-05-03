import SupportedLocales from './SupportedLocales'
import { LanguageDetectorModule } from 'i18next'
import i18nLanguageCodeTranslator, {
  I18nLanguageCodeFormat,
  I18nLanguageCodeTranslatorFunc
} from './I18nLanguageCodeTranslator'

const I18nLanguageDetector: LanguageDetectorModule = {
  type: 'languageDetector',
  detect: () => {
    const params = new URLSearchParams(document.location.search)
    let code: string = params.get('lng') ||
      localStorage.getItem('i18nextLng') ||
      SupportedLocales.default.code
    const translate: I18nLanguageCodeTranslatorFunc =
      i18nLanguageCodeTranslator.getTranslateFunc(
        I18nLanguageCodeFormat.ISO_639_1,
        I18nLanguageCodeFormat.ISO_3166_1_alpha_2
      )
    code = translate(code)
    if (document.location.search) {
      window.history.replaceState(
        {},
        document.title,
        document.location.origin + document.location.pathname + document.location.hash
      )
    }
    return code
  },
  init: () => {/* no action needed */},
  cacheUserLanguage: (lng: string) => {
    localStorage.setItem('i18nextLng', lng)
  },
}
export default I18nLanguageDetector
