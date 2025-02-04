import '@testing-library/jest-dom'
import * as React from 'react'
import EducationMain from '../../../components/Education/EducationMain'
import { queryByTestId, render } from '@testing-library/react'
import { testSectionTitle } from '../Controls/TestUtils'

jest.mock('../../../components/Controls/SectionTitle')
jest.mock('../../../components/Education/EducationItem')

describe('EducationMain', () => {
  test('should render EducationMain correctly', () => {
    const { container } = render(<EducationMain />)
    const div = container.querySelector('div#education')
    expect(div).toHaveClass('light-component')
    const divContainer = div.querySelector<HTMLDivElement>('.container')
    testSectionTitle(divContainer, 'education.title')
    const liElements = divContainer.querySelectorAll('div.row > ul.timeline > li')
    expect(liElements).toHaveLength(1)
    const divEducationItem =
      liElements.item(0).querySelector<HTMLElement>('div[data-testid="EducationItem"]')
    expect(divEducationItem).not.toBeNull()
    expect(
      queryByTestId(divEducationItem, 'universityKey', { exact: true })
    ).toHaveTextContent('osar')
    expect(
      queryByTestId(divEducationItem, 'universityName', { exact: true })
    ).toHaveTextContent('Odesa State Academy of Refrigeration')
    expect(
      queryByTestId(divEducationItem, 'location', { exact: true })
    ).toHaveTextContent('odesa')
    expect(
      queryByTestId(divEducationItem, 'img', { exact: true })
    ).toHaveAttribute('src', '[object Object]')
    expect(
      queryByTestId(divEducationItem, 'fromYear', { exact: true })
    ).toHaveTextContent('2005')
    expect(
      queryByTestId(divEducationItem, 'toYear', { exact: true })
    ).toHaveTextContent('2010')
  })
})
