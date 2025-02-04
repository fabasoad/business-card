import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Badges from '../../components/Badges'
import { testSectionTitle } from './Controls/TestUtils'

jest.mock('../../components/Controls/SectionTitle')

describe('Badges', () => {
  test('should render Badges correctly', () => {
    const { container } = render(<Badges />)
    const div = container.querySelector<HTMLDivElement>('div#badges')
    expect(div).toHaveClass('light-component')
    testSectionTitle(div, 'badges.title')
    const divContainer = div.querySelector('div.container')
    expect(divContainer).toBeInTheDocument()
    const divRow = divContainer.querySelector('div.row')
    expect(divRow).toBeInTheDocument()
    const divCol = divRow.querySelector('div.col-sm.col-md.col-lg')
    expect(divCol).toHaveClass('text-center')
    const a = divCol.querySelector('a')
    expect(a).toHaveAttribute('href', 'https://tree-nation.com/profile/digitalocean')
    expect(a).toHaveAttribute('rel', 'noopener noreferrer')
    expect(a).toHaveAttribute('target', '_blank')
    const img = a.querySelector('img')
    expect(img).toHaveClass('mb-4')
    expect(img).toHaveClass('mx-4')
    expect(img).toHaveAttribute('src', '[object Object]')
    expect(img).toHaveAttribute('alt', 'Digital Ocean Forest Badge')
    expect(img).toHaveAttribute('title', 'DigitalOcean Forest 2021')
  })
})
