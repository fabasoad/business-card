import '@testing-library/jest-dom'
import * as React from 'react'
import EducationMain from '../../../components/Education/EducationMain'
import SupportedLocales from '../../../scripts/i18n/SupportedLocales'
import { render } from '@testing-library/react'
import { testEducationMain } from './TestUtils'

describe('EducationMain', () => {
  test('should render EducationMain correctly', () => {
    const { container } = render(<EducationMain/>)
    testEducationMain(container.querySelector('div#education'), SupportedLocales.default)
  })
})
