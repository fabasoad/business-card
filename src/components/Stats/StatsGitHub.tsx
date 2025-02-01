import * as React from 'react'
import { GitHubService } from '../../scripts/services/GitHubService'
import StatsCommon from './StatsCommon'

type StatsGitHubProps = {
  starsAmount?: number
}

export default function StatsGitHub({ starsAmount = 286 }: StatsGitHubProps) {
  const [stars, setStars] = React.useState<number>(starsAmount)
  React.useEffect(() => {
    const service = new GitHubService(stars);
    (async () => {
      const starsAmount = await service.request()
      setStars(starsAmount)
    })()
  }, [])
  return (
    <StatsCommon techName="gitHub" url="https://github.com/fabasoad">
      ⭐️ {stars}
    </StatsCommon>
  )
}
