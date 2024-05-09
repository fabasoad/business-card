import * as React from 'react'
import {
  StackExchangeData,
  StackExchangeService
} from '../../scripts/services/StackExchangeService'
import StatsCommon from './StatsCommon'

type StatsStackExchangeProps = {
  data: StackExchangeData,
  service: StackExchangeService,
  techName: string,
  url: string,
  icon: string
}

export default function StatsStackExchange({
  data, service, techName, url, icon
}: StatsStackExchangeProps) {
  const [stats, setStats] =
    React.useState<StackExchangeData>(data)
  React.useEffect(() => {
    (async () => {
      const data: StackExchangeData = await service.request()
      setStats(data)
    })()
  }, [])
  return (
    <StatsCommon techName={techName} url={url}>
      {icon} {stats.reputation}
    </StatsCommon>
  )
}
