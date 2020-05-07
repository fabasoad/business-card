/// <reference types="jest" />
import * as React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import FooterLocation from '../../../components/Footer/FooterLocation'
import { useTranslation } from '../../__mocks__/react-i18next'

let tMock

beforeAll(() => {
  tMock = useTranslation().t
})

test('should render FooterLocation correctly', () => {
  const wrapper: ShallowWrapper = shallow(<FooterLocation />)
  expect(wrapper).toMatchSnapshot()
  expect(tMock).toHaveBeenCalledTimes(1)
  expect(tMock).toHaveBeenCalledWith('business-card-contact-city')
})

afterEach(() => {
  jest.clearAllMocks()
})
