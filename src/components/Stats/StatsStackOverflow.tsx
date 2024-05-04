import * as React from 'react'
import StatsMainContext from '../../contexts/StatsMainContext'
import { StackExchangeData } from '../../scripts/services/StackExchangeService'
import { StackOverflowService } from '../../scripts/services/StackOverflowService'
import StatsCommon from './StatsCommon'

export default function StatsStackOverflow() {
  const { stackOverflow } = React.useContext(StatsMainContext)
  const [stats, setStats] =
    React.useState<StackExchangeData>(stackOverflow)
  React.useEffect(() => {
    const service = new StackOverflowService(stats);
    (async () => {
      const data: StackExchangeData = await service.request()
      setStats(data)
    })()
  }, [])
  return (
    <StatsCommon techName="stackoverflow" url="https://stackoverflow.com/users/470214/fabasoad">
      🏆️ {stackOverflow.reputation}
    </StatsCommon>
  )
}
