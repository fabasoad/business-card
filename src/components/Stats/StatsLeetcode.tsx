import * as React from 'react'
import LoadingSpinner from '../LoadingSpinner'
import { useFetchStats } from './hooks'
import StatsCommon from './StatsCommon'
import { LeetcodeService, type LeetcodeStats } from '../../scripts/services/LeetcodeService'

export type StatsLeetcodeProps = {
  totalSolved?: number,
  totalEasy?: number,
  totalMedium?: number,
  totalHard?: number
}

export default function StatsLeetcode({
  totalSolved = 283, totalEasy = 136, totalMedium = 128, totalHard = 19
}: StatsLeetcodeProps) {
  const { data, isLoading } = useFetchStats<LeetcodeService, LeetcodeStats>(
    () => new LeetcodeService({ totalSolved, totalEasy, totalMedium, totalHard })
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
