import '@testing-library/jest-dom'
import * as React from 'react'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'

import EducationMain from '../../../components/Education/EducationMain'
import SupportedLocales from '../../../scripts/SupportedLocales'
import { testEducationMain} from './TestUtils'

const mockStore = configureMockStore()

describe('EducationMain', () => {
  for (const locale of SupportedLocales._items) {
    test(`[${locale.code}] should render EducationMain correctly`, () => {
      const store = mockStore({ locale })
      const { container } = render(
        <Provider store={store}>
          <EducationMain/>
        </Provider>
      )
      testEducationMain(container.querySelector('div#education'), locale)
    })
  }
})
