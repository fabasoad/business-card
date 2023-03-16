import TechnologyStorage from '../../../scripts/technologies/TechnologyStorage'
import { testSectionTitle } from '../Controls/TestUtils'

export function testStatsCommon(
  div: HTMLDivElement, url: string, content: string | RegExp, techName: string) {
  const tech = new TechnologyStorage().findByName(techName)
  expect(div).toHaveClass('m-4')
  expect(div).toHaveClass('d-flex')
  expect(div).toHaveClass('flex-column')
  expect(div).toHaveTextContent(content)
  const a = div.querySelector('a')
  expect(a).toHaveAttribute('href', url)
  expect(a).toHaveAttribute('target', '_blank')
  expect(a).toHaveAttribute('rel', 'noreferrer')
  const img = a.querySelector('img')
  expect(img).toHaveAttribute('src', '[object Object]')
  expect(img).toHaveAttribute('alt', tech.name)
  expect(img).toHaveAttribute('title', tech.title)
}

export function testStatsGitHub(div: HTMLDivElement) {
  testStatsCommon(
    div,
    'https://github.com/fabasoad',
    new RegExp('⭐️ \\d+'),
    'gitHub'
  )
}

export function testStatsLeetcode(div: HTMLDivElement) {
  testStatsCommon(
    div,
    'https://leetcode.com/fabasoad',
    new RegExp('✔️ \\d+'),
    'leetcode'
  )
}

export function testStatsMain(div: HTMLDivElement) {
  testSectionTitle(
    div.querySelector('div.section-title'),
    'business-card-stats-title'
  )
  const divCol = div.querySelector('div.container div.row div.col')
  expect(divCol).toHaveClass('stats-list')
  expect(divCol).toHaveClass('d-flex')
  expect(divCol).toHaveClass('justify-content-center')
  const divStatsItems = divCol.querySelectorAll('div.stats-item')
  testStatsLeetcode(divStatsItems.item(0) as HTMLDivElement)
  testStatsGitHub(divStatsItems.item(1) as HTMLDivElement)
  testStatsStackOverflow(divStatsItems.item(2) as HTMLDivElement)
  testStatsSuperUser(divStatsItems.item(3) as HTMLDivElement)
}

export function testStatsStackOverflow(div: HTMLDivElement) {
  testStatsCommon(
    div,
    'https://stackoverflow.com/users/470214/fabasoad',
    new RegExp('🏆️ \\d+'),
    'stackoverflow'
  )
}

export function testStatsSuperUser(div: HTMLDivElement) {
  testStatsCommon(
    div,
    'https://superuser.com/users/1123723/fabasoad',
    new RegExp('➕ \\d+'),
    'superuser'
  )
}
