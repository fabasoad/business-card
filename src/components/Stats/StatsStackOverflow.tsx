import * as React from 'react'
import remoteService from '../../scripts/services/StackOverflowService'
import StatsCommon from './StatsCommon'
import { AutoloadProps } from '../Controls/AutoloadProps'

export default function StatsStackOverflow({ autoload }: AutoloadProps) {
  const [reputation, setReputation] = React.useState<number>(0)
  React.useEffect(() => {
    if (autoload) {
      remoteService.request().then(setReputation)
    }
  })
  return (
    <StatsCommon techName="stackoverflow" url="https://stackoverflow.com/users/470214/fabasoad">
      ➕️ {reputation}
    </StatsCommon>
  )
}

StatsStackOverflow.defaultProps = {
  autoload: true
}
