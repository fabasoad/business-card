import * as React from 'react'
import StatsCommon from './StatsCommon'
import { LeetcodeService, LeetcodeStats } from '../../scripts/services/LeetcodeService'

type StatsLeetcodeProps = {
  totalSolved?: number,
  easySolved?: number,
  mediumSolved?: number,
  hardSolved?: number
}

export default function StatsLeetcode({
  totalSolved = 234, easySolved = 125, mediumSolved = 106, hardSolved = 3
}: StatsLeetcodeProps) {
  const [stats, setStats] = React.useState<LeetcodeStats>({
    totalSolved,
    easySolved,
    mediumSolved,
    hardSolved
  })
  React.useEffect(() => {
    const service = new LeetcodeService(stats);
    (async () => {
      const data: LeetcodeStats = await service.request()
      setStats(data)
    })()
  }, [])
  return (
    <StatsCommon techName="leetcode" url="https://leetcode.com/fabasoad">
      ✔️ {stats.totalSolved}
    </StatsCommon>
  )
}
