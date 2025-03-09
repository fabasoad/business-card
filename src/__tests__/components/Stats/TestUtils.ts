import TechnologyStorage from '../../../scripts/technologies/TechnologyStorage'

export function testStatsCommon(
  div: HTMLDivElement, url: string, content: string | RegExp, techName: string) {
  const { name, title } = new TechnologyStorage().findByName(techName)
  expect(div).toHaveTextContent(content)
  expect(
    div.querySelector(`a[href="${url}"][target="_blank"][rel="noreferrer"] > div[data-testid="ThemeImage-${name}"]`)
  ).toHaveTextContent(`undefined-${['aws', 'gitHub', 'leetcode'].includes(name) ? '[object Object]' : 'undefined'}-[object Object]-${title}`)
}
