import * as React from 'react'
import StatsMainContext from '../../contexts/StatsMainContext'
import { StackExchangeData } from '../../scripts/services/StackExchangeService'
import { SuperUserService } from '../../scripts/services/SuperUserService'
import StatsCommon from './StatsCommon'

export default function StatsSuperUser() {
  const { superUser } = React.useContext(StatsMainContext)
  const [stats, setStats] =
    React.useState<StackExchangeData>(superUser)
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
