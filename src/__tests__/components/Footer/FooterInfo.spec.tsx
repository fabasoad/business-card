/// <reference types="jest" />
import * as React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import FooterInfo from '../../../components/Footer/FooterInfo'
import { useTranslation } from '../../__mocks__/react-i18next'
import { version } from '../../../../package.json'

let tMock

beforeAll(() => {
  tMock = useTranslation().t
})

test('should render FooterInfo correctly', () => {
  const wrapper: ShallowWrapper = shallow(<FooterInfo />)
  expect(wrapper).toMatchSnapshot()
  expect(tMock).toHaveBeenCalledTimes(1)
  expect(tMock).toHaveBeenCalledWith(
    'business-card-version',
    { version }
  )
})
