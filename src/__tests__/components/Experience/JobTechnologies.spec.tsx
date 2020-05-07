/// <reference types="jest" />
import * as React from 'react'
import { shallow } from 'enzyme'
import JobTechnologies from '../../../components/Experience/JobTechnologies'
import { useTranslation } from '../../__mocks__/react-i18next'

let tMock

beforeEach(() => {
  tMock = useTranslation().t
})

test('should render JobTechnologies correctly', () => {
  const wrapper = shallow(<JobTechnologies keys={['maven', 'java']} />)
  expect(wrapper).toMatchSnapshot()
  expect(tMock).toBeCalledWith('business-card-experience-technologies-title')
})
