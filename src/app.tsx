import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './components/App';
import LoadingSpinner from './components/LoadingSpinner';

import './styles/style.scss';

import './libs/fontawesome';
import currentLocale from './i18n';
import DevMessageProducer from './scripts/DevMessageProducer';

const producer = new DevMessageProducer();
producer.run();

ReactDOM.render(
  <React.Suspense fallback={<LoadingSpinner />}>
    <App locale={currentLocale} />
  </React.Suspense>,
  document.getElementById('app')
);
