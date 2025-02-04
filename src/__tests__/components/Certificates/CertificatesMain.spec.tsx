import '@testing-library/jest-dom'
import * as React from 'react'
import CertificatesMain from '../../../components/Certificates/CertificatesMain'
import certificatesStorage
  from '../../../scripts/certificates/CertificatesStorage'
import { render } from '@testing-library/react'
import { testSectionTitle } from '../Controls/TestUtils'

jest.mock('../../../components/Controls/SectionTitle')
jest.mock('../../../components/Certificates/CertificateItem')

describe('CertificatesMain', () => {
  test('should render CertificatesMain correctly', () => {
    const { container } = render(<CertificatesMain />)
    const div = container.querySelector<HTMLDivElement>('div#certificates')
    expect(div).toHaveClass('light-component')
    testSectionTitle(div, 'certificates.title')
    const divContainer = div.querySelector('div.container')
    expect(divContainer).not.toBeNull()
    const divRow = divContainer.querySelector(
      'div.row.row-cols-2.row-cols-sm-3.row-cols-md-4.row-cols-lg-6'
    )
    expect(divRow).not.toBeNull()
    for (const { id } of certificatesStorage.certificates) {
      const selector = `div.col-lg.mb-2 > div[data-testid="${id}"]`
      expect(divRow.querySelector(selector)).not.toBeNull()
    }
  })
})
