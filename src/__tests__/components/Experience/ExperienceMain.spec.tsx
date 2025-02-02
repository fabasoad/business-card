import '@testing-library/jest-dom'
import * as React from 'react'
import ExperienceMain from '../../../components/Experience/ExperienceMain'
import { render } from '@testing-library/react'

jest.mock('../../../components/Controls/SectionTitle')
jest.mock('../../../components/Experience/ExperienceItem')

describe('ExperienceMain', () => {
  test('should render ExperienceMain correctly', () => {
    const { container } = render(<ExperienceMain />)
    const div = container.querySelector('div#experience')
    expect(div).toHaveClass('light-component')
    const divContainer = div.querySelector('.container')
    expect(divContainer.querySelector('div[data-testid="SectionTitle"]')).not.toBeNull()
    const liElements = divContainer.querySelectorAll('div.row > ul.timeline > li')
    expect(liElements).toHaveLength(4)
    for (const li of liElements) {
      expect(li.querySelector('div[data-testid="ExperienceItem"]')).not.toBeNull()
    }
  })
})
