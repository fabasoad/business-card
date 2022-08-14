/// <reference types="jest" />
import * as React from 'react'
import { render } from '@testing-library/react'
import CertificateItem from '../../../components/Certificates/CertificateItem'

test.skip('should render CertificateItem correctly', () => {
  const { container } = render(<CertificateItem
    id="test-id"
    issueDate={new Date('2020-01')}
    issuer={{ img: 'test-issuer-img', name: 'test-issuer-name' }}
    technology={{ name: 'test-technology-name', title: 'test-technology-title', img: 'test-technology-img' }}
    i18nTitleKey='test-title-key'
    url='test-url'
  />)
  expect(container.firstChild).toMatchSnapshot()
})
