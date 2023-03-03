import '@testing-library/jest-dom'
import * as React from 'react'
import ExperienceMain from '../../../components/Experience/ExperienceMain'
import { render } from '@testing-library/react'
import { testExperienceMain } from './TestUtils'
import SupportedLocales from '../../../scripts/i18n/SupportedLocales';

describe('ExperienceMain', () => {
  test('should render ExperienceMain correctly', () => {
    const { container } = render(<ExperienceMain />)
    testExperienceMain(container.querySelector('div#experience'), SupportedLocales.default)
  })
})
