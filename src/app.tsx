import './styles/style.scss'
import * as React from 'react'
import App from './components/App'
import AppWrapper from './components/AppWrapper'
import { createRoot } from 'react-dom/client'
import { PostHogProvider } from 'posthog-js/react'

const options = {
  api_host: process.env.REACT_APP_PUBLIC_POSTHOG_HOST,
}

createRoot(document.getElementById('app')!).render(
    <AppWrapper>
      <PostHogProvider
        apiKey={process.env.REACT_APP_PUBLIC_POSTHOG_KEY}
        options={options}
      >
        <App />
      </PostHogProvider>
    </AppWrapper>
)
