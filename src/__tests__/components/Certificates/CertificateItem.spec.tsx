/// <reference types="jest" />
import * as React from 'react'
import { render } from '@testing-library/react'
import configureMockStore from 'redux-mock-store'
import '@testing-library/jest-dom'

import CertificateItem from '../../../components/Certificates/CertificateItem'
import { CertificateIssuer } from '../../../scripts/certificates/types'
import {Provider} from 'react-redux'

const mockStore = configureMockStore()
const store = mockStore({})

test('should render CertificateItem correctly', () => {
  const month = 2
  const year = 2022
  const issueDate = new Date(year, month - 1, 22)
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
  expect(elements[0]).toHaveTextContent(`business-card-month-${month} ${year}`)
})
