import * as React from 'react'

import StackOverflowService from '../../scripts/services/StackOverflowService'
import StatsCommon from './StatsCommon'

export interface StatsStackOverflowProps {
  autoload?: boolean
}

const StatsStackOverflow: React.FC<React.PropsWithChildren<StatsStackOverflowProps>> =
  ({ autoload }) => {
    const [reputation, setReputation] = React.useState<number>(0)
    React.useEffect(() => {
      if (autoload) {
        new StackOverflowService().request().then(setReputation)
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

export default StatsStackOverflow
