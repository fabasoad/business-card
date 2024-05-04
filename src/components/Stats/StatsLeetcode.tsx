import * as React from 'react'
import StatsCommon from './StatsCommon'
import { LeetcodeService, LeetcodeStats } from '../../scripts/services/LeetcodeService'
import StatsMainContext from '../../contexts/StatsMainContext'

export default function StatsLeetcode() {
  const { leetcode } = React.useContext(StatsMainContext)
  const [stats, setStats] = React.useState<LeetcodeStats>(leetcode)
  React.useEffect(() => {
    const leetcodeService = new LeetcodeService(stats);
    (async () => {
      const data: LeetcodeStats = await leetcodeService.request()
      setStats(data)
    })()
  }, [stats])
  return (
    <StatsCommon techName="leetcode" url="https://leetcode.com/fabasoad">
      ✔️ {stats.totalSolved}
    </StatsCommon>
  )
}
