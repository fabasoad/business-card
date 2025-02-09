import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Badges from '../../components/Badges'
import { testSectionTitle } from './Controls/TestUtils'

jest.mock('../../components/Controls/SectionTitle')

describe('Badges', () => {
  test('should render Badges correctly', () => {
    const { container } = render(<Badges />)
    const div = container.querySelector<HTMLDivElement>('div#badges.light-component')
    expect(div).toBeInTheDocument()
    testSectionTitle(div, 'badges.title')
    const divRow = div.querySelector('div.container > div.row')
    expect(divRow.children).toHaveLength(2)
    expect(
      divRow.querySelector('div.col-sm.col-md.col-lg.text-center > a[href="https://standforukraine.com"][rel="noopener noreferrer"][target="_blank"] > img.mb-4.mx-4[src="[object Object]"][alt="Support Ukraine"][title="Stand With Ukraine"]')
    ).toBeInTheDocument()
    expect(
      divRow.querySelector('div.col-sm.col-md.col-lg.text-center > a[href="https://tree-nation.com/profile/digitalocean"][rel="noopener noreferrer"][target="_blank"] > img.img-circle.mb-4.mx-4[src="[object Object]"][alt="Digital Ocean Forest Badge"][title="DigitalOcean Forest 2021"]')
    ).toBeInTheDocument()
  })
})
