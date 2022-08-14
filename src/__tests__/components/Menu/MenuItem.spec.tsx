/// <reference types="jest" />
import * as React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import MenuItem from '../../../components/Menu/MenuItem'
import { useTranslation } from '../../__mocks__/react-i18next'

let tMock;

beforeAll(() => {
  tMock = useTranslation().t
})

test('should render MenuItem correctly', () => {
  const name = 'test-menu-item'
  const wrapper: ShallowWrapper = shallow(<MenuItem
    name={name}
    setActiveNavLink={null}
  />)
  expect(wrapper).toMatchSnapshot()
  expect(tMock).toHaveBeenCalledTimes(1)
  expect(tMock).toHaveBeenCalledWith(`business-card-menu-${name}`)
})

test('should set active MenuItem correctly', () => {
  const name = 'test-menu-item'
  const setActiveNavLinkSpy = jest.fn()
  const wrapper: ShallowWrapper = shallow(<MenuItem
    name={name}
    setActiveNavLink={setActiveNavLinkSpy}
  />)
  wrapper.find('NavLink').simulate('click')
  expect(setActiveNavLinkSpy).toHaveBeenCalledWith(`#${name}`)
})
