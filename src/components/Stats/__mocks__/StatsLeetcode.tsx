import * as React from 'react'
import type { StatsLeetcodeProps } from '../StatsLeetcode'

export default function StatsLeetcode({
  totalSolved = 6, totalEasy = 3, totalMedium = 2, totalHard = 1
}: StatsLeetcodeProps) {
  return (
    <div data-testid="StatsLeetcode">
      <div data-testid="totalSolved">{totalSolved}</div>
      <div data-testid="totalEasy">{totalEasy}</div>
      <div data-testid="totalMedium">{totalMedium}</div>
      <div data-testid="totalHard">{totalHard}</div>
    </div>
  )
}
