import '@testing-library/jest-dom'
import * as React from 'react'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'

import LocaleDropDown from '../../../components/Menu/LocaleDropDown'
import SupportedLocales from '../../../scripts/SupportedLocales'

const mockStore = configureMockStore()

for (const locale of SupportedLocales._items) {
  test(`[${locale.code}] should render LocaleDropDown correctly`, () => {
    const store = mockStore({locale})
    const {container} = render(
      <Provider store={store}>
        <LocaleDropDown />
      </Provider>
    )
    const div = container.querySelector('div.dropdown')
    expect(div).not.toBeNull()
    const button = div.querySelector('button')
    expect(button).toHaveClass('nav-link')
    expect(button.querySelector(`span.flag-icon.flag-icon-${locale.code}`))
      .not.toBeNull()
    expect(button.querySelector('span.locale-title')).toHaveTextContent(locale.title)
  })
}
