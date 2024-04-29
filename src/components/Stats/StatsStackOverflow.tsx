import * as React from 'react'
import remoteService, {
  type StackOverflowData
} from '../../scripts/services/StackOverflowService'
import type { AutoloadProps } from '../Controls/AutoloadProps'
import StatsCommon from './StatsCommon'

export default function StatsStackOverflow({ autoload }: AutoloadProps) {
  const [reputation, setReputation] = React.useState<number>(0)
  React.useEffect(() => {
    if (autoload) {
      remoteService
        .request()
        .then(({ stackOverflow }: StackOverflowData) =>
          setReputation(stackOverflow.reputation)
        )
    }
  })
  return (
    <StatsCommon
      techName="stackoverflow"
      url="https://stackoverflow.com/users/470214/fabasoad"
    >
      🏆️ {reputation}
    </StatsCommon>
  )
}

StatsStackOverflow.defaultProps = {
  autoload: true
}
