/// <reference types="jest" />
import * as React from 'react'
import { render } from '@testing-library/react'
import JobPeriod from '../../../components/Experience/JobPeriod'

test.skip('should render JobPeriod correctly', () => {
  const { container } = render(<JobPeriod
    fromMonth={1}
    fromYear={2019}
    toMonth={4}
    toYear={2020}
  />)
  expect(container.firstChild).toMatchSnapshot()
})
