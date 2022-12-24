import '@testing-library/jest-dom'
import * as React from 'react'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'

import EducationItem from '../../../components/Education/EducationItem'
import { testEducationItem } from './TestUtils'

const mockStore = configureMockStore()
const store = mockStore({})

test('should render EducationItem correctly', () => {
  const { container } = render(
    <Provider store={store}>
      <EducationItem
        from={2019}
        to={2020}
        title="test-title"
      />
    </Provider>
  )
  testEducationItem(container, 2019, 2020, 'test-title')
})
