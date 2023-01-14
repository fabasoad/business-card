import * as items from '../../../components/Certificates/items.json'
import CertificateIssuerStorage from '../../../scripts/certificates/CertificateIssuerStorage'
import { CertificateIssuer } from '../../../scripts/certificates/types'
import { Locale } from '../../../store/locale/types'
import { testSectionTitle } from '../Controls/TestUtils'

export function testCertificateItem(
  div: HTMLDivElement,
  locale: Locale,
  date: Date,
  issuerName: string,
  technology: string,
  i18nTitleKey: string,
  url: string
) {
  const certificateIssuerStorage = new CertificateIssuerStorage()
  const issuer: CertificateIssuer = certificateIssuerStorage.findByName(issuerName)

  const monthIndex = date.getMonth()
  const year = date.getFullYear()

  let elements = div.getElementsByClassName('card-img')
  expect(elements).toHaveLength(1)
  expect(elements[0]).toHaveAttribute('src', '[object Object]')

  elements = div.getElementsByClassName('card-header')
  expect(elements).toHaveLength(1)
  expect(elements[0]).toHaveTextContent(issuer.name)

  elements = div.getElementsByClassName('card-link')
  expect(elements).toHaveLength(1)
  const cardLink = expect(elements[0])
  cardLink.toHaveAttribute('href', url)
  cardLink.toHaveTextContent(i18nTitleKey)

  elements = div.getElementsByClassName('card-footer')
  expect(elements).toHaveLength(1)
  expect(elements[0]).toHaveTextContent(
    locale.code === 'jp'
      ? new RegExp(`.+business-card-year-singularbusiness-card-month-${monthIndex}`)
      : `business-card-month-${monthIndex} ${year}`
  )
}

export function testCertificatesMain(div: HTMLDivElement, locale: Locale) {
  function findByUrl(items: Array<any>, url: string): any {
    for (const item of items) {
      if (item.url === url) {
        return item
      }
    }
    return null
  }
  expect(div).toHaveClass('light-component')
  testSectionTitle(
    div.querySelector('div.section-title'),
    'business-card-certificates-title'
  )
  const divContainer = div.querySelector('div.container')
  expect(divContainer).not.toBeNull()
  const divRow = divContainer.querySelector('div.row')
  expect(divRow).toHaveClass('row-cols-2')
  expect(divRow).toHaveClass('row-cols-md-3')
  expect(divRow).toHaveClass('row-cols-lg-5')
  const divColElements = divRow.querySelectorAll('div.col-lg')
  expect(divColElements).toHaveLength(items.length)
  for (let ind = 0; ind < items.length; ind++) {
    const divCol = divColElements.item(ind)
    expect(divCol).toHaveClass('mb-2')
    const divCard: HTMLDivElement = divCol.querySelector('div.card')
    const divCardLinks = divCard.getElementsByClassName('card-link')
    expect(divCardLinks).toHaveLength(1)
    const item = findByUrl(items, divCardLinks.item(0).getAttribute('href'))
    testCertificateItem(
      divCard,
      locale,
      new Date(item.date),
      item.issuer,
      item.technology,
      item.i18nTitleKey,
      item.url
    )
  }
}
