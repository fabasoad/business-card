/// <reference types="jest" />
import * as React from 'react'
import { shallow } from 'enzyme'
import JobAchievements from '../../../components/Experience/JobAchievements'
import { useTranslation } from '../../__mocks__/react-i18next'

let tMock

beforeEach(() => {
  tMock = useTranslation().t
})

test('should render JobAchievements correctly', () => {
  const prefix = 'some-prefix'
  const count = 2
  const wrapper = shallow(<JobAchievements
    count={count}
    i18nKeyPrefix={prefix}
  />)
  expect(wrapper).toMatchSnapshot()
  expect(tMock).toBeCalledWith('business-card-experience-achievements-title')
  for (let i = 1; i < count; i++) {
    expect(tMock).toHaveBeenNthCalledWith(i + 1, `${prefix}-${i}`)
  }
})
