import '@testing-library/jest-dom'
import * as React from 'react'
import CertificatesMain from '../../../components/Certificates/CertificatesMain'
import certificatesStorage
  from '../../../scripts/certificates/CertificatesStorage'
import { render } from '@testing-library/react'

jest.mock('../../../components/Controls/Section')
jest.mock('../../../components/Certificates/CertificateItem')

describe('CertificatesMain', () => {
  test('should render CertificatesMain correctly', () => {
    const { container } = render(<CertificatesMain />)
    const div = container.querySelector(
      'div[data-testid^="Section-"] > div.row.row-cols-2.row-cols-sm-3.row-cols-md-4.row-cols-lg-6'
    )
    expect(div).toBeInTheDocument()
    for (const { id } of certificatesStorage.certificates) {
      expect(
        div.querySelector(`div.col-lg.mb-2 > div[data-testid="CertificateItem-${id}"]`)
      ).toBeInTheDocument()
    }
  })
})
