import * as React from 'react'
import {
  LeetcodeService,
  LeetcodeStats
} from '../../../scripts/services/LeetcodeService'

export function useFetchLeetcodeStats(defaultStats: LeetcodeStats) {
  const [stats, setStats] = React.useState<LeetcodeStats>(defaultStats)

  React.useEffect(() => {
    const service = new LeetcodeService(stats)
    service.request().then(setStats)
    console.log('render')
    // (async () => {
    //   const data: LeetcodeStats = await service.request()
    //   setStats(data)
    // })()
  }, [])

  return stats
}
