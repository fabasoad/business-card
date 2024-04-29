import * as React from 'react'
import remoteService, {
  type StackOverflowData
} from '../../scripts/services/StackOverflowService'
import type { AutoloadProps } from '../Controls/AutoloadProps'
import StatsCommon from './StatsCommon'

export default function StatsSuperUser({ autoload }: AutoloadProps) {
  const [reputation, setReputation] = React.useState<number>(0)
  React.useEffect(() => {
    if (autoload) {
      remoteService
        .request()
        .then(({ superUser }: StackOverflowData) =>
          setReputation(superUser.reputation)
        )
    }
  })
  return (
    <StatsCommon
      techName="superuser"
      url="https://superuser.com/users/1123723/fabasoad"
    >
      ➕ {reputation}
    </StatsCommon>
  )
}

StatsSuperUser.defaultProps = {
  autoload: true
}
