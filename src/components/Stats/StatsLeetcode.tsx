import * as React from 'react'

import remoteService, { LeetcodeStats } from '../../scripts/services/LeetcodeService'
import StatsCommon from './StatsCommon'
import { AutoloadProps } from '../Controls/AutoloadProps'

export default function StatsLeetcode({ autoload }: AutoloadProps) {
  const [stats, setStats] = React.useState<LeetcodeStats>({
    totalSolved: 184,
    easySolved: 90,
    mediumSolved: 91,
    hardSolved: 3
  })
  React.useEffect(() => {
    if (autoload) {
      // TODO: Uncomment once BE service is ready
      // remoteService.request().then(setStats)
    }
  })
  return (
    <StatsCommon techName="leetcode" url="https://leetcode.com/fabasoad">
      ✔️ {stats.totalSolved}
    </StatsCommon>
  )
}

StatsLeetcode.defaultProps = {
  autoload: true
}
