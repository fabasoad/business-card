import * as React from 'react'
import StatsMainContext from '../../contexts/StatsMainContext'
import { GitHubService } from '../../scripts/services/GitHubService'
import StatsCommon from './StatsCommon'

export default function StatsGitHub() {
  const { github } = React.useContext(StatsMainContext)
  const [stars, setStars] = React.useState<number>(github.starsAmount)
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
