import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { Action } from 'redux'
import { AppState } from '../configureStore'
import { ThunkAction } from 'redux-thunk'
import { Dispatch } from 'react'
import { AppActions, Locale } from './types'
import SupportedLocales from '../../scripts/SupportedLocales'

type ThunkLocaleAction = ThunkAction<void, AppState, unknown, Action<string>>

const onLanguageChange = (t) => {
  document.title = t('business-card-title')
}

export const loadLocale = (payload: Locale): AppActions => ({
  type: 'LOAD_LOCALE',
  payload
})

export const startLoadLocale = (): ThunkLocaleAction =>
  async (dispatch: Dispatch<AppActions>) => {
    const params = new URLSearchParams(document.location.search)
    const code: string = params.get('locale') || localStorage.getItem('i18nextLng')
    const currentLocale = SupportedLocales.getOrDefault(code)
    if (document.location.search) {
      window.history.replaceState(
        {},
        document.title,
        document.location.origin + document.location.pathname + document.location.hash
      )
    }
    await i18n
      .use(Backend)
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        backend: {
          loadPath: (process.env.NODE_ENV === 'development' ? '' : '/business-card') + '/locales/{{lng}}.json'
        },
        lng: currentLocale.code,
        fallbackLng: SupportedLocales.default().code,
        debug: process.env.NODE_ENV === 'development'
      }).then((t) => {
        onLanguageChange(t)
        dispatch(
          loadLocale({
            ...currentLocale
          })
        )
      })
  }

export const setLocale = (payload: Locale): AppActions => ({
  type: 'SET_LOCALE',
  payload
})

export const startSetLocale = (locale: Locale): ThunkLocaleAction =>
  (dispatch: Dispatch<AppActions>) => {
    i18n.changeLanguage(locale.code, (err, t) => {
      onLanguageChange(t)
      dispatch(
        setLocale({
          ...locale
        })
      )
    })
  }
