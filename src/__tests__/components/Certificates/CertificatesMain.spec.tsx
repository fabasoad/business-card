import '@testing-library/jest-dom'
import * as React from 'react'
import CertificatesMain from '../../../components/Certificates/CertificatesMain'
import SupportedLocales from '../../../scripts/i18n/SupportedLocales'
import { render } from '@testing-library/react'
import { testCertificatesMain } from './TestUtils'

describe('CertificatesMain', () => {
  test('should render CertificatesMain correctly', () => {
    const { container } = render(<CertificatesMain/>)
    testCertificatesMain(container.querySelector('div#certificates'), SupportedLocales.default)
  })
})
