import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './styles/style404.scss'

import App404 from './components/App404'

import { startLoadLocale } from './store/locale/actions'
import { store } from './store/configureStore'

store.dispatch(startLoadLocale())

ReactDOM.render(
  <Provider store={store}>
    <App404 />
  </Provider>,
  document.getElementById('app')
)
