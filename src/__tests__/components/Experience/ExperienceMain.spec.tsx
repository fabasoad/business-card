import '@testing-library/jest-dom'
import * as React from 'react'
import ExperienceMain from '../../../components/Experience/ExperienceMain'
import { queryByTestId, render } from '@testing-library/react'
import experienceStorage from '../../../scripts/experience/ExperienceStorage'
import { testSectionTitle } from '../Controls/TestUtils'

jest.mock('../../../components/Controls/SectionTitle')
jest.mock('../../../components/Experience/ExperienceItem')

describe('ExperienceMain', () => {
  test('should render ExperienceMain correctly', () => {
    const { container } = render(<ExperienceMain />)
    const div = container.querySelector('div#experience')
    expect(div).toHaveClass('light-component')
    const divContainer = div.querySelector<HTMLDivElement>('.container')
    testSectionTitle(divContainer, 'experience.title')
    const liElements = divContainer.querySelectorAll<HTMLElement>('div.row > ul.timeline > li')
    expect(liElements).toHaveLength(4)
    for (const { id, title, locationI18nKey, techStack, from, to } of experienceStorage.items) {
      const divExperienceItem = divContainer.querySelector<HTMLElement>(
        `div.row > ul.timeline > li > div[data-testid="${id}"]`
      )
      expect(divExperienceItem).toBeInTheDocument()
      expect(
        queryByTestId(divExperienceItem, 'title', { exact: true })
      ).toHaveTextContent(title)
      expect(
        queryByTestId(divExperienceItem, 'locationI18nKey', { exact: true })
      ).toHaveTextContent(locationI18nKey)
      expect(
        queryByTestId(divExperienceItem, 'techStack', { exact: true })
      ).toHaveTextContent(techStack.join(','))
      expect(
        queryByTestId(divExperienceItem, 'img', { exact: true })
      ).toHaveAttribute('src', '[object Object]')
      expect(
        queryByTestId(divExperienceItem, 'from', { exact: true })
      ).toHaveTextContent(from.toDateString())
      expect(
        queryByTestId(divExperienceItem, 'to', { exact: true })
      ).toHaveTextContent(to === undefined ? 'Present' : to.toDateString())
    }
  })
})
