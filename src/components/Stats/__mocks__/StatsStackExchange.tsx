import * as React from 'react'
import type RemoteService from '../../../scripts/services/RemoteService'
import type {
  StackExchangeData
} from '../../../scripts/services/StackExchangeService'
import type { StatsStackExchangeProps } from '../StatsStackExchange'

export default function StatsStackExchange<T extends RemoteService<StackExchangeData>>({
  factory, techName, url, icon
}: StatsStackExchangeProps<T>) {
  return (
    <div data-testid="StatsStackExchange">
      <div data-testid="factory">{factory().constructor.name}</div>
      <div data-testid="techName">{techName}</div>
      <div data-testid="url">{url}</div>
      <div data-testid="icon">{icon}</div>
    </div>
  )
}
