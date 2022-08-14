/// <reference types="jest" />
import * as React from 'react'
import {fireEvent, render, screen} from '@testing-library/react'
import MenuItem from '../../../components/Menu/MenuItem'
import { useTranslation } from '../../__mocks__/react-i18next'

let tMock;

beforeAll(() => {
  tMock = useTranslation().t
})

test('should render MenuItem correctly', () => {
  const name = 'test-menu-item'
  const { container } = render(<MenuItem
    name={name}
    setActiveNavLink={null}
  />)
  expect(container.firstChild).toMatchSnapshot()
  expect(tMock).toHaveBeenCalledTimes(1)
  expect(tMock).toHaveBeenCalledWith(`business-card-menu-${name}`)
})

test('should set active MenuItem correctly', () => {
  const name = 'test-menu-item'
  const setActiveNavLinkSpy = jest.fn()
  render(<MenuItem
    name={name}
    setActiveNavLink={setActiveNavLinkSpy}
  />)
  fireEvent.click(screen.getByText('business-card-menu-test-menu-item'))
  expect(setActiveNavLinkSpy).toHaveBeenCalledWith(`#${name}`)
})
