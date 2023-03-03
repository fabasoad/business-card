import '@testing-library/jest-dom'
import * as React from 'react'
import EducationItem from '../../../components/Education/EducationItem'
import SupportedLocales from '../../../scripts/i18n/SupportedLocales'
import { render } from '@testing-library/react'
import { testEducationItem } from './TestUtils'

describe('EducationItem', () => {
  for (const locale of SupportedLocales._items) {
    test(`[${locale.code}] should render EducationItem correctly`, () => {
      const {container} = render(
        <EducationItem
          from={2019}
          to={2020}
          title="test-title"
        />
      )
      testEducationItem(container, 2019, 2020, 'test-title')
    })
  }
})
