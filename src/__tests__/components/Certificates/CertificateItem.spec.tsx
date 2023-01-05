import '@testing-library/jest-dom'
import * as React from 'react'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'

import CertificateItem from '../../../components/Certificates/CertificateItem'
import { CertificateIssuer } from '../../../scripts/certificates/types'
import SupportedLocales from '../../../scripts/SupportedLocales'

const mockStore = configureMockStore()

describe('CertificateItem', () => {
  for (const locale of SupportedLocales._items) {
    test(`[${locale.code}] should render CertificateItem correctly`, () => {
      const store = mockStore({ locale })
      const monthIndex = 1
      const year = 2022
      const issueDate = new Date(year, monthIndex, 22)
      const issuer: CertificateIssuer = {
        name: 'certificate-name',
        img: 'certificate-img'
      }
      const i18nTitleKey = 'certificate-i18nTitleKey'
      const url = 'certificate-url'

      const { container } = render(
        <Provider store={store}>
          <CertificateItem
            id={null}
            issueDate={issueDate}
            issuer={issuer}
            technology={null}
            i18nTitleKey={i18nTitleKey}
            url={url}
          />
        </Provider>
      )
      let elements = container.getElementsByClassName('card-img')
      expect(elements).toHaveLength(1)
      expect(elements[0]).toHaveAttribute('src', issuer.img)

      elements = container.getElementsByClassName('card-header')
      expect(elements).toHaveLength(1)
      expect(elements[0]).toHaveTextContent(issuer.name)

      elements = container.getElementsByClassName('card-link')
      expect(elements).toHaveLength(1)
      const cardLink = expect(elements[0])
      cardLink.toHaveAttribute('href', url)
      cardLink.toHaveTextContent(i18nTitleKey)

      elements = container.getElementsByClassName('card-footer')
      expect(elements).toHaveLength(1)
      expect(elements[0]).toHaveTextContent(
        locale.code === 'jp'
          ? new RegExp(`.+business-card-year-singularbusiness-card-month-${monthIndex}`)
          : `business-card-month-${monthIndex} ${year}`
      )
    })
  }
})
