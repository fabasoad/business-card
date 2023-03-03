import '@testing-library/jest-dom'
import * as React from 'react'
import JobResponsibilities from '../../../components/Experience/JobResponsibilities'
import { render } from '@testing-library/react'
import { testJobResponsibilities } from './TestUtils'

test('should render JobResponsibilities correctly', () => {
  const prefix = 'testing-prefix'
  const { container } = render(<JobResponsibilities i18nKeyPrefix={prefix} />)
  testJobResponsibilities(container.querySelector('div.job-responsibilities'))
})
