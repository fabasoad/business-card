import '@testing-library/jest-dom'
import * as React from 'react'
import LocaleDropDown from '../../../components/Menu/LocaleDropDown'
import SupportedLocales from '../../../scripts/i18n/SupportedLocales'
import { render } from '@testing-library/react'

describe('LocaleDropDown', () => {
  test('should render LocaleDropDown correctly', () => {
    const { container } = render(<LocaleDropDown />)
    const div = container.querySelector('div.dropdown')
    const toggle = div.querySelector('button.btn.nav-link.dropdown-toggle')
    expect(toggle).toHaveTextContent(`languages.codes.${SupportedLocales.default.code}`)
    expect(toggle.querySelector('i.fa.fa-globe')).toBeInTheDocument()
  })
})
