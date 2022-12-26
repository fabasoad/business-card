export function testEducationItem(
  container: HTMLElement, from: number, to: number, title: string
): void {
  const h4DateLocaleElements = container.querySelectorAll('div.timeline-image h4')
  expect(h4DateLocaleElements).toHaveLength(1)
  expect(h4DateLocaleElements.item(0)).toHaveTextContent(`${to}-${from}`)
  const h4TimelineElements = container.querySelectorAll('div.timeline-heading h4')
  expect(h4TimelineElements).toHaveLength(2)
  expect(h4TimelineElements.item(0)).toHaveTextContent('business-card-education-university-title')
  expect(h4TimelineElements.item(1)).toHaveTextContent(title)
  const pBodyElements = container.querySelectorAll('div.timeline-body p')
  expect(pBodyElements).toHaveLength(1)
  expect(pBodyElements.item(0)).toHaveTextContent('business-card-education-university-speciality')
}
