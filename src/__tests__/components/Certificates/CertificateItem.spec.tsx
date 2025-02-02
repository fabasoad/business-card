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
    let elements = div.getElementsByClassName('card-img')
    expect(elements).toHaveLength(1)
    expect(elements[0]).toHaveAttribute('src', '[object Object]')

    elements = div.getElementsByClassName('card-title')
    expect(elements).toHaveLength(1)

    elements = elements[0].getElementsByClassName('card-link')
    expect(elements).toHaveLength(1)
    const cardLink = expect(elements[0])
    cardLink.toHaveAttribute('href', certificate.url)
    cardLink.toHaveTextContent(`certificates.list.${certificate.id}`)

    elements = div.getElementsByClassName('card-subtitle')
    expect(elements).toHaveLength(1)
    expect(elements[0]).toHaveTextContent('by-issuer')

    elements = div.getElementsByClassName('card-footer')
    expect(elements).toHaveLength(1)
    expect(elements[0]).toHaveTextContent(
      SupportedLocales.default.code === 'jp'
        ? new RegExp(`.+yearmonth.${certificate.date.getMonth()}`)
        : `month.${certificate.date.getMonth()} ${certificate.date.getFullYear()}`
    )
  })
})
