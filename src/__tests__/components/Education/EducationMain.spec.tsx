import '@testing-library/jest-dom'
import * as React from 'react'
import EducationMain from '../../../components/Education/EducationMain'
import SupportedLocales from '../../../scripts/i18n/SupportedLocales'
import { render } from '@testing-library/react'

describe('EducationMain', () => {
  test('should render EducationMain correctly', () => {
    const { container } = render(<EducationMain/>)
    // TODO
    // testEducationMain(container.querySelector('div#education'), SupportedLocales.default)
  })
})
