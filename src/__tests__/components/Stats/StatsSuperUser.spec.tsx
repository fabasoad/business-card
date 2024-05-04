import '@testing-library/jest-dom'
import * as React from 'react'
import StatsSuperUser from '../../../components/Stats/StatsSuperUser'
import { render } from '@testing-library/react'
import { testStatsSuperUser } from './TestUtils'
import {randomNumber} from "../../TestUtils";

test('should render StatsSuperUser correctly', () => {
  const expectedReputation: number = randomNumber(1, 100)
  const { container } = render(
    <StatsSuperUser defaultSuperUserReputation={expectedReputation} />
  )
  testStatsSuperUser(
    container.querySelector('div.stats-item'),
    expectedReputation
  )
})
