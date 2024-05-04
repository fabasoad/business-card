import * as React from 'react'
import remoteService from '../../scripts/services/GitHubService'
import StatsCommon from './StatsCommon'

export default function StatsGitHub() {
  const [stars, setStars] = React.useState<number>(0)
  React.useEffect(() => {
    remoteService.request().then(setStars)
  })
  return (
    <StatsCommon techName="gitHub" url="https://github.com/fabasoad">
      ⭐️ {stars}
    </StatsCommon>
  )
}
