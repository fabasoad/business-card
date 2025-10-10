import * as React from 'react'
import LoadingSpinner from '../LoadingSpinner'
import { useFetchStats } from './hooks'
import StatsCommon from './StatsCommon'
import { LeetcodeService, type LeetcodeStats } from '../../scripts/services/LeetcodeService'

export type StatsLeetcodeProps = {
  totalSolved?: number,
  easySolved?: number,
  mediumSolved?: number,
  hardSolved?: number
}

export default function StatsLeetcode({
  totalSolved = 283, easySolved = 136, mediumSolved = 128, hardSolved = 19
}: StatsLeetcodeProps) {
  const { data, isLoading } = useFetchStats<LeetcodeService, LeetcodeStats>(
    () => new LeetcodeService({ totalSolved, easySolved, mediumSolved, hardSolved })
  )
  if (isLoading) {
    return <LoadingSpinner />
  }
  return (
    <StatsCommon techName="leetcode" url="https://leetcode.com/fabasoad">
      ✔️ {data.totalSolved}
    </StatsCommon>
  )
}
