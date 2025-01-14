import TechnologyStorage from '../../../scripts/technologies/TechnologyStorage'
import { Locale } from '../../../scripts/i18n/types'
import { testDateDuration, testDateTimeline, testSectionTitle } from '../Controls/TestUtils'

export function testExperienceMain(div: HTMLDivElement, locale: Locale) {
  type Fixture = {
    company: string,
    title: string,
    location: string,
    technologies: string[],
    fromMonthIndex: number,
    fromYear: number,
    toMonthIndex?: number,
    toYear?: number
  }

  function testLi(li: HTMLLIElement, locale: Locale, {
    title,
    location,
    company,
    technologies,
    fromMonthIndex,
    fromYear,
    toMonthIndex,
    toYear
  }: Fixture) {
    testJobPeriod(
      li.querySelector('div.timeline-image'),
      locale,
      fromMonthIndex,
      fromYear,
      toMonthIndex,
      toYear
    )
    const divTimelinePanel = li.querySelector('div.timeline-panel')
    expect(divTimelinePanel).not.toBeNull()
    testJobTitle(
      divTimelinePanel.querySelector('div.job-title'),
      '[object Object]',
      company,
      title,
      location
    )
    const divTimelineBody = divTimelinePanel.querySelector('div.timeline-body')
    expect(divTimelineBody).not.toBeNull()
    testJobTechnologies(
      divTimelineBody.querySelector('div.technologies'),
      technologies
    )
  }

  const fixtures: Fixture[] = [{
    title: 'business-card-experience-job-wbyt-6-title',
    location: 'business-card-location-tokyo',
    company: 'Woven by Toyota',
    technologies: ['bash', 'go', 'terraform', 'aws', 'gitHubActions', 'python', 'snyk', 'codeql', 'intellijIdea'],
    fromMonthIndex: 10,
    fromYear: 2022
  }, {
    title: 'business-card-experience-job-wbyt-5-title',
    location: 'business-card-location-tokyo',
    company: 'Woven by Toyota',
    technologies: ['docker', 'intellijIdea', 'kubernetes', 'istio', 'opa', 'azureAd'],
    fromMonthIndex: 6,
    fromYear: 2022,
    toMonthIndex: 9,
    toYear: 2022
  }, {
    title: 'business-card-experience-job-wbyt-4-title',
    location: 'business-card-location-tokyo',
    company: 'Woven by Toyota',
    technologies: ['docker', 'gitlab', 'gitlabCi', 'typeScript', 'react', 'maven', 'java', 'quarkus', 'mongodb', 'intellijIdea', 'concourseCI', 'kubernetes', 'terraform', 'aws', 'gitHubActions'],
    fromMonthIndex: 9,
    fromYear: 2021,
    toMonthIndex: 5,
    toYear: 2022
  }, {
    title: 'business-card-experience-job-wbyt-3-title',
    location: 'business-card-location-tokyo',
    company: 'Woven by Toyota',
    technologies: ['docker', 'gitlab', 'gitlabCi', 'typeScript', 'react', 'maven', 'java', 'quarkus', 'mongodb', 'vsCode', 'intellijIdea', 'concourseCI', 'kubernetes', 'helm', 'prometheus', 'grafana', 'terraform', 'aws'],
    fromMonthIndex: 5,
    fromYear: 2021,
    toMonthIndex: 8,
    toYear: 2021
  }, {
    title: 'business-card-experience-job-wbyt-2-title',
    location: 'business-card-location-tokyo',
    company: 'Woven by Toyota',
    technologies: ['docker', 'gitlab', 'gitlabCi', 'typeScript', 'react', 'maven', 'java', 'quarkus', 'mongodb', 'vsCode', 'intellijIdea', 'concourseCI', 'kubernetes', 'helm', 'prometheus', 'grafana'],
    fromMonthIndex: 8,
    fromYear: 2020,
    toMonthIndex: 4,
    toYear: 2021
  }, {
    title: 'business-card-experience-job-wbyt-1-title',
    location: 'business-card-location-tokyo',
    company: 'Woven by Toyota',
    technologies: ['docker', 'gitlab', 'gitlabCi', 'typeScript', 'react', 'maven', 'java', 'quarkus', 'mongodb', 'vsCode', 'intellijIdea'],
    fromMonthIndex: 4,
    fromYear: 2020,
    toMonthIndex: 7,
    toYear: 2020
  }, {
    title: 'business-card-experience-job-bitcoin-com-2-title',
    location: 'business-card-location-tokyo',
    company: 'Bitcoin.com',
    technologies: ['docker', 'travis', 'gitHubActions', 'bitrise', 'java', 'kafka', 'spring', 'intellijIdea'],
    fromMonthIndex: 6,
    fromYear: 2019,
    toMonthIndex: 3,
    toYear: 2020
  }, {
    title: 'business-card-experience-job-bitcoin-com-1-title',
    location: 'business-card-location-tokyo',
    company: 'Bitcoin.com',
    technologies: [
      'maven', 'java', 'tomcat', 'lombok', 'junit', 'python',
      'javaScript', 'jQuery', 'bootstrap', 'mariaDb', 'redis',
      'git', 'intellijIdea', 'vsCode', 'jira'
    ],
    fromMonthIndex: 8,
    fromYear: 2018,
    toMonthIndex: 5,
    toYear: 2019
  }, {
    title: 'business-card-experience-job-lohika-3-title',
    location: 'business-card-location-odesa',
    company: 'Lohika',
    technologies: [
      'csharp', 'xamarin', 'prism', 'dotNetCore', 'kubernetes', 'helm', 'jira',
      'elasticsearch', 'jenkins', 'kibana', 'fluentBit', 'fluentD', 'docker',
      'git', 'gitHub', 'prometheus', 'visualStudio', 'grafana', 'teamCity'
    ],
    fromMonthIndex: 1,
    fromYear: 2016,
    toMonthIndex: 8,
    toYear: 2018
  }, {
    title: 'business-card-experience-job-lohika-2-title',
    location: 'business-card-location-odesa',
    company: 'Lohika',
    technologies: [
      'java', 'spring', 'maven', 'javaScript', 'angular', 'mssql',
      'oracle', 'svn', 'git', 'intellijIdea', 'hpeAlm', 'jenkins'
    ],
    fromMonthIndex: 4,
    fromYear: 2013,
    toMonthIndex: 0,
    toYear: 2016
  }, {
    title: 'business-card-experience-job-lohika-1-title',
    location: 'business-card-location-odesa',
    company: 'Lohika',
    technologies: ['csharp', 'windowsForms', 'svn', 'visualStudio', 'hpeAlm', 'jenkins'],
    fromMonthIndex: 9,
    fromYear: 2011,
    toMonthIndex: 3,
    toYear: 2013
  }, {
    title: 'business-card-experience-job-arka-title',
    location: 'business-card-location-odesa',
    company: 'ARKA - Finance, Software, Services',
    technologies: [
      'php', 'codeigniter', 'vBulletin', 'oxidEShop', 'smarty', 'javaScript', 'jQuery',
      'csharp', 'silverlight', 'mysql', 'svn', 'visualStudio', 'netBeans', 'redmine'
    ],
    fromMonthIndex: 2,
    fromYear: 2010,
    toMonthIndex: 8,
    toYear: 2011
  }]

  expect(div).toHaveClass('light-component')
  const divContainer = div.querySelector('div.container')
  expect(divContainer).not.toBeNull()
  testSectionTitle(
    divContainer.querySelector('div.section-title'),
    'business-card-experience-title'
  )
  const ulTimeline = divContainer.querySelector('ul.timeline')
  expect(ulTimeline).not.toBeNull()
  const liNormal = divContainer.querySelectorAll('ul.timeline>li:not(.timeline-inverted)')
  expect(liNormal).toHaveLength(6)
  let i = 1
  for (const li of liNormal) {
    testLi(li as HTMLLIElement, locale, fixtures[i])
    i += 2
  }
  const liInverted = divContainer.querySelectorAll('ul.timeline>li.timeline-inverted')
  expect(liInverted).toHaveLength(6)
  i = 0
  for (const li of liInverted) {
    testLi(li as HTMLLIElement, locale, fixtures[i])
    i += 2
  }
}

