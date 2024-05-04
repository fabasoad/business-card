import * as React from 'react'
import {
  StackOverflowService,
  StackOverflowData,
  stackOverflowDataDefault
} from '../../scripts/services/StackOverflowService'
import StatsCommon from './StatsCommon'

export type StatsSuperUserProps = {
  defaultSuperUserReputation?: number
}

export default function StatsSuperUser({ defaultSuperUserReputation = 0 }: StatsSuperUserProps) {
  const [reputation, setReputation] =
    React.useState<number>(defaultSuperUserReputation)
  React.useEffect(() => {
    const data: StackOverflowData = stackOverflowDataDefault
    data.superUser.reputation = reputation
    const stackOverflowService = new StackOverflowService(data);
    (async () => {
      const { superUser }: StackOverflowData = await stackOverflowService.request()
      setReputation(superUser.reputation)
    })()
  }, [reputation])
  return (
    <StatsCommon techName="superuser" url="https://superuser.com/users/1123723/fabasoad">
      ➕ {reputation}
    </StatsCommon>
  )
}
