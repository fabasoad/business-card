import '@testing-library/jest-dom'
import * as React from 'react'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'

import MenuMain from '../../../components/Menu/MenuMain'
import SupportedLocales from '../../../scripts/SupportedLocales'
import { testMenuItemRendered } from './TestUtils'

const mockStore = configureMockStore()

describe('MenuMain', () => {
  const fixture: string[] = []

  function resetFixture() {
    fixture.length = 0
    fixture.push('about')
    fixture.push('skills')
    fixture.push('experience')
    fixture.push('education')
    fixture.push('portfolio')
    fixture.push('resume')
    fixture.push('badges')
    fixture.push('contact')
  }

  beforeEach(resetFixture)

  afterEach(resetFixture)

  for (const locale of SupportedLocales._items) {
    test(`[${locale.code}] should render MenuMain correctly`, () => {
      const store = mockStore({ locale })
      const {container} = render(
        <Provider store={store}>
          <MenuMain/>
        </Provider>
      )
      const div = container.querySelector('div#nav')
      expect(div).toHaveClass('affix-top')
      const nav = div.querySelector('nav')
      expect(nav).toHaveClass('navbar')
      expect(nav).toHaveClass('navbar-custom')
      const a = nav.querySelector('a.navbar-brand')
      expect(a).toHaveAttribute('href', '#header')
      expect(a).toHaveTextContent('business-card-author-name')
      const button = nav.querySelector('button.navbar-dark')
      expect(button).toHaveAttribute('aria-controls', 'basic-navbar-nav')
      expect(button).toHaveClass('collapsed')
      const navbarCollapse = nav.querySelector('div#basic-navbar-nav')
      expect(navbarCollapse).toHaveClass('navbar-collapse')
      const navbarNav = navbarCollapse.querySelector('div.navbar-nav')
      expect(navbarNav).not.toBeNull()
      const navLinkElements = navbarNav.querySelectorAll('a.nav-link')
      expect(navLinkElements).toHaveLength(8)
      for (const navLink of navLinkElements) {
        const actual = navLink.getAttribute('href')
        const ind = fixture.findIndex((v: string): boolean => `#${v}` === actual)
        expect(ind).toBeGreaterThanOrEqual(0)
        testMenuItemRendered(navLink as HTMLAnchorElement, fixture[ind])
        fixture.splice(ind, 1)
      }
      expect(fixture).toHaveLength(0)
    })
  }
})
