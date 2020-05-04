/// <reference types="jest" />
import * as React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import CertificatesMain from '../../../components/Certificates/CertificatesMain'
import { useTranslation } from '../../__mocks__/react-i18next'

let tMock

beforeAll(() => {
  tMock = useTranslation().t
})

test('should render CertificatesMain correctly', () => {
  const findByNameSpy = jest.fn(k => ({ name: 'test-name-1', img: 'test-img-1' }))
  const wrapper: ShallowWrapper = shallow(<CertificatesMain
    technologyStorage={{
      findByName: findByNameSpy,
      findBySkill: jest.fn(),
      technologyProvider: null
    }}
  />)
  expect(wrapper).toMatchSnapshot()
  expect(tMock).toHaveBeenCalledTimes(1)
  expect(tMock).toHaveBeenCalledWith('business-card-certificates-title')
  expect(findByNameSpy).toHaveBeenCalledTimes(3)
  new Array<string>('python', 'java', 'react').forEach(t =>
    expect(findByNameSpy).toHaveBeenCalledWith(t)
  )
})

afterEach(() => {
  jest.clearAllMocks()
})