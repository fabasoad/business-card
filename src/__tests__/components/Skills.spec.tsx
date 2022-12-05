import * as React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Skills from '../../components/Skills'

test('should render Skills correctly', () => {
  const { container } = render(<Skills />)
  expect(screen.getByRole('heading', { level: 2 }))
    .toHaveTextContent('business-card-skills-title')
  expect(container.querySelectorAll('img')).toHaveLength(22)

  const expectedSkills = [
    { alt: 'aws', title: 'AWS' },
    { alt: 'bootstrap', title: 'Bootstrap' },
    { alt: 'concourseCI', title: 'Concourse CI' },
    { alt: 'csharp', title: 'C#' },
    { alt: 'docker', title: 'Docker' },
    { alt: 'dotNetCore', title: '.NET Core' },
    { alt: 'git', title: 'Git' },
    { alt: 'gitHub', title: 'GitHub' },
    { alt: 'gitHubActions', title: 'GitHub Actions' },
    { alt: 'gitlab', title: 'GitLab' },
    { alt: 'gitlabCi', title: 'GitLab CI' },
    { alt: 'java', title: 'Java' },
    { alt: 'javaScript', title: 'JavaScript' },
    { alt: 'kubernetes', title: 'Kubernetes' },
    { alt: 'maven', title: 'Maven' },
    { alt: 'mongodb', title: 'MongoDB' },
    { alt: 'python', title: 'Python' },
    { alt: 'terraform', title: 'Terraform' },
    { alt: 'travis', title: 'Travis CI' },
    { alt: 'typeScript', title: 'TypeScript' },
    { alt: 'xamarin', title: 'Xamarin' }
  ]

  for (const { alt, title } of expectedSkills) {
    const img = screen.getByAltText(alt);
    expect(img).toHaveAttribute('title', title)
    expect(img).toHaveAttribute('src', '[object Object]')
  }
})
