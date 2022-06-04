/// <reference types="jest" />
import { shallow, ShallowWrapper } from 'enzyme'
import * as React from 'react'
import { LocaleDropDown } from '../../../components/Menu/LocaleDropDown'
import { Locale } from '../../../store/locale/types'

test('should render LocaleDropDown correctly', () => {
  const getLocalesExceptOfSpy = jest.fn(() => [{ code: 'gb', title: 'EN' }])
  const wrapper: ShallowWrapper = shallow(<LocaleDropDown
    getLocalesExceptOf={getLocalesExceptOfSpy}
    locale={{ code: 'ru', title: 'RU' }}
    startSetLocale={null}
  />)
  expect(wrapper).toMatchSnapshot()
  expect(getLocalesExceptOfSpy).toHaveBeenCalledTimes(1)
  expect(getLocalesExceptOfSpy).toHaveBeenCalledWith('ru')
})

test('should change locale correctly', () => {
  const expectedLocale: Locale = { code: 'ru', title: 'RU' }
  const startSetLocaleSpy = jest.fn()
  const wrapper: ShallowWrapper = shallow(<LocaleDropDown
    getLocalesExceptOf={() => [expectedLocale]}
    locale={{ code: 'ru', title: 'RU' }}
    startSetLocale={startSetLocaleSpy}
  />)
  wrapper.find('DropdownItem').simulate('click')
  expect(startSetLocaleSpy).toHaveBeenCalledTimes(1)
  expect(startSetLocaleSpy).toHaveBeenCalledWith(expectedLocale)
})
