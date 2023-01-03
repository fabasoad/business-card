import { Locale } from '../../../store/locale/types'
import {fireEvent} from '@testing-library/react';

export function testLocaleDropDown(div: HTMLDivElement, locale: Locale) {
  expect(div).toHaveClass('dropdown')
  const button = div.querySelector('button')
  expect(button).toHaveClass('nav-link')
  expect(button.querySelector(`span.flag-icon.flag-icon-${locale.code}`))
  .not.toBeNull()
  expect(button.querySelector('span.locale-title')).toHaveTextContent(locale.title)
}

export function testMenuItemRendered(a: HTMLAnchorElement, name: string) {
  expect(a).toHaveClass('nav-link')
  expect(a).toHaveAttribute('href', `#${name}`)
  expect(a).toHaveTextContent(`business-card-menu-${name}`)
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
