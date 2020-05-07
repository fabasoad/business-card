/// <reference types="jest" />
import * as React from 'react'
import { shallow } from 'enzyme'
import JobDescription from '../../../components/Experience/JobDescription'
import { useTranslation } from '../../__mocks__/react-i18next'

let tMock

beforeEach(() => {
  tMock = useTranslation().t
})

test('should render JobDescription without title correctly', () => {
  const prefix = 'some-prefix'
  const count = 2
  const wrapper = shallow(<JobDescription
    count={count}
    i18nKeyPrefix={prefix}
    withTitle={false}
  />)
  expect(wrapper).toMatchSnapshot()
  expect(tMock).not.toBeCalledWith('business-card-experience-description-title')
  for (let i = 0; i < count; i++) {
    expect(wrapper.childAt(i).childAt(0).text()).toBe(`${prefix}-${i + 1}`)
  }
})

test('should render JobDescription with title correctly', () => {
  const prefix = 'some-prefix'
  const count = 3
  const wrapper = shallow(<JobDescription
    count={count}
    i18nKeyPrefix={prefix}
  />)
  expect(wrapper).toMatchSnapshot()
  expect(tMock).toBeCalledWith('business-card-experience-description-title')
  for (let i = 1; i < count; i++) {
    expect(wrapper.childAt(i).childAt(0).text()).toBe(`${prefix}-${i}`)
  }
})
