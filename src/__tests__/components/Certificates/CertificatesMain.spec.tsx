import '@testing-library/jest-dom'
import * as React from 'react'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'

import CertificatesMain from '../../../components/Certificates/CertificatesMain'

const mockStore = configureMockStore()
const store = mockStore({})

test('should render CertificatesMain correctly', () => {
  const { container } = render(
    <Provider store={store}>
      <CertificatesMain />
    </Provider>
  )
  expect(screen.getByRole('heading', { level: 2 }))
    .toHaveTextContent('business-card-certificates-title')
  const divCardElements = container.querySelectorAll('div.card')
  expect(divCardElements).toHaveLength(5)
  const divCardHeaderElements = container.querySelectorAll('div.card-header')
  expect(divCardHeaderElements).toHaveLength(5)
  expect(divCardHeaderElements.item(0)).toHaveTextContent('hackerRank')
  expect(divCardHeaderElements.item(1)).toHaveTextContent('oracle')
  expect(divCardHeaderElements.item(2)).toHaveTextContent('udemy')
  expect(divCardHeaderElements.item(3)).toHaveTextContent('coursera')
  expect(divCardHeaderElements.item(4)).toHaveTextContent('coursera')
  const pCardTextElements = container.querySelectorAll('p.card-text')
  expect(pCardTextElements).toHaveLength(5)
  expect(pCardTextElements.item(0)).toHaveTextContent('business-card-certificate-5')
  expect(pCardTextElements.item(1)).toHaveTextContent('business-card-certificate-4')
  expect(pCardTextElements.item(2)).toHaveTextContent('business-card-certificate-3')
  expect(pCardTextElements.item(3)).toHaveTextContent('business-card-certificate-2')
  expect(pCardTextElements.item(4)).toHaveTextContent('business-card-certificate-1')
  const aCardLinkElements = container.querySelectorAll('a.card-link')
  expect(aCardLinkElements).toHaveLength(5)
  expect(aCardLinkElements.item(0)).toHaveAttribute('href', 'https://www.hackerrank.com/certificates/f75cdd8ed9f0')
  expect(aCardLinkElements.item(1)).toHaveAttribute('href', 'https://www.youracclaim.com/badges/689b9d7e-cae5-4e36-8a1f-c8c34f104249/public_url')
  expect(aCardLinkElements.item(2)).toHaveAttribute('href', 'http://ude.my/UC-JGDVYKAQ')
  expect(aCardLinkElements.item(3)).toHaveAttribute('href', 'https://www.coursera.org/account/accomplishments/specialization/W5AB2PBZQNPY')
  expect(aCardLinkElements.item(4)).toHaveAttribute('href', 'https://www.coursera.org/account/accomplishments/verify/MWE43H8YDS')
  const divCardFooterElements = container.querySelectorAll('div.card-footer div')
  expect(divCardFooterElements).toHaveLength(5)
  expect(divCardFooterElements.item(0)).toHaveTextContent('business-card-month-9 2020')
  expect(divCardFooterElements.item(1)).toHaveTextContent('business-card-month-5 2020')
  expect(divCardFooterElements.item(2)).toHaveTextContent('business-card-month-10 2019')
  expect(divCardFooterElements.item(3)).toHaveTextContent('business-card-month-3 2018')
  expect(divCardFooterElements.item(4)).toHaveTextContent('business-card-month-5 2015')
})
