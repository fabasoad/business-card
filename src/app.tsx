import * as React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import AppWrapper from './components/AppWrapper'
import LoadingSpinner from './components/LoadingSpinner'
import './libs/fontawesome'
import './styles/style.scss'

createRoot(document.getElementById('app')!).render(
  <React.Suspense fallback={<LoadingSpinner />}>
    <AppWrapper>
      <App />
    </AppWrapper>
  </React.Suspense>
)
