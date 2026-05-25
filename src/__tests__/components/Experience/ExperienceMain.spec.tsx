import '@testing-library/jest-dom'
import * as React from 'react'
import ExperienceMain from '../../../components/Experience/ExperienceMain'
import { render } from '@testing-library/react'
import experienceStorage from '../../../scripts/experience/ExperienceStorage'

vi.mock('../../../components/Controls/Section')
vi.mock('../../../components/Experience/ExperienceItem')

describe('ExperienceMain', () => {
  test('should render ExperienceMain correctly', () => {
    const { container } = render(<ExperienceMain />)
    const ul = container.querySelector(
      'div[data-testid="Section-experience"] > div.row > ul.timeline'
    )
    expect(ul.children.length).toBe(4)
    for (const { id, title, locationI18nKey, techStack, from, to } of experienceStorage.items) {
      const div = ul.querySelector<HTMLElement>(
        `li > div[data-testid="ExperienceItem-${id}-${locationI18nKey}-${from.toDateString()}-${to === undefined ? 'Present' : to.toDateString()}-test-file-stub"]`
      )
      expect(div).toBeInTheDocument()
      expect(
        div.querySelector<HTMLElement>('div[data-testid="title"]')
      ).toHaveTextContent(title)
      expect(
        div.querySelector<HTMLElement>('div[data-testid="techStack"]')
      ).toHaveTextContent(techStack.join(','))
    }
  })
})
