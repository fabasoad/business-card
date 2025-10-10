import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Skills from '../../components/Skills'
import type { Technology } from '../../scripts/technologies/types'

jest.mock('../../components/LoadingSpinner')
jest.mock('../../components/Controls/Section')
jest.mock('../../components/Controls/ThemeImage')
const useQueryMock = jest.fn()
jest.mock('@tanstack/react-query', () => ({
  useQuery: (...args: any[]) => useQueryMock(args)
}))

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

  afterEach(() => {
    useQueryMock.mockRestore()
  })

  const testUseQuery = () => {
    expect(useQueryMock).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          queryKey: expect.arrayContaining(['TechnologyStorage']),
          queryFn: expect.any(Function)
        })
      ])
    )
    const actual: Technology[] = useQueryMock.mock.calls[0][0][0]['queryFn']()
    expect(
      actual.map(({ name, title }) => `${name}-${title}`).sort()
    ).toEqual(
      Array.from(expectedSkillsMap).map(
        ([name, title]: [string, string]) => `${name}-${title}`
      ).sort()
    )
  }

  test('should render Skills correctly while loading', () => {
    useQueryMock.mockImplementation(() => ({ data: null, isLoading: true }))
    const { container } = render(<Skills />)
    testUseQuery()
    expect(
      container.querySelector('div[data-testid="LoadingSpinner-undefined-undefined"]')
    ).toBeInTheDocument()
  })

  test('should render Skills correctly while loading', () => {
    const data: Technology[] = [{
      name: 'testName',
      title: 'testTitle',
      imgLight: 'testImgLight',
      imgDark: 'testImgDark',
    }]
    useQueryMock.mockImplementation(() => ({ data, isLoading: false }))
    const { container } = render(<Skills />)
    testUseQuery()
    const selector = 'div[data-testid="Section-skills"] > div.row > div.skills-list.col.text-center > div'
    expect(container.querySelectorAll(selector)).toHaveLength(data.length)
    expect(
      container.querySelector(`${selector}[data-testid="ThemeImage-${data[0].name}"]`)
    ).toHaveTextContent(`m-4-${data[0].imgDark}-${data[0].imgLight}-${data[0].title}`)
  })
})
