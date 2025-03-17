import * as React from 'react'
import { GitHubService } from '../../scripts/services/GitHubService'
import RemoteService from '../../scripts/services/RemoteService'
import {
  StackExchangeData,
  StackExchangeService
} from '../../scripts/services/StackExchangeService'
import LoadingSpinner from '../LoadingSpinner'
import { useFetchStats } from './hooks'
import StatsCommon from './StatsCommon'

type StatsStackExchangeProps<T extends RemoteService<StackExchangeData>> = {
  factory: () => T,
  techName: string,
  url: string,
  icon: string
}

export default function StatsStackExchange<T extends RemoteService<StackExchangeData>>({
  factory, techName, url, icon
}: StatsStackExchangeProps<T>) {
  const { data, isLoading } = useFetchStats<T, StackExchangeData>(factory)
  if (isLoading) {
    return <LoadingSpinner />
  }
  return (
    <StatsCommon techName={techName} url={url}>
      {icon} {data.reputation}
    </StatsCommon>
  )
}
