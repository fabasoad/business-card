import * as React from 'react'
import { GitHubService } from '../../scripts/services/GitHubService'
import LoadingSpinner from '../LoadingSpinner'
import { useFetchStats } from './hooks'
import StatsCommon from './StatsCommon'

export type StatsGitHubProps = {
  starsAmount?: number
}

export default function StatsGitHub({ starsAmount = 286 }: StatsGitHubProps) {
  const { data, isLoading } = useFetchStats<GitHubService, number>(
    () => new GitHubService(starsAmount)
  )
  if (isLoading) {
    return <LoadingSpinner />
  }
  return (
    <StatsCommon techName="gitHub" url="https://github.com/fabasoad">
      ⭐️ {data}
    </StatsCommon>
  )
}
