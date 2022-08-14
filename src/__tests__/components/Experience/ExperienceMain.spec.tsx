/// <reference types="jest" />
import * as React from 'react'
import { shallow } from 'enzyme'
import ExperienceMain from '../../../components/Experience/ExperienceMain'

jest.mock(
  'react-i18next',
  () => ({
    useTranslation: jest.fn().mockImplementation(() => ({
      t: jest.fn().mockImplementation((t) => t)
    }))
  })
);

describe('ExperienceMain component', () => {
  test('should render ExperienceMain correctly', () => {
    const wrapper = shallow(<ExperienceMain />)
    expect(wrapper).toMatchSnapshot()
  })
})
