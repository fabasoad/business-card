export const LOAD_LOCALE = 'LOAD_LOCALE'
export const SET_LOCALE = 'SET_LOCALE'

export class Locale {
  code: string
  title: string

  constructor(code: string, title: string = null) {
    this.code = code
    this.title = ` ${title || code}`
  }
}

interface LoadLocaleAction {
  type: typeof LOAD_LOCALE
  payload: Locale
}

interface SetLocaleAction {
  type: typeof SET_LOCALE
  payload: Locale
}

export type LocaleActionTypes = LoadLocaleAction | SetLocaleAction

export type AppActions = LocaleActionTypes
