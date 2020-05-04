/// <reference types="jest" />
import * as React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import CertificateItem from '../../../components/Certificates/CertificateItem'

test('should render CertificateItem correctly', () => {
  const wrapper: ShallowWrapper = shallow(<CertificateItem
    id="test-id"
    issueDate={{ month: 1, year: 2020 }}
    issuer={{ img: 'test-issuer-img', name: 'test-issuer-name' }}
    technology={{ name: 'test-technology-name', img: 'test-technology-img' }}
    title='test-title'
    url='test-url'
  />)
  expect(wrapper).toMatchSnapshot()
})