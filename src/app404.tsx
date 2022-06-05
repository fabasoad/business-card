import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App404 from './components/App404';
import LoadingSpinner from './components/LoadingSpinner';
import { store } from './store/configureStore';
import { startLoadLocale } from './store/locale/actions';
import './styles/style404.scss';

store.dispatch(startLoadLocale())

createRoot(document.getElementById('app')!).render(
  <React.Suspense fallback={<LoadingSpinner />}>
    <Provider store={store}>
      <App404 />
    </Provider>
  </React.Suspense>
)
