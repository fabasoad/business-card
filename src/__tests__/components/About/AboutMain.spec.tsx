import * as React from 'react'
import configureMockStore from 'redux-mock-store'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import SupportedLocales from '../../../scripts/SupportedLocales'
import { AboutMain } from '../../../components/About/AboutMain'
import { testAboutMain } from './TestUtils'
import { Provider } from 'react-redux'

const mockStore = configureMockStore()

describe('AboutMain', () => {
  for (const locale of SupportedLocales._items) {
    test(`[${locale.code}] should render AboutMain correctly`, () => {
      const store = mockStore({ locale })
      const { container } = render(
        <Provider store={store}>
          <AboutMain locale={locale} />
        </Provider>
      )
      testAboutMain(container.querySelector('div#about'))
    })
  }
})
