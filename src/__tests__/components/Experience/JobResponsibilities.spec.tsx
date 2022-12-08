import '@testing-library/jest-dom'
import * as React from 'react'
import { render, screen } from '@testing-library/react'

import JobResponsibilities from '../../../components/Experience/JobResponsibilities'
import { useTranslation } from '../../__mocks__/react-i18next'

let i18nMock

beforeEach(() => {
  i18nMock = useTranslation().i18n
})

test('should render JobResponsibilities correctly', () => {
  const prefix = 'some-prefix'
  render(<JobResponsibilities i18nKeyPrefix={prefix} />)
  expect(screen.getByRole('heading', { level: 5 }))
    .toHaveTextContent('business-card-experience-responsibilities-title')
  const liElements = screen.getAllByRole('listitem')
  expect(liElements).toHaveLength(2)
  expect(liElements[0]).toHaveTextContent('some-prefix-1')
  expect(liElements[1]).toHaveTextContent('some-prefix-1-1')
})

afterEach(() => {
  jest.restoreAllMocks()
})
