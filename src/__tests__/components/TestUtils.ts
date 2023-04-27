import { testSectionTitle } from './Controls/TestUtils'

export function testBackToTopButton(a: HTMLAnchorElement) {
  expect(a).toHaveClass('back-to-top')
}

export function testBadges(div: HTMLDivElement) {
  expect(div).toHaveClass('light-component')
  testSectionTitle(
    div.querySelector('div.section-title'),
    'business-card-badges-title'
  )
  const divContainer = div.querySelector('div.container')
  expect(divContainer).not.toBeNull()
  const divRow = divContainer.querySelector('div.row')
  expect(divRow).not.toBeNull()
  const divCol = divRow.querySelector('div.col-sm.col-md.col-lg')
  expect(divCol).toHaveClass('text-center')
  const a = divCol.querySelector('a')
  expect(a).toHaveAttribute('href', 'https://tree-nation.com/profile/digitalocean')
  expect(a).toHaveAttribute('rel', 'noopener noreferrer')
  expect(a).toHaveAttribute('target', '_blank')
  const img = a.querySelector('img')
  expect(img).toHaveClass('mb-4')
  expect(img).toHaveClass('mx-4')
  expect(img).toHaveAttribute('src', '[object Object]')
  expect(img).toHaveAttribute('alt', 'Digital Ocean Forest Badge')
  expect(img).toHaveAttribute('title', 'DigitalOcean Forest 2021')
}

export function testHeader(header: HTMLElement) {
  function testButton(div: HTMLDivElement, href: string, text: string) {
    const a = divHeaderText.querySelector(`a[href="${href}"]`)
    expect(a).toHaveClass('btn')
    expect(a).toHaveClass('btn-lg')
    expect(a).toHaveClass('btn-primary')
    expect(a).toHaveTextContent(text)
  }
  expect(header).toHaveClass('header')
  const divHeaderText: HTMLDivElement = header.querySelector('div.header__text')
  expect(divHeaderText.querySelector('h1')).not.toBeNull()
  const h5 = divHeaderText.querySelector('h5')
  expect(h5).toHaveClass('header__text-subtitle')
  expect(h5).toHaveTextContent('business-card-header-occupation')
  testButton(divHeaderText, '#about', 'business-card-header-about-me')
  testButton(divHeaderText, '#portfolio', 'business-card-header-portfolio')
}

export function testResume(div: HTMLDivElement) {
  expect(div).toHaveClass('light-component')
  testSectionTitle(
    div.querySelector('div.section-title'),
    'business-card-resume-title'
  )
  const divContainer = div.querySelector('div.container')
  const divCol = divContainer.querySelector('div.col')
  expect(divCol).toHaveClass('text-center')
  expect(divCol).toHaveTextContent('business-card-resume-message')
}

export function testSkills(div: HTMLDivElement) {
  const expectedSkillsMap = new Map<string, string>([
    ['aws', 'AWS'],
    ['bootstrap', 'Bootstrap'],
    ['concourseCI', 'Concourse CI'],
    ['csharp', 'C#'],
    ['docker', 'Docker'],
    ['git', 'Git'],
    ['gitHub', 'GitHub'],
    ['gitHubActions', 'GitHub Actions'],
    ['gitlab', 'GitLab'],
    ['gitlabCi', 'GitLab CI'],
    ['go', 'Go'],
    ['java', 'Java'],
    ['javaScript', 'JavaScript'],
    ['kubernetes', 'Kubernetes'],
    ['maven', 'Maven'],
    ['mongodb', 'MongoDB'],
    ['python', 'Python'],
    ['quarkus', 'Quarkus'],
    ['react', 'React'],
    ['snyk', 'Snyk'],
    ['terraform', 'Terraform'],
    ['travis', 'Travis CI'],
    ['typeScript', 'TypeScript']
  ])

  expect(div).toHaveClass('light-component')
  testSectionTitle(
    div.querySelector('div.section-title'),
    'business-card-skills-title'
  )
  const divContainer = div.querySelector('div.container')
  const divRow = divContainer.querySelector('div.row')
  const divSkillsList = divRow.querySelector('div.skills-list')
  expect(divSkillsList).toHaveClass('col')
  expect(divSkillsList).toHaveClass('text-center')
  const imgElements = divSkillsList.querySelectorAll('img')
  expect(imgElements).toHaveLength(expectedSkillsMap.size)
  for (const img of imgElements) {
    const alt = img.getAttribute('alt')
    expect(expectedSkillsMap.has(alt)).toEqual(true)
    expect(img).toHaveClass('m-4')
    expect(img).toHaveAttribute('src', '[object Object]')
    expect(img).toHaveAttribute('title', expectedSkillsMap.get(alt))
    expectedSkillsMap.delete(alt)
  }
  expect(expectedSkillsMap.size).toEqual(0)
}
