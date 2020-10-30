import { LocaleActionTypes, SET_LOCALE, LOAD_LOCALE, Locale } from './types'
import SupportedLocales from '../../scripts/SupportedLocales'

export const localeReducer = (
  state = SupportedLocales.default,
  action: LocaleActionTypes
): Locale => {
  switch (action.type) {
    case LOAD_LOCALE:
      return {
        ...action.payload
      }
    case SET_LOCALE:
      return {
        ...action.payload
      }
    default:
      return state
  }
}
