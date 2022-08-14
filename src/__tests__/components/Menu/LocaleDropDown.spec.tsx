/// <reference types="jest" />
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as React from 'react'
import { LocaleDropDown } from '../../../components/Menu/LocaleDropDown'
import SupportedLocales from '../../../scripts/SupportedLocales';

test('should render LocaleDropDown correctly', () => {
  const getLocalesExceptOfSpy = jest.fn(() => [{ code: 'gb', title: 'EN' }])
  const { container } = render(<LocaleDropDown
    getLocalesExceptOf={getLocalesExceptOfSpy}
    locale={{ code: 'jp', title: 'JP' }}
    startSetLocale={null}
  />)
  expect(container.firstChild).toMatchSnapshot()
  expect(getLocalesExceptOfSpy).toHaveBeenCalledTimes(1)
  expect(getLocalesExceptOfSpy).toHaveBeenCalledWith('jp')
})

test('should change locale correctly', async () => {
  const startSetLocaleSpy = jest.fn()
  const { container } = render(<LocaleDropDown
    locale={SupportedLocales._items[0]}
    startSetLocale={startSetLocaleSpy}
  />)
  const user = userEvent.setup()
  // Click on chosen language to expand the list
  let element: HTMLElement =
    container.querySelector(`.flag-icon-${SupportedLocales._items[0].code}`)
  expect(element).not.toBeNull()
  await user.click(element)
  // Click on 2nd language from the list
  element = container.querySelector(`.flag-icon-${SupportedLocales._items[1].code}`)
  expect(element).not.toBeNull()
  await user.click(element)
  // Click on new chosen language to expand the list again
  element =
    container.querySelector(`.flag-icon-${SupportedLocales._items[1].code}`)
  expect(element).not.toBeNull()
  await user.click(element)
  // Click on 3rd language from the list
  element =
    container.querySelector(`.flag-icon-${SupportedLocales._items[2].code}`)
  expect(element).not.toBeNull()
  await user.click(element)
  expect(startSetLocaleSpy).toHaveBeenCalledTimes(3)
  expect(startSetLocaleSpy).toHaveBeenNthCalledWith(1, SupportedLocales._items[1])
  expect(startSetLocaleSpy).toHaveBeenNthCalledWith(2, SupportedLocales._items[1])
  expect(startSetLocaleSpy).toHaveBeenNthCalledWith(3, SupportedLocales._items[2])
})
