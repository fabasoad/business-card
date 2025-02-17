import '@testing-library/jest-dom'
import * as React from 'react'
import EducationMain from '../../../components/Education/EducationMain'
import { render } from '@testing-library/react'

jest.mock('../../../components/Controls/Section')
jest.mock('../../../components/Education/EducationItem')

describe('EducationMain', () => {
  test('should render EducationMain correctly', () => {
    const { container } = render(<EducationMain />)
    const liElements = container.querySelectorAll(
      'div[data-testid="Section-education"] > div.row > ul.timeline > li'
    )
    expect(liElements).toHaveLength(1)
    expect(liElements.item(0).querySelector<HTMLElement>(
      'div[data-testid="EducationItem-osar-Odesa State Academy of Refrigeration-odesa-2005-2010-[object Object]"]'
    )).toBeInTheDocument()
  })
})
