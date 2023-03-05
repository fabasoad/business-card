import * as React from 'react'
import remoteService, { StackOverflowData } from '../../scripts/services/StackOverflowService'
import StatsCommon from './StatsCommon'
import { AutoloadProps } from '../Controls/AutoloadProps'

export default function StatsSuperUser({ autoload }: AutoloadProps) {
  const [reputation, setReputation] = React.useState<number>(0)
  React.useEffect(() => {
    if (autoload) {
      remoteService.request().then(({
        superUser
      }: StackOverflowData) => setReputation(superUser.reputation))
    }
  })
  return (
    <StatsCommon techName="superuser" url="https://superuser.com/users/1123723/fabasoad">
      ➕ {reputation}
    </StatsCommon>
  )
}

StatsSuperUser.defaultProps = {
  autoload: true
}
