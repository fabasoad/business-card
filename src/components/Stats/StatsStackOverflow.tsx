import * as React from 'react'
import {
  StackOverflowService,
  StackOverflowData,
  stackOverflowDataDefault
} from '../../scripts/services/StackOverflowService'
import StatsCommon from './StatsCommon'

export type StatsStackOverflowProps = {
  defaultStackOverflowReputation?: number
}

export default function StatsStackOverflow({ defaultStackOverflowReputation = 0 }: StatsStackOverflowProps) {
  const [reputation, setReputation] =
    React.useState<number>(defaultStackOverflowReputation)
  React.useEffect(() => {
    const data: StackOverflowData = stackOverflowDataDefault
    data.stackOverflow.reputation = reputation
    const stackOverflowService = new StackOverflowService(data);
    (async () => {
      const { stackOverflow }: StackOverflowData = await stackOverflowService.request()
      setReputation(stackOverflow.reputation)
    })()
  }, [reputation])
  return (
    <StatsCommon techName="stackoverflow" url="https://stackoverflow.com/users/470214/fabasoad">
      🏆️ {reputation}
    </StatsCommon>
  )
}
