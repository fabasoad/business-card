import '@testing-library/jest-dom'
import * as React from 'react'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'

import CertificateItem from '../../../components/Certificates/CertificateItem'
import SupportedLocales from '../../../scripts/SupportedLocales'
import { CertificateIssuer } from '../../../scripts/certificates/types'
import { testCertificateItem } from './TestUtils'
import TechnologyStorage from '../../../scripts/technologies/TechnologyStorage';
import {Technology} from '../../../scripts/technologies/types';
import CertificateIssuerStorage from '../../../scripts/certificates/CertificateIssuerStorage';

const mockStore = configureMockStore()

describe('CertificateItem', () => {
  for (const locale of SupportedLocales._items) {
    test(`[${locale.code}] should render CertificateItem correctly`, () => {
      const technologyStorage = new TechnologyStorage()
      const certificateIssuerStorage = new CertificateIssuerStorage()

      const store = mockStore({ locale })

      const issueDate = new Date(2022, 1, 22)
      const technologyName = 'maven'
      const technology: Technology = technologyStorage.findByName(technologyName)
      const issuerName = 'udemy'
      const issuer: CertificateIssuer = certificateIssuerStorage.findByName(issuerName)
      const i18nTitleKey = 'certificate-i18nTitleKey'
      const url = 'certificate-url'

      const { container } = render(
        <Provider store={store}>
          <CertificateItem
            id={null}
            issueDate={issueDate}
            issuer={issuer}
            technology={technology}
            i18nTitleKey={i18nTitleKey}
            url={url}
          />
        </Provider>
      )
      testCertificateItem(
        container.querySelector('div.card'),
        locale,
        issueDate,
        issuer.name,
        technologyName,
        i18nTitleKey,
        url
      )
    })
  }
})
