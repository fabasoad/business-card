import * as React from 'react'
import StatsCommon from '../StatsCommon'
import { useFetchLeetcodeStats } from './hooks'

export type StatsLeetcodeProps = {
  totalSolved?: number,
  easySolved?: number,
  mediumSolved?: number,
  hardSolved?: number
}

export default function StatsLeetcode({
  totalSolved = 111, easySolved = 129, mediumSolved = 106, hardSolved = 3
}: StatsLeetcodeProps) {
  const stats = useFetchLeetcodeStats(
    { totalSolved, easySolved, mediumSolved, hardSolved }
  )
  return (
    <StatsCommon techName="leetcode" url="https://leetcode.com/fabasoad">
      ✔️ {stats.totalSolved}
    </StatsCommon>
  )
}
