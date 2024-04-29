import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import * as React from 'react'

import LanguagesMain from '../../../components/Languages/LanguagesMain'
import { testLanguageMain } from './TestUtils'

test('should render LanguageMain correctly', () => {
  const { container } = render(<LanguagesMain />)
  testLanguageMain(container.querySelector('div#languages'))
})
