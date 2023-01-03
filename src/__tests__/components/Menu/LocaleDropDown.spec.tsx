import '@testing-library/jest-dom'
import * as React from 'react'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'

import LocaleDropDown from '../../../components/Menu/LocaleDropDown'
import SupportedLocales from '../../../scripts/SupportedLocales'
import { testLocaleDropDown } from './TestUtils'

const mockStore = configureMockStore()

for (const locale of SupportedLocales._items) {
  test(`[${locale.code}] should render LocaleDropDown correctly`, () => {
    const store = mockStore({locale})
    const {container} = render(
      <Provider store={store}>
        <LocaleDropDown />
      </Provider>
    )
    testLocaleDropDown(container.querySelector('div.dropdown'), locale)
  })
}
