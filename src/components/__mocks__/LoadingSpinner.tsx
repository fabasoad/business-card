import * as React from 'react'
import { LoadingSpinnerProps } from '../LoadingSpinner'

export default function LoadingSpinner({ background, color }: LoadingSpinnerProps) {
  return (
    <div data-testid={`LoadingSpinner-${background}-${color}`}></div>
  )
}
