import * as React from 'react'
import type {
  StackExchangeData
} from '../../../scripts/services/StackExchangeService'

export default function StatsStackOverflow({
  reputation = 10, answerCount = 1
}: StackExchangeData) {
  return (
    <div data-testid="StatsStackOverflow">
      <div data-testid="reputation">{reputation}</div>
      <div data-testid="answerCount">{answerCount}</div>
    </div>
  )
}
