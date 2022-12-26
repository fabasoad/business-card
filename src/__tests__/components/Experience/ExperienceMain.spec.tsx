import '@testing-library/jest-dom'
import * as React from 'react'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'

import {
  testJobPeriod, testJobTechnologies, testJobTitle, testJobResponsibilities
} from './TestUtils'
import ExperienceMain from '../../../components/Experience/ExperienceMain'
import SupportedLocales from '../../../scripts/SupportedLocales'
import { Locale } from '../../../store/locale/types'

const mockStore = configureMockStore()

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

const fixtures: Fixture[] = [{
  title: 'business-card-experience-job-woven-planet-4-title',
  location: 'business-card-location-tokyo',
  company: 'Woven Planet',
  technologies: ['docker', 'gitlab', 'gitlabCi', 'typeScript', 'react', 'maven', 'java', 'quarkus', 'mongodb', 'intellijIdea', 'concourseCI', 'kubernetes', 'terraform', 'aws', 'gitHubActions'],
  fromMonthIndex: 9,
  fromYear: 2021
}, {
  title: 'business-card-experience-job-woven-planet-3-title',
  location: 'business-card-location-tokyo',
  company: 'Woven Planet',
  technologies: ['docker', 'gitlab', 'gitlabCi', 'typeScript', 'react', 'maven', 'java', 'quarkus', 'mongodb', 'vsCode', 'intellijIdea', 'concourseCI', 'kubernetes', 'helm', 'prometheus', 'grafana', 'terraform', 'aws'],
  fromMonthIndex: 5,
  fromYear: 2021,
  toMonthIndex: 8,
  toYear: 2021
}, {
  title: 'business-card-experience-job-woven-planet-2-title',
  location: 'business-card-location-tokyo',
  company: 'Woven Planet',
  technologies: ['docker', 'gitlab', 'gitlabCi', 'typeScript', 'react', 'maven', 'java', 'quarkus', 'mongodb', 'vsCode', 'intellijIdea', 'concourseCI', 'kubernetes', 'helm', 'prometheus', 'grafana'],
  fromMonthIndex: 8,
  fromYear: 2020,
  toMonthIndex: 4,
  toYear: 2021
}, {
  title: 'business-card-experience-job-woven-planet-1-title',
  location: 'business-card-location-tokyo',
  company: 'Woven Planet',
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

for (const locale of SupportedLocales._items) {
  test(`[${locale.code}] should render ExperienceMain correctly`, () => {
    const store = mockStore({ locale })
    const { container } = render(
      <Provider store={store}>
        <ExperienceMain/>
      </Provider>
    )
    const div = container.querySelector('div#experience')
    expect(div).toHaveClass('light-component')
    const divContainer = div.querySelector('div.container')
    expect(divContainer).not.toBeNull()
    const divSectionTitle = divContainer.querySelector('div.section-title')
    expect(divSectionTitle).toHaveClass('text-center')
    expect(divSectionTitle.querySelector('h2'))
      .toHaveTextContent('business-card-experience-title')
    expect(divSectionTitle.querySelector('hr')).not.toBeNull()
    const ulTimeline = divContainer.querySelector('ul.timeline')
    const liNormal = ulTimeline.querySelectorAll('li:not(.timeline-inverted)')
    expect(liNormal).toHaveLength(5)
    let i = 1
    for (const li of liNormal) {
      testLi(li as HTMLLIElement, locale, fixtures[i])
      i += 2
    }
    const liInverted = ulTimeline.querySelectorAll('li.timeline-inverted')
    expect(liInverted).toHaveLength(5)
    i = 0
    for (const li of liInverted) {
      testLi(li as HTMLLIElement, locale, fixtures[i])
      i += 2
    }
  })
}
