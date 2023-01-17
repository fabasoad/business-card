import '@testing-library/jest-dom'
import * as React from 'react'
import configureMockStore from 'redux-mock-store'
import { render } from '@testing-library/react'

import { App } from '../../components/App'
import SupportedLocales from '../../scripts/SupportedLocales'
import { Provider } from 'react-redux'
import {
  testBackToTopButton,
  testBadges,
  testHeader,
  testResume,
  testSkills
} from './TestUtils'
import { testMenuMain } from './Menu/TestUtils'
import { testAboutMain } from './About/TestUtils'
import { testStatsMain } from './Stats/TestUtils'
import { testExperienceMain } from './Experience/TestUtils'
import { testEducationMain } from './Education/TestUtils'
import { testCertificatesMain } from './Certificates/TestUtils'
import { testLanguageMain } from './Languages/TestUtils'
import { testPortfolioMain } from './Portfolio/TestUtils'
import { testFooterMain } from './Footer/TestUtils'

const mockStore = configureMockStore()

describe('App', () => {
  for (const locale of SupportedLocales._items) {
    test(`[${locale.code}] should render App correctly`, () => {
      const store = mockStore({ locale })
      const { container } = render(
        <Provider store={store}>
          <App locale={locale} autoload={false} />
        </Provider>
      )
      const div = container.querySelector('div.font-regular')
      expect(div).toHaveClass(`font-${locale.code === 'jp' ? '' : 'non-'}jp`)
      testBackToTopButton(div.querySelector('a.back-to-top'))
      testHeader(div.querySelector('header#header'))
      testMenuMain(div.querySelector('div#nav'))
      testAboutMain(div.querySelector('div#about'))
      testStatsMain(div.querySelector('div#stats'))
      testResume(div.querySelector('div#resume'))
      testSkills(div.querySelector('div#skills'))
      testExperienceMain(div.querySelector('div#experience'), locale)
      testEducationMain(div.querySelector('div#education'), locale)
      testCertificatesMain(div.querySelector('div#certificates'), locale)
      testLanguageMain(div.querySelector('div#languages'))
      testPortfolioMain(div.querySelector('div#portfolio'))
      testBadges(div.querySelector('div#badges'))
      testFooterMain(div.querySelector('div.footer'))
    })
  }
})
