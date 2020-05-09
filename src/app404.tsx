import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './styles/style404.scss'

import App404 from './components/App404'
import LoadingSpinner from './components/LoadingSpinner'

import { startLoadLocale } from './store/locale/actions'
import { store } from './store/configureStore'

store.dispatch(startLoadLocale())

ReactDOM.render(
  <React.Suspense fallback={<LoadingSpinner />}>
    <Provider store={store}>
      <App404 />
    </Provider>
  </React.Suspense>,
  document.getElementById('app')
)
