import * as React from 'react'
import type { StackExchangeData } from '../../scripts/services/StackExchangeService'
import { SuperUserService } from '../../scripts/services/SuperUserService'
import StatsStackExchange from './StatsStackExchange'

export default function StatsSuperUser({ reputation = 101, answerCount = 0 }: StackExchangeData) {
  return (
    <StatsStackExchange
      factory={() => new SuperUserService({ reputation, answerCount })}
      techName="superuser"
      url="https://superuser.com/users/1123723/fabasoad"
      icon="➕"
    />
  )
}
