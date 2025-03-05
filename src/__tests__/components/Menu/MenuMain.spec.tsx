import '@testing-library/jest-dom'
import * as React from 'react'
import MenuMain from '../../../components/Menu/MenuMain'
import { render } from '@testing-library/react'

jest.mock('../../../components/Menu/MenuItem')
jest.mock('../../../components/Menu/LocaleDropDown')
jest.mock('../../../components/Menu/ThemeDropDown')

describe('MenuMain', () => {
  test('should render MenuMain correctly', () => {
    const { container } = render(<MenuMain />)
    const div = container.querySelector('div#nav.affix-top')
    const nav = div.querySelector('nav.navbar.navbar-custom')
    expect(
      nav.querySelector('a.navbar-brand[href="#header"]')
    ).toHaveTextContent('author.full-name')
    expect(
      nav.querySelector('button.navbar-dark.collapsed[aria-controls="basic-navbar-nav"]')
    ).toBeInTheDocument()
    const navbarCollapse = nav.querySelector('div#basic-navbar-nav.navbar-collapse')
    expect(navbarCollapse).toBeInTheDocument()

    const expected = [
      'about-me',
      'skills',
      'experience',
      'education',
      'resume',
      'badges',
      'contacts'
    ]
    for (const name of expected) {
      expect(
        navbarCollapse.querySelector(`div.navbar-nav > div[data-testid="${name}"]`)
      ).toHaveTextContent('bound dispatchSetState')
    }
    expect(
      navbarCollapse.querySelector(
        'div.navbar-nav.me-2 > div[data-testid="LocaleDropDown"]'
      )
    ).toBeInTheDocument()
    expect(
      navbarCollapse.querySelector(
        'div.navbar-nav.me-2 > div[data-testid="ThemeDropDown"]'
      )
    ).toBeInTheDocument()
  })
})
