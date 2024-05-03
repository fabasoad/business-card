import * as React from 'react'
import remoteService, { StackOverflowData } from '../../scripts/services/StackOverflowService'
import StatsCommon from './StatsCommon'
import { AutoloadProps } from '../Controls/AutoloadProps'

export default function StatsStackOverflow({ autoload = true }: AutoloadProps) {
  const [reputation, setReputation] = React.useState<number>(0)
  React.useEffect(() => {
    if (autoload) {
      remoteService.request().then(({
        stackOverflow
      }: StackOverflowData) => setReputation(stackOverflow.reputation))
    }
  })
  return (
    <StatsCommon techName="stackoverflow" url="https://stackoverflow.com/users/470214/fabasoad">
      🏆️ {reputation}
    </StatsCommon>
  )
}