export function testJobPeriod(
  div: HTMLDivElement,
  locale: Locale,
  fromMonthIndex: number,
  fromYear: number,
  toMonthIndex?: number,
  toYear?: number
): void {
  expect(div).toHaveClass('timeline-image')
  testDateDuration(
    div.querySelector('div.controls__date-duration'),
    locale.code,
    fromMonthIndex,
    fromYear,
    toMonthIndex,
    toYear
  )
  testDateTimeline(
    div.querySelector('div.controls__date-timeline'),
    locale,
    fromMonthIndex,
    fromYear,
    toMonthIndex,
    toYear
  )
}

export function testJobResponsibilities(div: HTMLDivElement): void {
  expect(div.querySelector('h5'))
    .toHaveTextContent('business-card-experience-responsibilities-title')
  const ul = div.querySelector('ul.responsibilities')
  expect(ul).not.toBeNull()
  const liElements = ul.querySelectorAll('li')
  expect(liElements).toHaveLength(2)
  expect(liElements[0]).toHaveTextContent('testing-prefix-1')
  expect(liElements[1]).toHaveTextContent('testing-prefix-1-1')
}

export function testJobTechnologies(div: HTMLDivElement, technologies: string[]): void {
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

export function testJobTitle(
  div: HTMLDivElement, logo: string, company: string, title: string, location: string
): void {
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
