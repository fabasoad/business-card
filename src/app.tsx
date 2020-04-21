import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './components/App';
import LoadingSpinner from './components/LoadingSpinner';

import './styles/style.scss';

import './libs/fontawesome';
import currentLocale from './i18n';

ReactDOM.render(
  <React.Suspense fallback={<LoadingSpinner />}>
    <App locale={currentLocale} />
  </React.Suspense>,
  document.getElementById('app')
);
