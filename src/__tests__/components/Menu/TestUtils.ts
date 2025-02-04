import { Locale } from '../../../scripts/i18n/types'
import { fireEvent } from '@testing-library/react'

export function testLocaleDropDown(div: HTMLDivElement, locale: Locale) {
  expect(div).toHaveClass('dropdown')
  const button = div.querySelector('button')
  expect(button).toHaveClass('nav-link')
  expect(button).toHaveTextContent(`languages.codes.${locale.code}`)
  expect(button.querySelector('i.locale-icon')).toBeInTheDocument()
}

export function testMenuItemRendered(a: HTMLAnchorElement, name: string) {
  expect(a).toHaveClass('nav-link')
  expect(a).toHaveAttribute('href', `#${name}`)
  expect(a).toHaveTextContent(`${name}.title`)
}

export function testMenuItemActive(
  a: HTMLAnchorElement,
  setActiveNavLinkMock: jest.Mock<void, [actual: string]>) {
  fireEvent(
    a,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true
    })
  )
  expect(setActiveNavLinkMock).toBeCalledTimes(1)
}

export function testMenuMain(div: HTMLDivElement) {
  const expected = [
    'about-me',
    'skills',
    'experience',
    'education',
    'resume',
    'badges',
    'contacts'
  ]
  expect(div).toHaveClass('affix-top')
  const nav = div.querySelector('nav')
  expect(nav).toHaveClass('navbar')
  expect(nav).toHaveClass('navbar-custom')
  const a = nav.querySelector('a.navbar-brand')
  expect(a).toHaveAttribute('href', '#header')
  expect(a).toHaveTextContent('author.full-name')
  const button = nav.querySelector('button.navbar-dark')
  expect(button).toHaveAttribute('aria-controls', 'basic-navbar-nav')
  expect(button).toHaveClass('collapsed')
  const navbarCollapse = nav.querySelector('div#basic-navbar-nav')
  expect(navbarCollapse).toHaveClass('navbar-collapse')
  const navbarNav = navbarCollapse.querySelector('div.navbar-nav')
  expect(navbarNav).toBeInTheDocument()
  const navLinkElements = navbarNav.querySelectorAll('a.nav-link')
  expect(navLinkElements).toHaveLength(7)
  for (const navLink of navLinkElements) {
    const actual = navLink.getAttribute('href')
    const ind = expected.findIndex((v: string): boolean => `#${v}` === actual)
    expect(ind).toBeGreaterThanOrEqual(0)
    testMenuItemRendered(navLink as HTMLAnchorElement, expected[ind])
    expected.splice(ind, 1)
  }
  expect(expected).toHaveLength(0)
}
