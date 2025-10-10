import * as React from 'react'
import type { StatsGitHubProps } from '../StatsGitHub'

export default function StatsGitHub({ starsAmount = 1 }: StatsGitHubProps) {
  return (
    <div data-testid="StatsGitHub">
      <div data-testid="starsAmount">{starsAmount}</div>
    </div>
  )
}
