/// <reference types="jest" />
import * as React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import CertificateItem from '../../../components/Certificates/CertificateItem'

test('should render CertificateItem correctly', () => {
  const wrapper: ShallowWrapper = shallow(<CertificateItem
    id="test-id"
    issueDate={new Date('2020-01')}
    issuer={{ img: 'test-issuer-img', name: 'test-issuer-name' }}
    technology={{ name: 'test-technology-name', title: 'test-technology-title', img: 'test-technology-img' }}
    i18nTitleKey='test-title-key'
    url='test-url'
  />)
  expect(wrapper).toMatchSnapshot()
})
