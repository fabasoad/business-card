import * as React from 'react'
import type { StackExchangeData } from '../../scripts/services/StackExchangeService'
import { StackOverflowService } from '../../scripts/services/StackOverflowService'
import StatsStackExchange from './StatsStackExchange'

export default function StatsStackOverflow({ reputation = 1863, answerCount = 0 }: StackExchangeData) {
  return (
    <StatsStackExchange
      factory={() => new StackOverflowService({ reputation, answerCount })}
      techName="stackoverflow"
      url="https://stackoverflow.com/users/470214/fabasoad"
      icon="🏆"
    />
  )
}
