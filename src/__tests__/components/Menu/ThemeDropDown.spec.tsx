import '@testing-library/jest-dom'
import * as React from 'react'
import ThemeDropDown from '../../../components/Menu/ThemeDropDown'
import { render } from '@testing-library/react'
import * as hooks from 'use-local-storage'

describe('ThemeDropDown', () => {
  let windowSpy: jest.SpyInstance

  beforeAll(() => {
    jest.spyOn(hooks, 'default').mockImplementation(
      (k: string, v: string) => [v, jest.fn()]
    )
  })

  beforeEach(() => {
    windowSpy = jest.spyOn(window, "window", "get")
  })

  afterEach(() => {
    windowSpy.mockRestore()
  })

  test.each(
    ['dark', 'light']
  )('should render ThemeDropDown correctly when theme is %s', (theme: string) => {
    windowSpy.mockImplementation(() => ({
      matchMedia: (q: string) => ({ matches: q === `(prefers-color-scheme: ${theme})` })
    }))
    const { container } = render(<ThemeDropDown />)
    const div = container.querySelector('div.dropdown')
    const toggle = div.querySelector('button.btn.nav-link.dropdown-toggle')
    expect(toggle).toHaveTextContent(`themes.${theme}`)
    expect(
      toggle.querySelector('i.fa.fa-solid.fa-circle-half-stroke')
    ).toBeInTheDocument()
  })
})
