import DateUtils from '../../../scripts/DateUtils'
import { Locale } from '../../../store/locale/types'
import { testDateLocale } from '../controls/TestUtils'
import TechnologyStorage from '../../../scripts/technologies/TechnologyStorage'

export function testJobDuration(
  div: HTMLDivElement,
  code: string,
  fromMonthIndex: number,
  fromYear: number,
  toMonthIndex?: number,
  toYear?: number
) {
  expect(div).toHaveTextContent(
    DateUtils.humanize(
      new Date(fromYear, fromMonthIndex),
      !toYear || toMonthIndex == undefined
        ? new Date()
        : new Date(toYear, toMonthIndex),
      code
    )
  )
}

export function testJobPeriod(
  div: HTMLDivElement,
  locale: Locale,
  fromMonthIndex: number,
  fromYear: number,
  toMonthIndex?: number,
  toYear?: number) {
  expect(div).toHaveClass('timeline-image')
  testJobDuration(
    div.querySelector('div.job-duration'),
    locale.code,
    fromMonthIndex,
    fromYear,
    toMonthIndex,
    toYear
  )
  testJobTimeline(
    div.querySelector('div.job-timeline'),
    locale,
    fromMonthIndex,
    fromYear,
    toMonthIndex,
    toYear
  )
}

export function testJobResponsibilities(div: HTMLDivElement) {
  expect(div.querySelector('h5'))
    .toHaveTextContent('business-card-experience-responsibilities-title')
  const ul = div.querySelector('ul.responsibilities')
  expect(ul).not.toBeNull()
  const liElements = ul.querySelectorAll('li')
  expect(liElements).toHaveLength(2)
  expect(liElements[0]).toHaveTextContent('some-prefix-1')
  expect(liElements[1]).toHaveTextContent('some-prefix-1-1')
}

export function testJobTechnologies(div: HTMLDivElement, technologies: string[]) {
  const technologyStorage = new TechnologyStorage()
  const techMap = new Map()
  for (const key of technologies) {
    const technology = technologyStorage.findByName(key)
    techMap.set(technology.name, technology)
  }

  expect(div).toHaveClass('technologies')
  expect(div.querySelector('h5'))
  .toHaveTextContent('business-card-experience-technologies-title')
  const imgElements = div.querySelectorAll('img')
  expect(imgElements).toHaveLength(technologies.length)
  for (const img of imgElements) {
    const name = img.getAttribute('alt')
    expect(techMap.has(name)).toEqual(true)
    expect(img).toHaveAttribute('src', '[object Object]')
    expect(img).toHaveAttribute('alt', techMap.get(name).name)
    expect(img).toHaveAttribute('title', techMap.get(name).title)
    techMap.delete(name)
  }
  expect(techMap.size).toEqual(0)
}

export function testJobTimeline(
  div: HTMLDivElement,
  locale: Locale,
  fromMonthIndex: number,
  fromYear: number,
  toMonthIndex?: number,
  toYear?: number
) {
  expect(div).toHaveClass('col')
  const divRows = div.querySelectorAll('div.row')
  expect(divRows).toHaveLength(3)
  const divDateTo = divRows[0] as HTMLElement
  if (toYear && toMonthIndex != undefined) {
    testDateLocale(divDateTo, locale, toYear, toMonthIndex)
  } else {
    expect(divDateTo).toHaveTextContent('business-card-experience-present')
  }
  expect(divRows[1]).toHaveTextContent('-')
  const divDateFrom = divRows[2] as HTMLElement
  testDateLocale(divDateFrom, locale, fromYear, fromMonthIndex)
}

export function testJobTitle(
  div: HTMLDivElement, logo: string, company: string, title: string, location: string) {
  expect(div).toHaveClass('job-title')
  expect(div).toHaveClass('timeline-heading')
  const h4Logo = div.querySelector('h4:not(.subheading)')
  expect(h4Logo).toHaveTextContent(company)
  const img = h4Logo.querySelector('img')
  expect(img).toHaveAttribute('src', logo)
  expect(img).toHaveAttribute('alt', company)
  expect(img).toHaveAttribute('title', company)
  expect(div.querySelector('h4.subheading')).toHaveTextContent(title)
  expect(div.querySelector('h6')).toHaveTextContent(location)
}
