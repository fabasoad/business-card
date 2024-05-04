import * as React from 'react'
import StatsCommon from './StatsCommon'
import remoteService, { LeetcodeStats } from '../../scripts/services/LeetcodeService'
import { Spinner } from 'react-bootstrap'

export default function StatsLeetcode() {
  const [stats, setStats] = React.useState<LeetcodeStats>({
    totalSolved: 234,
    easySolved: 125,
    mediumSolved: 106,
    hardSolved: 3
  })
  React.useEffect(() => {
    remoteService.request().then(setStats)
  }, [])
  return (
    <React.Suspense fallback={<Spinner />}>
      <StatsCommon techName="leetcode" url="https://leetcode.com/fabasoad">
        ✔️ {stats.totalSolved}
      </StatsCommon>
    </React.Suspense>
  )
}
