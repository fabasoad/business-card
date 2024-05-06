import * as React from 'react'
import { StackExchangeData } from '../../scripts/services/StackExchangeService'
import { SuperUserService } from '../../scripts/services/SuperUserService'
import StatsCommon from './StatsCommon'

type StatsSuperUserProps = {
  reputation?: number
}

export default function StatsSuperUser({ reputation = 101 }: StatsSuperUserProps) {
  const [stats, setStats] =
    React.useState<StackExchangeData>({ reputation, answerCount: 0 })
  React.useEffect(() => {
    const service = new SuperUserService(stats);
    (async () => {
      const data: StackExchangeData = await service.request()
      setStats(data)
    })()
  }, [])
  return (
    <StatsCommon techName="superuser" url="https://superuser.com/users/1123723/fabasoad">
      ➕ {stats.reputation}
    </StatsCommon>
  )
}
