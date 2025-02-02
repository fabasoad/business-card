import '@testing-library/jest-dom'
import * as React from 'react'
import EducationMain from '../../../components/Education/EducationMain'
import { render } from '@testing-library/react'

jest.mock('../../../components/Controls/SectionTitle')
jest.mock('../../../components/Education/EducationItem')

describe('EducationMain', () => {
  test('should render EducationMain correctly', () => {
    const { container } = render(<EducationMain />)
    const div = container.querySelector('div#education')
    expect(div).toHaveClass('light-component')
    const divContainer = div.querySelector('.container')
    expect(divContainer.querySelector('div[data-testid="SectionTitle"]')).not.toBeNull()
    const liElements = divContainer.querySelectorAll('div.row > ul.timeline > li')
    expect(liElements).toHaveLength(1)
    for (const li of liElements) {
      expect(li.querySelector('div[data-testid="EducationItem"]')).not.toBeNull()
    }
  })
})
