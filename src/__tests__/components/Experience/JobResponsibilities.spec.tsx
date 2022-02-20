/// <reference types="jest" />
import * as React from 'react'
import { shallow } from 'enzyme'
import JobResponsibilities from '../../../components/Experience/JobResponsibilities'
import { useTranslation } from '../../__mocks__/react-i18next'

let tMock

beforeEach(() => {
  tMock = useTranslation().t
})

test('should render JobResponsibilities correctly', () => {
  const prefix = 'some-prefix'
  const count = 2
  const wrapper = shallow(<JobResponsibilities
    count={count}
    i18nKeyPrefix={prefix}
  />)
  expect(wrapper).toMatchSnapshot()
  expect(tMock).toBeCalledWith('business-card-experience-responsibilities-title')
  for (let i = 1; i < count; i++) {
    expect(tMock).toHaveBeenNthCalledWith(i + 1, `${prefix}-${i}`)
  }
})
