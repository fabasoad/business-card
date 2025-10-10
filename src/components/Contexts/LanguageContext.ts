import { type Context, createContext } from 'react'
import * as i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as gb from '../../assets/i18n/gb.json'
import * as jp from '../../assets/i18n/jp.json'
import * as ua from '../../assets/i18n/ua.json'
import i18nLanguageCodeTranslator, {
  I18nLanguageCodeFormat,
  type I18nLanguageCodeTranslatorFunc
} from '../../scripts/i18n/I18nLanguageCodeTranslator'
import I18nLanguageDetector from '../../scripts/i18n/I18nLanguageDetector'
import SupportedLocales from '../../scripts/i18n/SupportedLocales'

type LanguageContextType = {
  language: string,
  setLanguage: (language: string) => void
}

export async function initLanguage(): Promise<string> {
  const translate: I18nLanguageCodeTranslatorFunc =
    i18nLanguageCodeTranslator.getTranslateFunc(
      I18nLanguageCodeFormat.ISO_3166_1_alpha_2,
      I18nLanguageCodeFormat.ISO_639_1
    )

  return i18n
    .use(I18nLanguageDetector)
    .use(initReactI18next)
    .init({
      debug: process.env.NODE_ENV === 'development',
      defaultNS: 'common',
      fallbackLng: SupportedLocales.default.code,
      ns: ['common'],
      returnNull: false,
      returnObjects: true,
      resources: {
        gb: { common: gb },
        jp: { common: jp },
        ua: { common: ua }
      },
      react: {
        transSupportBasicHtmlNodes: true,
        transKeepBasicHtmlNodesFor: ['li', 'p']
      }
    }).then((t: i18n.TFunction) => {
      document.title = t('title', {
        authorFullName: t('author.full-name'),
        authorJobTitle: t('author.job-title')
      })
      document.documentElement.setAttribute(
        'lang',
        translate(window.localStorage.getItem('i18nextLng'))
      )
      return window.localStorage.getItem('i18nextLng')
    })
}

export async function updateLanguage(v: string): Promise<string> {
  return i18n.changeLanguage(v).then(() => v)
}

const LanguageContext: Context<LanguageContextType> = createContext({
  language: SupportedLocales.default.code,
  // biome-ignore lint/suspicious/noEmptyBlockStatements: Default value
  setLanguage: () => {}
})
export default LanguageContext
