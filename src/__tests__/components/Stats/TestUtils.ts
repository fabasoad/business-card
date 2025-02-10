import TechnologyStorage from '../../../scripts/technologies/TechnologyStorage'

export function testStatsCommon(
  div: HTMLDivElement, url: string, content: string | RegExp, techName: string) {
  const { name, title } = new TechnologyStorage().findByName(techName)
  expect(div).toHaveTextContent(content)
  const a = div.querySelector('a')
  expect(
    div.querySelector(`a[href="${url}"][target="_blank"][rel="noreferrer"] > img[src="[object Object]"][alt="${name}"][title="${title}"]`)
  ).toBeInTheDocument()
}
