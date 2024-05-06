import * as React from 'react'
import { StackExchangeData } from '../../scripts/services/StackExchangeService'
import { StackOverflowService } from '../../scripts/services/StackOverflowService'
import StatsCommon from './StatsCommon'

type StatsStackOverflowProps = {
  reputation?: number
}

export default function StatsStackOverflow({ reputation = 1783 }: StatsStackOverflowProps) {
  const [stats, setStats] =
    React.useState<StackExchangeData>({ reputation, answerCount: 0 })
  React.useEffect(() => {
    const service = new StackOverflowService(stats);
    (async () => {
      const data: StackExchangeData = await service.request()
      setStats(data)
    })()
  }, [])
  return (
    <StatsCommon techName="stackoverflow" url="https://stackoverflow.com/users/470214/fabasoad">
      🏆️ {stats.reputation}
    </StatsCommon>
  )
}
