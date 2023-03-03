import * as gb from '../../assets/i18n/gb.json'
import * as jp from '../../assets/i18n/jp.json'
import * as ua from '../../assets/i18n/ua.json'
import SupportedLocales from './SupportedLocales'
import i18n from 'i18next'
import { Locale } from './types'
import { initReactI18next, TFunction } from 'react-i18next'

type I18nServiceCallback = (t: TFunction) => void

export enum I18nServiceCallbackTypes {
  ON_LOADED,
  ON_CHANGED
}

class I18nService {
  private readonly callbacks = new Map<I18nServiceCallbackTypes, I18nServiceCallback[]>()

  constructor() {
    if (document.location.search) {
      window.history.replaceState(
        {},
        document.title,
        document.location.origin + document.location.pathname + document.location.hash
      )
    }
    const callback: I18nServiceCallback = (t: TFunction) => document.title = t('business-card-title')
    this.registerCallback(I18nServiceCallbackTypes.ON_LOADED, callback)
    this.registerCallback(I18nServiceCallbackTypes.ON_CHANGED, callback)
  }

  async load(): Promise<void> {
    return i18n
    // TODO: to fix lang detector
      // .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        debug: process.env.NODE_ENV === 'development',
        defaultNS: 'common',
        fallbackLng: SupportedLocales.default.code,
        ns: ['common'],
        returnNull: false,
        resources: {
          gb: { common: gb },
          jp: { common: jp },
          ua: { common: ua }
        }
      }).then((t: TFunction) => {
        this.fireCallbacks(I18nServiceCallbackTypes.ON_LOADED, t)
      })
  }

  async set({ code }: Locale): Promise<TFunction> {
    return i18n.changeLanguage(code, (err: any, t: TFunction) => this.fireCallbacks(
      I18nServiceCallbackTypes.ON_CHANGED, t
    ))
  }

  registerCallback(type: I18nServiceCallbackTypes, callback: I18nServiceCallback): void {
    if (!this.callbacks.has(type)) {
      this.callbacks.set(type, [])
    }
    this.callbacks.get(type).push(callback)
  }

  private fireCallbacks(type: I18nServiceCallbackTypes, t: TFunction): void {
    this.callbacks.get(type).forEach((c: I18nServiceCallback) => c(t))
  }
}

const i18nService = new I18nService()
export default i18nService
