import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/App';
import LoadingSpinner from './components/LoadingSpinner';
import './libs/fontawesome';
import DevMessageProducer from './scripts/DevMessageProducer';
import { store } from './store/configureStore';
import { startLoadLocale } from './store/locale/actions';
import './styles/style.scss';

const producer = new DevMessageProducer()
producer.run()

store.dispatch(startLoadLocale())

createRoot(document.getElementById('app')!).render(
  <React.Suspense fallback={<LoadingSpinner />}>
    <Provider store={store}>
      <App />
    </Provider>
  </React.Suspense>
)
