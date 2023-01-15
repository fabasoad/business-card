import * as React from 'react'

import StackOverflowService from '../../scripts/services/StackOverflowService'
import StatsCommon from './StatsCommon'

export default function StatsStackOverflow() {
  const [reputation, setReputation] = React.useState<number>(0)
  new StackOverflowService().request().then(setReputation)
  return (
    <StatsCommon techName="stackoverflow" url="https://stackoverflow.com/users/470214/fabasoad">
      ➕️ {reputation}
    </StatsCommon>
  )
}
