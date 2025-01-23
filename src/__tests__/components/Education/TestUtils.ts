import { Locale } from '../../../scripts/i18n/types'
import { testSectionTitle } from '../Controls/TestUtils'

export function testEducationItem(container: HTMLElement, title: string): void {
  expect(container.querySelector('div.timeline-image')).toBeInTheDocument()
  const divTimelinePanel = container.querySelector('div.timeline-panel')
  const h4TimelineElements = divTimelinePanel.querySelectorAll('div.timeline-heading h4')
  expect(h4TimelineElements).toHaveLength(2)
  expect(h4TimelineElements.item(0)).toHaveTextContent('business-card-education-university-title')
  expect(h4TimelineElements.item(1)).toHaveTextContent(title)
  const pBodyElements = container.querySelectorAll('div.timeline-body p')
  expect(pBodyElements).toHaveLength(1)
  expect(pBodyElements.item(0)).toHaveTextContent('business-card-education-university-speciality')
}

export function testEducationMain(div: HTMLDivElement, locale: Locale) {
  expect(div).toHaveClass('light-component')
  const divContainer = div.querySelector('div.container')
  testSectionTitle(
    divContainer.querySelector('div.section-title'),
    'business-card-education-title'
  )
  const divRow = divContainer.querySelector('div.row')
  const divCol = divRow.querySelector('div.col-lg')
  expect(divCol).not.toBeNull()
  const ul = divCol.querySelector('ul.timeline')
  expect(ul).not.toBeNull()
  const listItems = ul.querySelectorAll('li')
  expect(listItems).toHaveLength(1)
  testEducationItem(
    listItems.item(0),
    'business-card-education-university-master'
  )
}
