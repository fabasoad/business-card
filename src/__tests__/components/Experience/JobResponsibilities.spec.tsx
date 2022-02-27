/// <reference types="jest" />
import * as React from 'react'
import { shallow } from 'enzyme'
import JobResponsibilities from '../../../components/Experience/JobResponsibilities'
import { useTranslation } from '../../__mocks__/react-i18next'

let tMock;
let i18nMock;

beforeEach(() => {
  tMock = useTranslation().t
  i18nMock = useTranslation().i18n
})

test('should render JobResponsibilities correctly', () => {
  const prefix = 'some-prefix'
  const wrapper = shallow(<JobResponsibilities
    i18nKeyPrefix={prefix}
  />)
  expect(wrapper).toMatchSnapshot()
  expect(tMock).toBeCalledWith('business-card-experience-responsibilities-title')
  expect(tMock).toHaveBeenCalledWith(`${prefix}-1`)
  expect(tMock).toHaveBeenCalledWith(`${prefix}-1-1`)
  expect(tMock).not.toHaveBeenCalledWith(`${prefix}-2`)
})

afterEach(() => {
  jest.restoreAllMocks();
});
