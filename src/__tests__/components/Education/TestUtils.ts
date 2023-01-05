import {Locale} from '../../../store/locale/types';
import {testSectionTitle} from '../Controls/TestUtils';

type BuildTextFunction = (h4: HTMLHeadingElement) => void

export function testEducationItem(
  container: HTMLElement,
  from: number,
  to: number,
  title: string,
  testHeading: BuildTextFunction = (h4: HTMLHeadingElement) =>
    expect(h4).toHaveTextContent(`${to}-${from}`)
): void {
  const h4DateLocaleElements = container.querySelectorAll('div.timeline-image h4')
  expect(h4DateLocaleElements).toHaveLength(1)
  testHeading(h4DateLocaleElements.item(0) as HTMLHeadingElement)
  const h4TimelineElements = container.querySelectorAll('div.timeline-heading h4')
  expect(h4TimelineElements).toHaveLength(2)
  expect(h4TimelineElements.item(0)).toHaveTextContent('business-card-education-university-title')
  expect(h4TimelineElements.item(1)).toHaveTextContent(title)
  const pBodyElements = container.querySelectorAll('div.timeline-body p')
  expect(pBodyElements).toHaveLength(1)
  expect(pBodyElements.item(0)).toHaveTextContent('business-card-education-university-speciality')
}

export function testEducationMain(div: HTMLDivElement, locale: Locale) {
  const from = 2005
  const to = 2010
  expect(div).toHaveClass('light-component')
  const divContainer = div.querySelector('div.container')
  testSectionTitle(
    divContainer.querySelector('div.section-title'),
    'business-card-education-title'
  )
  const divRow = divContainer.querySelector('div.row')
  const divCol = divRow.querySelector('div.col-lg-12')
  expect(divCol).not.toBeNull()
  const ul = divCol.querySelector('ul.timeline')
  expect(ul).not.toBeNull()
  const listItems = ul.querySelectorAll('li')
  expect(listItems).toHaveLength(1)
  testEducationItem(
    listItems.item(0),
    from,
    to,
    'business-card-education-university-master',
    locale.code === 'jp'
      ? (h4: HTMLHeadingElement): void => expect(h4).toHaveTextContent(
        new RegExp('.+business-card-year-singular-.+business-card-year-singular')
      )
      : (h4: HTMLHeadingElement): void => expect(h4).toHaveTextContent(`${to}-${from}`)
  )
}
