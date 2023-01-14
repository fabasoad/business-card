import '@testing-library/jest-dom'
import * as React from 'react'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'

import CertificatesMain from '../../../components/Certificates/CertificatesMain'
import SupportedLocales from '../../../scripts/SupportedLocales'
import { testCertificatesMain } from './TestUtils'

const mockStore = configureMockStore()

describe('CertificatesMain', () => {
  for (const locale of SupportedLocales._items) {
    test(`[${locale.code}] should render CertificatesMain correctly`, () => {
      const store = mockStore({ locale })
      const { container } = render(
        <Provider store={store}>
          <CertificatesMain/>
        </Provider>
      )
      testCertificatesMain(container.querySelector('div#certificates'), locale)
    })
  }
})
