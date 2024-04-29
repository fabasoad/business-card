import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import * as React from 'react'
import ExperienceMain from '../../../components/Experience/ExperienceMain'
import SupportedLocales from '../../../scripts/i18n/SupportedLocales'
import { testExperienceMain } from './TestUtils'

describe('ExperienceMain', () => {
  test('should render ExperienceMain correctly', () => {
    const { container } = render(<ExperienceMain />)
    testExperienceMain(
      container.querySelector('div#experience'),
      SupportedLocales.default
    )
  })
})
