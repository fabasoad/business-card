import * as React from 'react'
import remoteService, { StackOverflowData } from '../../scripts/services/StackOverflowService'
import StatsCommon from './StatsCommon'

export default function StatsSuperUser() {
  const [reputation, setReputation] = React.useState<number>(0)
  React.useEffect(() => {
    remoteService.request().then(({
      superUser
    }: StackOverflowData) => setReputation(superUser.reputation))
  })
  return (
    <StatsCommon techName="superuser" url="https://superuser.com/users/1123723/fabasoad">
      ➕ {reputation}
    </StatsCommon>
  )
}
