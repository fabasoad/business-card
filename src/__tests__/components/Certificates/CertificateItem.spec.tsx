import '@testing-library/jest-dom'
import * as React from 'react'
import certificatesStorage from '../../../scripts/certificates/CertificatesStorage'
import CertificateItem from '../../../components/Certificates/CertificateItem'
import { Certificate } from '../../../scripts/certificates/types'
import SupportedLocales from '../../../scripts/i18n/SupportedLocales'
import { render } from '@testing-library/react'
import { testCertificateItem } from './TestUtils'

describe('CertificateItem', () => {
  test('should render CertificateItem correctly', () => {
    const certificate: Certificate = certificatesStorage.certificates[0]
    const { container } = render(
      <CertificateItem certificate={certificate}/>
    )
    testCertificateItem(
      container.querySelector('div.card'),
      SupportedLocales.default,
      certificate
    )
  })
})
