import './styles/style404.scss'
import * as React from 'react'
import App404 from './components/App404'
import AppWrapper from './components/AppWrapper'
import LoadingSpinner from './components/LoadingSpinner'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('app')!).render(
  <React.Suspense fallback={<LoadingSpinner />}>
    <AppWrapper>
      <App404 />
    </AppWrapper>
  </React.Suspense>
)
