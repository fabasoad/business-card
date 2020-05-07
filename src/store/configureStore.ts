import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk, { ThunkMiddleware } from 'redux-thunk'
import { localeReducer } from './locale/reducers'
import { AppActions } from './locale/types'

const rootReducer = combineReducers({
  locale: localeReducer
})

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
)
