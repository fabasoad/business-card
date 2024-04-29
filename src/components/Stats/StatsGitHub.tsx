import * as React from 'react'
import remoteService from '../../scripts/services/GitHubService'
import type { AutoloadProps } from '../Controls/AutoloadProps'
import StatsCommon from './StatsCommon'

export default function StatsGitHub({ autoload }: AutoloadProps) {
  const [stars, setStars] = React.useState<number>(0)
  React.useEffect(() => {
    if (autoload) {
      remoteService.request().then(setStars)
    }
  })
  return (
    <StatsCommon techName="gitHub" url="https://github.com/fabasoad">
      ⭐️ {stars}
    </StatsCommon>
  )
}

StatsGitHub.defaultProps = {
  autoload: true
}
