import '@testing-library/jest-dom'
import * as React from 'react'
import EducationItem from '../../../components/Education/EducationItem'
import { render } from '@testing-library/react'
import { testEducationItem } from './TestUtils'

describe('EducationItem', () => {
  test('should render EducationItem correctly', () => {
    const { container} = render(
      <EducationItem
        from={2019}
        to={2020}
        title="test-title"
      />
    )
    testEducationItem(container, 2019, 2020, 'test-title')
  })
})
