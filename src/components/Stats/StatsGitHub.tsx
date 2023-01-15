import * as React from 'react'

import GitHubService from '../../scripts/services/GitHubService'
import StatsCommon from './StatsCommon'

export interface StatsGitHubProps {
  autoload?: boolean
}

const StatsGitHub: React.FC<React.PropsWithChildren<StatsGitHubProps>> =
  ({ autoload }) => {
    const [stars, setStars] = React.useState<number>(0)
    if (autoload) {
      new GitHubService().request().then(setStars)
    }
    return (
      <StatsCommon techName="gitHub" url="https://github.com/fabasoad">
        ⭐️ {stars}
      </StatsCommon>
    )
  }

StatsGitHub.defaultProps = {
  autoload: true
}

export default StatsGitHub
