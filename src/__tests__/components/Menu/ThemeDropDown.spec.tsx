import '@testing-library/jest-dom'
import * as React from 'react'
import ThemeDropDown from '../../../components/Menu/ThemeDropDown'
import { render } from '@testing-library/react'
import * as ThemeContext from '../../../components/Contexts/ThemeContext'

describe('ThemeDropDown', () => {
  let useThemeContextSpy: jest.SpyInstance

  beforeEach(() => {
    useThemeContextSpy = jest.spyOn(ThemeContext, 'useThemeContext')
  })

  afterEach(() => {
    useThemeContextSpy.mockRestore()
  })

  test.each(
    ['dark', 'light']
  )('should render ThemeDropDown correctly when theme is %s', (theme: string) => {
    useThemeContextSpy.mockImplementation(() => ({ theme }))
    const { container } = render(<ThemeDropDown />)
    const div = container.querySelector('div.dropdown')
    const toggle = div.querySelector('button.btn.nav-link.dropdown-toggle')
    expect(toggle).toHaveTextContent(`themes.${theme}`)
    expect(
      toggle.querySelector('i.fa.fa-solid.fa-circle-half-stroke')
    ).toBeInTheDocument()
  })
})
