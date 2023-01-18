import * as React from 'react'
import configureMockStore from 'redux-mock-store'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import App404 from '../../components/App404'
import SupportedLocales from '../../scripts/SupportedLocales'
import { Provider } from 'react-redux'

const mockStore = configureMockStore()

describe('App404', () => {
  beforeEach(() => jest.useFakeTimers())

  for (const locale of SupportedLocales._items) {
    test(`[${locale.code}] should render App404 correctly`, () => {
      const store = mockStore({ locale })
      const { container } = render(
        <Provider store={store}>
          <App404 />
        </Provider>
      )
      const div = container.querySelector('div.font-regular')
      expect(div).toHaveClass(`font-${locale.code === 'jp' ? '' : 'non-'}jp`)
      const pElements = div.querySelectorAll('p')
      expect(pElements.item(0)).toHaveTextContent('business-card-404-text-1')
      expect(pElements.item(1)).toHaveTextContent('business-card-404-text-2')
      let spanElements = pElements.item(1).querySelectorAll('span')
      expect(spanElements.item(0)).toHaveClass('blinker-prefix')
      expect(spanElements.item(1)).toHaveAttribute('style', 'display: none;')
      expect(spanElements.item(1)).toHaveTextContent('.')
      expect(spanElements.item(2)).toHaveClass('blinker')
      expect(spanElements.item(2)).toHaveTextContent('_')
      expect(pElements.item(2)).toHaveAttribute('style', 'display: none;')
      expect(pElements.item(2)).toHaveTextContent('business-card-404-text-3')
      spanElements = pElements.item(2).querySelectorAll('span')
      expect(spanElements).toHaveLength(2)
      expect(spanElements.item(0)).toHaveTextContent('3')
      expect(spanElements.item(1)).toHaveClass('blinker')
      expect(spanElements.item(1)).toHaveTextContent('_')
    })

    test(`[${locale.code}] redirecting should work correctly`, () => {
      const redirectUrl = '/test'
      const store = mockStore({ locale })
      render(
        <Provider store={store}>
          <App404 redirectUrl={redirectUrl} />
        </Provider>
      )
      // TODO: Implement this test
    })
  }

  afterEach(() => jest.clearAllTimers())
})
