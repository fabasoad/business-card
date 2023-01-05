import '@testing-library/jest-dom'
import * as React from 'react'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'

import MenuMain from '../../../components/Menu/MenuMain'
import SupportedLocales from '../../../scripts/SupportedLocales'
import { testMenuMain } from './TestUtils'

const mockStore = configureMockStore()

describe('MenuMain', () => {
  for (const locale of SupportedLocales._items) {
    test(`[${locale.code}] should render MenuMain correctly`, () => {
      const store = mockStore({ locale })
      const { container } = render(
        <Provider store={store}>
          <MenuMain/>
        </Provider>
      )
      testMenuMain(container.querySelector('div#nav'))
    })
  }
})
