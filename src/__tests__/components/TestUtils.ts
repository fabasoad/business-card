import { testSectionTitle } from './Controls/TestUtils'

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
  expect(h5).toHaveTextContent('header.occupation')
  testButton(divHeaderText, '#about-me', 'header.about-me')
  testButton(divHeaderText, '#experience', 'experience.title')
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
    ['bash', 'Bash'],
    ['maven', 'Maven'],
    ['codeql', 'CodeQL'],
    ['python', 'Python'],
    ['react', 'React'],
    ['snyk', 'Snyk'],
    ['terraform', 'Terraform'],
    ['travis', 'Travis CI'],
    ['typeScript', 'TypeScript']
  ])

  expect(div).toHaveClass('light-component')
  testSectionTitle(div.querySelector('div.section-title'), 'skills.title')
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
