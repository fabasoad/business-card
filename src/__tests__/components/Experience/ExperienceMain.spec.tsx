import '@testing-library/jest-dom'
import * as React from 'react'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'

import { testExperienceMain } from './TestUtils'
import ExperienceMain from '../../../components/Experience/ExperienceMain'
import SupportedLocales from '../../../scripts/SupportedLocales'

const mockStore = configureMockStore()

describe('ExperienceMain', () => {
  for (const locale of SupportedLocales._items) {
    test(`[${locale.code}] should render ExperienceMain correctly`, () => {
      const store = mockStore({ locale })
      const { container } = render(
        <Provider store={store}>
          <ExperienceMain />
        </Provider>
      )
      testExperienceMain(container.querySelector('div#experience'), locale)
    })
  }
})
