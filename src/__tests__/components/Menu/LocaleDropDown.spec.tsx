import '@testing-library/jest-dom'
import * as React from 'react'
import LocaleDropDown from '../../../components/Menu/LocaleDropDown'
import SupportedLocales from '../../../scripts/i18n/SupportedLocales'
import { render } from '@testing-library/react'
import { testLocaleDropDown } from './TestUtils'

describe('LocaleDropDown', () => {
  test('should render LocaleDropDown correctly', () => {
    const { container } = render(<LocaleDropDown />)
    testLocaleDropDown(container.querySelector('div.dropdown'), SupportedLocales.default)
  })
})
