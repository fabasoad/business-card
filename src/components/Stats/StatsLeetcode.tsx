import * as React from 'react'

import LeetcodeService, { LeetcodeStats } from '../../scripts/services/LeetcodeService';
import StatsCommon from './StatsCommon';

export default function StatsLeetcode() {
  const [stats, setStats] = React.useState<LeetcodeStats>({
    totalSolved: 0,
    easySolved: 0,
    mediumSolved: 0,
    hardSolved: 0
  })
  new LeetcodeService().request().then(setStats)
  return (
    <StatsCommon techName="leetcode" url="https://leetcode.com/fabasoad">
      ✔️ {stats.totalSolved}
    </StatsCommon>
  )
}
