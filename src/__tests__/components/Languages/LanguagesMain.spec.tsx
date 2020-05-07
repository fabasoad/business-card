/// <reference types="jest" />
import * as React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import LanguagesMain from '../../../components/Languages/LanguagesMain'
import { useTranslation } from '../../__mocks__/react-i18next'

let tMock

beforeAll(() => {
  tMock = useTranslation().t
})

test('should render LanguageItem correctly', () => {
  const wrapper: ShallowWrapper = shallow(<LanguagesMain />)
  expect(wrapper).toMatchSnapshot()
  expect(tMock).toHaveBeenCalledTimes(3)
  expect(tMock).toHaveBeenNthCalledWith(1, 'business-card-languages-title')
  new Array<number>(2, 3).forEach(
    (n) => expect(tMock).toHaveBeenNthCalledWith(
      n, 'business-card-languages-native'
    )
  )
})
