import '@testing-library/jest-dom'
import * as React from 'react'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'

import EducationMain from '../../../components/Education/EducationMain'
import { testEducationItem } from './scripts'

const mockStore = configureMockStore()
const store = mockStore({})

test('should render EducationItem correctly', () => {
  render(
    <Provider store={store}>
      <EducationMain />
    </Provider>
  )
  expect(screen.getByRole('heading', { level: 2 }))
    .toHaveTextContent('business-card-education-title')
  const listItem = screen.getByRole('listitem')
  testEducationItem(listItem, 2005, 2010, 'business-card-education-university-master')
})
