import TechnologyStorage from '../../../scripts/technologies/TechnologyStorage'

export function testStatsCommon(
  div: HTMLDivElement, url: string, content: string | RegExp, techName: string) {
  const tech = new TechnologyStorage().findByName(techName)
  expect(div).toHaveTextContent(content)
  const a = div.querySelector('a')
  expect(a).toHaveAttribute('href', url)
  expect(a).toHaveAttribute('target', '_blank')
  expect(a).toHaveAttribute('rel', 'noreferrer')
  expect(a).toHaveClass('text-center')
  const img = a.querySelector('img')
  expect(img).toHaveAttribute('src', '[object Object]')
  expect(img).toHaveAttribute('alt', tech.name)
  expect(img).toHaveAttribute('title', tech.title)
}
