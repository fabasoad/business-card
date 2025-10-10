import * as React from 'react'
import type { StatsLeetcodeProps } from '../StatsLeetcode'

export default function StatsLeetcode({
  totalSolved = 6, easySolved = 3, mediumSolved = 2, hardSolved = 1
}: StatsLeetcodeProps) {
  return (
    <div data-testid="StatsLeetcode">
      <div data-testid="totalSolved">{totalSolved}</div>
      <div data-testid="easySolved">{easySolved}</div>
      <div data-testid="mediumSolved">{mediumSolved}</div>
      <div data-testid="hardSolved">{hardSolved}</div>
    </div>
  )
}
