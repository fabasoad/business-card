import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import * as React from 'react'
import StatsSuperUser from '../../../components/Stats/StatsSuperUser'
import { testStatsSuperUser } from './TestUtils'

test('should render StatsSuperUser correctly', () => {
  const { container } = render(<StatsSuperUser autoload={false} />)
  testStatsSuperUser(container.querySelector('div.stats-item'))
})
