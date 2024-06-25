import './styles/style.scss'
import * as React from 'react'
import App from './components/App'
import AppWrapper from './components/AppWrapper'
import LoadingSpinner from './components/LoadingSpinner'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('app')!).render(
  <React.Suspense fallback={<LoadingSpinner />}>
    <AppWrapper>
      <App />
    </AppWrapper>
  </React.Suspense>
)
