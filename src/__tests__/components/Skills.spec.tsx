import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Skills from '../../components/Skills'
import { testSectionTitle } from './Controls/TestUtils'

jest.mock('../../components/Controls/SectionTitle')

describe('Skills', () => {
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

  test('should render Skills correctly', () => {
    const { container } = render(<Skills />)
    const div = container.querySelector<HTMLDivElement>('div#skills.light-component')
    testSectionTitle(div, 'skills.title')
    const selector = 'div.container > div.row > div.skills-list.col.text-center > img'
    expect(div.querySelectorAll(selector)).toHaveLength(expectedSkillsMap.size)
    for (const [name, title] of expectedSkillsMap) {
      const img = div.querySelector(`${selector}.m-4[alt="${name}"]`)
      expect(img).toHaveAttribute('src', '[object Object]')
      expect(img).toHaveAttribute('title', title)
    }
  })
})
