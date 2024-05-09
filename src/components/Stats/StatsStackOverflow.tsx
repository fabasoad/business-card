import * as React from 'react'
import { StackExchangeData } from '../../scripts/services/StackExchangeService'
import { StackOverflowService } from '../../scripts/services/StackOverflowService'
import StatsStackExchange from './StatsStackExchange'

export default function StatsStackOverflow({ reputation = 1783, answerCount = 0 }: StackExchangeData) {
  return (
    <StatsStackExchange
      data={{ reputation, answerCount }}
      service={new StackOverflowService({ reputation, answerCount })}
      techName="stackoverflow"
      url="https://stackoverflow.com/users/470214/fabasoad"
      icon="🏆"
    />
  )
}
