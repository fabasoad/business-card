import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Skills from '../../components/Skills'

jest.mock('../../components/Controls/Section')

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
    const selector = 'div[data-testid="Section-skills"] > div.row > div.skills-list.col.text-center > img'
    expect(container.querySelectorAll(selector)).toHaveLength(expectedSkillsMap.size)
    for (const [name, title] of expectedSkillsMap) {
      const img = container.querySelector(`${selector}.m-4[alt="${name}"]`)
      expect(img).toHaveAttribute('src', '[object Object]')
      expect(img).toHaveAttribute('title', title)
    }
  })
})
