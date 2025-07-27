import '@testing-library/jest-dom'
import * as React from 'react'
import certificatesStorage from '../../../scripts/certificates/CertificatesStorage'
import CertificateItem from '../../../components/Certificates/CertificateItem'
import { Certificate } from '../../../scripts/certificates/types'
import SupportedLocales from '../../../scripts/i18n/SupportedLocales'
import { render } from '@testing-library/react'

describe('CertificateItem', () => {
  test('should render CertificateItem correctly', () => {
    const certificate: Certificate = certificatesStorage.certificates[0]
    const { container } = render(
      <CertificateItem certificate={certificate}/>
    )
    const div = container.querySelector('div.card')

    const cardBody = div.querySelector('.card-body.d-flex.flex-column')
    expect(cardBody).toBeInTheDocument()
    const a = cardBody.querySelector('.justify-content-center.mt-2 > a.card-link')
    expect(a).toBeInTheDocument()
    expect(a).toHaveAttribute('target', '_blank')
    expect(a).toHaveAttribute('rel', 'noopener noreferrer')
    expect(a).toHaveAttribute('href', certificate.url)
    const img = a.querySelector('.card-img')
    expect(img).toHaveAttribute('src', '[object Object]')

    const cardTitle = div.querySelector('.card-title.h5')
    expect(cardTitle).toBeInTheDocument()
    expect(cardTitle).toHaveAttribute('title', `certificates.list.${certificate.id}`)
    expect(cardTitle).toHaveTextContent(`certificates.list.${certificate.id}`)

    const cardSubTitle = div.querySelector('.card-subtitle.h6')
    expect(cardSubTitle).toBeInTheDocument()
    expect(cardSubTitle).toHaveAttribute('title', 'by-issuer')
    expect(cardSubTitle).toHaveTextContent('by-issuer')

    const footer = div.querySelector('.card-footer')
    expect(footer).toBeInTheDocument()
    expect(footer).toHaveTextContent(
      SupportedLocales.default.code === 'jp'
        ? new RegExp(`.+yearmonth.${certificate.date.getMonth()}`)
        : `month.${certificate.date.getMonth()} ${certificate.date.getFullYear()}`
    )
  })
})
