import * as React from 'react'
import StatsCommon from './StatsCommon'
import remoteService, { LeetcodeStats } from '../../scripts/services/LeetcodeService'
import { AutoloadProps } from '../Controls/AutoloadProps'

export default function StatsLeetcode({ autoload }: AutoloadProps) {
  const [stats, setStats] = React.useState<LeetcodeStats>({
    totalSolved: 190,
    easySolved: 96,
    mediumSolved: 91,
    hardSolved: 3
  })
  React.useEffect(() => {
    if (autoload) {
      remoteService.request().then(setStats)
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
