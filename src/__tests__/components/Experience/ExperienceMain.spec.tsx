/// <reference types="jest" />
import * as React from 'react'
import { shallow } from 'enzyme'
import ExperienceMain from '../../../components/Experience/ExperienceMain'
import { useTranslation } from '../../__mocks__/react-i18next'

let tMock

beforeEach(() => {
  tMock = useTranslation().t
})

test('should render ExperienceMain correctly', () => {
  const wrapper = shallow(<ExperienceMain />)
  expect(wrapper).toMatchSnapshot()
  new Array<string>(
    'business-card-experience-title',
    'business-card-experience-job-tri-ad-2-title',
    'business-card-experience-job-tri-ad-1-title',
    'business-card-experience-job-bitcoin-com-2-title',
    'business-card-experience-job-bitcoin-com-1-title',
    'business-card-experience-job-lohika-3-title',
    'business-card-experience-job-lohika-2-title',
    'business-card-experience-job-lohika-1-title',
    'business-card-experience-job-arka-title'
  ).forEach((t, i) => expect(tMock).toHaveBeenNthCalledWith(i + 1, t))
})
