import * as React from 'react'

import LeetcodeService, { LeetcodeStats } from '../../scripts/services/LeetcodeService'
import StatsCommon from './StatsCommon'

export interface StatsLeetcodeProps {
  autoload?: boolean
}

const StatsLeetcode: React.FC<React.PropsWithChildren<StatsLeetcodeProps>> =
  ({ autoload }) => {
    const [stats, setStats] = React.useState<LeetcodeStats>({
      totalSolved: 180,
      easySolved: 0,
      mediumSolved: 0,
      hardSolved: 0
    })
    // React.useEffect(() => {
    //   if (autoload) {
    //     new LeetcodeService().request().then(setStats)
    //   }
    // })
    return (
      <StatsCommon techName="leetcode" url="https://leetcode.com/fabasoad">
        ✔️ {stats.totalSolved}
      </StatsCommon>
    )
  }

StatsLeetcode.defaultProps = {
  autoload: true
}

export default StatsLeetcode
