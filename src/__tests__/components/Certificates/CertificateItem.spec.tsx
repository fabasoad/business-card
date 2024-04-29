import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import * as React from 'react'
import CertificateItem from '../../../components/Certificates/CertificateItem'
import CertificateIssuerStorage from '../../../scripts/certificates/CertificateIssuerStorage'
import type { CertificateIssuer } from '../../../scripts/certificates/types'
import SupportedLocales from '../../../scripts/i18n/SupportedLocales'
import TechnologyStorage from '../../../scripts/technologies/TechnologyStorage'
import type { Technology } from '../../../scripts/technologies/types'
import { testCertificateItem } from './TestUtils'

describe('CertificateItem', () => {
  test('should render CertificateItem correctly', () => {
    const technologyStorage = new TechnologyStorage()
    const certificateIssuerStorage = new CertificateIssuerStorage()

    const issueDate = new Date(2022, 1, 22)
    const technologyName = 'maven'
    const technology: Technology = technologyStorage.findByName(technologyName)
    const issuerName = 'udemy'
    const issuer: CertificateIssuer =
      certificateIssuerStorage.findByName(issuerName)
    const i18nTitleKey = 'certificate-i18nTitleKey'
    const url = 'certificate-url'

    const { container } = render(
      <CertificateItem
        id={null}
        issueDate={issueDate}
        issuer={issuer}
        technology={technology}
        i18nTitleKey={i18nTitleKey}
        url={url}
      />
    )
    testCertificateItem(
      container.querySelector('div.card'),
      SupportedLocales.default,
      issueDate,
      issuer.name,
      technologyName,
      i18nTitleKey,
      url
    )
  })
})
