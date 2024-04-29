import * as React from 'react'
import remoteService, {
  type LeetcodeStats
} from '../../scripts/services/LeetcodeService'
import type { AutoloadProps } from '../Controls/AutoloadProps'
import StatsCommon from './StatsCommon'

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
