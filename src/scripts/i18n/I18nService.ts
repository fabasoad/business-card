import * as gb from '../../assets/i18n/gb.json'
import * as i18n from 'i18next'
import * as jp from '../../assets/i18n/jp.json'
import * as ua from '../../assets/i18n/ua.json'
import I18nLanguageDetector from './I18nLanguageDetector'
import i18nLanguageCodeTranslator, {
  I18nLanguageCodeFormat,
  type I18nLanguageCodeTranslatorFunc
} from './I18nLanguageCodeTranslator'
import SupportedLocales from './SupportedLocales'
import type { Locale } from './types'
import { initReactI18next } from 'react-i18next'

type I18nServiceCallback = (code: string, t: i18n.TFunction) => void

export enum I18nServiceCallbackTypes {
  ON_LOADED,
  ON_CHANGED
}

class I18nService {
  private readonly callbacks = new Map<I18nServiceCallbackTypes, I18nServiceCallback[]>()

  constructor() {
    const translate: I18nLanguageCodeTranslatorFunc =
      i18nLanguageCodeTranslator.getTranslateFunc(
        I18nLanguageCodeFormat.ISO_3166_1_alpha_2,
        I18nLanguageCodeFormat.ISO_639_1
      )
    const callback: I18nServiceCallback = (code: string, t: i18n.TFunction): void => {
      document.title = t('title', {
        authorFullName: t('author.full-name'),
        authorJobTitle: t('author.job-title')
      })
      document.documentElement.setAttribute('lang', translate(code))
    }
    this.registerCallback(I18nServiceCallbackTypes.ON_LOADED, callback)
    this.registerCallback(I18nServiceCallbackTypes.ON_CHANGED, callback)
  }

  async load(): Promise<void> {
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
        this.fireCallbacks(
          I18nServiceCallbackTypes.ON_LOADED, window.localStorage.i18nextLng, t)
      })
  }

  async set({ code }: Locale): Promise<i18n.TFunction> {
    return i18n.changeLanguage(code, (err: any, t: i18n.TFunction) => this.fireCallbacks(
      I18nServiceCallbackTypes.ON_CHANGED, code, t
    ))
  }

  registerCallback(type: I18nServiceCallbackTypes, callback: I18nServiceCallback): void {
    if (!this.callbacks.has(type)) {
      this.callbacks.set(type, [])
    }
    this.callbacks.get(type).push(callback)
  }

  private fireCallbacks(
    type: I18nServiceCallbackTypes, code: string, t: i18n.TFunction): void {
    this.callbacks.get(type).forEach((c: I18nServiceCallback) => c(code, t))
  }
}

const i18nService = new I18nService()
export default i18nService
