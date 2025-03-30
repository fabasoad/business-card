import * as React from 'react'
import { useThemeContext } from './Contexts/ThemeContext'

export type LoadingSpinnerBackground = 'dark' | 'light'
export type LoadingSpinnerColor = 'dark' | 'light' | 'success'

export type LoadingSpinnerProps = {
  background?: LoadingSpinnerBackground
  color?: LoadingSpinnerColor
}

export default function LoadingSpinner({ background = 'light', color }: LoadingSpinnerProps) {
  const { theme } = useThemeContext()
  if (!color) {
    color = theme == 'dark' ? 'light' : 'dark'
  }
  return (
    <div className={`loader-${background} d-flex justify-content-center`}>
      <div className={`spinner-border text-${color}`} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}
