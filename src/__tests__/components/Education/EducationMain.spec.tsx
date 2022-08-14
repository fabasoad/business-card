/// <reference types="jest" />
import * as React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import EducationMain from '../../../components/Education/EducationMain'
import { useTranslation } from '../../__mocks__/react-i18next'

let tMock

beforeAll(() => {
  tMock = useTranslation().t
})

test('should render EducationItem correctly', () => {
  const wrapper: ShallowWrapper = shallow(<EducationMain />)
  expect(wrapper).toMatchSnapshot()
  expect(tMock).toHaveBeenCalledTimes(3)
  expect(tMock).toHaveBeenCalledWith('business-card-education-title')
  expect(tMock).toHaveBeenCalledWith('business-card-education-university-master')
  expect(tMock).toHaveBeenCalledWith('business-card-education-university-bachelor')
})
