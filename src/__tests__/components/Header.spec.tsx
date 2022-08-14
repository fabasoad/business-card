/// <reference types="jest" />
import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '../../components/Header'
import { useTranslation } from '../__mocks__/react-i18next'

let tMock

beforeAll(() => {
  tMock = useTranslation().t
})

test('should render Header correctly', () => {
  const { container } = render(<Header />)
  expect(container.firstChild).toMatchSnapshot()
  expect(tMock).toHaveBeenCalledTimes(3)
  new Array<string>(
    'business-card-header-occupation',
    'business-card-header-about-me',
    'business-card-header-portfolio'
  ).forEach((n: string, i: number) => expect(tMock).toHaveBeenNthCalledWith(i + 1, n))
  expect(screen.queryByText('business-card-header-portfolio')).not.toBeNull()
})
