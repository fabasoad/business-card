import * as React from 'react'

import GitHubService from './GitHubService';
import StatsCommon from './StatsCommon';

export default function StatsGitHub() {
  const [stars, setStars] = React.useState<number>(0)
  GitHubService.getInstance().getTotalStarsAmount().then(setStars)
  return (
    <StatsCommon techName="gitHub" url="https://github.com/fabasoad">
      ⭐️ {stars}
    </StatsCommon>
  )
}
