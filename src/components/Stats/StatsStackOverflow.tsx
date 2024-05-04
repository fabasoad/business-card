import * as React from 'react'
import remoteService, { StackOverflowData } from '../../scripts/services/StackOverflowService'
import StatsCommon from './StatsCommon'

export default function StatsStackOverflow() {
  const [reputation, setReputation] = React.useState<number>(0)
  React.useEffect(() => {
    remoteService.request().then(({
      stackOverflow
    }: StackOverflowData) => setReputation(stackOverflow.reputation))
  })
  return (
    <StatsCommon techName="stackoverflow" url="https://stackoverflow.com/users/470214/fabasoad">
      🏆️ {reputation}
    </StatsCommon>
  )
}
