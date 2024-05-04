import * as React from 'react'
import StatsMainContext from '../../contexts/StatsMainContext'
import {
  StackExchangeService,
  StackExchangeData
} from '../../scripts/services/StackExchangeService'
import StatsCommon from './StatsCommon'

export default function StatsSuperUser() {
  const { stackExchange } = React.useContext(StatsMainContext)
  const [stats, setStats] =
    React.useState<StackExchangeData>(stackExchange)
  React.useEffect(() => {
    const stackOverflowService = new StackExchangeService(stats);
    (async () => {
      const data: StackExchangeData = await stackOverflowService.request()
      setStats(data)
    })()
  }, [stats])
  return (
    <StatsCommon techName="superuser" url="https://superuser.com/users/1123723/fabasoad">
      ➕ {stats.superUser.reputation}
    </StatsCommon>
  )
}
