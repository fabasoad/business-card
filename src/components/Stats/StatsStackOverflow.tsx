import * as React from 'react'

import StackOverflowService from './StackOverflowService';
import StatsCommon from './StatsCommon';

export default function StatsStackOverflow() {
  const [reputation, setReputation] = React.useState<number>(0)
  StackOverflowService.getInstance().getReputation().then(setReputation)
  return (
    <StatsCommon techName="stackoverflow" url="https://stackoverflow.com/users/470214/fabasoad">
      ➕️ {reputation}
    </StatsCommon>
  )
}
