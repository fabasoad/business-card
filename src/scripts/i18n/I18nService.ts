import * as gb from '../../assets/i18n/gb.json'
import * as i18n from 'i18next'
import * as jp from '../../assets/i18n/jp.json'
import * as ua from '../../assets/i18n/ua.json'
import I18nLanguageDetector from './I18nLanguageDetector'
import SupportedLocales from './SupportedLocales'
import { Locale } from './types'
import { initReactI18next } from 'react-i18next'

type I18nServiceCallback = (t: i18n.TFunction) => void

export enum I18nServiceCallbackTypes {
  ON_LOADED,
  ON_CHANGED
}

class I18nService {
  private readonly callbacks = new Map<I18nServiceCallbackTypes, I18nServiceCallback[]>()

  constructor() {
    const callback: I18nServiceCallback = (t: i18n.TFunction) => document.title = t('business-card-title')
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
        }
      }).then((t: i18n.TFunction) => {
        this.fireCallbacks(I18nServiceCallbackTypes.ON_LOADED, t)
      })
  }

  async set({ code }: Locale): Promise<i18n.TFunction> {
    return i18n.changeLanguage(code, (err: any, t: i18n.TFunction) => this.fireCallbacks(
      I18nServiceCallbackTypes.ON_CHANGED, t
    ))
  }

  registerCallback(type: I18nServiceCallbackTypes, callback: I18nServiceCallback): void {
    if (!this.callbacks.has(type)) {
      this.callbacks.set(type, [])
    }
    this.callbacks.get(type).push(callback)
  }

  private fireCallbacks(type: I18nServiceCallbackTypes, t: i18n.TFunction): void {
    this.callbacks.get(type).forEach((c: I18nServiceCallback) => c(t))
  }
}

const i18nService = new I18nService()
export default i18nService
