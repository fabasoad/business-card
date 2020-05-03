import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './components/App'
import LoadingSpinner from './components/LoadingSpinner'

import './styles/style.scss'

import './libs/fontawesome'
import DevMessageProducer from './scripts/DevMessageProducer'
import { startLoadLocale } from './store/locale/actions'
import { store } from './store/configureStore'

const producer = new DevMessageProducer()
producer.run()

store.dispatch(startLoadLocale())

ReactDOM.render(
  <React.Suspense fallback={<LoadingSpinner />}>
    <Provider store={store}>
      <App />
    </Provider>
  </React.Suspense>,
  document.getElementById('app')
)
